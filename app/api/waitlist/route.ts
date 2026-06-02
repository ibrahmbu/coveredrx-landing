import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { firstName, email, userType } = await req.json();

  if (!firstName || !email || !userType) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const results = await Promise.allSettled([
    // Airtable
    fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            "First Name": firstName,
            Email: email,
            "User Type": userType,
            "Submitted At": new Date().toISOString(),
          },
        }),
      }
    ),

    // Beehiiv
    fetch(
      `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          first_name: firstName,
          reactivate_existing: false,
          send_welcome_email: false,
          utm_source: "landing_page",
          custom_fields: [{ name: "user_type", value: userType }],
        }),
      }
    ),
  ]);

  const failed = results.filter((r) => r.status === "rejected");
  if (failed.length === results.length) {
    return NextResponse.json(
      { error: "Submission failed" },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}