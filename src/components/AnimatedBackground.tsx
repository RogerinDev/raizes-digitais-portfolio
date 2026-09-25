"use client";

import { motion } from "framer-motion";

function CircuitPattern() {
  return (
    <>
      {/* BLOCO 1 - TOPO DIREITA */}
      <svg className="absolute top-0 right-0 w-96 h-[40rem] text-emerald-500/20" viewBox="0 0 384 640" fill="none">
        <motion.path d="M 192 0 L 192 150 L 300 258 L 300 500" stroke="currentColor" strokeWidth="1.5" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2.5, ease: "easeInOut" }} />
        <motion.circle cx="300" cy="500" r="4" fill="currentColor" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 2.3, duration: 0.5 }} />
        
        <motion.path d="M 250 0 L 250 80 L 350 180 L 350 400" stroke="currentColor" strokeWidth="1.5" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }} />
        <motion.circle cx="350" cy="400" r="4" fill="currentColor" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 2.4, duration: 0.5 }} />

        <motion.path d="M 384 100 L 320 100 L 260 160 L 260 300" stroke="currentColor" strokeWidth="1.5" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2.2, ease: "easeInOut", delay: 0.8 }} />
        <motion.circle cx="260" cy="300" r="4" fill="currentColor" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 2.8, duration: 0.5 }} />
      </svg>

      {/* BLOCO 2 - MEIO DIREITA */}
      <svg className="absolute top-1/3 right-[10%] w-80 h-80 text-emerald-500/20" viewBox="0 0 320 320" fill="none">
        <motion.path d="M 0 320 L 150 170 L 150 50 L 200 0" stroke="currentColor" strokeWidth="1.5" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2.5, ease: "easeInOut", delay: 1 }} />
        <motion.circle cx="200" cy="0" r="4" fill="currentColor" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 3.3, duration: 0.5 }} />

        <motion.path d="M 50 320 L 200 170 L 200 100 L 250 50" stroke="currentColor" strokeWidth="1.5" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2.2, ease: "easeInOut", delay: 1.2 }} />
        <motion.circle cx="250" cy="50" r="4" fill="currentColor" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 3.2, duration: 0.5 }} />
      </svg>

      {/* BLOCO 3 - BASE DIREITA */}
      <svg className="absolute bottom-0 right-1/4 w-64 h-64 text-emerald-500/25" viewBox="0 0 256 256" fill="none">
        <motion.path d="M 256 256 L 256 150 L 150 44 L 50 44" stroke="currentColor" strokeWidth="1.5" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, ease: "easeInOut", delay: 1.5 }} />
        <motion.circle cx="50" cy="44" r="4" fill="currentColor" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 3.3, duration: 0.5 }} />
      </svg>

      {/* BLOCO 4 - TOPO ESQUERDA */}
      <svg className="absolute top-20 left-0 w-64 h-64 text-emerald-500/20" viewBox="0 0 256 256" fill="none">
        <motion.path d="M 0 50 L 100 50 L 150 100 L 150 200" stroke="currentColor" strokeWidth="1.5" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }} />
        <motion.circle cx="150" cy="200" r="4" fill="currentColor" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 2.1, duration: 0.5 }} />
      </svg>

      {/* BLOCO 5 - MEIO ESQUERDA */}
      <svg className="absolute top-1/2 left-0 w-48 h-80 text-emerald-500/20" viewBox="0 0 192 320" fill="none">
        <motion.path d="M 0 100 L 80 100 L 130 150 L 130 250" stroke="currentColor" strokeWidth="1.5" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2.5, ease: "easeInOut", delay: 1.2 }} />
        <motion.circle cx="130" cy="250" r="4" fill="currentColor" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 3.5, duration: 0.5 }} />

        <motion.path d="M 0 150 L 40 150 L 90 200 L 90 300" stroke="currentColor" strokeWidth="1.5" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2.2, ease: "easeInOut", delay: 1.5 }} />
        <motion.circle cx="90" cy="300" r="3" fill="currentColor" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 3.5, duration: 0.5 }} />
      </svg>

      {/* BLOCO 6 - BASE ESQUERDA */}
      <svg className="absolute bottom-10 left-[10%] w-64 h-64 text-emerald-500/25" viewBox="0 0 256 256" fill="none">
        <motion.path d="M 0 256 L 50 206 L 150 206 L 200 156" stroke="currentColor" strokeWidth="1.5" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, ease: "easeInOut", delay: 1.8 }} />
        <motion.circle cx="200" cy="156" r="4" fill="currentColor" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 3.6, duration: 0.5 }} />
      </svg>
    </>
  );
}

export default function AnimatedBackground() {
  return (
    <>
      {/* Dot Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03] pointer-events-none" />

      {/* Ambient Glow Animado (Esferas Desfocadas) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-[-10%] w-96 h-96 bg-green-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -40, 30, 0], y: [0, 50, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-[-10%] w-[30rem] h-[30rem] bg-emerald-700/10 rounded-full blur-[120px]"
        />
      </div>

      {/* Trilhas de Circuito Animadas (Multiplicadas 3x com CSS Transforms) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <CircuitPattern />
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rotate-180 scale-105 opacity-60">
        <CircuitPattern />
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none -scale-x-100 scale-y-110 opacity-50 top-32">
        <CircuitPattern />
      </div>
    </>
  );
}
