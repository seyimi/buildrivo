import { motion, useScroll, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Simulate initial page load
    const timer = setTimeout(() => setIsLoading(false), 2000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Router>
      <ScrollToTop />
      
      {/* Page Loading Overlay */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ 
              y: "-100%",
              transition: { duration: 0.8, ease: [0.85, 0, 0.15, 1] }
            }}
            className="fixed inset-0 z-[200] bg-brand-accent flex items-center justify-center pointer-events-none"
          >
            <div className="flex flex-col items-center gap-6">
              <motion.img 
                initial={{ scale: 0.8, rotate: 0 }}
                animate={{ 
                  scale: [0.8, 1, 0.8],
                  rotate: [0, 45, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                src="input_file_3.png"
                alt="Logo"
                className="w-16 h-16 object-cover"
              />
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display font-black text-white text-3xl uppercase tracking-tighter"
              >
                buildrivo
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white border-8 border-brand-bg md:p-4 perspective-1000">
        {/* Scroll Progress Bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-brand-accent z-[100] origin-left"
          style={{ scaleX: scrollYProgress }}
        />

        <div className="max-w-[1440px] mx-auto border-2 border-brand-border min-h-[calc(100vh-2rem)] flex flex-col relative">
          {/* Header Section */}
          <header className="h-24 border-b-2 border-brand-border flex items-center justify-between px-6 md:px-12 sticky top-0 bg-white/90 backdrop-blur-md z-50">
            <Link to="/" className="flex items-center gap-3 cursor-pointer group">
              <img src="input_file_3.png" alt="buildrivo" className="w-10 h-10 object-cover group-hover:rotate-45 transition-transform duration-500" />
              <span className="font-display font-black text-2xl tracking-tighter uppercase shrink-0">buildrivo</span>
            </Link>
            
            <nav className="hidden lg:flex gap-10 font-bold text-xs uppercase tracking-widest text-brand-muted">
              {[
                { label: "Home", to: "/" },
                { label: "Case Studies", to: "/case-studies" },
                { label: "Services", href: "/#services" },
                { label: "Contact", href: "/#contact", primary: true }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -2, scale: 1.05 }}
                  transition={{ 
                    delay: 0.1 + i * 0.1,
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                  }}
                  className="relative group cursor-pointer"
                >
                  {item.to ? (
                    <Link 
                      to={item.to} 
                      className={`hover:text-brand-text transition-colors flex items-center gap-1 ${item.primary ? 'text-brand-accent font-black' : ''}`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a 
                      href={item.href} 
                      className={`hover:text-brand-text transition-colors flex items-center gap-1 ${item.primary ? 'text-brand-accent font-black' : ''}`}
                    >
                      {item.label}
                    </a>
                  )}
                  <motion.div 
                    className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-accent transition-all duration-300 group-hover:w-full"
                    layoutId="nav-underline"
                  />
                  {item.primary && (
                    <motion.div 
                      className="absolute -right-2 top-0 w-1 h-1 bg-brand-accent rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              ))}
            </nav>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-8 py-3 bg-brand-accent text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:shadow-[4px_4px_0px_rgba(0,0,0,0.2)] transition-all"
            >
              Start Project
            </motion.button>

            <button 
              className="lg:hidden text-brand-text"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </header>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed inset-0 z-[60] bg-white pt-32 px-12 flex flex-col gap-8 text-4xl font-display font-black uppercase tracking-tighter"
              >
                <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/case-studies" onClick={() => setIsMenuOpen(false)}>Case Studies</Link>
                <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
              </motion.div>
            )}
          </AnimatePresence>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-studies" element={<CaseStudies />} />
          </Routes>

          {/* Global Footer */}
          <footer className="border-t-2 border-brand-border px-8 md:px-12 py-20 bg-white mt-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
              <div className="col-span-1 md:col-span-2 space-y-8">
                <div className="flex items-center gap-3">
                  <img src="input_file_3.png" alt="buildrivo" className="w-10 h-10 object-cover" />
                  <span className="font-display font-black text-2xl tracking-tighter uppercase">buildrivo</span>
                </div>
                <p className="text-brand-muted font-medium max-w-sm">Architecting digital excellence through intentional design and technical strategy.</p>
              </div>
              <div className="space-y-6">
                <h4 className="font-mono text-xs font-black uppercase tracking-widest">Connect</h4>
                <nav className="flex flex-col gap-3 text-sm font-bold uppercase tracking-tight text-brand-muted">
                  <a href="#" className="hover:text-brand-accent transition-colors">LinkedIn</a>
                  <a href="#" className="hover:text-brand-accent transition-colors">Twitter (X)</a>
                  <a href="#" className="hover:text-brand-accent transition-colors">Instagram</a>
                </nav>
              </div>
              <div className="space-y-6">
                <h4 className="font-mono text-xs font-black uppercase tracking-widest">Office</h4>
                <p className="text-sm font-bold uppercase text-brand-muted leading-tight">
                  London SE1 9SG<br/>
                  United Kingdom
                </p>
              </div>
            </div>
            
            <div className="pt-12 border-t-2 border-brand-border flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-brand-muted">
              <div>© 2024 buildrivo studio LTD.</div>
              <div className="flex gap-12 grayscale opacity-30">
                <span>NIKE</span>
                <span>SONY</span>
                <span>ADIDAS</span>
                <span>APPLE</span>
              </div>
              <div>Privacy / Terms</div>
            </div>
          </footer>
        </div>

        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              onClick={scrollToTop}
              className="fixed bottom-12 right-12 z-50 w-16 h-16 bg-brand-accent text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-black transition-colors border-4 border-white"
            >
              <ArrowUp size={28} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}
