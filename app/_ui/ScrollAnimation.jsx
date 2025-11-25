"use client";

import { motion } from "framer-motion";

const ScrollAnimation = ({ 
  children, 
  className = "", 
  variants,
  delay = 0,
  duration = 0.5,
  viewport = { once: true, amount: 0.2 },
  ...props
}) => {
  const defaultVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: duration, 
        ease: "easeOut",
        delay: delay
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants || defaultVariants}
      viewport={viewport}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
