import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LifeBuoy, MessageSquare, X } from "lucide-react";
import { BRAND } from "@/lib/brand";
import WhatsAppIcon from "./WhatsAppIcon";
import ChatPanel from "./ChatPanel";

const CHAT_OPTIONS = [
  {
    id: "live",
    label: "Live Chat",
    hint: "Chat support on the website",
    icon: MessageSquare,
  },
  {
    id: "support",
    label: "Chat Support",
    hint: "Talk to our team directly",
    icon: LifeBuoy,
  },
];

const menu = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.03 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: 10, scale: 0.92, transition: { duration: 0.18 } },
};

const pillClass =
  "glass glass-hover flex items-center gap-3 rounded-full px-3.5 py-2.5 text-left";

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const [chatMode, setChatMode] = useState(null);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") {
        setChatMode(null);
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const startChat = (mode) => {
    setOpen(false);
    setChatMode(mode);
  };

  const toggle = () => {
    setChatMode(null);
    setOpen((prev) => !prev);
  };

  const expanded = open || Boolean(chatMode);

  return (
    <div className='fixed bottom-5 right-5 z-[70] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6'>
      <AnimatePresence>
        {chatMode && (
          <ChatPanel
            key='chat'
            mode={chatMode}
            onClose={() => setChatMode(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && !chatMode && (
          <motion.div
            key='menu'
            variants={menu}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex flex-col items-end gap-2.5'
          >
            {CHAT_OPTIONS.map((option) => {
              const Icon = option.icon;
              return (
                <motion.button
                  key={option.id}
                  type='button'
                  variants={itemVariants}
                  onClick={() => startChat(option.id)}
                  className={pillClass}
                >
                  <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary'>
                    <Icon size={16} strokeWidth={1.6} />
                  </span>
                  <span>
                    <span className='block text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground'>
                      {option.label}
                    </span>
                    <span className='block text-[10px] tracking-[0.04em] text-muted-foreground'>
                      {option.hint}
                    </span>
                  </span>
                </motion.button>
              );
            })}

            <motion.a
              variants={itemVariants}
              href={BRAND.whatsappUrl}
              target='_blank'
              rel='noreferrer'
              className={pillClass}
            >
              <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary'>
                <WhatsAppIcon size={16} />
              </span>
              <span>
                <span className='block text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground'>
                  WhatsApp
                </span>
                <span className='block text-[10px] tracking-[0.04em] text-muted-foreground'>
                  Chat with us on WhatsApp
                </span>
              </span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <div className='relative h-14 w-14'>
        {!expanded && (
          <>
            <span className='animate-ping absolute inset-0 -z-10 rounded-full bg-primary/30' />
            <span
              className='animate-ping absolute inset-0 -z-10 rounded-full bg-primary/20'
              style={{ animationDelay: "0.8s" }}
            />
          </>
        )}
        <button
          type='button'
          onClick={toggle}
          aria-label={expanded ? "Close chat options" : "Open chat options"}
          aria-expanded={expanded}
          className='whatsapp-pulse gold-surface flex h-14 w-14 items-center justify-center rounded-full text-black transition-transform duration-300 hover:scale-105'
        >
          <motion.span
            key={expanded ? "close" : "open"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className='flex items-center justify-center'
          >
            {expanded ? (
              <X size={24} />
            ) : (
              <MessageSquare size={24} strokeWidth={1.8} />
            )}
          </motion.span>
        </button>
      </div>
    </div>
  );
}
