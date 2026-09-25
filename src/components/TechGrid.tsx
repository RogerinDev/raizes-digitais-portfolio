"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Database, Network, Workflow, Library, FileText } from "lucide-react";

const techCards = [
  { 
    icon: BrainCircuit, 
    title: "Modelos de Linguagem", 
    description: "Potencializado pelo Gemini 3.6 Flash para respostas rápidas, contextuais e precisas, ajustadas para o domínio agrícola." 
  },
  { 
    icon: Database, 
    title: "Supabase Vector", 
    description: "Banco de dados PostgreSQL equipado com pgvector para armazenamento semântico e alta performance de consulta." 
  },
  { 
    icon: Network, 
    title: "Busca Híbrida RRF", 
    description: "Combinação de busca semântica e full-text com Reciprocal Rank Fusion para extrair a melhor resposta." 
  },
  { 
    icon: Workflow, 
    title: "LangChain", 
    description: "Orquestração inteligente dos fluxos de RAG, gerenciamento de contexto, prompts e integração com LLMs." 
  },
  { 
    icon: Library, 
    title: "RAG Institucional", 
    description: "Base de conhecimento fixada em documentos e manuais oficiais de cafeicultura para evitar alucinações da IA." 
  },
  { 
    icon: FileText, 
    title: "Suporte a BYOD", 
    description: "Permite que o próprio cafeicultor traga seus PDFs (Bring Your Own Document) para análise customizada local." 
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export default function TechGrid() {
  return (
    <motion.div 
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {techCards.map((tech, index) => {
        const Icon = tech.icon;
        return (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="group flex flex-col p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-900/60 hover:-translate-y-1 hover:border-emerald-500/50 transition-all duration-300 ease-out h-full"
          >
            {/* Ícone Semântico */}
            <div className="w-12 h-12 rounded-xl bg-zinc-800/50 group-hover:bg-emerald-500/10 border border-white/5 group-hover:border-emerald-500/20 flex items-center justify-center mb-5 transition-colors duration-300 shadow-inner">
              <Icon className="w-6 h-6 text-emerald-500 opacity-80 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
            </div>
            
            {/* Textos */}
            <h3 className="text-lg font-semibold text-zinc-100 mb-2">{tech.title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">{tech.description}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
