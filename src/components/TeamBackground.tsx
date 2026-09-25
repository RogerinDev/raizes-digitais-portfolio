"use client";

import { motion } from "framer-motion";

export default function TeamBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Fade de Encerramento (Vignette) */}
      <div className="absolute bottom-0 inset-x-0 h-64 z-10 bg-gradient-to-t from-black via-zinc-950/80 to-transparent" />

      {/* Esfera 1 (Canto Inferior Esquerdo) */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-green-500/20 blur-[100px] rounded-full"
        animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Esfera 2 (Canto Superior Direito) */}
      <motion.div
        className="absolute top-0 -right-20 w-[400px] h-[400px] bg-emerald-500/20 blur-[100px] rounded-full"
        animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
