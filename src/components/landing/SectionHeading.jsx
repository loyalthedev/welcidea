import { cn } from "@/lib/utils";

export default function SectionHeading({
  number,
  eyebrow,
  title,
  center = false,
  className = "",
  titleClassName = "",
}) {
  return (
    <div className={cn(center && "text-center", className)}>
      <p
        className={cn(
          "flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.42em] text-primary",
          center && "justify-center",
        )}
      >
        <span className='font-heading text-[11px] tracking-[0.1em]'>
          / {number}
        </span>
        <span className='h-px w-10 bg-primary/60' aria-hidden='true' />
        <span>{eyebrow}</span>
      </p>
      <h2
        className={cn(
          "mt-6 font-heading text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.2] tracking-[0.06em] text-foreground",
          titleClassName,
        )}
      >
        {title}
      </h2>
    </div>
  );
}
