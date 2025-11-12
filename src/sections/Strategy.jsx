import SectionHeader from '../components/SectionHeader.jsx';
import FloatingBadge from '../components/FloatingBadge.jsx';
import { strategyFocus } from '../data/skills.js';

const Strategy = () => (
  <section id="strategy" className="relative py-24">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(163,230,53,0.2),_transparent_55%)]" />
    <div className="relative mx-auto max-w-6xl px-6">
      <SectionHeader
        eyebrow="Strategic Core"
        title="International business mindset anchored in strategy and sustainability"
        description="Grounded in analytical thinking, cross-cultural collaboration, and a passion for building sustainable market opportunities."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {strategyFocus.map((focus, index) => (
          <FloatingBadge
            key={focus.title}
            icon={<span className="material-symbols-rounded text-brand-lime">insights</span>}
            title={focus.title}
            description={focus.description}
            delay={index * 0.08}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Strategy;
