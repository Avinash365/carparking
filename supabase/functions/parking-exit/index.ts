import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    )

    const { qrCode } = await req.json()

    if (!qrCode) {
      return new Response(
        JSON.stringify({ error: 'QR code is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Find the parking slot by QR code
    const { data: slot, error: slotError } = await supabaseClient
      .from('parking_slots')
      .select('*')
      .eq('qr_code', qrCode)
      .single()

    if (slotError || !slot) {
      return new Response(
        JSON.stringify({ error: 'Invalid QR code' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Check if slot is occupied
    if (!slot.is_occupied) {
      return new Response(
        JSON.stringify({ error: 'Parking slot is not occupied' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Find active parking session
    const { data: session, error: sessionError } = await supabaseClient
      .from('parking_sessions')
      .select('*')
      .eq('slot_id', slot.slot_id)
      .eq('status', 'active')
      .order('created_at', { ascending: false })
      .limit(1)
      .single()

    if (sessionError || !session) {
      return new Response(
        JSON.stringify({ error: 'No active parking session found' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const now = new Date()
    const entryTime = new Date(session.entry_time)
    const actualDurationMs = now.getTime() - entryTime.getTime()
    const actualDurationHours = Math.ceil(actualDurationMs / (1000 * 60 * 60))
    
    // Calculate final fee based on actual duration
    const hourlyRate = 5
    const finalFee = Math.max(actualDurationHours * hourlyRate, 5) // Minimum $5

    // Update parking session to completed
    const { error: updateSessionError } = await supabaseClient
      .from('parking_sessions')
      .update({
        actual_exit_time: now.toISOString(),
        total_fee: finalFee,
        status: 'completed',
        updated_at: now.toISOString()
      })
      .eq('id', session.id)

    if (updateSessionError) {
      return new Response(
        JSON.stringify({ error: 'Failed to update parking session' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Update slot to available
    const { error: updateSlotError } = await supabaseClient
      .from('parking_slots')
      .update({ 
        is_occupied: false,
        updated_at: now.toISOString()
      })
      .eq('slot_id', slot.slot_id)

    if (updateSlotError) {
      return new Response(
        JSON.stringify({ error: 'Failed to update slot status' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const parkingDuration = Math.floor(actualDurationMs / (1000 * 60 * 60)) + 'h ' + 
                           Math.floor((actualDurationMs % (1000 * 60 * 60)) / (1000 * 60)) + 'm'

    return new Response(
      JSON.stringify({
        success: true,
        session: session,
        slot: slot,
        message: `Vehicle exited successfully! Duration: ${parkingDuration}, Total fee: $${finalFee}`,
        finalFee: finalFee,
        parkingDuration: parkingDuration
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})