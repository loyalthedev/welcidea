import { Instagram, Mail } from "lucide-react";
import { BRAND } from "@/lib/brand";
import LogoMark from "./LogoMark";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  return (
    <footer className='relative border-t border-primary/15 pb-12 pt-20'>
      <div className='pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent' />
      <div className='mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.2fr_1fr]'>
        <div>
          <div className='flex items-center gap-4'>
            <LogoMark src={BRAND.emblem} className='h-14 w-14 shrink-0' />
            <div>
              <p className='gold-text font-heading text-xl tracking-[0.3em]'>
                WELCIDEA
              </p>
              <p className='mt-1 text-[10px] uppercase tracking-[0.24em] text-muted-foreground'>
                Welcome Idea Management Concepts
              </p>
            </div>
          </div>
          <p className='mt-6 max-w-md text-sm leading-[1.8] text-muted-foreground'>
            Founded by {BRAND.founder} (Est. {BRAND.established}). A
            purpose-driven creative house building dreams, creating impact, and
            inspiring generations.
          </p>
        </div>

        <div className='flex flex-col gap-4'>
          <p className='text-[10px] font-semibold uppercase tracking-[0.34em] text-primary'>
            Direct Contact
          </p>
          <a
            href={BRAND.instagramUrl}
            target='_blank'
            rel='noreferrer'
            className='glass glass-hover flex items-center gap-4 rounded-2xl px-5 py-4'
          >
            <span className='flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 text-primary'>
              <Instagram size={18} strokeWidth={1.6} />
            </span>
            <span>
              <span className='block text-[10px] uppercase tracking-[0.24em] text-muted-foreground'>
                Instagram
              </span>
              <span className='block font-heading text-sm tracking-[0.14em] text-foreground'>
                {BRAND.instagramHandle}
              </span>
            </span>
          </a>
          <div className='glass glass-hover flex flex-col gap-3 rounded-2xl px-5 py-4'>
            <div className='flex items-center gap-4'>
              <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary'>
                <WhatsAppIcon size={18} />
              </span>
              <span className='text-[10px] uppercase tracking-[0.24em] text-muted-foreground'>
                WhatsApp
              </span>
            </div>
            {BRAND.whatsappContacts.map((contact) => (
              <a
                key={contact.number}
                href={contact.url}
                target='_blank'
                rel='noreferrer'
                className='grid grid-cols-[7rem_1fr] items-baseline gap-3 pl-[3.75rem] transition-colors hover:text-primary'
              >
                <span className='text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
                  {contact.label}
                </span>
                <span className='font-heading text-sm tracking-[0.14em] text-foreground'>
                  {contact.number}
                </span>
              </a>
            ))}
          </div>
          <a
            href={`mailto:${BRAND.email}`}
            className='glass glass-hover flex items-center gap-4 rounded-2xl px-5 py-4'
          >
            <span className='flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 text-primary'>
              <Mail size={18} strokeWidth={1.6} />
            </span>
            <span>
              <span className='block text-[10px] uppercase tracking-[0.24em] text-muted-foreground'>
                Email
              </span>
              <span className='block text-sm tracking-[0.02em] text-foreground'>
                {BRAND.email}
              </span>
            </span>
          </a>
        </div>
      </div>

      <div className='mx-auto mt-16 max-w-6xl px-6'>
        <div className='h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent' />
        <p className='mt-8 text-center text-[11px] tracking-[0.12em] text-muted-foreground/80'>
          © 2026 Welcome Idea Management Concepts (WELCIDEA). All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
