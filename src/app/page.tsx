import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-emerald-500/30">
      {/* Navbar Moderna (Floating Pill / Glassmorphism) */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-1 md:gap-2 px-2 py-2 bg-zinc-900/40 backdrop-blur-lg border border-white/5 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <Link href="#resumo" className="flex items-center justify-center w-9 h-9 rounded-full bg-zinc-800/30 ml-1 hover:bg-zinc-700/50 transition-colors">
             <img src="/raizes-digitais-portfolio/logo.png" alt="Ícone Raízes Digitais" className="w-5 h-5 opacity-90 object-contain" />
          </Link>
          <div className="w-[1px] h-5 bg-zinc-800 mx-1" />
          <Link href="#resumo" className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-emerald-300 hover:bg-emerald-500/10 rounded-full transition-all duration-300 ease-out">Resumo</Link>
          <Link href="#evolucao" className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-emerald-300 hover:bg-emerald-500/10 rounded-full transition-all duration-300 ease-out">Evolução</Link>
          <Link href="#arquitetura" className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-emerald-300 hover:bg-emerald-500/10 rounded-full transition-all duration-300 ease-out">Arquitetura</Link>
          <Link href="#equipe" className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-emerald-300 hover:bg-emerald-500/10 rounded-full transition-all duration-300 ease-out">Equipe</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="resumo" className="pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-6xl mx-auto text-center space-y-8 relative z-10">
          {/* Logo Flutuante */}
          <div className="flex justify-center mb-8">
            <div className="relative w-32 h-32 md:w-40 md:h-40 animate-[bounce_4s_infinite] drop-shadow-[0_0_25px_rgba(16,185,129,0.2)]">
              <img src="/raizes-digitais-portfolio/logo.png" alt="Logo Raízes Digitais" className="w-full h-full object-contain" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-100">
            Raízes <span className="text-emerald-400">Digitais</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Cultivando a Inovação com IA Generativa na Cafeicultura Sul-Mineira. 
            Unindo a tradição da cafeicultura com as fronteiras da inteligência artificial.
          </p>
          <div className="pt-8">
            <Link 
              href="#evolucao" 
              className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-500 px-8 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              Conheça o Projeto
            </Link>
          </div>
        </div>
      </section>

      {/* Evolução (Linha do Tempo) */}
      <section id="evolucao" className="py-24 px-6 border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">A Evolução</h2>
            <p className="text-zinc-400">Da validação rápida à arquitetura robusta e escalável.</p>
          </div>

          <div className="relative border-l border-zinc-800 ml-4 md:ml-8 space-y-12 pb-8">
            {/* Fase 1 */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-3 top-1 h-6 w-6 rounded-full border-4 border-zinc-950 bg-zinc-700" />
              <div className="space-y-2">
                <span className="text-sm font-mono text-zinc-500">Fase 1</span>
                <h3 className="text-xl font-semibold text-zinc-200">Protótipo em n8n</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Validação rápida de ideias com fluxos visuais. Uma abordagem low-code 
                  para experimentar os primeiros cenários de integração de IA para o produtor rural.
                </p>
              </div>
            </div>

            {/* Fase 2 */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-3 top-1 h-6 w-6 rounded-full border-4 border-zinc-950 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
              <div className="space-y-2">
                <span className="text-sm font-mono text-emerald-500">Fase 2</span>
                <h3 className="text-xl font-semibold text-zinc-200">Arquitetura Definitiva (Python)</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Desenvolvimento completo com Python, LangChain e FastAPI. Maior controle de 
                  concorrência, robustez aprimorada e uso de um banco de dados vetorizado de alta performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Arquitetura e Tecnologia */}
      <section id="arquitetura" className="py-24 px-6 border-t border-zinc-900 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">A Tecnologia</h2>
            <p className="text-zinc-400">O motor de inteligência artificial por trás do assistente.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TechCard 
              title="Modelos de Linguagem" 
              description="Potencializado pelo Gemini 3.6 Flash para respostas rápidas, contextuais e precisas, ajustadas para o domínio agrícola."
            />
            <TechCard 
              title="Supabase Vector" 
              description="Banco de dados PostgreSQL equipado com pgvector para armazenamento semântico e alta performance de consulta."
            />
            <TechCard 
              title="Busca Híbrida RRF" 
              description="Combinação de busca semântica e full-text com Reciprocal Rank Fusion para extrair a melhor resposta."
            />
            <TechCard 
              title="LangChain" 
              description="Orquestração inteligente dos fluxos de RAG, gerenciamento de contexto, prompts e integração com LLMs."
            />
            <TechCard 
              title="RAG Institucional" 
              description="Base de conhecimento fixada em documentos e manuais oficiais de cafeicultura para evitar alucinações da IA."
            />
            <TechCard 
              title="Suporte a BYOD" 
              description="Permite que o próprio cafeicultor traga seus PDFs (Bring Your Own Document) para análise customizada local."
            />
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section id="equipe" className="py-24 px-6 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Nossa Equipe</h2>
            <p className="text-zinc-400">Pesquisadores e desenvolvedores dedicados à inovação agrícola.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember name="Prof. Bruno Monserrat Perillo" role="Coordenador" />
            <TeamMember name="Prof. Eduardo Gomes Carvalho" role="Coorientador" />
            <TeamMember name="Prof. Lazaro Eduardo da Silva" role="Coorientador" />
            <TeamMember name="Rogério Otávio Filho" role="Bolsista de Projeto de Extensão" />
            <TeamMember name="Antonio Prado Horta" role="Bolsista de Projeto de Extensão" />
            <TeamMember name="Luiz Henrique Garcia" role="Voluntário" />
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
    <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/30 transition-colors">
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
    <div className="flex flex-col items-center p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800/50 hover:bg-zinc-900 transition-colors text-center">
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
