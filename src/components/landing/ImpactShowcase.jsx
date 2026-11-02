import { ArrowRight, CircleCheckBig } from "lucide-react";
import { Image } from "@/components/ui/image";
import { ARTIST_POINTS, BRAND, TALENT_POINTS } from "@/lib/brand";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function ImpactCard({ eyebrow, title, points, cta, image, alt }) {
  return (
    <div className='glass glass-hover flex h-full flex-col overflow-hidden rounded-[2rem]'>
      <Image src={image} alt={alt} className='h-48 w-full' fittingType='fill' />
      <div className='flex flex-1 flex-col p-8'>
        <p className='text-[10px] font-semibold uppercase tracking-[0.34em] text-primary'>
          {eyebrow}
        </p>
        <h3 className='mt-4 font-heading text-2xl leading-snug tracking-[0.06em] text-foreground'>
          {title}
        </h3>
        <ul className='mt-7 flex flex-1 flex-col gap-4'>
          {points.map((point) => (
            <li
              key={point}
              className='flex gap-3 text-sm leading-[1.7] text-muted-foreground'
            >
              <CircleCheckBig
                size={17}
                className='mt-0.5 shrink-0 text-primary'
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <a
          href='#contact'
          className='group mt-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary'
        >
          {cta}
          <ArrowRight
            size={14}
            className='transition-transform duration-300 group-hover:translate-x-1'
          />
        </a>
      </div>
    </div>
  );
}

export default function ImpactShowcase() {
  return (
    <section id='impact' className='relative py-24 lg:py-32'>
      <div className='pointer-events-none absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full gold-glow-radial' />
      <div className='relative mx-auto max-w-6xl px-6'>
        <Reveal variant='blur' className='text-center'>
          <SectionHeading
            number='03'
            eyebrow='Our Impact'
            title='Two Journeys. One Purpose.'
            center
          />
        </Reveal>

        <div className='mt-16 grid gap-8 lg:grid-cols-2'>
          <Reveal variant='left'>
            <ImpactCard
              eyebrow='Supporting Creativity'
              title='Empowering Artists'
              points={ARTIST_POINTS}
              cta='Apply for Representation'
              image={BRAND.artistImage}
              alt='Macro view of a studio microphone grille in gold light'
            />
          </Reveal>
          <Reveal delay={0.15} variant='right'>
            <ImpactCard
              eyebrow='Screen & Stage'
              title='Elevating Talents'
              points={TALENT_POINTS}
              cta='Apply for Representation'
              image={BRAND.theatreImage}
              alt='Grand theatre stage with golden curtains under a spotlight'
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
