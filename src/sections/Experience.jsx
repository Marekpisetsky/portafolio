import SectionHeader from '../components/SectionHeader.jsx';
import TimelineCard from '../components/TimelineCard.jsx';
import { experiences, education } from '../data/experience.js';

const Experience = () => (
  <section id="experience" className="relative py-24">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(15,23,42,0.65),_rgba(15,23,42,1))]" />
    <div className="relative mx-auto max-w-6xl px-6">
      <SectionHeader
        eyebrow="Experience"
        title="Projects that connect strategic insights with digital experimentation"
        description="From university challenges to independent ventures, I translate ideas into tangible solutions that support growth and sustainability."
      />
      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="text-sm uppercase tracking-[0.3em] text-slate-400">Professional & Project Work</h3>
          <ul className="mt-6 space-y-8">
            {experiences.map((item, index) => (
              <TimelineCard key={item.title} item={item} index={index} />
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-[0.3em] text-slate-400">Education & Learning</h3>
          <ul className="mt-6 space-y-8">
            {education.map((item, index) => (
              <TimelineCard key={item.title} item={item} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
