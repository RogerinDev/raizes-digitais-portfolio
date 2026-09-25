"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function FadeUp({ children, delay = 0 }: { children: ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      // Melhoria de Design: Usar um cubic-bezier personalizado para um fade elástico mais premium (estilo Apple) em vez de um simples "easeOut"
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
