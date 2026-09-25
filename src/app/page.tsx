import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import Timeline from "@/components/Timeline";

export default function Home() {
  const techCards = [
    { title: "Modelos de Linguagem", description: "Potencializado pelo Gemini 3.6 Flash para respostas rápidas, contextuais e precisas, ajustadas para o domínio agrícola." },
    { title: "Supabase Vector", description: "Banco de dados PostgreSQL equipado com pgvector para armazenamento semântico e alta performance de consulta." },
    { title: "Busca Híbrida RRF", description: "Combinação de busca semântica e full-text com Reciprocal Rank Fusion para extrair a melhor resposta." },
    { title: "LangChain", description: "Orquestração inteligente dos fluxos de RAG, gerenciamento de contexto, prompts e integração com LLMs." },
    { title: "RAG Institucional", description: "Base de conhecimento fixada em documentos e manuais oficiais de cafeicultura para evitar alucinações da IA." },
    { title: "Suporte a BYOD", description: "Permite que o próprio cafeicultor traga seus PDFs (Bring Your Own Document) para análise customizada local." }
  ];

  const teamMembers = [
    { name: "Prof. Bruno Monserrat Perillo", role: "Coordenador" },
    { name: "Prof. Eduardo Gomes Carvalho", role: "Coorientador" },
    { name: "Prof. Lazaro Eduardo da Silva", role: "Coorientador" },
    { name: "Rogério Otávio Filho", role: "Bolsista de Projeto de Extensão" },
    { name: "Antonio Prado Horta", role: "Bolsista de Projeto de Extensão" },
    { name: "Luiz Henrique Garcia", role: "Voluntário" }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      {/* Navbar Dinâmica e Expansível (Mac OS Style) */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 group">
        <div className="absolute -inset-x-32 -inset-y-8 z-0"></div>
        <div className="relative z-10 flex items-center justify-center bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.6)] h-14 px-1.5 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:px-4">
          <div className="flex items-center overflow-hidden transition-all duration-500 max-w-0 opacity-0 group-hover:max-w-[200px] group-hover:opacity-100 group-hover:mr-2">
            <div className="flex gap-1 whitespace-nowrap pl-2">
              <Link href="#resumo" className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-emerald-300 hover:bg-emerald-500/10 rounded-full transition-colors">Resumo</Link>
              <Link href="#evolucao" className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-emerald-300 hover:bg-emerald-500/10 rounded-full transition-colors">Evolução</Link>
            </div>
          </div>
          <Link href="#resumo" className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-zinc-800/80 hover:bg-zinc-700/80 transition-colors shadow-inner border border-zinc-700/50 z-20">
            <img src="/raizes-digitais-portfolio/logo.png" alt="Ícone Raízes Digitais" className="w-7 h-7 opacity-100 object-contain" />
          </Link>
          <div className="flex items-center overflow-hidden transition-all duration-500 max-w-0 opacity-0 group-hover:max-w-[200px] group-hover:opacity-100 group-hover:ml-2">
            <div className="flex gap-1 whitespace-nowrap pr-2">
              <Link href="#arquitetura" className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-emerald-300 hover:bg-emerald-500/10 rounded-full transition-colors">Arquitetura</Link>
              <Link href="#equipe" className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-emerald-300 hover:bg-emerald-500/10 rounded-full transition-colors">Equipe</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="resumo" 
        className="pt-32 pb-24 px-6 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/raizes-digitais-portfolio/hero-bg.png")' }}
      >
        <div className="absolute inset-0 bg-zinc-950/30" />
        
        <FadeUp delay={0.1}>
          <div className="max-w-6xl mx-auto text-center space-y-8 relative z-10">
            <div className="flex justify-center mb-8">
              <div className="relative w-32 h-32 md:w-40 md:h-40 animate-[bounce_4s_infinite] drop-shadow-[0_0_25px_rgba(16,185,129,0.5)]">
                <img src="/raizes-digitais-portfolio/logo.png" alt="Logo Raízes Digitais" className="w-full h-full object-contain" />
              </div>
            </div>

            <h1 
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-white"
              style={{ textShadow: '0 2px 15px rgba(0,0,0,1), 0 0 5px rgba(0,0,0,1), 0 0 20px rgba(0,0,0,0.8)' }}
            >
              Raízes <span className="text-emerald-400">Digitais</span>
            </h1>
            <p 
              className="text-lg md:text-xl text-zinc-50 max-w-2xl mx-auto leading-relaxed font-semibold"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,1), 0 0 3px rgba(0,0,0,1)' }}
            >
              Cultivando a Inovação com IA Generativa na Cafeicultura Sul-Mineira. 
              Unindo a tradição da cafeicultura com as fronteiras da inteligência artificial.
            </p>
            <div className="pt-8">
              <Link 
                href="#evolucao" 
                className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-500 px-8 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.5)] border border-emerald-400/50"
              >
                Conheça o Projeto
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Evolução (Linha do Tempo) */}
      <section id="evolucao" className="py-24 px-6 border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-4xl mx-auto space-y-16">
          <FadeUp>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">A Evolução</h2>
              <p className="text-zinc-400">Da validação rápida à arquitetura robusta e escalável.</p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <Timeline />
          </FadeUp>
        </div>
      </section>

      {/* Arquitetura e Tecnologia */}
      <section id="arquitetura" className="py-24 px-6 border-t border-zinc-900 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto space-y-16">
          <FadeUp>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">A Tecnologia</h2>
              <p className="text-zinc-400">O motor de inteligência artificial por trás do assistente.</p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCards.map((tech, index) => (
              <FadeUp key={index} delay={0.1 * (index + 1)}>
                <TechCard title={tech.title} description={tech.description} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section id="equipe" className="py-24 px-6 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto space-y-16">
          <FadeUp>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Nossa Equipe</h2>
              <p className="text-zinc-400">Pesquisadores e desenvolvedores dedicados à inovação agrícola.</p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <FadeUp key={index} delay={0.1 * (index + 1)}>
                <TeamMember name={member.name} role={member.role} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-900 bg-zinc-950 text-center text-sm text-zinc-500">
        <p>Projeto de Extensão Universitária — CEFET-MG</p>
        <p className="mt-2">© {new Date().getFullYear()} CEFET-MG campus Varginha. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

function TechCard({ title, description }: { title: string, description: string }) {
  return (
    <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/30 transition-colors h-full">
      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
        <div className="w-5 h-5 bg-emerald-400 rounded-sm" />
      </div>
      <h3 className="text-lg font-semibold text-zinc-100 mb-2">{title}</h3>
      <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
    </div>
  );
}

function TeamMember({ name, role }: { name: string, role: string }) {
  return (
    <div className="flex flex-col items-center p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800/50 hover:bg-zinc-900 transition-colors text-center h-full">
      <div className="w-24 h-24 rounded-full bg-zinc-800 mb-4 overflow-hidden flex items-center justify-center border-2 border-zinc-800">
        {/* Placeholder image icon */}
        <svg className="w-10 h-10 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
      <h4 className="font-medium text-zinc-200">{name}</h4>
      <span className="text-sm text-emerald-400 mt-1">{role}</span>
    </div>
  );
}
