import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { requestBooking } from "@/lib/booking";

export default function TalentCard({ talent }) {
  return (
    <div className='glass glass-hover group relative flex h-full flex-col overflow-hidden rounded-[2rem]'>
      <div className='relative overflow-hidden'>
        <Image
          src={talent.image}
          alt={talent.alt}
          className='h-[26rem] w-full transition-transform duration-700 group-hover:scale-[1.04] sm:h-[32rem]'
          fittingType='fill'
        />
        <div className='pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 via-black/25 to-transparent' />
        <div className='absolute inset-x-0 bottom-0 p-7'>
          <p className='font-heading text-2xl tracking-[0.08em] text-white'>
            {talent.name}
          </p>
          <p className='mt-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary'>
            {talent.role}
          </p>
        </div>
      </div>

      <div className='relative mt-auto flex flex-col gap-4 p-6'>
        <p className='text-[10px] uppercase tracking-[0.24em] text-muted-foreground'>
          Available for bookings &amp; appearances
        </p>
        <button
          type='button'
          onClick={() => requestBooking(talent.name)}
          className='gold-surface group/btn inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-black transition-transform duration-300 hover:scale-[1.03]'
        >
          <span className='relative z-10'>Book {talent.name}</span>
          <ArrowRight
            size={14}
            className='relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1'
          />
        </button>
      </div>
    </div>
  );
}
