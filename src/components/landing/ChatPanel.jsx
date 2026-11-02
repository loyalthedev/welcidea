import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { BRAND, INQUIRY_CATEGORIES } from "@/lib/brand";
import WhatsAppIcon from "./WhatsAppIcon";

const empty = { full_name: "", email: "", category: "", message: "" };

const fieldClass =
  "field-surface w-full rounded-xl border border-primary/25 px-3 py-2 text-[13px] text-foreground outline-none placeholder:text-muted-foreground/70 focus:border-primary/60";

const COPY = {
  live: {
    title: "Live Chat",
    note: "Tell us what you need — our team replies the same day.",
  },
  support: {
    title: "Chat Support",
    note: "Support is one message away. We will guide you from here.",
  },
};

export default function ChatPanel({ mode = "live", onClose }) {
  const copy = COPY[mode] ?? COPY.live;
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const update = (key) => (event) =>
    setForm((prev) => ({ ...prev, [key]: event.target.value }));

  const submit = async (event) => {
    event.preventDefault();
    if (!form.full_name.trim() || !form.message.trim()) {
      setError("Add your name and a short message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setBusy(true);
    try {
      await base44.entities.Inquiry.create({
        full_name: form.full_name.trim(),
        email: form.email.trim(),
        category: form.category || INQUIRY_CATEGORIES[0],
        message: form.message.trim(),
      });
      setSent(true);
    } catch {
      setError("That did not send. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 16, scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className='glass w-[min(20.5rem,calc(100vw-2.5rem))] overflow-hidden rounded-3xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)]'
    >
      <div className='flex items-start justify-between gap-3 border-b border-primary/20 px-5 py-4'>
        <div>
          <p className='flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-primary'>
            <span
              className='h-1.5 w-1.5 rounded-full bg-primary'
              aria-hidden='true'
            />
            WELCIDEA
          </p>
          <p className='mt-1 font-heading text-sm tracking-[0.12em] text-foreground'>
            {copy.title}
          </p>
        </div>
        <button
          type='button'
          onClick={onClose}
          aria-label='Close chat'
          className='flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 text-muted-foreground transition-colors hover:text-foreground'
        >
          <X size={14} />
        </button>
      </div>

      {sent ? (
        <div className='flex flex-col gap-3 px-5 py-6'>
          <p className='font-heading text-sm tracking-[0.1em] text-foreground'>
            Message received.
          </p>
          <p className='text-[12px] leading-[1.7] text-muted-foreground'>
            Thank you, {form.full_name.split(" ")[0]}. We will reply to{" "}
            {form.email} shortly.
          </p>
          <a
            href={BRAND.whatsappUrl}
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:text-primary'
          >
            <WhatsAppIcon size={14} />
            Continue on WhatsApp
          </a>
        </div>
      ) : (
        <form onSubmit={submit} className='flex flex-col gap-2.5 px-5 py-5'>
          <p className='text-[11px] leading-[1.6] text-muted-foreground'>
            {copy.note}
          </p>
          <input
            value={form.full_name}
            onChange={update("full_name")}
            placeholder='Your name'
            aria-label='Your name'
            className={fieldClass}
          />
          <input
            value={form.email}
            onChange={update("email")}
            type='email'
            placeholder='Email address'
            aria-label='Email address'
            className={fieldClass}
          />
          <select
            value={form.category}
            onChange={update("category")}
            aria-label='What is this about'
            className={fieldClass}
          >
            <option value=''>What is this about?</option>
            {INQUIRY_CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <textarea
            value={form.message}
            onChange={update("message")}
            rows={3}
            placeholder='Your message'
            aria-label='Your message'
            className={`${fieldClass} resize-none`}
          />
          {error && <p className='text-[11px] text-destructive'>{error}</p>}
          <button
            type='submit'
            disabled={busy}
            className='gold-surface mt-1 flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-black transition-transform duration-300 hover:scale-[1.02] disabled:opacity-60'
          >
            {busy ? "Sending…" : "Send Message"}
            <ArrowUpRight size={13} />
          </button>
        </form>
      )}
    </motion.div>
  );
}
