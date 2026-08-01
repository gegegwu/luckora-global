"use client";

import { motion } from "framer-motion";

export function ReservedPage({
  eyebrow,
  title,
  body,
  primary,
}: {
  eyebrow: string;
  title: string;
  body: string;
  primary: string;
}) {
  return (
    <section className="test-entry">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="test-card"
        initial={false}
        transition={{ duration: 0.7 }}
      >
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{body}</p>

        <div className="test-status">Reserved for the next phase</div>

        <div className="test-list">
          <span>AI test flow</span>
          <span>Personal report system</span>
          <span>Future user profile</span>
        </div>

        <motion.a
          className="primary-action"
          href="/"
          whileHover={{ scale: 1.025 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>{primary}</span>
        </motion.a>
      </motion.div>
    </section>
  );
}
