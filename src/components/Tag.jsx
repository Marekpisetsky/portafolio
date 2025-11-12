const Tag = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-[0_0_20px_rgba(34,211,238,0.3)] backdrop-blur">
    <span className="h-2 w-2 rounded-full bg-gradient-to-tr from-brand-teal to-brand-purple" />
    {children}
  </span>
);

export default Tag;
