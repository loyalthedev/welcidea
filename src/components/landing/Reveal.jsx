import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

const VARIANTS = {
  up: {
    hidden: { opacity: 0, y: 34 },
    show: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -52 },
    show: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 52 },
    show: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, y: 18, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, y: 26, filter: "blur(10px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  reveal: {
    hidden: { opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" },
    show: { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" },
  },
};

export default function Reveal({
  children,
  delay = 0,
  variant = "up",
  y,
  className = "",
}) {
  const base = VARIANTS[variant] ?? VARIANTS.up;
  const motionVariants =
    y !== undefined && variant === "up"
      ? { hidden: { ...base.hidden, y }, show: base.show }
      : base;

  return (
    <motion.div
      className={className}
      variants={motionVariants}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
