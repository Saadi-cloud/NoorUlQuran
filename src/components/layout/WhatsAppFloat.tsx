"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, UserRound } from "lucide-react";
import { whatsappLinks } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (!panelRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div ref={panelRef} className="fixed bottom-5 right-5 z-50">
      {open ? (
        <div className="mb-3 w-[280px] overflow-hidden rounded-2xl border border-emerald/15 bg-white shadow-2xl animate-fade-up">
          <div className="flex items-center justify-between bg-emerald px-4 py-3 text-white">
            <p className="text-sm font-semibold">Who would you like to contact?</p>
            <button
              type="button"
              aria-label="Close WhatsApp options"
              onClick={() => setOpen(false)}
              className="rounded-full p-1 hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-2 p-3">
            <a
              href={whatsappLinks.male}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-emerald/10 px-3 py-3 text-sm font-medium text-navy transition hover:border-[#25D366] hover:bg-[#25D366]/10"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/15 text-[#128C7E]">
                <UserRound className="h-4 w-4" />
              </span>
              Male Quran Teacher
            </a>
            <a
              href={whatsappLinks.female}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-emerald/10 px-3 py-3 text-sm font-medium text-navy transition hover:border-[#25D366] hover:bg-[#25D366]/10"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/15 text-[#128C7E]">
                <UserRound className="h-4 w-4" />
              </span>
              Female Quran Teacher
            </a>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label="Open WhatsApp contact options"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:bg-[#1ebe57] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}
