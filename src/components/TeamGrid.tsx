"use client";

import { motion, type Variants, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { MouseEvent } from "react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17a5.2 5.2 0 0 0-1.4-3.6 5.3 5.3 0 0 0-.1-3.5s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.6 2.8 5.5 3.1 5.5 3.1a5.3 5.3 0 0 0-.1 3.5 5.2 5.2 0 0 0-1.4 3.6c0 5.7 3.3 6.7 6.5 7.17A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const teamMembers = [
  { 
    name: "Prof. Bruno Monserrat Perillo", 
    role: "Coordenador",
    image: "/raizes-digitais-portfolio/team/bruno.jpg",
    github: "#",
    linkedin: "#"
  },
  { 
    name: "Prof. Eduardo Gomes Carvalho", 
    role: "Coorientador",
    image: "/raizes-digitais-portfolio/team/eduardo.jpg",
    github: "#",
    linkedin: "#"
  },
  { 
    name: "Prof. Lazaro Eduardo da Silva", 
    role: "Coorientador",
    image: "/raizes-digitais-portfolio/team/lazaro.jpg",
    github: "#",
    linkedin: "#"
  },
  { 
    name: "Rogerio Otávio Filho", 
    role: "Bolsista de Projeto de Extensão",
    image: "/raizes-digitais-portfolio/team/rogerio.jpg",
    github: "https://github.com/RogerinDev",
    linkedin: "https://www.linkedin.com/in/rogerio-otávio-filho-2319472b8"
  },
  { 
    name: "Antonio Prado Horta", 
    role: "Bolsista de Projeto de Extensão",
    image: "/raizes-digitais-portfolio/team/antonio.jpg",
    github: "#",
    linkedin: "#"
  },
  { 
    name: "Luiz Henrique Garcia", 
    role: "Voluntário",
    image: "/raizes-digitais-portfolio/team/luiz.jpg",
    github: "#",
    linkedin: "#"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

function TeamCard({ member }: { member: typeof teamMembers[0] }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col items-center px-6 pt-10 pb-16 bg-zinc-900/40 rounded-2xl border border-white/5 overflow-hidden transition-all duration-500 h-full"
    >
      {/* Efeito Spotlight Rastreador (Mouse Tracking) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(16, 185, 129, 0.1),
              transparent 80%
            )
          `,
        }}
      />

      {/* Revelação Fotográfica */}
      <div className="relative w-32 h-32 rounded-full mb-6 overflow-hidden border-2 border-zinc-800 group-hover:border-emerald-500/50 transition-colors duration-500 bg-zinc-800 z-10 flex items-center justify-center shrink-0">
        {member.image ? (
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-out"
          />
        ) : (
          <svg className="w-12 h-12 text-zinc-600 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:text-emerald-500 group-hover:scale-105 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        )}
      </div>

      {/* Informações */}
      <h4 className="font-semibold text-xl text-zinc-100 text-center z-10">{member.name}</h4>
      <span className="text-sm font-medium text-emerald-400 mt-2 text-center z-10">{member.role}</span>

      {/* Redes Sociais (Slide Up) */}
      <div className="flex gap-4 mt-6 absolute bottom-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-10">
        <a href={member.github} className="p-2 rounded-full bg-zinc-800/80 hover:bg-emerald-500 hover:text-zinc-950 text-zinc-400 transition-colors">
          <GithubIcon className="w-5 h-5" />
        </a>
        <a href={member.linkedin} className="p-2 rounded-full bg-zinc-800/80 hover:bg-emerald-500 hover:text-zinc-950 text-zinc-400 transition-colors">
          <LinkedinIcon className="w-5 h-5" />
        </a>
      </div>
    </motion.div>
  );
}

export default function TeamGrid() {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {teamMembers.map((member, index) => (
        <TeamCard key={index} member={member} />
      ))}
    </motion.div>
  );
}
