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
      studentName: String(body.studentName ?? ""),
      studentAge: String(body.studentAge ?? ""),
      course: String(body.course ?? ""),
      teacherGender: String(body.teacherGender ?? ""),
      preferredTime: String(body.preferredTime ?? ""),
      notes: String(body.notes ?? ""),
    };

    const errors = validateRequired(fields, [
      "parentName",
      "email",
      "whatsapp",
      "country",
      "studentName",
      "studentAge",
      "course",
      "teacherGender",
      "preferredTime",
    ]);

    if (!body.consent) {
      errors.push("Consent is required to process registration interest");
    }

    if (errors.length) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    await saveInquiry("registration", { ...fields, consent: true });
    await notifyAcademy(
      "New Student Registration Interest",
      Object.entries(fields)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n"),
      { teacherGender: fields.teacherGender },
    );

    return NextResponse.json({
      ok: true,
      message:
        "Thank you for your registration interest. Our team will contact you to discuss class arrangements and next steps.",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        ok: false,
        errors: [
          "We could not process registration right now. Please try again or contact us on WhatsApp.",
        ],
      },
      { status: 500 },
    );
  }
}
