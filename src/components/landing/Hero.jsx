import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { Image } from "@/components/ui/image";
import RotatingWord from "./RotatingWord";

const DISCIPLINES = [
  { num: "01", label: "Content Strategy" },
  { num: "02", label: "Brand Development" },
  { num: "03", label: "Creative Direction" },
];

const EASE = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 2.9 } },
};

const itemFade = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
};

const itemLeft = {
  hidden: { opacity: 0, x: -48 },
  show: { opacity: 1, x: 0, transition: { duration: 1, ease: EASE } },
};

const itemBlur = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: EASE },
  },
};

const itemHeadline = {
  hidden: { opacity: 0, y: 64, clipPath: "inset(0 0 100% 0)" },
  show: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 1.3, ease: EASE },
  },
};

export default function Hero() {
  return (
    <section
      id='top'
      className='relative flex min-h-[100svh] items-center overflow-hidden'
    >
      <motion.div
        className='absolute inset-0'
        initial={{ opacity: 0, scale: 1.09 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3.8, delay: 1.4, ease: EASE }}
      >
        <Image
          src={BRAND.heroImage}
          alt='WELCIDEA private office overlooking a golden city skyline at night'
          className='h-full w-full'
          fittingType='fill'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-background/95 via-background/75 to-background' />
        <div className='absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/55' />
      </motion.div>

      <motion.div
        variants={container}
        initial='hidden'
        animate='show'
        className='relative mx-auto w-full max-w-6xl px-6 pb-44 pt-44'
      >
        <motion.p
          variants={itemLeft}
          className='flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.34em] text-primary drop-shadow-[0_1px_12px_rgba(0,0,0,0.55)]'
        >
          <span className='h-px w-12 bg-primary/70' aria-hidden='true' />
          WELCIDEA · Est. {BRAND.established}
        </motion.p>

        <motion.h1
          variants={itemHeadline}
          className='text-balance-lux mt-8 max-w-4xl font-heading text-[clamp(2.4rem,6vw,4.8rem)] font-bold leading-[1.12] tracking-[0.02em] text-foreground drop-shadow-[0_2px_26px_rgba(0,0,0,0.5)]'
        >
          We build the structure behind{" "}
          <RotatingWord
            words={["Talent.", "Brands.", "Vision."]}
            className='font-accent gold-text gold-animate'
          />
        </motion.h1>

        <motion.p
          variants={itemBlur}
          className='mt-8 max-w-xl text-[1.0625rem] font-medium leading-[1.75] text-foreground/80 drop-shadow-[0_1px_14px_rgba(0,0,0,0.5)]'
        >
          A creative house for exceptional talent and ambitious brands — shaping
          stories that move culture and outlast seasons.
        </motion.p>

        <motion.div
          variants={itemFade}
          className='mt-11 flex flex-wrap items-center gap-4'
        >
          <a
            href='#contact'
            className='gold-surface group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-black transition-transform duration-300 hover:scale-[1.03] sm:px-8 sm:py-4 sm:text-[12px]'
          >
            <span className='relative z-10'>Start a Conversation</span>
            <ArrowRight
              size={16}
              className='relative z-10 transition-transform duration-300 group-hover:translate-x-1'
            />
          </a>
          <a
            href='#about'
            className='glass glass-hover inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground sm:px-8 sm:py-4 sm:text-[12px]'
          >
            Explore WELCIDEA
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.8 }}
        className='absolute inset-x-0 bottom-0'
      >
        <div className='mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-10 gap-y-4 border-t border-primary/15 px-6 py-6'>
          <div className='flex flex-wrap items-center gap-x-10 gap-y-3'>
            {DISCIPLINES.map((discipline) => (
              <span
                key={discipline.num}
                className='text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground'
              >
                <span className='text-primary'>/ {discipline.num}</span>{" "}
                {discipline.label}
              </span>
            ))}
          </div>
          <span className='hidden items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground lg:flex'>
            Scroll to explore
            <ChevronDown size={14} className='animate-bounce text-primary' />
          </span>
        </div>
      </motion.div>
    </section>
  );
}
