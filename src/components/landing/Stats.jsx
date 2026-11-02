import AnimatedCounter from "./AnimatedCounter";
import Reveal from "./Reveal";

const STATS = [
  { value: 2022, from: 2000, label: "Established" },
  { value: 6, label: "Core Disciplines" },
  { value: 2, label: "Audiences Served" },
  { value: 100, suffix: "%", label: "Purpose-Driven" },
];

const SPHERES = [
  "Film & Screen",
  "Music & Live",
  "Fashion & Style",
  "Brand Strategy",
  "Events",
  "Publishing",
];

export default function Stats() {
  return (
    <section className='relative py-20 lg:py-24'>
      <div className='mx-auto max-w-6xl px-6'>
        <Reveal variant='reveal'>
          <div className='grid grid-cols-2 gap-px overflow-hidden rounded-[2rem] border border-primary/15 bg-primary/15 lg:grid-cols-4'>
            {STATS.map((stat) => (
              <div key={stat.label} className='bg-card px-8 py-10 text-center'>
                <p className='font-heading text-4xl tracking-[0.12em] text-primary lg:text-5xl'>
                  <AnimatedCounter
                    from={stat.from ?? 0}
                    value={stat.value}
                    duration={1800}
                  />
                  {stat.suffix ?? ""}
                </p>
                <p className='mt-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground'>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12} variant='blur'>
          <p className='mt-14 text-center text-[10px] font-semibold uppercase tracking-[0.34em] text-muted-foreground'>
            Where We Play
          </p>
          <div className='mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3'>
            {SPHERES.map((sphere) => (
              <span
                key={sphere}
                className='flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground'
              >
                <span
                  className='h-1 w-1 rounded-full bg-primary/70'
                  aria-hidden='true'
                />
                {sphere}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
