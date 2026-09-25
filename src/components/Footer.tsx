"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-zinc-950 border-t border-white/5 py-8 h-40">
      {/* Background container com grid */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      {/* Dinossauro Animado Fofinho (Cute T-Rex) */}
      <motion.div
        className="absolute bottom-6 left-0 z-0 text-emerald-500 opacity-60"
        animate={{ 
          x: ["-10vw", "110vw"]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "linear"
        }}
      >
        <svg viewBox="0 0 44 48" fill="currentColor" className="w-10 h-10 md:w-14 md:h-14">
          <g>
            {/* Cabeça grande (Proporção fofa) */}
            <rect x="20" y="4" width="16" height="12" rx="2" />
            <rect x="36" y="8" width="4" height="6" rx="1" />
            {/* Olhão fofo */}
            <rect x="26" y="8" width="4" height="4" rx="2" className="fill-zinc-950" />
            
            {/* Corpo gordinho */}
            <rect x="12" y="16" width="16" height="16" rx="4" />
            
            {/* Rabinho curto */}
            <rect x="6" y="22" width="6" height="6" rx="1" />
            <rect x="2" y="18" width="4" height="4" rx="1" />
            
            {/* Bracinho curto e gordinho */}
            <rect x="28" y="20" width="6" height="4" rx="2" />
            
            {/* Animação de Passos (Toggling Legs) */}
            <style>{`
              @keyframes dinoWalk1 { 0%, 49.9% { opacity: 1; } 50%, 100% { opacity: 0; } }
              @keyframes dinoWalk2 { 0%, 49.9% { opacity: 0; } 50%, 100% { opacity: 1; } }
              .leg-1 { animation: dinoWalk1 0.3s infinite; }
              .leg-2 { animation: dinoWalk2 0.3s infinite; }
            `}</style>

            {/* Frame 1 (Perna esquerda no chão, direita encolhida) */}
            <g className="leg-1">
              <rect x="14" y="32" width="4" height="8" rx="1" />
              <rect x="16" y="38" width="4" height="4" rx="1" />
              <rect x="22" y="32" width="4" height="4" rx="1" />
            </g>
            
            {/* Frame 2 (Perna direita no chão, esquerda encolhida) */}
            <g className="leg-2">
              <rect x="14" y="32" width="4" height="4" rx="1" />
              <rect x="22" y="32" width="4" height="8" rx="1" />
              <rect x="24" y="38" width="4" height="4" rx="1" />
            </g>
          </g>
        </svg>
      </motion.div>

      {/* Conteúdo Institucional em Destaque */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-zinc-500 text-xs md:text-sm space-y-2 h-full pb-8 px-4">
        <p className="font-medium text-zinc-300">Projeto de Extensão Universitária — CEFET-MG</p>
        <p>© {new Date().getFullYear()} CEFET-MG campus Varginha. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
