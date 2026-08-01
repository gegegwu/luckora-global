"use client";

import { motion } from "framer-motion";

const stars = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  delay: (index % 7) * 0.35,
  size: 1 + (index % 3),
}));

export function StarField() {
  return (
    <div aria-hidden="true" className="star-field">
      {stars.map((star) => (
        <motion.span
          animate={{ opacity: [0.2, 0.92, 0.28], y: [0, -12, 0] }}
          key={star.id}
          style={{
            height: star.size,
            left: star.left,
            top: star.top,
            width: star.size,
          }}
          transition={{
            delay: star.delay,
            duration: 4.8 + (star.id % 5),
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}
