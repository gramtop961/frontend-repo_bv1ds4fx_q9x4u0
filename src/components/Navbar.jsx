import { motion } from 'framer-motion';
import { Rocket, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-black/30">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.a
            href="#"
            className="flex items-center gap-2 text-white"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Rocket className="h-5 w-5 text-cyan-400" />
            <span className="font-semibold tracking-tight">Plan3D</span>
            <span className="ml-2 rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs text-cyan-300 border border-cyan-400/20">Beta</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#demo" className="hover:text-white transition">Demo</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
          </div>

          <motion.a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 focus-visible:outline-none"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Sparkles className="h-4 w-4" /> Try it now
          </motion.a>
        </div>
      </nav>
    </header>
  );
}
