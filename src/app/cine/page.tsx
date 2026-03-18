"use client";

import { motion } from "framer-motion";
import { PlayCircle, Calendar, Users, Award, BookOpen } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import { CactosDivider, SunBackground, FooterSilhouette } from "@/components/GraphicElements";

export default function CinePage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center overflow-hidden">
      <SunBackground />

      {/* Hero Section */}
      <section className="w-full min-h-[90vh] flex flex-col items-center justify-center px-4 pt-20 pb-10 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          {/* Logo Placeholder (similar to the image text with a bird) */}
          <div className="flex items-center justify-center gap-2">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" className="text-foreground -mt-6">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              {/* Replace with actual Patativa bird SVG if needed */}
              <path d="M22 12c0-5.52-4.48-10-10-10C6.48 2 2 6.48 2 12s4.48 10 10 10c5.52 0 10-4.48 10-10zm-11 5h-2v-2h2v2zm0-4h-2V7h2v6z" fill="transparent"/>
            </svg>
            <div className="flex flex-col items-start leading-none font-heading font-extrabold text-amarelo text-5xl md:text-7xl uppercase tracking-tighter">
              <span>Cine</span>
              <span className="text-foreground">Patativa</span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold max-w-4xl tracking-tight leading-tight mt-6"
        >
          A Magia do Cinema <br className="hidden md:block" /> Chega às Escolas em Setembro.
        </motion.h1>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mt-12 w-full max-w-3xl">
          <CountdownTimer />
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mt-16">
          <button className="group relative px-8 py-4 bg-foreground text-background font-bold text-lg rounded-full flex items-center justify-center gap-3 overflow-hidden transition-all hover-glow">
            <span className="relative z-10 flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-amarelo group-hover:scale-110 transition-transform" />
              Quero participar
            </span>
            <div className="absolute inset-0 bg-neutral-800 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
          </button>
        </motion.div>
      </section>

      <CactosDivider />

      {/* Manifesto Section */}
      <section className="w-full py-20 px-6 relative z-10 bg-background/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-amarelo font-heading text-xl tracking-widest uppercase mb-4">O Manifesto</h2>
            <p className="text-xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-foreground">
              "O Cine Patativa é um projeto itinerante e colaborativo focado no protagonismo estudantil. Transformamos salas de aula em centros culturais através da sétima arte."
            </p>
          </motion.div>
        </div>
      </section>

      {/* O que acontece? Section */}
      <section className="w-full py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="text-4xl md:text-6xl font-heading font-extrabold mb-20 text-center uppercase tracking-tight"
          >
            O que acontece?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Mostra de Curtas", desc: "Filmes produzidos por alunos (Drama à Cultura Popular).", icon: PlayCircle },
              { title: "Espaço de Aprendizado", desc: "Acesso privilegiado a obras consolidadas do cinema nacional.", icon: BookOpen },
              { title: "Premiação", desc: "Valorização do talento individual e coletivo dos estudantes.", icon: Award },
              { title: "Certificação", desc: "Upgrade no currículo acadêmico e profissional dos participantes.", icon: Users },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: idx * 0.15, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 120
                }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative p-8 rounded-3xl bg-neutral-50 border border-neutral-200 hover:border-amarelo transition-all duration-300 hover:shadow-[0_20px_40px_rgba(255,184,0,0.2)] cursor-pointer overflow-hidden z-10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amarelo/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                <div className="w-16 h-16 bg-foreground rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amarelo group-hover:-rotate-6 transition-all duration-300 shadow-md">
                  <item.icon className="w-8 h-8 text-background transition-transform group-hover:scale-110" />
                </div>
                <h3 className="text-2xl font-extrabold font-heading mb-3 text-foreground group-hover:text-amarelo transition-colors">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Silhouette */}
      <footer className="w-full bg-background relative z-10 overflow-hidden flex flex-col items-center justify-end">
        <FooterSilhouette />
        <div className="w-full bg-foreground py-10 flex flex-col items-center text-center -mt-1 relative z-30">
          <div className="max-w-3xl px-6 space-y-6">
            <h2 className="text-4xl text-amarelo font-heading font-extrabold tracking-widest uppercase">Cine Patativa 2026</h2>
            <p className="text-neutral-400 text-lg">
              Acreditamos no poder do cinema para transformar a educação.
            </p>
            <div className="h-px w-full max-w-md mx-auto bg-neutral-800 my-8" />
            <div className="text-neutral-500 text-sm md:text-base space-y-2 font-medium">
              <p>Material desenvolvido no código sem fronteiras:</p>
              <p>Desenvolvimento web com IA.</p>
              <p>Instrutor: Eliakim Rocha</p>
              <p>Data: 18/03/2026</p>
            </div>
            <div className="text-neutral-600 text-xs mt-12 pt-8 border-t border-neutral-800/50">
              &copy; 2026 Cine Patativa. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
