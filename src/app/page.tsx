import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import Timeline from "@/components/Timeline";
import AnimatedBackground from "@/components/AnimatedBackground";
import TechGrid from "@/components/TechGrid";
import TeamGrid from "@/components/TeamGrid";
import VideoPitch from "@/components/VideoPitch";
import TeamBackground from "@/components/TeamBackground";
import Footer from "@/components/Footer";

export default function Home() {
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

      {/* Video Pitch */}
      <VideoPitch />

      {/* Evolução (Linha do Tempo) */}
      <section id="evolucao" className="relative py-24 px-6 border-t border-zinc-900 bg-zinc-950 overflow-hidden">
        <AnimatedBackground />
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-16">
          <FadeUp>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold" style={{ textShadow: '0 2px 15px rgba(0,0,0,1), 0 0 5px rgba(0,0,0,1), 0 0 20px rgba(0,0,0,0.8)' }}>
                Evolução
              </h2>
              <p className="text-zinc-300 font-medium" style={{ textShadow: '0 2px 10px rgba(0,0,0,1), 0 0 3px rgba(0,0,0,1)' }}>
                Da validação rápida à arquitetura robusta e escalável.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <Timeline />
          </FadeUp>
        </div>
      </section>

      {/* Arquitetura e Tecnologia */}
      <section id="arquitetura" className="relative py-24 px-6 bg-zinc-950 overflow-hidden border-t border-zinc-900">
        {/* Divisor de Seção (Top Glow) */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        
        {/* Blueprint Grid (Malha Estrutural) */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="relative z-10 max-w-6xl mx-auto space-y-16">
          <FadeUp>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold" style={{ textShadow: '0 2px 15px rgba(0,0,0,1), 0 0 5px rgba(0,0,0,1), 0 0 20px rgba(0,0,0,0.8)' }}>
                Tecnologia
              </h2>
              <p className="text-zinc-300 font-medium" style={{ textShadow: '0 2px 10px rgba(0,0,0,1), 0 0 3px rgba(0,0,0,1)' }}>
                O motor de inteligência artificial por trás do assistente.
              </p>
            </div>
          </FadeUp>

          <TechGrid />
        </div>
      </section>

      {/* Nossa Equipe */}
      <section id="equipe" className="relative py-24 px-6 border-t border-zinc-900 bg-zinc-950 overflow-hidden">
        <TeamBackground />
        
        <div className="relative z-10 max-w-6xl mx-auto space-y-16">
          <FadeUp>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold" style={{ textShadow: '0 2px 15px rgba(0,0,0,1), 0 0 5px rgba(0,0,0,1), 0 0 20px rgba(0,0,0,0.8)' }}>
                Nossa Equipe
              </h2>
              <p className="text-zinc-300 font-medium" style={{ textShadow: '0 2px 10px rgba(0,0,0,1), 0 0 3px rgba(0,0,0,1)' }}>
                Pesquisadores e desenvolvedores dedicados à inovação agrícola.
              </p>
            </div>
          </FadeUp>

          <TeamGrid />
        </div>
      </section>

      <Footer />
    </div>
  );
}
