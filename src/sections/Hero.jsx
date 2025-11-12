import { motion } from 'framer-motion';
import Tag from '../components/Tag.jsx';

const Hero = () => (
  <section
    id="top"
    className="relative overflow-hidden pt-36 pb-24"
  >
    <div className="pointer-events-none absolute inset-0 bg-grid-tech [mask-image:radial-gradient(circle_at_center,white,transparent_65%)]" />
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(139,92,246,0.18),_transparent_55%)]" />
    <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="flex flex-col gap-6"
      >
        <Tag>International Business Student · Strategic Innovator</Tag>
        <h1 className="text-4xl font-semibold text-white md:text-6xl">
          Bridging <span className="text-brand-teal">global strategy</span>,
          <span className="text-brand-purple"> digital innovation</span>, and
          <span className="text-brand-lime"> sustainable growth</span>.
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
          I am Marek Andrei Pisetsky Neyra, an International Business student based in Arnhem, The Netherlands. I combine strategic management, market analysis, and technology-driven experimentation to help organizations grow sustainably and communicate effectively in global contexts.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-200">
          <a
            href="mailto:marekpisetsky001@gmail.com"
            className="inline-flex items-center gap-3 rounded-full border border-brand-teal/50 bg-brand-teal/10 px-6 py-3 font-semibold text-brand-teal transition hover:bg-brand-teal/20"
          >
            Let’s collaborate
            <span className="material-symbols-rounded text-base">arrow_outward</span>
          </a>
          <div className="flex flex-col gap-1 text-slate-400">
            <span>Arnhem, The Netherlands</span>
            <span>+31 620 935 300 · marekpisetsky001@gmail.com</span>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-[0_45px_85px_-35px_rgba(34,211,238,0.55)]"
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="text-sm uppercase tracking-[0.3em] text-slate-400">Profile</h3>
            <p className="mt-3 text-base leading-relaxed text-slate-200">
              Motivated International Business student focused on strategic management and business innovation. Skilled at translating insights into actionable plans that align technology with sustainable growth.
            </p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-[0.3em] text-slate-400">Value Statement</h3>
            <p className="mt-3 text-base leading-relaxed text-slate-200">
              “Bridging business strategy and digital innovation to build sustainable and global growth.”
            </p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-[0.3em] text-slate-400">Core Themes</h3>
            <ul className="mt-3 space-y-2 text-base text-slate-200">
              <li className="flex items-center gap-3"><span className="material-symbols-rounded text-brand-teal">psychology</span>Strategic foresight</li>
              <li className="flex items-center gap-3"><span className="material-symbols-rounded text-brand-purple">smart_toy</span>Digital enablement</li>
              <li className="flex items-center gap-3"><span className="material-symbols-rounded text-brand-lime">compost</span>Sustainable value</li>
            </ul>
          </div>
        </div>
        <motion.span
          className="pointer-events-none absolute -bottom-24 -right-12 h-64 w-64 rounded-full bg-gradient-to-tr from-brand-purple/40 to-brand-teal/20 blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
        />
      </motion.div>
    </div>
  </section>
);

export default Hero;
