import SectionHeader from '../components/SectionHeader.jsx';
import LanguageCard from '../components/LanguageCard.jsx';
import { languages } from '../data/skills.js';

const Languages = () => (
  <section id="languages" className="relative py-24">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(139,92,246,0.18),_transparent_55%)]" />
    <div className="relative mx-auto max-w-6xl px-6">
      <SectionHeader
        eyebrow="Global Mindset"
        title="Multilingual communication for cross-border collaboration"
        description="Fluent across Spanish, English, and Dutch to navigate multicultural teams and international opportunities."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {languages.map((language, index) => (
          <LanguageCard key={language.name} language={language} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Languages;
