import { motion } from 'framer-motion';

const FloatingBadge = ({ icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 shadow-[0_25px_50px_-12px_rgba(15,23,42,0.8)]"
  >
    <div className="flex items-start gap-4">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-teal/20 to-brand-purple/20 text-2xl">
        {icon}
      </span>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-slate-300 leading-relaxed">{description}</p>
      </div>
    </div>
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
      background:
        'radial-gradient(circle at top, rgba(34,211,238,0.35), transparent 60%), radial-gradient(circle at bottom right, rgba(139,92,246,0.35), transparent 55%)',
    }}
    />
  </motion.div>
);

export default FloatingBadge;
