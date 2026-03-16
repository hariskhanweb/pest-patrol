export async function onRequestPost(context: any) {
  try {
    const formData = await context.request.formData();
    const name = formData.get("name") || "";
    const phone = formData.get("phone") || "";
    const email = formData.get("email") || "";
    const services = formData.getAll("services") || [];
    const address = formData.get("address") || "";
    const comment = formData.get("comment") || "";

    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Address:</strong> ${address || "N/A"}</p>
      <p><strong>Services:</strong> ${services.length > 0 ? services.join(", ") : "None selected"}</p>
      <p><strong>Comment:</strong><br/>${comment || "N/A"}</p>
    `;

    const response = await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: "harisk071@gmail.com", name: "Haris" }],
            bcc: [{ email: "marketing@pinpoint.digital", name: "Marketing" }]
          },
        ],
        from: {
          email: "noreply@leadstream.co.nz",
          name: "Pest Patrol Website",
        },
        subject: "New Contact Form Submission - Pest Patrol",
        content: [
          {
            type: "text/html",
            value: htmlContent,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return new Response(JSON.stringify({ success: false, error: "Failed to send: " + errorText }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
