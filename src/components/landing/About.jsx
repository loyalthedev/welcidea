import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import AboutCard from "./AboutCard";

export default function About() {
  return (
    <section id='about' className='relative py-28 lg:py-40'>
      <div className='mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20'>
        <Reveal variant='left'>
          <AboutCard />
        </Reveal>

        <Reveal delay={0.15} variant='right'>
          <SectionHeading
            number='01'
            eyebrow='About Us'
            title='Every idea has the power to change a life.'
          />
          <div className='mt-8 h-px w-40 bg-gradient-to-r from-primary/70 to-transparent' />
          <p className='mt-8 text-[1.0625rem] leading-[1.85] text-muted-foreground'>
            A purpose-driven creative house built on faith, craft, and
            commitment. We develop concepts, craft content, and shape brands —
            guiding talent from first spark to lasting legacy, and turning bold
            ideas into work the culture remembers.
          </p>
          <p className='mt-5 text-[0.9375rem] leading-[1.85] text-muted-foreground/90'>
            From talent development and creative direction to brand strategy and
            production, every partnership begins with a conversation and ends
            with something built to last.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
