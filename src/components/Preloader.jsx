import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BRAND } from "@/lib/brand";
import AnimatedCounter from "./landing/AnimatedCounter";
import LogoMark from "./landing/LogoMark";

const HOLD_DURATION = 2400;

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), HOLD_DURATION);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className='fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-background px-6'
        >
          <div className='pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full gold-glow-radial' />
          <div className='pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent' />

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className='relative flex h-32 w-32 items-center justify-center'
          >
            <span className='absolute inset-0 rounded-full gold-glow-radial' />
            <div className='animate-pulse-gold h-full w-full rounded-full'>
              <LogoMark src={BRAND.emblem} rings className='h-full w-full' />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className='gold-text gold-animate mt-12 font-heading text-3xl tracking-[0.42em] sm:text-4xl'
          >
            WELCIDEA
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className='mt-5 text-[10px] font-semibold uppercase tracking-[0.34em] text-muted-foreground'
          >
            Turning Ideas Into Impact
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className='relative mt-16 w-64'
          >
            <div className='h-px w-full overflow-hidden rounded-full bg-primary/15'>
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
                className='gold-surface h-full'
              />
            </div>
            <p className='mt-4 text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-primary'>
              <AnimatedCounter value={100} duration={2200} />%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
