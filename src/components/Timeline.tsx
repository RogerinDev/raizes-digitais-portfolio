"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const timelineData = [
  {
    id: 1,
    etapa: "Ideação & PoC",
    titulo: "Prototipagem Ágil com n8n",
    resumo: "O nascimento do projeto e a validação rápida da transferência tecnológica de IA para a cafeicultura.",
    detalhes: [
      "Parceria firmada entre o CEFET-MG e a cooperativa Minasul para combater a assimetria tecnológica no campo.",
      "Construção da primeira Prova de Conceito (PoC) do assistente virtual agrícola.",
      "Utilização da plataforma n8n (low-code) para experimentar integrações iniciais e fluxos visuais rápidos."
    ]
  },
  {
    id: 2,
    etapa: "Pesquisa & Colaboração",
    titulo: "Análise de Gargalos e Estruturação",
    resumo: "Investigação de performance e adoção de metodologias híbridas de trabalho pela equipe.",
    detalhes: [
      "Pesquisas aprofundadas focadas em escalabilidade, custos de API e latência de respostas.",
      "Trabalho colaborativo presencial no Laboratório de Apoio à Pesquisa e Inovação em Sistemas de Informação (LAPIS).",
      "Sincronização remota do time de desenvolvimento utilizando escritórios virtuais gamificados (WorkAdventure)."
    ]
  },
  {
    id: 3,
    etapa: "Arquitetura Definitiva",
    titulo: "Migração para Python e LangChain",
    resumo: "Decisão estratégica de abandonar o n8n em prol de infraestrutura nativa e escalável.",
    detalhes: [
      "Sob orientação dos professores do projeto, a equipe migrou o core da aplicação para código puro (Python), garantindo total autonomia.",
      "Desenvolvimento de um backend robusto utilizando FastAPI e Uvicorn.",
      "Orquestração avançada do modelo de linguagem (Gemini) e gestão de histórico através do framework LangChain."
    ]
  },
  {
    id: 4,
    etapa: "Busca Híbrida & Privacidade",
    titulo: "RAG Institucional e BYOD",
    resumo: "Aprimoramento da recuperação de informações e isolamento de dados privados dos produtores.",
    detalhes: [
      "Implementação de banco de dados vetorial PostgreSQL via Supabase (extensão pgvector).",
      "Construção de um sistema de Busca Híbrida (RRF + Fulltext) para mitigar o risco de 'alucinações' da Inteligência Artificial.",
      "Separação de escopo: Base Global (manuais da Minasul) vs sistema BYOD (Traga Seus Próprios Dados) injetado na memória para laudos privados."
    ]
  },
  {
    id: 5,
    etapa: "Visão de Futuro",
    titulo: "Validação e Letramento Digital",
    resumo: "Apresentação da versão final e planejamento da capacitação social no campo.",
    detalhes: [
      "Apresentação formal e validação do chatbot de alto desempenho junto à diretoria e técnicos da Minasul.",
      "Alinhamento para execução de workshops presenciais projetados para capacitar pequenos/médios cafeicultores e técnicos cooperados.",
      "Democratização da IA através do letramento digital, transformando dados brutos em apoio real à tomada de decisão no agronegócio."
    ]
  }
];

export default function Timeline() {
  const [activeId, setActiveId] = useState<number | null>(3); // Arquitetura Definitiva aberta por padrão

  return (
    <div className="relative border-l border-zinc-800 ml-4 md:ml-8 pb-8">
      {timelineData.map((item) => {
        const isActive = activeId === item.id;
        
        return (
          <div key={item.id} className="relative pl-8 md:pl-12 mb-12 last:mb-0">
            {/* Círculo / Ponto da Timeline animado */}
            <motion.div 
              layout
              className={`absolute -left-[13px] top-1 h-6 w-6 rounded-full border-4 border-zinc-950 transition-colors duration-500 cursor-pointer ${
                isActive 
                  ? "bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.6)]" 
                  : "bg-zinc-700 hover:bg-emerald-500/50"
              }`}
              onClick={() => setActiveId(isActive ? null : item.id)}
            />

            {/* Card de Conteúdo */}
            <div 
              className={`group cursor-pointer rounded-2xl border border-white/5 p-6 transition-all duration-300 ${
                isActive ? "bg-zinc-900/80 border-emerald-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.3)]" : "bg-zinc-950 hover:bg-zinc-900/50 hover:border-white/10"
              }`}
              onClick={() => setActiveId(isActive ? null : item.id)}
            >
              <div className="space-y-1">
                <span className={`text-sm font-bold tracking-wide uppercase transition-colors ${isActive ? "text-emerald-500" : "text-emerald-700"}`}>
                  {item.etapa}
                </span>
                <h3 className="text-xl font-semibold text-zinc-200">
                  {item.titulo}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {item.resumo}
                </p>
              </div>

              {/* Área do Accordion Expandível (Detalhes Técnicos) */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 mt-4 border-t border-white/5">
                      <ul className="space-y-3">
                        {item.detalhes.map((detalhe, i) => (
                          <motion.li 
                            key={i} 
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 + (i * 0.1), duration: 0.3 }}
                            className="flex items-start gap-3 text-zinc-300"
                          >
                            <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                            <span className="text-sm md:text-base leading-relaxed">{detalhe}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        );
      })}
    </div>
  );
}
