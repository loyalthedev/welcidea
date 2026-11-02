import { Archive, Quote, Sparkles } from "lucide-react";
import { CURRENT_WORKS, PAST_WORKS, TESTIMONIALS } from "@/lib/brand";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const triggerClass =
  "rounded-full px-2 py-2.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground transition-colors duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground sm:px-4 sm:text-[10px] sm:tracking-[0.18em]";

function WorkRow({ icon: Icon, title, detail }) {
  return (
    <div className='glass glass-hover flex items-start gap-4 rounded-2xl p-5'>
      <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/5 text-primary'>
        <Icon size={16} strokeWidth={1.5} />
      </span>
      <div>
        <p className='font-heading text-base tracking-[0.06em] text-foreground'>
          {title}
        </p>
        <p className='mt-1 text-sm leading-[1.6] text-muted-foreground'>
          {detail}
        </p>
      </div>
    </div>
  );
}

export default function Works() {
  return (
    <section id='works' className='relative py-24 lg:py-32'>
      <div className='pointer-events-none absolute left-1/2 top-1/3 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full gold-glow-radial' />
      <div className='relative mx-auto max-w-6xl px-6'>
        <Reveal variant='blur' className='text-center'>
          <SectionHeading
            number='06'
            eyebrow='Our Works'
            title='Proof of Purpose.'
            center
          />
        </Reveal>

        <Reveal delay={0.1} className='mt-12'>
          <Tabs defaultValue='current' className='mx-auto max-w-4xl'>
            <TabsList className='glass h-auto grid w-full grid-cols-3 gap-1 rounded-full p-1.5'>
              <TabsTrigger value='current' className={triggerClass}>
                Current Works
              </TabsTrigger>
              <TabsTrigger value='past' className={triggerClass}>
                Past Works
              </TabsTrigger>
              <TabsTrigger value='testimonials' className={triggerClass}>
                Testimonials
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value='current'
              className='mt-8 grid gap-4 sm:grid-cols-2'
            >
              {CURRENT_WORKS.map((work) => (
                <WorkRow
                  key={work.title}
                  icon={Sparkles}
                  title={work.title}
                  detail={work.detail}
                />
              ))}
            </TabsContent>

            <TabsContent
              value='past'
              className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'
            >
              {PAST_WORKS.map((work) => (
                <WorkRow
                  key={work.title}
                  icon={Archive}
                  title={work.title}
                  detail={work.detail}
                />
              ))}
            </TabsContent>

            <TabsContent
              value='testimonials'
              className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'
            >
              {TESTIMONIALS.map((testimonial) => (
                <div
                  key={testimonial.quote}
                  className='glass glass-hover flex h-full flex-col rounded-2xl p-6'
                >
                  <Quote size={20} strokeWidth={1.5} className='text-primary' />
                  <p className='mt-4 flex-1 font-heading text-lg leading-[1.5] tracking-[0.04em] text-foreground'>
                    {testimonial.quote}
                  </p>
                  <p className='mt-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-primary'>
                    {testimonial.author}
                  </p>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}
