/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, AnimatePresence } from "motion/react";
import { Play, ArrowUpRight, Plus, ChevronRight, Zap, Target, Layers, Cpu, Globe, Send, CheckCircle } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Structured Data (JSON-LD) for AEO
const StructuredData = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Buildrivo Studio",
    "description": "High-performance digital agency specializing in UI/UX architecture, brand identity, and technical strategy.",
    "url": "https://buildrivo.studio",
    "logo": "https://buildrivo.studio/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressCountry": "UK"
    },
    "serviceType": ["UI/UX Design", "Brand Identity", "Product Strategy", "Technical Execution"],
    "sameAs": [
      "https://www.linkedin.com/company/buildrivo",
      "https://twitter.com/buildrivo"
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const { scrollYProgress } = useScroll();

  const faqs = [
    { q: "What industries do you specialize in?", a: "We work across diverse sectors including Fintech, E-commerce, AI, and luxury lifestyle brands, focusing on high-growth digital ecosystems." },
    { q: "How long is a typical project timeline?", a: "Timelines vary: branding usually takes 4-6 weeks, while complex full-scale platform design and builds can range from 3-5 months." },
    { q: "Do you offer post-launch support?", a: "Yes, we provide ongoing technical strategy and performance optimization to ensure your digital products continue to scale with your business." },
    { q: "What is your design philosophy?", a: "We believe in 'Geometric Balance'—merging rigid technical structure with fluid, human-centric aesthetics to create products that are both powerful and intuitive." }
  ];

  const testimonials = [
    {
      quote: "Buildrivo didn't just redesign our product; they redefined our market position. Our user engagement tripled within the first quarter.",
      author: "Sarah Chen",
      role: "CTO, Meta Pay",
      avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      quote: "The technical precision of their execution is unmatched. They delivered a complex AI infrastructure that scales effortlessly.",
      author: "Marcus Thorne",
      role: "Founder, Neo Sphere",
      avatar: "https://i.pravatar.cc/150?u=marcus"
    },
    {
      quote: "Brilliant strategic minds. They managed to capture our brand DNA and transform it into a world-class digital experience.",
      author: "Elena Rodriguez",
      role: "Head of Digital, Atlas Core",
      avatar: "https://i.pravatar.cc/150?u=elena"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  const reveal = {
    initial: { opacity: 0, clipPath: "inset(100% 0 0 0)" },
    whileInView: { opacity: 1, clipPath: "inset(0% 0 0 0)" },
    viewport: { once: true },
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <main className="flex-1 flex flex-col">
      <StructuredData />
      
      {/* Hero Section */}
      <section id="home" className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden border-b-2 border-brand-border">
        <div className="max-w-7xl w-full py-20">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-12 md:space-y-16"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <motion.div variants={fadeIn} className="flex items-center gap-4">
                <span className="w-12 h-[2px] bg-brand-accent"></span>
                <span className="font-mono text-[10px] uppercase font-bold tracking-[0.4em] text-brand-muted">Architecting Digital Excellence</span>
              </motion.div>
              
              <motion.div variants={fadeIn} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="font-mono text-[9px] uppercase font-black tracking-widest text-brand-muted">Availability: Q3 2024</span>
              </motion.div>
            </div>

            <motion.h1 
              variants={fadeIn}
              className="text-[64px] md:text-[110px] lg:text-[140px] xl:text-[170px] leading-[0.8] font-display font-black tracking-tight uppercase text-pretty"
            >
              Geometric<br/><span className="text-zinc-300">Balance.</span>
            </motion.h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 pt-8 border-t-2 border-brand-border/10">
              <motion.div variants={fadeIn} className="lg:col-span-1 hidden xl:flex flex-col gap-8 opacity-20">
                <span className="font-mono text-[10px] uppercase rotate-90 origin-left whitespace-nowrap tracking-[0.5em] font-black">Scroll to Explore</span>
              </motion.div>

              <motion.div variants={fadeIn} className="lg:col-span-5 space-y-10">
                <p className="text-xl md:text-3xl font-medium text-brand-muted leading-tight">
                  A high-performance creative studio bridging the gap between <span className="text-black italic">vision</span> and <span className="text-brand-accent font-black">technical precision.</span>
                </p>
                
                <p className="text-sm md:text-md text-brand-muted max-w-sm leading-relaxed font-medium">
                  We specialize in crafting digital ecosystems that aren't just visually distinct but are engineered for measurable impact and global scale.
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="px-5 py-2 border-2 border-brand-border font-mono text-[9px] uppercase font-black tracking-widest bg-zinc-50 hover:bg-black hover:text-white transition-all cursor-default">Strategy</div>
                  <div className="px-5 py-2 border-2 border-brand-border font-mono text-[9px] uppercase font-black tracking-widest bg-zinc-50 hover:bg-black hover:text-white transition-all cursor-default">Design</div>
                  <div className="px-5 py-2 border-2 border-brand-border font-mono text-[9px] uppercase font-black tracking-widest bg-zinc-50 hover:bg-black hover:text-white transition-all cursor-default">Studio</div>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="lg:col-span-6 flex flex-col justify-end gap-12">
                <div className="grid grid-cols-2 gap-12 md:gap-20">
                  <div className="space-y-4">
                    <span className="block text-xl font-mono font-black border-b-2 border-brand-accent w-fit italic">Proprietary Method</span>
                    <p className="text-[10px] uppercase font-black tracking-widest opacity-50 leading-relaxed">
                      Rigorous research documentation and user-centric architecture for every project lifecycle.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <span className="block text-xl font-mono font-black border-b-2 border-brand-accent w-fit italic">Global Operations</span>
                    <p className="text-[10px] uppercase font-black tracking-widest opacity-50 leading-relaxed">
                      Supporting enterprises across London, New York, and Tokyo with 24/7 technical strategy.
                    </p>
                  </div>
                </div>

                <div className="flex flex-row gap-16 border-t-2 border-brand-border pt-12">
                  <div className="space-y-2">
                    <span className="block text-5xl md:text-7xl font-display font-black tracking-tighter">20+</span>
                    <span className="block text-[8px] font-black uppercase tracking-widest opacity-50 leading-tight">Industry<br/>Recognition</span>
                  </div>
                  <div className="space-y-2">
                    <span className="block text-5xl md:text-7xl font-display font-black tracking-tighter">10+</span>
                    <span className="block text-[8px] font-black uppercase tracking-widest opacity-50 leading-tight">Years Of<br/>Experience</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/4 h-full bg-zinc-50/50 -z-10 border-l-2 border-brand-border hidden lg:block" />
        <div className="absolute top-0 right-0 w-12 h-12 border-l-2 border-b-2 border-brand-border bg-white hidden lg:block" />
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="border-t-2 border-brand-border bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-brand-border">
          <div className="lg:col-span-4 p-8 md:p-12 space-y-8 flex flex-col justify-between lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)]">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter leading-none mb-6">Selected<br/>Work</h2>
              <p className="text-brand-muted font-medium max-w-xs">A curation of high-performance digital ecosystems built for global brands.</p>
            </motion.div>
            <Link to="/case-studies" className="flex items-center gap-4 font-black uppercase text-[10px] tracking-[0.3em] py-6 border-y-2 border-brand-border group hover:bg-brand-accent hover:text-white transition-all px-4">
              View All Case Studies <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="lg:col-span-8 divide-y-2 divide-brand-border">
              {[
                { title: "Meta Pay", type: "Mobile App", category: "Global Fintech", year: "2024", img: "input_file_0.png" },
                { title: "Pulse Shop", type: "Website", category: "E-Commerce", year: "2024", img: "input_file_2.png" },
                { title: "Neo Sphere", type: "Mobile App", category: "AI Interface", year: "2023", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200" },
                { title: "Volts Cloud", type: "Website", category: "SaaS Platform", year: "2024", img: "input_file_1.png" }
              ].map((item, i) => (
              <motion.div key={i} {...reveal} whileHover={{ scale: 0.98 }} className="group cursor-pointer overflow-hidden p-6 md:p-12 bg-white flex flex-col md:flex-row justify-between items-end md:items-center gap-8 relative">
                <div className="z-10 group-hover:pl-4 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-mono text-xs font-bold text-brand-accent">/0{i+1}</span>
                    <div className="w-8 h-[1px] bg-brand-border group-hover:w-16 transition-all duration-500" />
                    <span className="font-mono text-xs font-medium text-brand-muted">{item.year}</span>
                    <span className="px-3 py-1 border border-brand-border font-mono text-[9px] uppercase font-black tracking-widest bg-zinc-50">{item.type}</span>
                  </div>
                  <h3 className="text-4xl md:text-6xl xl:text-7xl font-display font-black uppercase tracking-tighter leading-none group-hover:italic transition-all">
                    {item.title}
                  </h3>
                  <p className="text-xs font-black uppercase tracking-widest mt-4 text-brand-muted group-hover:text-brand-accent transition-colors">
                    {item.category}
                  </p>
                </div>
                
                <div className="w-full md:w-1/3 aspect-video md:aspect-[4/5] bg-zinc-100 border-2 border-brand-border overflow-hidden rotate-0 group-hover:-rotate-2 transition-transform duration-500">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="border-t-2 border-brand-border bg-zinc-50 py-24 md:py-32">
        <div className="px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <motion.div {...fadeIn} className="max-w-2xl">
              <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-brand-accent block mb-4">Feedback</span>
              <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none">Voice of the<br/>Partners</h2>
            </motion.div>
            <div className="flex gap-4">
               <div className="w-12 h-12 border-2 border-brand-border flex items-center justify-center p-2 rounded-full cursor-pointer hover:bg-black hover:text-white transition-all">
                 <Plus size={20} className="rotate-45" />
               </div>
               <div className="w-12 h-12 border-2 border-brand-border flex items-center justify-center p-2 rounded-full cursor-pointer hover:bg-black hover:text-white transition-all">
                 <Plus size={20} />
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                whileHover={{ y: -10 }}
                className="bg-white border-2 border-brand-border p-10 flex flex-col gap-10 shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all"
              >
                <div className="text-brand-accent">
                   <Target size={32} />
                </div>
                <p className="text-xl font-medium leading-relaxed italic">"{t.quote}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={t.avatar} className="w-12 h-12 border-2 border-brand-border grayscale transition-all group-hover:grayscale-0" />
                  <div>
                    <h4 className="font-display font-black text-sm uppercase tracking-tight">{t.author}</h4>
                    <p className="font-mono text-[10px] uppercase font-bold text-brand-muted">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="services" className="border-t-2 border-brand-border grid grid-cols-1 lg:grid-cols-12 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-brand-border">
        <div className="lg:col-span-3 p-12 lg:p-16 flex flex-col justify-between bg-zinc-50 lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)]">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter leading-none mb-6">Expertise</h2>
            <div className="w-20 h-2 bg-brand-accent"></div>
          </motion.div>
          <motion.p {...fadeIn} className="text-brand-muted font-medium text-sm leading-relaxed">We architect digital solutions that bridge the gap between vision and measurable impact.</motion.p>
        </div>
        
        <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-brand-border">
          {[
            { title: "UI/UX Architecture", icon: <Layers size={24} />, desc: "Engineering fluid interfaces that prioritize user clarity and speed." },
            { title: "Brand Identity", icon: <Zap size={24} />, desc: "Defining solid visual languages for modern digital-first companies." },
            { title: "Product Strategy", icon: <Target size={24} />, desc: "Navigating market fit through rigorous research and business logic." },
            { title: "Tech Execution", icon: <Cpu size={24} />, desc: "Developing scalable foundations that empower rapid growth." },
            { title: "Art Direction", icon: <Globe size={24} />, desc: "Visual storytelling that commands industry authority." },
            { title: "Growth Engine", icon: <ArrowUpRight size={24} />, desc: "Building the digital funnels that consistently scale revenue." }
          ].map((service, i) => (
            <motion.div key={i} {...reveal} whileHover={{ backgroundColor: "#fafafa" }} className={`p-10 flex flex-col gap-8 transition-colors border-b-2 border-brand-border ${i >= 3 ? 'md:border-b-0' : ''}`}>
              <div className="w-14 h-14 bg-white border-2 border-brand-border flex items-center justify-center p-3 shadow-[4px_4px_0px_rgba(0,0,0,1)] group-hover:bg-brand-accent group-hover:text-white transition-all">
                {service.icon}
              </div>
              <div>
                <h3 className="font-display font-black text-2xl uppercase tracking-tighter mb-3">{service.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed font-medium">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t-2 border-brand-border grid grid-cols-1 lg:grid-cols-2 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-brand-border bg-white">
        <div className="p-12 md:p-20 flex flex-col justify-center gap-12 bg-zinc-50">
           <motion.div {...fadeIn} className="space-y-6">
             <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-brand-accent block">Contact</span>
             <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none">Let's build<br/>the future.</h2>
           </motion.div>
           <div className="space-y-8">
              <motion.div {...fadeIn} className="flex items-center gap-6 group cursor-pointer w-fit">
                <div className="w-12 h-12 border-2 border-brand-border flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-all">
                   <Globe size={20} />
                </div>
                <span className="font-display font-bold text-xl uppercase tracking-tighter group-hover:italic transition-all">London, UK</span>
              </motion.div>
              <motion.div {...fadeIn} className="flex items-center gap-6 group cursor-pointer w-fit">
                <div className="w-12 h-12 border-2 border-brand-border flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-all">
                   <Send size={20} />
                </div>
                <span className="font-display font-bold text-xl uppercase tracking-tighter group-hover:italic transition-all">hi@buildrivo.studio</span>
              </motion.div>
           </div>
        </div>

        <div className="p-12 md:p-20">
           <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 <motion.div {...fadeIn} className="space-y-2">
                    <label className="font-mono text-[10px] uppercase font-bold tracking-widest text-brand-muted">Name</label>
                    <input required className="w-full bg-transparent border-b-2 border-brand-border py-4 focus:outline-none focus:border-brand-accent transition-colors font-display text-xl uppercase font-black tracking-tight" type="text" placeholder="John Doe" />
                 </motion.div>
                 <motion.div {...fadeIn} className="space-y-2">
                    <label className="font-mono text-[10px] uppercase font-bold tracking-widest text-brand-muted">Email</label>
                    <input required className="w-full bg-transparent border-b-2 border-brand-border py-4 focus:outline-none focus:border-brand-accent transition-colors font-display text-xl uppercase font-black tracking-tight" type="email" placeholder="john@example.com" />
                 </motion.div>
              </div>
              <motion.div {...fadeIn} className="space-y-2">
                 <label className="font-mono text-[10px] uppercase font-bold tracking-widest text-brand-muted">Service Interested In</label>
                 <select className="w-full bg-transparent border-b-2 border-brand-border py-4 focus:outline-none focus:border-brand-accent transition-colors font-display text-xl uppercase font-black tracking-tight">
                    <option>UI/UX Architecture</option>
                    <option>Brand Identity</option>
                    <option>Product Strategy</option>
                    <option>Full Transformation</option>
                 </select>
              </motion.div>
              <motion.div {...fadeIn} className="space-y-2">
                 <label className="font-mono text-[10px] uppercase font-bold tracking-widest text-brand-muted">Message</label>
                 <textarea required className="w-full bg-transparent border-b-2 border-brand-border py-4 focus:outline-none focus:border-brand-accent transition-colors font-display text-xl uppercase font-black tracking-tight min-h-[150px]" placeholder="Tell us about your next big move..." />
              </motion.div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                disabled={formStatus === "submitting"}
                className={`w-full py-8 text-xl font-black uppercase tracking-[0.2em] shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-4 ${formStatus === "success" ? "bg-green-600 text-white shadow-none translate-x-1 translate-y-1" : "bg-brand-accent text-white"}`}
              >
                {formStatus === "idle" && <>Send Message <Send size={20} /></>}
                {formStatus === "submitting" && <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />}
                {formStatus === "success" && <>Message Sent <CheckCircle size={24} /></>}
              </motion.button>
           </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="border-t-2 border-brand-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-brand-border">
          <div className="p-12 md:p-20 bg-zinc-50 border-b-2 lg:border-b-0 border-brand-border">
            <div className="sticky top-32">
              <motion.div {...fadeIn}>
                <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-brand-accent block mb-6">Clarification</span>
                <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none">Frequently Asked</h2>
              </motion.div>
            </div>
          </div>
          <div className="divide-y-2 divide-brand-border bg-white">
            {faqs.map((faq, i) => (
              <motion.div key={i} {...fadeIn} className="group">
                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full p-10 flex justify-between items-center text-left hover:bg-zinc-50 transition-colors">
                  <h3 className="text-xl md:text-2xl font-display font-black uppercase tracking-tighter">{faq.q}</h3>
                  <motion.div animate={{ rotate: activeFaq === i ? 45 : 0 }} className="w-10 h-10 border-2 border-brand-border flex items-center justify-center p-2 rounded-full">
                    <Plus size={20} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="px-10 pb-10 text-brand-muted font-medium leading-relaxed max-w-xl">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
