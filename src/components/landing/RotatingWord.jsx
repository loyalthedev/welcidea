import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function RotatingWord({
  words,
  interval = 2800,
  className = "",
}) {
  const [index, setIndex] = useState(0);
  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      interval,
    );
    return () => clearInterval(timer);
  }, [interval, words.length]);

  return (
    <span className='relative inline-block whitespace-nowrap align-baseline'>
      <span className='invisible' aria-hidden='true'>
        {longest}
      </span>
      <AnimatePresence mode='wait' initial={false}>
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: "0.5em", filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: "-0.45em", filter: "blur(8px)" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className={`absolute inset-0 ${className}`}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
