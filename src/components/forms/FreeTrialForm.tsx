"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { courses } from "@/lib/courses";
import { Button } from "@/components/ui/Button";

const countries = [
  "United Kingdom",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Saudi Arabia",
  "United Arab Emirates",
  "Qatar",
  "Kuwait",
  "Oman",
  "Bahrain",
  "Other",
];

export function FreeTrialForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrors([]);
    setMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/free-trial", {
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
        setErrors(result.errors ?? ["Something went wrong. Please try again."]);
        return;
      }

      setStatus("success");
      setMessage(result.message);
      form.reset();
    } catch {
      setStatus("error");
      setErrors([
        "Network error. Please check your connection or contact us on WhatsApp.",
      ]);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald/20 bg-white p-8 shadow-sm">
        <h3 className="font-display text-2xl text-emerald">Request Received</h3>
        <p className="mt-3 text-navy-soft">{message}</p>
        <p className="mt-3 text-sm text-navy-soft">
          Class times are confirmed only after discussion with our team.
        </p>
        <Button
          type="button"
          className="mt-6"
          onClick={() => {
            setStatus("idle");
            setMessage("");
          }}
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-emerald/10 bg-white p-6 shadow-sm md:p-8"
      noValidate
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Parent Name" name="parentName" required />
        <Field label="Email Address" name="email" type="email" required />
        <Field label="WhatsApp Number" name="whatsapp" required />
        <div>
          <label className={labelClass} htmlFor="country">
            Country
          </label>
          <select id="country" name="country" required className={inputClass}>
            <option value="">Select country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <Field label="Student Age" name="studentAge" required />
        <div>
          <label className={labelClass} htmlFor="course">
            Selected Course
          </label>
          <select id="course" name="course" required className={inputClass}>
            <option value="">Select course</option>
            {courses.map((course) => (
              <option key={course.slug} value={course.name}>
                {course.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="teacherGender">
            Preferred Teacher Gender
          </label>
          <select
            id="teacherGender"
            name="teacherGender"
            required
            className={inputClass}
          >
            <option value="">Select preference</option>
            <option value="Male Teacher">Male Teacher</option>
            <option value="Female Teacher">Female Teacher</option>
            <option value="No Preference">No Preference</option>
          </select>
        </div>
        <Field
          label="Preferred Class Time"
          name="preferredTime"
          placeholder="Example: Weekdays after 5 PM local time"
          required
        />
        <div className="md:col-span-2">
          <label className={labelClass} htmlFor="contactMethod">
            Preferred Contact Method
          </label>
          <select
            id="contactMethod"
            name="contactMethod"
            required
            className={inputClass}
          >
            <option value="">Select method</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Email">Email</option>
            <option value="Either">Either</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className={labelClass} htmlFor="notes">
            Additional Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            className={inputClass}
            placeholder="Share anything that helps us arrange a suitable trial."
          />
        </div>
      </div>

      <div className="sr-only" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="mt-5 flex items-start gap-3 text-sm text-navy-soft">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 rounded border-emerald/30 text-emerald"
        />
        <span>
          I agree to the{" "}
          <Link href="/privacy-policy" className="font-semibold text-emerald underline">
            Privacy Policy
          </Link>{" "}
          and give permission for Noor Ul Quran Online Academy to contact me about
          this inquiry. I understand children&apos;s details should be limited to
          what is needed for arranging classes.
        </span>
      </label>

      {errors.length ? (
        <ul className="mt-4 space-y-1 rounded-xl bg-red-50 p-4 text-sm text-red-700">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      ) : null}

      <Button type="submit" variant="gold" className="mt-6 w-full md:w-auto" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Request My 3-Day Free Trial"}
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
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className={labelClass} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  );
}
