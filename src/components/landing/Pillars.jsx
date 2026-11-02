import { PILLARS } from "@/lib/brand";
import Reveal from "./Reveal";

export default function Pillars() {
  return (
    <section className='relative mx-auto mt-14 max-w-6xl px-6 lg:mt-20'>
      <div className='glass grid gap-px overflow-hidden rounded-[2rem] sm:grid-cols-3'>
        {PILLARS.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <Reveal key={pillar.title} delay={index * 0.12} variant='scale'>
              <div className='glass-hover flex h-full flex-col gap-4 rounded-[2rem] border-0 bg-transparent p-8'>
                <span className='flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-primary/5 text-primary'>
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <h3 className='font-heading text-lg tracking-[0.08em] text-foreground'>
                  {pillar.title}
                </h3>
                <p className='text-sm leading-[1.7] text-muted-foreground'>
                  {pillar.text}
                </p>
                <ul className='mt-1 space-y-2.5 border-t border-primary/15 pt-5'>
                  {pillar.points.map((point) => (
                    <li
                      key={point}
                      className='flex gap-2.5 text-[0.8125rem] leading-[1.65] text-foreground/75'
                    >
                      <span
                        className='mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-primary'
                        aria-hidden='true'
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
