import { NextResponse } from "next/server";
import {
  honeypotTriggered,
  notifyAcademy,
  saveInquiry,
  validateRequired,
} from "@/lib/forms";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (honeypotTriggered(body.website)) {
      return NextResponse.json({ ok: true });
    }

    const fields = {
      name: String(body.name ?? ""),
      email: String(body.email ?? ""),
      whatsapp: String(body.whatsapp ?? ""),
      subject: String(body.subject ?? ""),
      message: String(body.message ?? ""),
    };

    const errors = validateRequired(fields, [
      "name",
      "email",
      "whatsapp",
      "subject",
      "message",
    ]);

    if (!body.consent) {
      errors.push("Consent is required to process your inquiry");
    }

    if (errors.length) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    await saveInquiry("contact", { ...fields, consent: true });
    await notifyAcademy(
      `Website Contact: ${fields.subject}`,
      Object.entries(fields)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n"),
    );

    return NextResponse.json({
      ok: true,
      message:
        "Thank you for contacting Noor Ul Quran Online Academy. We will respond to your inquiry soon.",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        ok: false,
        errors: [
          "We could not send your message right now. Please try again or use WhatsApp.",
        ],
      },
      { status: 500 },
    );
  }
}
