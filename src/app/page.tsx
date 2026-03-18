"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Clock, Users, ArrowRight, CheckCircle, Zap, Layout } from 'lucide-react';
import TimeTools from './otimizacao/TimeTools';
import EisenhowerMatrix from './otimizacao/EisenhowerMatrix';
import './otimizacao/otimizacao.css';

export default function Home() {
  return (
    <div className="otimizacao-container">
      {/* Notification Banner */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full bg-blue-600/20 backdrop-blur-md border-b border-white/10 py-3 px-6 flex items-center justify-center gap-3 text-sm font-medium sticky top-0 z-50"
      >
        <span className="bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">Novo</span>
        <p>Métodos de gestão 2026: Descubra como elevar a performance do seu time.</p>
        <button className="text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors">
          Saiba mais <ArrowRight size={14} />
        </button>
      </motion.div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
              A Arte da <span className="text-gradient">Eficiência</span> <br />
              sobre o Esforço
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
              Otimize cada segundo. Transforme a maneira como sua equipe produz com as ferramentas de alta performance do futuro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#ferramentas" className="cta-button">
                Começar agora otimizado
              </a>
              <button className="px-8 py-4 rounded-full border border-white/10 bg-white/5 font-semibold hover:bg-white/10 transition-all flex items-center gap-2">
                Ver demonstração
              </button>
            </div>
          </motion.div>

          {/* Hero Image Mockup/Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 w-full max-w-5xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group"
          >
            <img 
              src="/images/hero.png" 
              alt="Professional Modern Office" 
              className="w-full h-auto object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent"></div>
            
            {/* Floating Stats */}
            <div className="absolute top-10 left-10 glass-card p-4 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/20 p-2 rounded-lg"><Clock className="text-blue-500" /></div>
                <div>
                  <div className="text-2xl font-bold">+40%</div>
                  <div className="text-xs text-slate-400">Tempo recuperado</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Background Gradients */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Pilares da Produtividade</h2>
            <p className="text-slate-400">Domine os três fundamentos da gestão de tempo moderna.</p>
          </div>

          <div className="bento-grid">
            {/* Foco - Large */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card bento-item-large flex flex-col justify-end relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                 <img src="/images/features.png" alt="Focus visual" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10">
                <Zap className="text-blue-500 mb-4" size={32} />
                <h3 className="text-3xl font-bold mb-3">Foco Radical</h3>
                <p className="text-slate-400">Elimine distrações com algoritmos de Deep Work projetados para maximizar seu estado de flow.</p>
              </div>
            </motion.div>

            {/* Planejamento - Medium */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card bento-item-medium flex flex-col justify-center"
            >
              <Layout className="text-purple-500 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-3">Planejamento Ágil</h3>
              <p className="text-slate-400">Estruturação de tarefas com inteligência preditiva para evitar sobrecarga.</p>
            </motion.div>

            {/* Colaboração - Small */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card flex flex-col items-center text-center justify-center col-span-1"
            >
              <Users className="text-emerald-500 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Colaboração</h3>
              <p className="text-xs text-slate-400">Sincronia total entre equipes.</p>
            </motion.div>

             {/* Outro componente small */}
             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card flex flex-col items-center text-center justify-center col-span-1"
            >
              <CheckCircle className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Resultados</h3>
              <p className="text-xs text-slate-400">Métricas puras de sucesso.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Time Optimization Tools */}
      <TimeTools />

      {/* Eisenhower Matrix Section */}
      <EisenhowerMatrix />

      {/* Footer / CTA Final */}
       <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Pronto para recuperar seu tempo?</h2>
            <a href="#" className="cta-button text-lg">
                Iniciar Diagnóstico Gratuito
            </a>
            <div className="mt-8 pt-8 border-t border-white/5 text-slate-500 text-sm space-y-1">
                <p>Material desenvolvido no código sem fronteiras:</p>
                <p>Desenvolvimento web com IA.</p>
                <p>Instrutor: Eliakim Rocha</p>
                <p>Data: 18/03/2026</p>
            </div>
            <p className="mt-8 text-slate-600 text-xs text-center">
                &copy; 2026 TimeFlow Enterprise. Todos os direitos reservados.
            </p>
        </div>
      </section>
    </div>
  );
}
