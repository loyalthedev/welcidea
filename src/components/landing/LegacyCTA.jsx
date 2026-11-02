import InquiryForm from "./InquiryForm";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function LegacyCTA() {
  return (
    <section id='contact' className='relative py-24 lg:py-32'>
      <div className='mx-auto max-w-6xl px-6'>
        <Reveal variant='reveal'>
          <div className='glass relative overflow-hidden rounded-[2.5rem] px-8 py-16 text-center lg:px-16'>
            <div className='pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full gold-glow-radial' />
            <div className='pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent' />
            <h2 className='relative text-balance-lux font-heading text-[clamp(1.7rem,3.4vw,2.7rem)] leading-[1.35] tracking-[0.1em] text-primary'>
              Your Vision. Our Purpose. Limitless Possibilities.
            </h2>
            <p className='relative mx-auto mt-7 max-w-2xl text-[1.0625rem] leading-[1.8] text-muted-foreground'>
              We don't chase ideas — we build legacies. Let's create something
              timeless.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className='mt-14'>
          <div className='glass mx-auto max-w-3xl rounded-[2rem] p-8 sm:p-12'>
            <SectionHeading
              number='07'
              eyebrow='Inquiry Portal'
              title='Start the Conversation'
              titleClassName='text-2xl'
            />
            <div className='mt-8'>
              <InquiryForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
