import { motion } from 'framer-motion';

const Contact = () => (
  <section id="contact" className="relative py-24">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.15),_transparent_65%)]" />
    <div className="relative mx-auto max-w-4xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-10 text-center shadow-[0_35px_60px_-30px_rgba(34,211,238,0.6)]"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-brand-teal">Let’s build sustainable growth</p>
        <h2 className="mt-4 text-3xl font-semibold text-white">
          Ready to align strategy, technology, and sustainability?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-300">
          I am open to internships, innovation projects, and collaborations that challenge conventional business models while embracing responsible impact.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-200">
          <a
            href="mailto:marekpisetsky001@gmail.com"
            className="inline-flex items-center gap-3 rounded-full border border-brand-purple/50 bg-brand-purple/10 px-6 py-3 font-semibold text-brand-purple transition hover:bg-brand-purple/20"
          >
            Email me
            <span className="material-symbols-rounded text-base">mail</span>
          </a>
          <a
            href="tel:+31620935300"
            className="inline-flex items-center gap-3 rounded-full border border-brand-lime/40 bg-brand-lime/10 px-6 py-3 font-semibold text-brand-lime transition hover:bg-brand-lime/20"
          >
            Call +31 620 935 300
            <span className="material-symbols-rounded text-base">call</span>
          </a>
        </div>
      </motion.div>
      <p className="mt-12 text-center text-xs uppercase tracking-[0.3em] text-slate-500">
        © {new Date().getFullYear()} Marek Andrei Pisetsky Neyra · International Business & Innovation
      </p>
    </div>
  </section>
);

export default Contact;
