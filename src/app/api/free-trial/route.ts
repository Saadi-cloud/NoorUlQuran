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
      parentName: String(body.parentName ?? ""),
      email: String(body.email ?? ""),
      whatsapp: String(body.whatsapp ?? ""),
      country: String(body.country ?? ""),
      studentAge: String(body.studentAge ?? ""),
      course: String(body.course ?? ""),
      teacherGender: String(body.teacherGender ?? ""),
      preferredTime: String(body.preferredTime ?? ""),
      contactMethod: String(body.contactMethod ?? ""),
      notes: String(body.notes ?? ""),
    };

    const errors = validateRequired(fields, [
      "parentName",
      "email",
      "whatsapp",
      "country",
      "studentAge",
      "course",
      "teacherGender",
      "preferredTime",
      "contactMethod",
    ]);

    if (!body.consent) {
      errors.push("Consent is required to process your inquiry");
    }

    if (errors.length) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    await saveInquiry("free-trial", { ...fields, consent: true });
    await notifyAcademy(
      "New 3-Day Free Trial Request",
      Object.entries(fields)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n"),
      { teacherGender: fields.teacherGender },
    );

    return NextResponse.json({
      ok: true,
      message:
        "Thank you for your interest in Noor Ul Quran Online Academy. Our team will contact you to discuss your free trial arrangements.",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        ok: false,
        errors: [
          "We could not process your request right now. Please try again or contact us on WhatsApp.",
        ],
      },
      { status: 500 },
    );
  }
}
