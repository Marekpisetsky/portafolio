const SectionHeader = ({ eyebrow, title, description }) => (
  <div className="max-w-3xl">
    {eyebrow && (
      <span className="text-brand-teal uppercase tracking-[0.3em] text-xs font-semibold">
        {eyebrow}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-semibold mt-2 bg-gradient-to-r from-brand-teal via-brand-purple to-brand-lime text-transparent bg-clip-text">
      {title}
    </h2>
    {description && <p className="mt-4 text-slate-300 leading-relaxed">{description}</p>}
  </div>
);

export default SectionHeader;
