"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, AlertCircle, Clock, Users, XCircle } from 'lucide-react';

interface Task {
  id: string;
  text: string;
}

interface QuadrantState {
  tasks: Task[];
  inputValue: string;
}

const quadrantConfig = [
  {
    id: 'urgent-important',
    title: 'Urgente & Importante',
    subtitle: 'Faça Agora',
    color: 'border-red-500',
    headerColor: 'text-red-500',
    icon: <AlertCircle className="text-red-500" size={20} />,
    placeholder: 'Ex: Entregar relatório final hoje...'
  },
  {
    id: 'not-urgent-important',
    title: 'Não Urgente & Importante',
    subtitle: 'Agende',
    color: 'border-blue-500',
    headerColor: 'text-blue-500',
    icon: <Clock className="text-blue-500" size={20} />,
    placeholder: 'Ex: Planejar metas do trimestre...'
  },
  {
    id: 'urgent-not-important',
    title: 'Urgente & Não Importante',
    subtitle: 'Delegue',
    color: 'border-yellow-500',
    headerColor: 'text-yellow-500',
    icon: <Users className="text-yellow-500" size={20} />,
    placeholder: 'Ex: Responder e-mails de rotina...'
  },
  {
    id: 'not-urgent-not-important',
    title: 'Não Urgente & Não Importante',
    subtitle: 'Elimine',
    color: 'border-slate-500',
    headerColor: 'text-slate-500',
    icon: <XCircle className="text-slate-500" size={20} />,
    placeholder: 'Ex: Navegar em redes sociais...'
  }
];

export default function EisenhowerMatrix() {
  const [states, setStates] = useState<Record<string, QuadrantState>>({
    'urgent-important': { tasks: [], inputValue: '' },
    'not-urgent-important': { tasks: [], inputValue: '' },
    'urgent-not-important': { tasks: [], inputValue: '' },
    'not-urgent-not-important': { tasks: [], inputValue: '' },
  });

  const addTask = (quadId: string) => {
    const text = states[quadId].inputValue.trim();
    if (!text) return;

    const newTask: Task = {
      id: Math.random().toString(36).substr(2, 9),
      text
    };

    setStates(prev => ({
      ...prev,
      [quadId]: {
        tasks: [...prev[quadId].tasks, newTask],
        inputValue: ''
      }
    }));
  };

  const removeTask = (quadId: string, taskId: string) => {
    setStates(prev => ({
      ...prev,
      [quadId]: {
        ...prev[quadId],
        tasks: prev[quadId].tasks.filter(t => t.id !== taskId)
      }
    }));
  };

  const handleInputChange = (quadId: string, value: string) => {
    setStates(prev => ({
      ...prev,
      [quadId]: {
        ...prev[quadId],
        inputValue: value
      }
    }));
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Matriz de <span className="text-gradient">Eisenhower</span> Interativa
          </motion.h2>
          <p className="text-slate-400 text-lg">
            Priorize seu dia com clareza. Adicione suas tarefas em cada quadrante.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[700px]">
          {quadrantConfig.map((quad) => (
            <motion.div 
              key={quad.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={`glass-card border-l-4 ${quad.color} flex flex-col h-full bg-white/[0.03] hover:bg-white/[0.05] transition-all`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  {quad.icon}
                  <div>
                    <h4 className={`font-bold ${quad.headerColor} leading-tight`}>{quad.title}</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">{quad.subtitle}</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-600 bg-white/5 px-2 py-1 rounded">
                  {states[quad.id].tasks.length} itens
                </span>
              </div>

              {/* Task List */}
              <div className="flex-1 overflow-y-auto space-y-2 mb-6 custom-scrollbar pr-2 min-h-[150px]">
                <AnimatePresence initial={false}>
                  {states[quad.id].tasks.length === 0 ? (
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      className="text-slate-500 text-sm italic py-4"
                    >
                      Nenhuma tarefa adicionada...
                    </motion.p>
                  ) : (
                    states[quad.id].tasks.map((task) => (
                      <motion.div
                        key={task.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="group flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-all hover:bg-white/10"
                      >
                        <span className="text-sm text-slate-200">{task.text}</span>
                        <button 
                          onClick={() => removeTask(quad.id, task.id)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-500 hover:text-red-400"
                        >
                          <Trash2 size={16} />
                        </button>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>

              {/* Input Area */}
              <div className="relative mt-auto pt-4 border-t border-white/5">
                <input 
                  type="text" 
                  value={states[quad.id].inputValue}
                  onChange={(e) => handleInputChange(quad.id, e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addTask(quad.id)}
                  placeholder={quad.placeholder}
                  className="w-full bg-black/20 border border-white/10 rounded-xl py-3 px-4 pr-12 text-sm focus:outline-none focus:border-white/30 transition-all"
                />
                <button 
                  onClick={() => addTask(quad.id)}
                  className="absolute right-2 top-[calc(50%+8px)] -translate-y-1/2 w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <Plus size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
