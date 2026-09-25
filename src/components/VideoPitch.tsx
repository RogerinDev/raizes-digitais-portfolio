"use client";

import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function VideoPitch() {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Cabeçalho */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100">O Projeto em Ação</h2>
          <p className="text-zinc-400">
            Veja como a Inteligência Artificial transforma a gestão na cafeicultura
          </p>
        </div>

        {/* Contêiner Animado do Vídeo */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="aspect-[9/16] max-w-sm mx-auto rounded-2xl border border-white/10 bg-zinc-900/40 p-2 shadow-[0_0_40px_rgba(34,197,94,0.15)] backdrop-blur-sm"
        >
          <iframe
            className="w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/m8c9WQbWM_w"
            title="Video Pitch Raízes Digitais"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>

      </div>
    </section>
  );
}
