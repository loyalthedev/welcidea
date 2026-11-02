import { Instagram, Mail } from "lucide-react";
import { BRAND, TEAM } from "@/lib/brand";
import LogoMark from "./LogoMark";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import WhatsAppIcon from "./WhatsAppIcon";

const SOCIAL_LINKS = {
  instagram: { icon: Instagram, label: "Instagram", href: BRAND.instagramUrl },
  whatsapp: { icon: WhatsAppIcon, label: "WhatsApp", href: BRAND.whatsappUrl },
  email: { icon: Mail, label: "Email", href: `mailto:${BRAND.email}` },
};

export default function Team() {
  return (
    <section id='team' className='relative py-24 lg:py-32'>
      <div className='pointer-events-none absolute left-1/2 top-1/3 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full gold-glow-radial' />
      <div className='relative mx-auto max-w-6xl px-6'>
        <Reveal variant='blur' className='text-center'>
          <SectionHeading
            number='05'
            eyebrow='Our Team'
            title='The People Behind The Purpose.'
            center
          />
        </Reveal>

        <div className='mt-14 flex flex-wrap justify-center gap-8'>
          {TEAM.map((member, index) => (
            <Reveal
              key={member.name}
              delay={index * 0.12}
              variant='scale'
              className='w-full max-w-sm'
            >
              <div className='glass glass-hover h-full rounded-[2rem] p-10 text-center'>
                <LogoMark src={BRAND.emblem} className='mx-auto h-24 w-24' />
                <p className='mt-6 font-heading text-xl tracking-[0.08em] text-foreground'>
                  {member.name}
                </p>
                <p className='mt-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-primary'>
                  {member.role}
                </p>
                <p className='mt-4 text-sm leading-[1.7] text-muted-foreground'>
                  {member.bio}
                </p>
                <div className='mt-7 flex justify-center gap-3'>
                  {member.socials.map((key) => {
                    const social = SOCIAL_LINKS[key];
                    const Icon = social.icon;
                    return (
                      <a
                        key={key}
                        href={social.href}
                        target={key === "email" ? undefined : "_blank"}
                        rel='noreferrer'
                        aria-label={social.label}
                        title={social.label}
                        className='flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 text-primary transition-colors duration-300 hover:border-primary'
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className='mt-10 text-center text-[11px] uppercase tracking-[0.22em] text-muted-foreground'>
            More Team Members Joining Soon
          </p>
        </Reveal>
      </div>
    </section>
  );
}
