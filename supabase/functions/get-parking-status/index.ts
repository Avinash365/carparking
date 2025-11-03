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

    // Get all parking slots with their current sessions
    const { data: slots, error: slotsError } = await supabaseClient
      .from('parking_slots')
      .select(`
        *,
        parking_sessions!inner(
          id,
          entry_time,
          planned_exit_time,
          duration_hours,
          car_color,
          status
        )
      `)
      .eq('parking_sessions.status', 'active')

    if (slotsError) {
      return new Response(
        JSON.stringify({ error: 'Failed to fetch parking data' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Get all available slots
    const { data: availableSlots, error: availableError } = await supabaseClient
      .from('parking_slots')
      .select('*')
      .eq('is_occupied', false)

    if (availableError) {
      return new Response(
        JSON.stringify({ error: 'Failed to fetch available slots' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Get zone information
    const { data: zones, error: zonesError } = await supabaseClient
      .from('parking_zones')
      .select('*')

    if (zonesError) {
      return new Response(
        JSON.stringify({ error: 'Failed to fetch zone data' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const now = new Date()

    // Process occupied slots with time calculations
    const occupiedSlots = slots?.map(slot => {
      const session = slot.parking_sessions[0]
      const entryTime = new Date(session.entry_time)
      const plannedExitTime = new Date(session.planned_exit_time)
      
      const diffMs = now.getTime() - entryTime.getTime()
      const hours = Math.floor(diffMs / (1000 * 60 * 60))
      const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))
      
      const timeParked = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`
      
      const remainingMs = plannedExitTime.getTime() - now.getTime()
      const minutesRemaining = Math.max(0, Math.floor(remainingMs / (1000 * 60)))
      
      return {
        ...slot,
        timeParked,
        minutesRemaining,
        carColor: session.car_color,
        entryTime: session.entry_time,
        plannedExitTime: session.planned_exit_time
      }
    }) || []

    return new Response(
      JSON.stringify({
        zones: zones || [],
        occupiedSlots,
        availableSlots: availableSlots || [],
        totalSlots: (occupiedSlots.length + (availableSlots?.length || 0))
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