"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrors([]);

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          consent: data.consent === "on",
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.ok) {
        setStatus("error");
        setErrors(result.errors ?? ["Unable to send message."]);
        return;
      }
      setStatus("success");
      setMessage(result.message);
      form.reset();
    } catch {
      setStatus("error");
      setErrors(["Network error. Please try WhatsApp instead."]);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald/20 bg-white p-8">
        <h3 className="font-display text-2xl text-emerald">Message Sent</h3>
        <p className="mt-3 text-navy-soft">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-emerald/10 bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Your Name" name="name" required />
        <Field label="Email Address" name="email" type="email" required />
        <Field label="WhatsApp Number" name="whatsapp" required />
        <Field label="Subject" name="subject" required />
        <div className="md:col-span-2">
          <label className={labelClass} htmlFor="message">
            Message
          </label>
          <textarea id="message" name="message" required rows={5} className={inputClass} />
        </div>
      </div>
      <div className="sr-only" aria-hidden>
        <input name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="mt-5 flex items-start gap-3 text-sm text-navy-soft">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 rounded border-emerald/30" />
        <span>
          I agree to the{" "}
          <Link href="/privacy-policy" className="font-semibold text-emerald underline">
            Privacy Policy
          </Link>{" "}
          and consent to being contacted about this inquiry.
        </span>
      </label>
      {errors.length ? (
        <ul className="mt-4 space-y-1 rounded-xl bg-red-50 p-4 text-sm text-red-700">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      ) : null}
      <Button type="submit" className="mt-6" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

const labelClass = "mb-1.5 block text-sm font-semibold text-navy";
const inputClass =
  "w-full rounded-xl border border-emerald/15 bg-ivory px-3.5 py-2.5 text-sm text-navy outline-none transition focus:border-emerald focus:ring-2 focus:ring-emerald/20";

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className={labelClass} htmlFor={name}>
        {label}
      </label>
      <input id={name} name={name} type={type} required={required} className={inputClass} />
    </div>
  );
}
