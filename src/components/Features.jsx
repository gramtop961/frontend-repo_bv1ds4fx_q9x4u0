import { motion } from 'framer-motion';
import { Rocket, Star, Settings, User, Share2, Cube } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'AI Floor Plan Parsing',
    desc: 'Smartly detects walls, doors, windows and rooms from raster or vector floor plans.'
  },
  {
    icon: Cube,
    title: 'Instant 3D Model',
    desc: 'Generates navigable 3D scenes with camera controls and realistic lighting.'
  },
  {
    icon: Star,
    title: 'Asset Library',
    desc: 'Drag-and-drop furniture, materials, and fixtures with snapping and alignment.'
  },
  {
    icon: Settings,
    title: 'Material Editing',
    desc: 'Swap finishes in real time – floors, walls, counters, glass, metals, and more.'
  },
  {
    icon: User,
    title: 'Collaboration',
    desc: 'Share links, comment in context, and version designs with your team.'
  },
  {
    icon: Share2,
    title: 'Export & Embed',
    desc: 'Export to GLTF/FBX or embed the interactive viewer in your site.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative bg-gradient-to-b from-black to-[#05070B] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-center text-3xl sm:text-4xl font-bold text-white"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Designed for architects, designers, and teams
        </motion.h2>
        <motion.p
          className="mx-auto mt-3 max-w-2xl text-center text-white/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          A fluid, animated workspace that turns flat plans into living, editable spaces.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-cyan-400/30 transition"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="flex items-center gap-3">
                <f.icon className="h-5 w-5 text-cyan-300" />
                <h3 className="text-white font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
