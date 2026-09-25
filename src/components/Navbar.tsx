"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed bottom-6 md:bottom-auto top-auto md:top-6 left-1/2 -translate-x-1/2 z-50 group">
      <div className="absolute -inset-x-32 -inset-y-8 z-0" onClick={() => setIsOpen(false)}></div>
      
      {/* Container Principal */}
      <div 
        className={`relative z-10 flex items-center justify-center bg-zinc-900/80 md:bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.6)] h-12 md:h-14 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'px-2' : 'px-1.5'} md:px-1.5 md:group-hover:px-4`}
      >
        
        {/* Lado Esquerdo */}
        <div 
          className={`flex items-center overflow-hidden transition-all duration-500 ${isOpen ? 'max-w-[200px] opacity-100 mr-1' : 'max-w-0 opacity-0 mr-0'} md:max-w-0 md:opacity-0 md:group-hover:max-w-[200px] md:group-hover:opacity-100 md:group-hover:mr-2`}
        >
          <div className="flex gap-0.5 md:gap-1 whitespace-nowrap pl-1 md:pl-2">
            <Link href="#resumo" onClick={() => setIsOpen(false)} className="px-2 md:px-4 py-1.5 md:py-2 text-[10px] md:text-sm font-medium text-zinc-300 hover:text-emerald-300 hover:bg-emerald-500/10 rounded-full transition-colors">Resumo</Link>
            <Link href="#evolucao" onClick={() => setIsOpen(false)} className="px-2 md:px-4 py-1.5 md:py-2 text-[10px] md:text-sm font-medium text-zinc-300 hover:text-emerald-300 hover:bg-emerald-500/10 rounded-full transition-colors">Evolução</Link>
          </div>
        </div>
        
        {/* Logo (Botão Central no Mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex-shrink-0 flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-full bg-zinc-800/80 hover:bg-zinc-700/80 transition-colors shadow-inner border border-zinc-700/50 z-20 outline-none focus:ring-2 focus:ring-emerald-500/50 cursor-pointer"
          aria-label="Toggle Menu"
        >
          <img src="/raizes-digitais-portfolio/logo.png" alt="Ícone Raízes Digitais" className="w-5 h-5 md:w-7 md:h-7 opacity-100 object-contain pointer-events-none" />
        </button>
        
        {/* Lado Direito */}
        <div 
          className={`flex items-center overflow-hidden transition-all duration-500 ${isOpen ? 'max-w-[200px] opacity-100 ml-1' : 'max-w-0 opacity-0 ml-0'} md:max-w-0 md:opacity-0 md:group-hover:max-w-[200px] md:group-hover:opacity-100 md:group-hover:ml-2`}
        >
          <div className="flex gap-0.5 md:gap-1 whitespace-nowrap pr-1 md:pr-2">
            <Link href="#arquitetura" onClick={() => setIsOpen(false)} className="px-2 md:px-4 py-1.5 md:py-2 text-[10px] md:text-sm font-medium text-zinc-300 hover:text-emerald-300 hover:bg-emerald-500/10 rounded-full transition-colors">Tecnologia</Link>
            <Link href="#equipe" onClick={() => setIsOpen(false)} className="px-2 md:px-4 py-1.5 md:py-2 text-[10px] md:text-sm font-medium text-zinc-300 hover:text-emerald-300 hover:bg-emerald-500/10 rounded-full transition-colors">Equipe</Link>
          </div>
        </div>

      </div>
    </nav>
  );
}
