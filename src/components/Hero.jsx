import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-black">
      <div className="relative h-[640px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Gradient overlays should not block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/80" />

        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
                Turn 2D floor plans into interactive 3D architecture
              </h1>
              <p className="mt-4 text-lg text-white/80">
                Upload a plan, get a stunning 3D model in seconds. Edit materials, swap assets, walk through spaces, and collaborate — all in your browser.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#demo" className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-black font-semibold hover:bg-white/90 transition">
                  Try the converter
                </a>
                <a href="#features" className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 text-white hover:bg-white/10 transition">
                  Explore features
                </a>
              </div>
              <div className="mt-6 text-xs text-white/60">Theme: interactive • tech • futuristic • digital • minimalist</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
