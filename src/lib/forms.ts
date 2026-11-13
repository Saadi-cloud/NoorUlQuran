import { promises as fs } from "fs";
import path from "path";
import nodemailer from "nodemailer";

export type InquiryType = "free-trial" | "contact" | "registration";

export type InquiryRecord = {
  id: string;
  type: InquiryType;
  createdAt: string;
  payload: Record<string, string | boolean>;
};

export type NotifyOptions = {
  teacherGender?: string;
};

type NotifyPhone = {
  phone: string;
  callMeBotKey?: string;
};

const dataDir = path.join(process.cwd(), "data", "inquiries");

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateRequired(
  fields: Record<string, string | undefined>,
  required: string[],
) {
  const errors: string[] = [];
  for (const key of required) {
    if (!fields[key]?.trim()) errors.push(`${key} is required`);
  }
  if (fields.email && !isValidEmail(fields.email)) {
    errors.push("Please enter a valid email address");
  }
  return errors;
}

export async function saveInquiry(
  type: InquiryType,
  payload: Record<string, string | boolean>,
) {
  await fs.mkdir(dataDir, { recursive: true });
  const record: InquiryRecord = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    type,
    createdAt: new Date().toISOString(),
    payload,
  };
  const filePath = path.join(dataDir, `${record.id}.json`);
  await fs.writeFile(filePath, JSON.stringify(record, null, 2), "utf8");
  return record;
}

async function sendViaSmtp(subject: string, body: string) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS?.replace(/\s+/g, "");
  const to = process.env.INQUIRY_TO_EMAIL ?? "muhammadsaadm95@gmail.com";
  const from =
    process.env.INQUIRY_FROM_EMAIL ??
    (user ? `Noor Ul Quran Online Academy <${user}>` : undefined);

  if (!host || !user || !pass || !from) {
    return { emailed: false as const, reason: "smtp-not-configured" };
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from,
    to,
    subject,
    text: body,
  });

  return { emailed: true as const };
}

async function sendViaResend(subject: string, body: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL ?? "muhammadsaadm95@gmail.com";
  const from =
    process.env.INQUIRY_FROM_EMAIL ?? "Noor Ul Quran <onboarding@resend.dev>";

  if (!apiKey) {
    return { emailed: false as const, reason: "resend-not-configured" };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      text: body,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Email delivery failed: ${errorText}`);
  }

  return { emailed: true as const };
}

function getNotifyPhones(teacherGender?: string): NotifyPhone[] {
  const malePhone =
    process.env.WHATSAPP_NOTIFY_PHONE_MALE?.replace(/\D/g, "") ||
    process.env.WHATSAPP_CLOUD_TO_MALE?.replace(/\D/g, "");
  const femalePhone =
    process.env.WHATSAPP_NOTIFY_PHONE_FEMALE?.replace(/\D/g, "") ||
    process.env.WHATSAPP_CLOUD_TO_FEMALE?.replace(/\D/g, "");

  const male: NotifyPhone | null = malePhone
    ? {
        phone: malePhone,
        callMeBotKey: process.env.WHATSAPP_NOTIFY_APIKEY_MALE || undefined,
      }
    : null;

  const female: NotifyPhone | null = femalePhone
    ? {
        phone: femalePhone,
        callMeBotKey: process.env.WHATSAPP_NOTIFY_APIKEY_FEMALE || undefined,
      }
    : null;

  const gender = (teacherGender ?? "").toLowerCase();
  if (gender.includes("female") && female) return [female];
  if (gender.includes("male") && !gender.includes("female") && male) {
    return [male];
  }

  return [male, female].filter(Boolean) as NotifyPhone[];
}

async function sendViaCallMeBot(phone: string, apiKey: string, text: string) {
  const url = new URL("https://api.callmebot.com/whatsapp.php");
  url.searchParams.set("phone", phone);
  url.searchParams.set("text", text);
  url.searchParams.set("apikey", apiKey);

  const response = await fetch(url.toString(), { method: "GET" });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`CallMeBot failed (${phone}): ${errorText}`);
  }
}

function truncate(value: string, max = 900) {
  const cleaned = value.replace(/\s+/g, " ").trim();
  return cleaned.length > max ? `${cleaned.slice(0, max - 1)}…` : cleaned;
}

async function sendViaWhatsAppCloud(phone: string, subject: string, body: string) {
  const token = process.env.WHATSAPP_CLOUD_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_CLOUD_PHONE_NUMBER_ID;
  const apiVersion = process.env.WHATSAPP_CLOUD_API_VERSION ?? "v22.0";
  const templateName = process.env.WHATSAPP_CLOUD_TEMPLATE_NAME;
  const templateLang = process.env.WHATSAPP_CLOUD_TEMPLATE_LANG ?? "en_US";

  if (!token || !phoneNumberId) {
    return { sent: false as const, reason: "cloud-not-configured" };
  }

  const endpoint = `https://graph.facebook.com/${apiVersion}/${phoneNumberId}/messages`;
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  // Business-initiated alerts should use an approved template.
  // Fallback text only works inside an open 24-hour customer service window.
  const payload = templateName
    ? {
        messaging_product: "whatsapp",
        to: phone,
        type: "template",
        template: {
          name: templateName,
          language: { code: templateLang },
          components: [
            {
              type: "body",
              parameters: [
                { type: "text", text: truncate(subject, 60) },
                { type: "text", text: truncate(body, 900) },
              ],
            },
          ],
        },
      }
    : {
        messaging_product: "whatsapp",
        to: phone,
        type: "text",
        text: {
          body: truncate(`*${subject}*\n\n${body}\n\nNoor Ul Quran Online Academy`, 1024),
        },
      };

  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`WhatsApp Cloud API failed (${phone}): ${errorText}`);
  }

  return { sent: true as const };
}

async function sendWhatsAppAlert(
  subject: string,
  body: string,
  options?: NotifyOptions,
) {
  const targets = getNotifyPhones(options?.teacherGender);
  if (!targets.length) {
    return { whatsapped: false as const, reason: "whatsapp-not-configured" };
  }

  const message = `*${subject}*\n\n${body}\n\n_Noor Ul Quran Online Academy_`;
  const cloudConfigured = Boolean(
    process.env.WHATSAPP_CLOUD_TOKEN && process.env.WHATSAPP_CLOUD_PHONE_NUMBER_ID,
  );

  const results = await Promise.allSettled(
    targets.map(async (target) => {
      if (cloudConfigured) {
        const cloud = await sendViaWhatsAppCloud(target.phone, subject, body);
        if (cloud.sent) return;
      }

      if (target.callMeBotKey) {
        await sendViaCallMeBot(target.phone, target.callMeBotKey, message);
        return;
      }

      throw new Error(
        `No WhatsApp delivery method configured for ${target.phone}`,
      );
    }),
  );

  for (const result of results) {
    if (result.status === "rejected") {
      console.error("[whatsapp-notify-failed]", result.reason);
    }
  }

  return {
    whatsapped: results.some((result) => result.status === "fulfilled"),
  };
}

export async function notifyAcademy(
  subject: string,
  body: string,
  options?: NotifyOptions,
) {
  let emailed = false;

  try {
    const smtpResult = await sendViaSmtp(subject, body);
    emailed = smtpResult.emailed;
    if (!emailed) {
      const resendResult = await sendViaResend(subject, body);
      emailed = resendResult.emailed;
    }
  } catch (error) {
    console.error("[inquiry-email-failed]", error);
  }

  if (!emailed) {
    console.info("[inquiry-email-skipped]", {
      subject,
      reason: "No SMTP or Resend credentials configured",
    });
  }

  let whatsapped = false;
  try {
    const waResult = await sendWhatsAppAlert(subject, body, options);
    whatsapped = Boolean(waResult.whatsapped);
  } catch (error) {
    console.error("[inquiry-whatsapp-failed]", error);
  }

  return { emailed, whatsapped };
}

export function honeypotTriggered(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}
