"use client";

import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Calculator, TrendingDown } from 'lucide-react';

export default function TimeTools() {
  // Pomodoro State
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(25 * 60);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Lost Time Calculator State
  const [meetings, setMeetings] = useState(10);
  const [emails, setEmails] = useState(5);
  const lostTime = meetings * 0.5 + emails * 0.2; // Oversimplified logic

  return (
    <div id="ferramentas" className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto px-6 py-24">
      {/* Pomodoro Timer */}
      <div className="glass-card flex flex-col items-center justify-center text-center p-12 relative overflow-hidden">
        <div className="absolute top-4 left-4 text-xs font-bold text-blue-500 uppercase tracking-widest">Técnica Pomodoro</div>
        <div className="text-8xl font-black mb-8 font-montserrat tracking-tighter tabular-nums">
          {formatTime(timeLeft)}
        </div>
        <div className="flex gap-4">
          <button 
            onClick={toggleTimer}
            className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20"
          >
            {isActive ? <Pause fill="white" /> : <Play fill="white" />}
          </button>
          <button 
            onClick={resetTimer}
            className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
          >
            <RotateCcw size={20} />
          </button>
        </div>
        <p className="mt-8 text-sm text-slate-400 max-w-xs">
          Trabalhe em blocos de foco total. Recupere sua atenção profunda.
        </p>
      </div>

      {/* Lost Time Calculator */}
      <div className="glass-card p-12 flex flex-col justify-between">
        <div className="flex items-center gap-3 mb-8">
          <Calculator className="text-purple-500" />
          <h3 className="text-2xl font-bold">Calculadora de Potencial</h3>
        </div>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm text-slate-400 mb-2">Reuniões semanais improdutivas</label>
            <input 
              type="range" min="0" max="40" value={meetings} 
              onChange={(e) => setMeetings(parseInt(e.target.value))}
              className="w-full accent-blue-500"
            />
            <div className="text-right text-sm font-bold mt-1">{meetings} reuniões</div>
          </div>
          
          <div>
            <label className="block text-sm text-slate-400 mb-2">Horas gastas em e-mails triviais</label>
            <input 
              type="range" min="0" max="20" value={emails} 
              onChange={(e) => setEmails(parseInt(e.target.value))}
              className="w-full accent-purple-500"
            />
            <div className="text-right text-sm font-bold mt-1">{emails} horas</div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-6">
          <TrendingDown size={40} className="text-emerald-500" />
          <div>
            <div className="text-slate-400 text-sm">Tempo desperdiçado por semana</div>
            <div className="text-4xl font-black text-emerald-500">{lostTime.toFixed(1)}h</div>
          </div>
        </div>
      </div>
    </div>
  );
}
