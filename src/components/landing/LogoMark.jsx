import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";

export default function LogoMark({ src, className, rings = false }) {
  return (
    <div className={cn("relative", className)}>
      {rings && (
        <>
          <span className='absolute inset-[-6%] rounded-full border border-primary/30 animate-spin-slow' />
          <span className='absolute inset-[-14%] rounded-full border border-dashed border-primary/25 animate-spin-slower' />
          <span className='absolute inset-[-24%] rounded-full border border-primary/10 animate-spin-slow' />
        </>
      )}
      <span className='relative block h-full w-full overflow-hidden rounded-full ring-1 ring-primary/45'>
        <Image
          src={src}
          alt='WELCIDEA gold and obsidian W emblem'
          className='h-full w-full'
          fittingType='fill'
        />
      </span>
    </div>
  );
}
