import { CalendarPlus, Star, Sprout, Users } from "lucide-react";
import { BRAND } from "@/lib/brand";
import AnimatedCounter from "./AnimatedCounter";

const PILLARS = [
  { label: "Building Dreams.", icon: Star },
  { label: "Creating Impact.", icon: Sprout },
  { label: "Inspiring Generations.", icon: Users },
];

export default function AboutCard() {
  return (
    <div className='glass glass-hover relative overflow-hidden rounded-[2rem] px-6 py-10 text-center sm:px-10'>
      <div className='pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full gold-glow-radial' />

      <span className='relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-primary/50 bg-primary/5 text-primary'>
        <CalendarPlus size={30} strokeWidth={1.3} />
      </span>

      <p className='mt-7 text-[10px] font-semibold uppercase tracking-[0.42em] text-primary'>
        Established
      </p>
      <p className='font-heading text-5xl tracking-[0.14em] text-foreground'>
        <AnimatedCounter
          from={2000}
          value={BRAND.established}
          duration={2200}
        />
      </p>

      <div className='mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-primary/70 to-transparent' />

      <h3 className='text-balance-lux mt-7 font-heading text-xl leading-[1.5] tracking-[0.06em] text-foreground sm:text-2xl'>
        More Than a Vision,
        <br />
        <span className='gold-text font-script italic tracking-[0.02em]'>
          It&rsquo;s a Movement.
        </span>
      </h3>

      <p className='mt-6 text-left text-[0.9375rem] leading-[1.85] text-muted-foreground'>
        WELCIDEA was founded in{" "}
        <span className='font-semibold text-primary'>2022</span> with a bold
        purpose — to discover raw{" "}
        <span className='font-semibold text-primary'>talent</span>, shape
        extraordinary careers, and create powerful{" "}
        <span className='font-semibold text-primary'>opportunities</span> in the
        entertainment and creative industry. We don&rsquo;t just manage talent;
        we build <span className='font-semibold text-primary'>legacies</span>.
      </p>

      <div className='mt-8 h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent' />

      <div className='mt-7 grid grid-cols-3 gap-3'>
        {PILLARS.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.label}
              className='flex flex-col items-center gap-2.5'
            >
              <Icon size={20} strokeWidth={1.4} className='text-primary' />
              <span className='text-balance w-full text-[9px] font-semibold uppercase leading-[1.5] tracking-[0.08em] text-muted-foreground sm:text-[10px] sm:tracking-[0.14em]'>
                {pillar.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
