import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { href: '#top', label: 'About' },
  { href: '#strategy', label: 'Strategy' },
  { href: '#technology', label: 'Technology' },
  { href: '#experience', label: 'Experience' },
  { href: '#languages', label: 'Languages' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-slate-950/80 px-6 py-3 backdrop-blur-xl">
          <a href="#top" className="flex items-center gap-2 text-sm font-semibold text-white">
            <span className="h-3 w-3 rounded-full bg-brand-teal" />
            Marek Pisetsky
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative transition hover:text-brand-teal"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 h-px w-full scale-x-0 bg-gradient-to-r from-brand-teal via-brand-purple to-brand-lime transition group-hover:scale-x-100" />
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-200 md:hidden"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-rounded">menu</span>
          </button>
        </nav>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mx-auto mt-2 max-w-6xl px-6 md:hidden"
          >
            <div className="rounded-3xl border border-white/10 bg-slate-950/90 p-6 backdrop-blur-xl">
              <ul className="space-y-4 text-sm font-semibold text-slate-200">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-brand-teal/50 hover:text-brand-teal"
                    >
                      {item.label}
                      <span className="material-symbols-rounded text-brand-teal">arrow_outward</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
