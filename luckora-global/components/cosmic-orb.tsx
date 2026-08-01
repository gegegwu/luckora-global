"use client";

import { motion } from "framer-motion";

export function CosmicOrb({ label, signal }: { label: string; signal: string }) {
  return (
    <motion.div
      animate={{ scale: [1, 1.025, 1], y: [0, -8, 0] }}
      className="orb-shell"
      transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
    >
      <div className="orb-glow" />
      <div className="energy-ring ring-a" />
      <div className="energy-ring ring-b" />
      <div className="orb">
        <div className="planet-core" />
        <div className="orb-nebula" />
        <div className="orb-grid" />
        <div className="golden-flow flow-a" />
        <div className="golden-flow flow-b" />
        <div className="constellation">
          <span className="node node-a" />
          <span className="node node-b" />
          <span className="node node-c" />
          <span className="node node-d" />
        </div>
        <div className="inner-stardust" />
        <div className="human-silhouette" />
        <div className="data-stream stream-a" />
        <div className="data-stream stream-b" />
        <div className="data-stream stream-c" />
      </div>
      <motion.div
        animate={{ opacity: [0.64, 1, 0.64] }}
        className="orb-caption"
        transition={{ duration: 2.8, repeat: Infinity }}
      >
        <span>{signal}</span>
        <p>{label}</p>
      </motion.div>
    </motion.div>
  );
}
