import SectionHeader from '../components/SectionHeader.jsx';
import FloatingBadge from '../components/FloatingBadge.jsx';
import { technologyHighlights, tools } from '../data/skills.js';

const Technology = () => (
  <section id="technology" className="relative py-24">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(34,211,238,0.18),_transparent_60%)]" />
    <div className="relative mx-auto max-w-6xl px-6">
      <SectionHeader
        eyebrow="Digital Edge"
        title="Technological fluency that supports strategic storytelling"
        description="Practical experience with immersive media, prototyping, and digital collaboration tools that enhance business narratives."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {technologyHighlights.map((highlight, index) => (
          <FloatingBadge
            key={highlight.title}
            icon={<span className="material-symbols-rounded text-brand-teal">memory_alt</span>}
            title={highlight.title}
            description={highlight.description}
            delay={index * 0.15}
          />
        ))}
        <FloatingBadge
          icon={<span className="material-symbols-rounded text-brand-purple">devices</span>}
          title="Digital Toolkit"
          description={`Comfortable orchestrating workflows across ${tools.slice(0, 4).join(', ')} and more.`}
          delay={0.45}
        />
      </div>
    </div>
  </section>
);

export default Technology;
