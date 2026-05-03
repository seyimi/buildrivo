/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowUpRight, ChevronRight, Target, Zap, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const cases = [
  {
    title: "Meta Pay",
    category: "Fintech",
    year: "2024",
    description: "Architecting a global payment system for the next generation of digital commerce. Focused on security, speed, and seamless cross-border transactions.",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
    stats: "+240% Engagement",
    color: "bg-blue-600"
  },
  {
    title: "Neo Sphere",
    category: "AI Interface",
    year: "2023",
    description: "Designing the interface for a revolutionary AI platform. We translated complex neural network operations into an intuitive, human-centric visual language.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    stats: "Sub-10ms Latency",
    color: "bg-purple-600"
  },
  {
    title: "Atlas Core",
    category: "E-Commerce",
    year: "2023",
    description: "A high-performance luxury lifestyle platform. Focused on editorial-style interactions and ultra-premium brand storytelling.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    stats: "$45M Revenue Growth",
    color: "bg-zinc-900"
  },
  {
    title: "Zenith Labs",
    category: "Healthcare",
    year: "2023",
    description: "Streamlining patient data visualization for medical professionals. Creating clarity in high-pressure diagnostic environments.",
    img: "https://images.unsplash.com/photo-1576091160550-2173599211d0?auto=format&fit=crop&q=80&w=1200",
    stats: "99.9% Data Accuracy",
    color: "bg-emerald-600"
  }
];

export default function CaseStudies() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const reveal = {
    initial: { opacity: 0, clipPath: "inset(100% 0 0 0)" },
    whileInView: { opacity: 1, clipPath: "inset(0% 0 0 0)" },
    viewport: { once: true },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <main className="flex-1">
      {/* Header */}
      <section className="p-12 md:p-24 border-b-2 border-brand-border bg-zinc-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full border-l-2 border-brand-border opacity-5 hidden lg:block" />
        <div className="max-w-5xl relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase font-bold tracking-widest text-brand-muted hover:text-brand-accent transition-colors mb-12">
            <ChevronRight size={14} className="rotate-180" /> Back to Home
          </Link>
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[60px] md:text-[100px] font-display font-black uppercase tracking-tighter leading-[0.8] mb-12"
          >
            Proof of<br/><span className="text-brand-accent">Concept.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-medium text-brand-muted max-w-2xl leading-relaxed"
          >
            A deep dive into the architectures, design systems, and technical strategies that powered record-breaking growth for our partners.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-brand-border border-b-2 border-brand-border">
        {cases.map((c, i) => (
          <motion.div 
            key={i} 
            {...reveal}
            whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
            className={`p-12 md:p-20 flex flex-col gap-10 group cursor-pointer transition-colors ${i > 1 ? 'border-t-2 border-brand-border' : ''}`}
          >
            <div className="aspect-[4/5] overflow-hidden border-2 border-brand-border relative group-hover:-rotate-1 transition-transform duration-500 shadow-[10px_10px_0px_rgba(0,0,0,1)] group-hover:shadow-none">
              <img src={c.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" />
              <div className="absolute top-6 right-6 px-4 py-2 border-2 border-brand-border bg-white font-mono text-[10px] uppercase font-black tracking-widest">
                {c.year}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-mono text-[10px] uppercase font-bold tracking-[0.4em] text-brand-muted block mb-2">{c.category}</span>
                  <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter group-hover:italic transition-all">{c.title}</h2>
                </div>
                <div className="w-16 h-16 border-2 border-brand-border flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-all">
                  <ArrowUpRight size={24} />
                </div>
              </div>
              <p className="text-lg text-brand-muted font-medium italic transition-all group-hover:text-brand-text">"{c.description}"</p>
              
              <div className="pt-8 border-t-2 border-brand-border flex flex-wrap gap-12">
                 <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase font-bold text-brand-muted">Legacy</span>
                    <p className="font-display font-black uppercase tracking-tight">{c.stats}</p>
                 </div>
                 <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase font-bold text-brand-muted">Focus</span>
                    <p className="font-display font-black uppercase tracking-tight">Performance</p>
                 </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Footer CTA */}
      <section className="p-12 md:p-32 flex flex-col items-center text-center gap-12 bg-brand-accent text-white overflow-hidden relative">
         <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="w-full h-full border-[100px] border-white/5 rounded-full scale-150 rotate-45" />
         </div>
         <motion.h2 {...reveal} className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none z-10 text-balance"> Ready to be our<br/>next success story?</motion.h2>
         <motion.div {...reveal}>
          <Link to="/" className="px-16 py-8 bg-white text-black text-xl font-black uppercase tracking-[0.2em] shadow-[8px_8px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all z-10 inline-block">Start Project</Link>
         </motion.div>
      </section>
    </main>
  );
}
