import { motion } from 'framer-motion';

const LanguageCard = ({ language, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.6 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="rounded-2xl border border-white/10 bg-slate-900/50 px-6 py-5 text-center shadow-inner shadow-brand-purple/20"
  >
    <p className="text-lg font-semibold text-white">{language.name}</p>
    <p className="mt-2 text-sm uppercase tracking-wide text-brand-teal/80">{language.level}</p>
  </motion.div>
);

export default LanguageCard;
