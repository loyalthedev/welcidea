import { TALENTS } from "@/lib/brand";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import TalentCard from "./TalentCard";

export default function Roster() {
  return (
    <section id='roster' className='relative py-24 lg:py-32'>
      <div className='pointer-events-none absolute left-1/2 top-1/3 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full gold-glow-radial' />
      <div className='relative mx-auto max-w-6xl px-6'>
        <Reveal variant='blur' className='text-center'>
          <SectionHeading
            number='04'
            eyebrow='Our Roster'
            title='Talent We Carry.'
            center
          />
        </Reveal>

        <div className='mt-16 grid gap-8 sm:grid-cols-2'>
          {TALENTS.map((talent, index) => (
            <Reveal
              key={talent.name}
              delay={index * 0.14}
              variant={index % 2 === 0 ? "left" : "right"}
              className='h-full'
            >
              <TalentCard talent={talent} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
