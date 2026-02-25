// Use Node.js runtime (required for Resend SDK)
export const runtime = 'nodejs';

export async function POST(request) {
  try {
    const { navn, email, telefon, emne, besked } = await request.json();

    // Validering
    if (!navn || !email || !emne || !besked) {
      return Response.json(
        { message: 'Alle felter er påkrævet' },
        { status: 400 }
      );
    }

    // Email validering
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { message: 'Venligst angiv en gyldig email' },
        { status: 400 }
      );
    }

    // Hent API-nøgle fra miljøvariabler
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error('RESEND_API_KEY er ikke sat');
      return Response.json(
        { message: 'Email-tjeneste er ikke konfigureret' },
        { status: 500 }
      );
    }

    // Send email via Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'Salon Jozi <onboarding@resend.dev>', // Ændres til din domain når den er verificeret
        to: 'info@salonjozi.dk',
        replyTo: email,
        subject: `Ny besked fra ${navn} - ${emne}`,
        html: `
          <h2>Ny kontaktformular besked</h2>
          <p><strong>Navn:</strong> ${navn}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${telefon || 'Ikke angivet'}</p>
          <p><strong>Emne:</strong> ${emne}</p>
          <p><strong>Besked:</strong></p>
          <p>${besked.replace(/\n/g, '<br>')}</p>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Resend API error:', error);
      return Response.json(
        { message: 'Der opstod en fejl ved afsendelse af email' },
        { status: 500 }
      );
    }

    return Response.json(
      { message: 'Email sendt succesfuldt' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email send error:', error);
    return Response.json(
      { message: 'Der opstod en fejl ved afsendelse' },
      { status: 500 }
    );
  }
}
