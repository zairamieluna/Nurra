// ============================================
// NURRA — Netlify Function: waitlist
// Full validation edition — saves all discovery fields
// ============================================

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const { first_name, email, due_date, stage, concern, hear_about } = JSON.parse(event.body);

    if (!first_name || !email) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Name and email are required.' }) };
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
        body: JSON.stringify({ first_name, email, due_date, stage, concern, hear_about }),
      }
    );

    if (!supabaseRes.ok) {
      console.error('Supabase error:', await supabaseRes.text());
      return { statusCode: 500, body: JSON.stringify({ error: 'Failed to save.' }) };
    }

    // ── Step 2: Email notification ────────────
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Nurra Waitlist <onboarding@resend.dev>',
        to: process.env.NOTIFY_EMAIL,
        subject: `🌸 New Founding Mom — ${first_name}`,
        html: `
          <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px;background:#FAF7F2;border-radius:16px;">
            <h2 style="color:#3D2E26;font-size:20px;margin:0 0 6px;">🌸 New Founding Mom joined!</h2>
            <p style="color:#8C7B72;font-size:13px;margin:0 0 24px;">${new Date().toLocaleString('en-CA', { timeZone: 'America/Toronto' })} EST</p>

            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;color:#8C7B72;font-size:13px;width:140px;border-top:1px solid #EDE5D8;">Name</td>
                <td style="padding:10px 0;color:#3D2E26;font-size:14px;font-weight:600;border-top:1px solid #EDE5D8;">${first_name}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#8C7B72;font-size:13px;border-top:1px solid #EDE5D8;">Email</td>
                <td style="padding:10px 0;color:#3D2E26;font-size:14px;border-top:1px solid #EDE5D8;">${email}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#8C7B72;font-size:13px;border-top:1px solid #EDE5D8;">Due date</td>
                <td style="padding:10px 0;color:#3D2E26;font-size:14px;border-top:1px solid #EDE5D8;">${due_date || '—'}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#8C7B72;font-size:13px;border-top:1px solid #EDE5D8;">Stage</td>
                <td style="padding:10px 0;color:#3D2E26;font-size:14px;border-top:1px solid #EDE5D8;">${stage || '—'}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#8C7B72;font-size:13px;border-top:1px solid #EDE5D8;">Heard via</td>
                <td style="padding:10px 0;color:#3D2E26;font-size:14px;font-weight:600;border-top:1px solid #EDE5D8;">${hear_about || '—'}</td>
              </tr>
            </table>

            ${concern ? `
            <div style="margin-top:20px;padding:18px;background:#FBF0EE;border-radius:12px;border-left:4px solid #C9918A;">
              <p style="margin:0 0 8px;font-size:10px;font-weight:700;color:#9B5E58;text-transform:uppercase;letter-spacing:0.1em;">💬 Her biggest challenge</p>
              <p style="margin:0;font-size:15px;color:#3D2E26;font-style:italic;line-height:1.65;">"${concern}"</p>
            </div>
            ` : `
            <div style="margin-top:20px;padding:14px;background:#F5EFE6;border-radius:10px;">
              <p style="margin:0;font-size:13px;color:#8C7B72;">No challenge shared this time.</p>
            </div>
            `}

            <div style="margin-top:20px;padding:14px;background:#F2D9D5;border-radius:10px;text-align:center;">
              <a href="https://supabase.com/dashboard/project/bcpepdidwmqbpousfguf/editor" style="color:#C9918A;font-size:13px;font-weight:600;text-decoration:none;">View all signups in Supabase →</a>
            </div>
          </div>
        `,
      }),
    });

    return { statusCode: 200, body: JSON.stringify({ success: true }) };

  } catch (err) {
    console.error('Function error:', err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Something went wrong.' }) };
  }
};
