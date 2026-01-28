// Cloudflare Pages Function for webinar signup form
// Endpoint: POST /api/webinar-signup

export async function onRequestPost(context) {
  const { request, env } = context;

  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const data = await request.json();

    // Validate required fields
    const { name, email, company, questions, language, website } = data;

    // Honeypot check - if filled, it's a bot
    if (website && website.length > 0) {
      // Return success to not alert the bot, but don't save
      return new Response(
        JSON.stringify({
          success: true,
          message: 'Registration successful',
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }

    if (!name || !email || !company) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Missing required fields: name, email, and company are required',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }

    // Input length validation
    const MAX_LENGTHS = {
      name: 100,
      email: 254,
      company: 200,
      questions: 2000,
    };

    if (name.length > MAX_LENGTHS.name) {
      return new Response(
        JSON.stringify({
          success: false,
          error: `Name must be ${MAX_LENGTHS.name} characters or less`,
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }

    if (email.length > MAX_LENGTHS.email) {
      return new Response(
        JSON.stringify({
          success: false,
          error: `Email must be ${MAX_LENGTHS.email} characters or less`,
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }

    if (company.length > MAX_LENGTHS.company) {
      return new Response(
        JSON.stringify({
          success: false,
          error: `Company must be ${MAX_LENGTHS.company} characters or less`,
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }

    if (questions && questions.length > MAX_LENGTHS.questions) {
      return new Response(
        JSON.stringify({
          success: false,
          error: `Questions must be ${MAX_LENGTHS.questions} characters or less`,
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Invalid email format',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }

    // Insert into D1 database
    const stmt = env.DB.prepare(
      'INSERT INTO webinar_signups (name, email, company, questions, language) VALUES (?, ?, ?, ?, ?)'
    );

    await stmt.bind(
      name.trim(),
      email.trim().toLowerCase(),
      company.trim(),
      questions?.trim() || null,
      language || 'en'
    ).run();

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Registration successful',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  } catch (error) {
    console.error('Webinar signup error:', error);

    return new Response(
      JSON.stringify({
        success: false,
        error: 'An error occurred while processing your registration',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  }
}

// Handle CORS preflight requests
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
}
