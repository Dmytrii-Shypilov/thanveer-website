"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const animations = {
  up: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  right: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  left: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  opacity: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  bubble: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  },
};

const MotionElement = {
  div: motion.div,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  li: motion.li
};

type TransitionProps = {
  as: "h1" | "h2" | "h3" | "div" | "p" | 'li';
  animate: "up" | "left" | "right" | "opacity" | 'bubble' | undefined;
  children: React.ReactNode;
  className?: string;
  duration?: number;
};

const Transition: React.FC<TransitionProps> = ({
  as,
  animate,
  children,
  className,
  duration = 0.6,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const MotionComponent = MotionElement[as];

  return (
    <MotionComponent
      ref={ref}
      variants={animate ? animations[animate] : animations["up"]}
      transition={{ duration }}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </MotionComponent>
  );
};

export default Transition;
