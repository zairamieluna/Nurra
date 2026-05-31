// ============================================
// NURRA — Netlify Function: waitlist
// Saves signup to Supabase + emails you via Resend
// File location: netlify/functions/waitlist.js
// ============================================

exports.handler = async (event) => {

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { first_name, email, due_date } = JSON.parse(event.body);

    // Basic validation
    if (!first_name || !email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Name and email are required.' }),
      };
    }

    // ── Step 1: Save to Supabase ──────────────
    const supabaseRes = await fetch(
      `${process.env.SUPABASE_URL}/rest/v1/waitlist`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': process.env.SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${process.env.SUPABASE_ANON_KEY}`,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({ first_name, email, due_date }),
      }
    );

    if (!supabaseRes.ok) {
      const err = await supabaseRes.text();
      console.error('Supabase error:', err);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to save to database.' }),
      };
    }

    // ── Step 2: Send email to you via Resend ──
    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Nurra Waitlist <onboarding@resend.dev>',
        to: process.env.NOTIFY_EMAIL,
        subject: `🌸 New Nurra waitlist signup — ${first_name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 32px; background: #FAF7F2; border-radius: 16px;">
            <h2 style="color: #3D2E26; font-size: 20px; margin: 0 0 16px;">
              🌸 New waitlist signup!
            </h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #8C7B72; font-size: 14px; width: 120px;">Name</td>
                <td style="padding: 10px 0; color: #3D2E26; font-size: 14px; font-weight: 500;">${first_name}</td>
              </tr>
              <tr style="border-top: 1px solid #EDE5D8;">
                <td style="padding: 10px 0; color: #8C7B72; font-size: 14px;">Email</td>
                <td style="padding: 10px 0; color: #3D2E26; font-size: 14px; font-weight: 500;">${email}</td>
              </tr>
              <tr style="border-top: 1px solid #EDE5D8;">
                <td style="padding: 10px 0; color: #8C7B72; font-size: 14px;">Due date</td>
                <td style="padding: 10px 0; color: #3D2E26; font-size: 14px; font-weight: 500;">${due_date || 'Not provided'}</td>
              </tr>
              <tr style="border-top: 1px solid #EDE5D8;">
                <td style="padding: 10px 0; color: #8C7B72; font-size: 14px;">Time</td>
                <td style="padding: 10px 0; color: #3D2E26; font-size: 14px; font-weight: 500;">${new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' })} EST</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #F2D9D5; border-radius: 12px;">
              <p style="margin: 0; font-size: 13px; color: #7A6152;">
                View all signups in your 
                <a href="https://supabase.com/dashboard/project/bcpepdidwmqbpousfguf/editor" style="color: #C9918A;">Supabase dashboard →</a>
              </p>
            </div>
          </div>
        `,
      }),
    });

    if (!emailRes.ok) {
      // Don't fail the whole request if email fails
      // Supabase already saved the data
      console.error('Resend error:', await emailRes.text());
    }

    // ── Step 3: Return success ────────────────
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };

  } catch (err) {
    console.error('Function error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Something went wrong.' }),
    };
  }
};
