import { motion } from 'framer-motion';

const TimelineCard = ({ item, index }) => (
  <motion.li
    initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, delay: index * 0.1 }}
    className="relative pl-10"
  >
    <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-gradient-to-tr from-brand-teal to-brand-purple" />
    <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 shadow-[0_20px_45px_-20px_rgba(15,23,42,0.8)] backdrop-blur">
      <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
        <span className="text-sm uppercase tracking-widest text-brand-teal/80">{item.period || item.graduation}</span>
      </div>
      <p className="mt-3 text-sm text-slate-300 leading-relaxed">{item.description || item.focus}</p>
      {item.highlights && (
        <ul className="mt-4 space-y-2 text-sm text-slate-300">
          {item.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-lime" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </motion.li>
);

export default TimelineCard;
