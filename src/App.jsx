import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Uploader from './components/Uploader';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Uploader />
        <section id="pricing" className="relative bg-gradient-to-b from-[#05070B] to-black py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl sm:text-4xl font-bold">Simple pricing</h2>
            <p className="mt-3 text-center text-white/70">Start free, upgrade when you need more power.</p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-xl font-semibold">Starter</h3>
                <p className="mt-1 text-white/70">For quick tests and small projects</p>
                <div className="mt-4 text-4xl font-extrabold">$0<span className="text-base font-medium text-white/60">/mo</span></div>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  <li>• 5 conversions / month</li>
                  <li>• Basic asset library</li>
                  <li>• Export screenshots</li>
                </ul>
                <a href="#demo" className="mt-6 inline-flex rounded-md bg-white px-4 py-2 font-semibold text-black">Get started</a>
              </div>
              <div className="rounded-2xl border border-cyan-400/30 bg-gradient-to-b from-cyan-500/10 to-blue-500/10 p-6">
                <h3 className="text-xl font-semibold">Pro</h3>
                <p className="mt-1 text-white/70">For teams and production work</p>
                <div className="mt-4 text-4xl font-extrabold">$29<span className="text-base font-medium text-white/60">/mo</span></div>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  <li>• Unlimited conversions</li>
                  <li>• Full asset library</li>
                  <li>• Material editing & sharing</li>
                  <li>• 3D export (GLTF/FBX)</li>
                </ul>
                <a href="#demo" className="mt-6 inline-flex rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 font-semibold text-white">Upgrade</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between">
          <div>© {new Date().getFullYear()} Plan3D. All rights reserved.</div>
          <div className="mt-2 sm:mt-0">Made for architects • designers • makers</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
