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

    const { qrCode, durationHours, carColor } = await req.json()

    if (!qrCode || !durationHours) {
      return new Response(
        JSON.stringify({ error: 'QR code and duration are required' }),
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

    // Check if slot is already occupied
    if (slot.is_occupied) {
      return new Response(
        JSON.stringify({ error: 'Parking slot is already occupied' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const now = new Date()
    const plannedExitTime = new Date(now.getTime() + durationHours * 60 * 60 * 1000)
    const hourlyRate = 5 // $5 per hour
    const totalFee = durationHours * hourlyRate

    // Create parking session
    const { data: session, error: sessionError } = await supabaseClient
      .from('parking_sessions')
      .insert({
        slot_id: slot.slot_id,
        duration_hours: durationHours,
        planned_exit_time: plannedExitTime.toISOString(),
        car_color: carColor,
        total_fee: totalFee,
        status: 'active'
      })
      .select()
      .single()

    if (sessionError) {
      return new Response(
        JSON.stringify({ error: 'Failed to create parking session' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Update slot to occupied
    const { error: updateError } = await supabaseClient
      .from('parking_slots')
      .update({ 
        is_occupied: true,
        updated_at: now.toISOString()
      })
      .eq('slot_id', slot.slot_id)

    if (updateError) {
      return new Response(
        JSON.stringify({ error: 'Failed to update slot status' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({
        success: true,
        session: session,
        slot: slot,
        message: `Vehicle parked successfully! Duration: ${durationHours} hours, Total fee: $${totalFee}`,
        plannedExitTime: plannedExitTime.toISOString()
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