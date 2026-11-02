import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/brand";
import { cn } from "@/lib/utils";
import LogoMark from "./LogoMark";
import useTheme from "@/hooks/useTheme";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -84, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.1, delay: 3.0, ease: [0.22, 1, 0.36, 1] }}
      className='fixed inset-x-0 top-0 z-50 px-4 pt-2'
    >
      <nav
        className={cn(
          "mx-auto flex items-center justify-between rounded-full border px-3 transition-all duration-700",
          scrolled
            ? "max-w-6xl border-primary/25 bg-card/70 py-1.5 shadow-[0_20px_70px_-34px_rgba(212,175,55,0.65)] backdrop-blur-xl"
            : "max-w-6xl border-transparent py-2 backdrop-blur-md",
        )}
      >
        <a href='#top' className='flex items-center gap-3'>
          <LogoMark src={BRAND.emblem} className='h-10 w-10 shrink-0' />
          <span className='leading-tight'>
            <span className='gold-text block font-heading text-base tracking-[0.3em]'>
              WELCIDEA
            </span>
            <span className='hidden text-[9px] uppercase tracking-[0.22em] text-muted-foreground sm:block'>
              {BRAND.fullName}
            </span>
          </span>
        </a>

        <div className='hidden items-center gap-7 lg:flex'>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='whitespace-nowrap text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-primary'
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className='flex items-center gap-2.5'>
          <button
            type='button'
            onClick={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              toggle({
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
              });
            }}
            aria-label={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
            title={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
            className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-black/20 text-primary transition-all duration-300 hover:border-primary hover:shadow-[0_0_24px_-6px_rgba(212,175,55,0.6)]'
          >
            {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <a
            href='#contact'
            className='hidden shrink-0 rounded-full border border-primary/35 bg-black/20 p-[3px] transition-colors duration-300 hover:border-primary/80 sm:block'
          >
            <span className='gold-surface block rounded-full px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-black transition-transform duration-300 hover:scale-[1.03] sm:px-6 sm:py-2.5 sm:text-[11px]'>
              Partner With Us
            </span>
          </a>
          <button
            type='button'
            onClick={() => setOpen((v) => !v)}
            aria-label='Toggle navigation menu'
            className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-black/20 text-primary transition-colors hover:border-primary/70 lg:hidden'
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className='mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl border border-primary/20 bg-card/95 p-5 backdrop-blur-xl lg:hidden'
          >
            <div className='flex flex-col divide-y divide-primary/10'>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className='py-3 text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-primary'
                >
                  {link.label}
                </a>
              ))}
              <a
                href='#contact'
                onClick={() => setOpen(false)}
                className='mt-4 block rounded-full border border-primary/35 p-[3px]'
              >
                <span className='gold-surface block rounded-full py-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-black'>
                  Partner With Us
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
