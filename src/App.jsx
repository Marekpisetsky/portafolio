import { useEffect, useRef, useState } from 'react'

const languageOptions = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
]

const copy = {
  es: {
    meta: 'CV digital / 2025',
    heroTitle: 'Marek Andrei Pisetsky Neyra',
    heroSubtitle: 'International Business · Marketing · Labs sostenibles',
    heroParagraph:
      'Combino marketing, competencias internacionales y herramientas tecnicas para ayudar a empresas sostenibles a lanzar, medir y escalar experiencias en Europa.',
    heroPrimaryCta: 'Agenda una llamada',
    heroSecondaryCta: 'Ver contacto',
    heroSignal: 'Listo para traineeships internacionales',
    highlightsTitle: 'Impacto clave',
    highlightsDescription: 'Colaboraciones verificables con BYK, Print.com, Comfort Zone y el council de Saxion.',
    layersTitle: 'Mapa de capacidades',
    layersDescription: 'Una unica vista que resume proyectos, herramientas, educacion y competencias.',
    experienceTitle: 'Experiencia aplicada',
    experienceDescription: 'Colaboraciones reales con empresas centradas en sostenibilidad y crecimiento.',
    contactTitle: 'Signal desk',
    contactDescription: 'Correo, llamada o nota de voz. Respondo en menos de 48 horas.',
    languageLabel: 'Idioma',
    heroNav: [
      { label: 'Mapa', target: '#matrix' },
      { label: 'Certificaciones', target: '#matrix' },
      { label: 'Contacto', target: '#contact' },
    ],
  },
  en: {
    meta: 'Digital CV / 2025',
    heroTitle: 'Marek Andrei Pisetsky Neyra',
    heroSubtitle: 'International Business · Marketing · Sustainable labs',
    heroParagraph:
      'I blend marketing, international competencies, and technical tools to help sustainable companies launch, measure, and scale experiences across Europe.',
    heroPrimaryCta: 'Schedule a call',
    heroSecondaryCta: 'View contact',
    heroSignal: 'Open for international traineeships',
    highlightsTitle: 'Key impact',
    highlightsDescription: 'Verifiable collaborations with BYK, Print.com, Comfort Zone, and Saxion council.',
    layersTitle: 'Capability map',
    layersDescription: 'A single glance captures projects, tools, education, and skills.',
    experienceTitle: 'Applied experience',
    experienceDescription: 'Hands-on collaborations with sustainability-focused companies.',
    contactTitle: 'Signal desk',
    contactDescription: 'Email, call, or voice memo. I reply within 48 hours.',
    languageLabel: 'Language',
    heroNav: [
      { label: 'Map', target: '#matrix' },
      { label: 'Certifications', target: '#matrix' },
      { label: 'Contact', target: '#contact' },
    ],
  },
}

const heroFocus = [
  { es: 'Marketing estrategico', en: 'Strategic marketing' },
  { es: 'Competencias internacionales', en: 'International competencies' },
  { es: 'Innovacion sostenible', en: 'Sustainable innovation' },
]

const highlightMetrics = [
  {
    label: { es: 'BYK', en: 'BYK' },
    value: 'Sustainability playbook',
    detail: {
      es: 'Research + narrativa comercial para quimicos verdes.',
      en: 'Research + commercial narrative for green chemicals.',
    },
    tone: 'one',
  },
  {
    label: { es: 'Print.com', en: 'Print.com' },
    value: 'Circular go-to-market',
    detail: {
      es: 'Plan comercial para impresiones sin residuos en Benelux.',
      en: 'Commercial plan for zero-waste printing in Benelux.',
    },
    tone: 'two',
  },
  {
    label: { es: 'Comfort Zone', en: 'Comfort Zone' },
    value: 'Retail experience',
    detail: {
      es: 'Journeys omnicanal para bienestar consciente.',
      en: 'Omnichannel journeys for conscious wellbeing.',
    },
    tone: 'three',
  },
  {
    label: { es: 'Saxion Council', en: 'Saxion Council' },
    value: 'Student representation',
    detail: {
      es: 'Consejo estudiantil que define decisiones academicas.',
      en: 'Student council shaping academic decisions.',
    },
    tone: 'four',
  },
]

const cvLayers = [
  {
    code: '01',
    title: { es: 'Negocios internacionales', en: 'International business' },
    detail: { es: 'Finanzas, supply, marketing global y compliance en la UE.', en: 'Finance, supply, global marketing, and EU compliance.' },
    tag: { es: 'Fundamento', en: 'Foundation' },
    unlockAt: 0.02,
  },
  {
    code: '02',
    title: { es: 'Estrategia + research', en: 'Strategy + research' },
    detail: { es: 'Due diligence, estudios de mercado y planes GTM.', en: 'Due diligence, market studies, and GTM plans.' },
    tag: { es: 'Aplicacion', en: 'Application' },
    unlockAt: 0.18,
  },
  {
    code: '03',
    title: { es: 'Producto + crecimiento', en: 'Product + growth' },
    detail: {
      es: 'Loops de experimentacion, dashboards y storytelling de metricas.',
      en: 'Experiment loops, dashboards, and metric storytelling.',
    },
    tag: { es: 'Ejecucion', en: 'Execution' },
    unlockAt: 0.38,
  },
  {
    code: '04',
    title: { es: 'Liderazgo multicultural', en: 'Multicultural leadership' },
    detail: {
      es: 'Equipos distribuidos, hubs LATAM-EU y workshops bilingues.',
      en: 'Distributed teams, LATAM-EU hubs, and bilingual workshops.',
    },
    tag: { es: 'Conexion', en: 'Connection' },
    unlockAt: 0.58,
  },
]

const experience = [
  {
    role: { es: 'Marketing & Sustainability Analyst', en: 'Marketing & Sustainability Analyst' },
    company: 'BYK Chemicals',
    period: { es: '2024 / Arnhem + remoto', en: '2024 / Arnhem + remote' },
    impact: {
      es: 'Mapee oportunidades de productos quimicos verdes y disene el playbook de mensajes para ventas B2B.',
      en: 'Mapped green chemical opportunities and designed the B2B messaging playbook.',
    },
    stack: ['Market sizing', 'Persona labs', 'Story decks'],
  },
  {
    role: { es: 'Commercial Strategy Intern', en: 'Commercial Strategy Intern' },
    company: 'Print.com',
    period: { es: '2023 / Arnhem', en: '2023 / Arnhem' },
    impact: {
      es: 'Co-diseñe un go-to-market circular para impresiones sin residuos en Benelux.',
      en: 'Co-designed a circular go-to-market for zero-waste printing in Benelux.',
    },
    stack: ['GTM', 'Partner mapping', 'Sustainability KPIs'],
  },
  {
    role: { es: 'Customer Experience Partner', en: 'Customer Experience Partner' },
    company: 'Comfort Zone',
    period: { es: '2022 / Barcelona', en: '2022 / Barcelona' },
    impact: {
      es: 'Construí journeys y pilotos omnicanal para bienestar consciente.',
      en: 'Built journeys and omnichannel pilots for conscious wellbeing.',
    },
    stack: ['Service design', 'CRM cadences', 'Workshops'],
  },
]

const education = [
  {
    institution: 'HAN UAS',
    program: { es: 'BBA International Business & Marketing', en: 'BBA International Business & Marketing' },
    year: '2021 - 2025',
    detail: {
      es: 'Especializacion en Competencias Internacionales y Growth sostenible.',
      en: 'Specialisation in International Competencies and sustainable growth.',
    },
  },
  {
    institution: 'Saxion University',
    program: { es: 'School Council / Student Representation', en: 'School Council / Student Representation' },
    year: '2024 - actual',
    detail: {
      es: 'Represento a estudiantes en decisiones estrategicas de la facultad.',
      en: 'Represent students in strategic faculty decisions.',
    },
  },
]

const certifications = [
  { name: 'Vuforia Mastery', issuer: 'PTC', year: '2024' },
  { name: 'Office Specialist', issuer: 'Microsoft', year: '2023' },
  { name: 'Adobe Photoshop', issuer: 'Adobe', year: '2022' },
  { name: 'Adobe Illustrator', issuer: 'Adobe', year: '2022' },
  { name: 'Unity Foundations', issuer: 'Unity', year: '2022' },
  { name: 'SketchUp Fundamentals', issuer: 'Trimble', year: '2021' },
]

const skillClusters = [
  {
    title: { es: 'Estrategia + investigacion', en: 'Strategy + research' },
    skills: [
      { label: { es: 'Dimensionamiento de mercado', en: 'Market sizing' }, level: 0.9 },
      { label: { es: 'Frameworks GTM', en: 'GTM frameworks' }, level: 0.85 },
      { label: { es: 'Modelado de negocio', en: 'Business modelling' }, level: 0.8 },
    ],
  },
  {
    title: { es: 'Operaciones + herramientas', en: 'Operations + tools' },
    skills: [
      { label: { es: 'Notion / ClickUp', en: 'Notion / ClickUp' }, level: 0.88 },
      { label: { es: 'Power BI / Tableau', en: 'Power BI / Tableau' }, level: 0.75 },
      { label: { es: 'Excel avanzado', en: 'Advanced Excel' }, level: 0.82 },
    ],
  },
  {
    title: { es: 'Comunicacion', en: 'Communication' },
    skills: [
      { label: { es: 'Storytelling ejecutivo', en: 'Executive storytelling' }, level: 0.87 },
      { label: { es: 'Facilitacion bilingue', en: 'Bilingual facilitation' }, level: 0.9 },
      { label: { es: 'Copy estrategico', en: 'Strategic copy' }, level: 0.78 },
    ],
  },
]

const languageSkills = [
  { label: { es: 'Espanol', en: 'Spanish' }, level: { es: 'Nativo / C2', en: 'Native / C2' } },
  { label: { es: 'Ingles', en: 'English' }, level: { es: 'C1 profesional', en: 'C1 professional' } },
  { label: { es: 'Holandes', en: 'Dutch' }, level: { es: 'B1 en progreso', en: 'B1 in progress' } },
]

const techTools = [
  {
    name: 'Power BI',
    detail: {
      es: 'Dashboards interactivos y storytelling de datos.',
      en: 'Interactive dashboards and data storytelling.',
    },
  },
  {
    name: 'Notion + ClickUp',
    detail: {
      es: 'Workrooms compartidos para research y growth.',
      en: 'Shared workrooms for research and growth.',
    },
  },
  {
    name: 'Figma',
    detail: {
      es: 'Sistemas ligeros para landing o investor decks.',
      en: 'Lightweight systems for landings or investor decks.',
    },
  },
  {
    name: 'Unity + Vuforia',
    detail: {
      es: 'Prototipos inmersivos y visualizaciones de datos.',
      en: 'Immersive prototypes and data visualisations.',
    },
  },
  {
    name: 'Photoshop / Illustrator',
    detail: {
      es: 'Narrativas visuales para marketing y pitch.',
      en: 'Visual narratives for marketing and pitch.',
    },
  },
  {
    name: 'SketchUp',
    detail: {
      es: 'Layouts de retail y experiencias espaciales.',
      en: 'Retail layouts and spatial experiences.',
    },
  },
]

const signals = [
  {
    label: { es: 'Email', en: 'Email' },
    value: 'marekpisetsky001@gmail.com',
    hint: { es: 'Comparte contexto o un deck y coordinamos agenda.', en: 'Share context or a deck and we align calendars.' },
    href: 'mailto:marekpisetsky001@gmail.com',
  },
  {
    label: { es: 'WhatsApp / Phone', en: 'WhatsApp / Phone' },
    value: '+31 620 935 300',
    hint: { es: 'Notas de voz y seguimiento rapido. Signal disponible.', en: 'Voice notes and fast follow-ups. Signal available.' },
    href: 'tel:+31620935300',
  },
  {
    label: { es: 'Base', en: 'Base' },
    value: 'Arnhem, NL / dispuesto a reubicarme en EU',
    hint: { es: 'Trabajo hibrido, remoto y viajes puntuales.', en: 'Hybrid, remote, and targeted travel.' },
  },
]

const timeline = [
  {
    year: '2025',
    detail: {
      es: 'Buscando residencias estrategicas y trainee programs en consultoria o venture building.',
      en: 'Seeking strategic residencies and trainee programs in consulting or venture building.',
    },
    status: { es: 'Disponible', en: 'Available' },
  },
  {
    year: '2024',
    detail: {
      es: 'Internship en movilidad sostenible y liderazgo en laboratorios de innovacion.',
      en: 'Internship in sustainable mobility and leadership in innovation labs.',
    },
    status: { es: 'Growth focus', en: 'Growth focus' },
  },
  {
    year: 'Origen',
    detail: {
      es: 'Lima > Barcelona > Arnhem. Vision multicultural y redes EU / LATAM.',
      en: 'Lima > Barcelona > Arnhem. Multicultural view and EU / LATAM network.',
    },
    status: { es: 'Global lens', en: 'Global lens' },
  },
]

const App = () => {
  const [language, setLanguage] = useState('es')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [cursorIntent, setCursorIntent] = useState('idle')
  const dragState = useRef({ active: false, lastY: 0 })

  useEffect(() => {
    document.body.classList.add('has-custom-cursor')
    return () => document.body.classList.remove('has-custom-cursor')
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY || window.pageYOffset
      const doc = document.documentElement.scrollHeight - window.innerHeight
      const progress = doc > 0 ? top / doc : 0
      setScrollProgress(Math.min(Math.max(progress, 0), 1))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handlePointerMove = (event) => {
      setCursorPos({ x: event.clientX, y: event.clientY })
      if (dragState.current.active) {
        const deltaY = event.clientY - dragState.current.lastY
        window.scrollBy({ top: -deltaY, behavior: 'auto' })
        dragState.current.lastY = event.clientY
        setCursorIntent('press')
      } else {
        setCursorIntent((prev) => (prev === 'press' ? prev : 'active'))
      }
    }

    const handlePointerDown = (event) => {
      if (event.button !== 0) return
      dragState.current.active = true
      dragState.current.lastY = event.clientY
      document.body.classList.add('drag-scroll-active')
      setCursorIntent('press')
    }

    const releaseDrag = () => {
      dragState.current.active = false
      document.body.classList.remove('drag-scroll-active')
      setCursorIntent('active')
    }

    const handlePointerLeave = () => {
      dragState.current.active = false
      document.body.classList.remove('drag-scroll-active')
      setCursorIntent('idle')
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('pointerup', releaseDrag)
    window.addEventListener('pointercancel', releaseDrag)
    window.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointerup', releaseDrag)
      window.removeEventListener('pointercancel', releaseDrag)
      window.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [])

  const progressPercent = Math.round(scrollProgress * 100)
  const unlockedLayers = cvLayers.map((layer) => ({
    ...layer,
    unlocked: scrollProgress + 0.08 >= layer.unlockAt,
    progress: Math.min(Math.max((scrollProgress - layer.unlockAt + 0.2) / 0.2, 0), 1),
  }))
  const currentLayer = unlockedLayers.filter((layer) => layer.unlocked).slice(-1)[0] ?? cvLayers[0]
  const unlockedPercent =
    (unlockedLayers.filter((layer) => layer.unlocked).length / unlockedLayers.length) * 100

  const t = copy[language]

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#02040f] text-white">
  <div className="surface-grid pointer-events-none absolute inset-0 -z-20" aria-hidden="true" />
  <div className="orb orb--left" aria-hidden="true" />
  <div className="orb orb--right" aria-hidden="true" />
      <div className="gradient-band gradient-band--one" aria-hidden="true" />
      <div className="gradient-band gradient-band--two" aria-hidden="true" />
      <div className="portal-overlay" aria-hidden="true">
        <span className="portal-overlay__ring portal-overlay__ring--one" />
        <span className="portal-overlay__ring portal-overlay__ring--two" />
        <span className="portal-overlay__ring portal-overlay__ring--three" />
        <span className="portal-overlay__grid" />
      </div>
      <div className="energy-strata" aria-hidden="true" />
      <div className="scanline-overlay" aria-hidden="true" />
  <div className="pointer-events-none absolute inset-0 -z-10 noise-texture" aria-hidden="true" />
  <div className="geo-shape geo-shape--one" aria-hidden="true" />
  <div className="geo-shape geo-shape--two" aria-hidden="true" />

      <div
        className="cursor"
        data-intent={cursorIntent}
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
        aria-hidden="true"
      />

      <div className="scroll-meter" aria-hidden="true">
        <span className="scroll-meter__label">Scroll</span>
        <span className="scroll-meter__value">{progressPercent.toString().padStart(2, '0')}</span>
        <div className="scroll-meter__track">
          <div style={{ height: `${progressPercent}%` }} />
        </div>
        <p className="scroll-meter__stage">{currentLayer.title[language]}</p>
      </div>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-6 pb-28 pt-16 md:px-10 lg:pt-24">
        <section id="hero" className="hero-shell relative overflow-hidden rounded-[46px] border border-white/10 bg-white/[0.02] p-8 md:p-12">
          <div className="hero-cascade" aria-hidden="true">
            <span className="hero-cascade__beam hero-cascade__beam--one" />
            <span className="hero-cascade__beam hero-cascade__beam--two" />
            <span className="hero-cascade__orb" />
          </div>
          <div className="hero-language">
            <span>{t.languageLabel}</span>
            <div className="hero-language__buttons">
              {languageOptions.map((option) => (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => setLanguage(option.code)}
                  className={option.code === language ? 'active' : ''}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="hero-grid">
            <div className="hero-primary">
              <p className="text-xs uppercase tracking-[0.6em] text-white/60">{t.meta}</p>
              <h1 className="text-4xl font-light leading-tight text-white md:text-6xl">{t.heroTitle}</h1>
              <p className="text-xl text-white/85 md:text-2xl">{t.heroSubtitle}</p>
              <p className="text-base text-white/70">{t.heroParagraph}</p>
              <ul className="hero-focus">
                {heroFocus.map((item) => (
                  <li key={item.es}>{item[language]}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="hero-actions">
            <div className="hero-cta-group">
              <a href="mailto:marekpisetsky001@gmail.com?subject=Colaboracion%20CV" className="cta-primary">
                {t.heroPrimaryCta}
              </a>
              <a href="#contact" className="cta-ghost">
                {t.heroSecondaryCta}
              </a>
            </div>
            <div className="hero-progress">
              <div className="hero-progress__bar">
                <div style={{ width: `${unlockedPercent}%` }} />
              </div>
              <span className="text-xs uppercase tracking-[0.4em] text-white/50">{t.heroSignal}</span>
            </div>
          </div>

          <div className="hero-nav">
            {t.heroNav.map((item) => (
              <a key={item.target} href={item.target}>
                {item.label}
              </a>
            ))}
          </div>
        </section>

        <section id="impact" className="mt-24 highlight-shell rounded-[40px] border border-white/10 p-8 md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.6em] text-white/55">{t.highlightsTitle}</p>
              <h2 className="mt-3 text-3xl font-light text-white md:text-[38px]">{t.highlightsDescription}</h2>
            </div>
          </div>
          <div className="metric-grid mt-10">
            {highlightMetrics.map((metric) => (
              <article key={metric.value} className="metric-card" data-tone={metric.tone}>
                <p className="text-xs uppercase tracking-[0.5em] text-white/60">{metric.label[language]}</p>
                <h3 className="text-3xl font-semibold text-white">{metric.value}</h3>
                <p className="text-sm text-white/70">{metric.detail[language]}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="matrix" className="mt-28 border-t border-white/10 pt-16">
          <div className="matrix-intro">
            <p className="text-xs uppercase tracking-[0.6em] text-white/55">{t.layersTitle}</p>
            <h2 className="text-3xl font-light text-white md:text-[40px]">{t.layersDescription}</h2>
          </div>
          <div className="matrix-grid">
            <article className="matrix-panel matrix-panel--experience">
              <header>
                <p className="text-xs uppercase tracking-[0.5em] text-white/50">{t.experienceTitle}</p>
                <span className="text-xs uppercase tracking-[0.45em] text-white/35">2022 - 2025</span>
              </header>
              <div className="matrix-panel__scroll">
                {experience.map((item, index) => (
                  <div key={item.company} className="matrix-experience">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg text-white">{item.role[language]}</h3>
                      <span className="text-[10px] uppercase tracking-[0.4em] text-white/45">{`0${index + 1}`}</span>
                    </div>
                    <p className="text-xs uppercase tracking-[0.4em] text-white/40">{item.period[language]}</p>
                    <p className="mt-3 text-sm text-white/70">{item.impact[language]}</p>
                    <div className="flex flex-wrap gap-1.5 pt-3">
                      {item.stack.map((chip) => (
                        <span key={chip} className="badge badge--ghost">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="matrix-panel">
              <header>
                <p className="text-xs uppercase tracking-[0.5em] text-white/50">{t.layersTitle}</p>
              </header>
              <div className="matrix-layer-grid">
                {unlockedLayers.map((layer) => (
                  <div key={layer.code} className="matrix-layer">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">{layer.code}</span>
                    <h3 className="text-base text-white">{layer.title[language]}</h3>
                    <p className="text-sm text-white/65">{layer.detail[language]}</p>
                    <div className="layer-progress">
                      <div style={{ width: `${layer.progress * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="matrix-panel">
              <header>
                <p className="text-xs uppercase tracking-[0.5em] text-white/50">{t.toolsTitle}</p>
              </header>
              <ul className="matrix-list">
                {techTools.map((tool) => (
                  <li key={tool.name}>
                    <h3 className="text-base text-white">{tool.name}</h3>
                    <p className="text-sm text-white/65">{tool.detail[language]}</p>
                  </li>
                ))}
              </ul>
            </article>

            <article className="matrix-panel">
              <header>
                <p className="text-xs uppercase tracking-[0.5em] text-white/50">Educacion & Certificaciones</p>
              </header>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.institution} className="matrix-edu">
                    <div className="flex items-center justify-between text-white/40 text-[10px] uppercase tracking-[0.4em]">
                      <span>{edu.institution}</span>
                      <span>{edu.year}</span>
                    </div>
                    <p className="text-base text-white">{edu.program[language]}</p>
                    <p className="text-sm text-white/65">{edu.detail[language]}</p>
                  </div>
                ))}
              </div>
              <div className="matrix-cert-grid">
                {certifications.map((cert) => (
                  <div key={cert.name} className="matrix-cert">
                    <p className="text-sm text-white">{cert.name}</p>
                    <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">{cert.year}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="matrix-panel">
              <header>
                <p className="text-xs uppercase tracking-[0.5em] text-white/50">{t.skillsTitle}</p>
              </header>
              <div className="space-y-4">
                {skillClusters.map((cluster) => (
                  <div key={cluster.title.es}>
                    <h3 className="text-base text-white">{cluster.title[language]}</h3>
                    <div className="space-y-2.5 pt-2">
                      {cluster.skills.map((skill) => (
                        <div key={skill.label.es} className="skill-bar">
                          <div className="flex items-center justify-between text-xs text-white/60">
                            <span>{skill.label[language]}</span>
                            <span>{Math.round(skill.level * 100)}%</span>
                          </div>
                          <div className="skill-bar__track">
                            <div style={{ width: `${skill.level * 100}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="matrix-panel">
              <header>
                <p className="text-xs uppercase tracking-[0.5em] text-white/50">Idiomas</p>
              </header>
              <div className="space-y-3">
                {languageSkills.map((lang) => (
                  <div key={lang.label.es} className="language-row">
                    <span>{lang.label[language]}</span>
                    <p>{lang.level[language]}</p>
                  </div>
                ))}
              </div>
              <div className="availability-card card-parallax mt-6">
                <p className="text-xs uppercase tracking-[0.5em] text-white/45">Availability</p>
                <h3 className="text-2xl text-white">June 2025</h3>
                <p className="text-sm text-white/70">Ready for trainee, analyst, or strategy rotation programs.</p>
                <span className="badge badge--accent">EU work permit</span>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="mt-28 border-t border-white/10 pt-16">
          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.6em] text-white/55">{t.contactTitle}</p>
              <h2 className="mt-4 text-3xl font-light text-white md:text-[38px]">{t.contactDescription}</h2>
              <div className="mt-10 space-y-6 rounded-3xl border border-white/10 p-6">
                {timeline.map((entry) => (
                  <div key={entry.year} className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-[0.45em] text-white/45">{entry.year}</span>
                      <span className="badge badge--ghost">{entry.status[language]}</span>
                    </div>
                    <p className="text-sm text-white/70">{entry.detail[language]}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              {signals.map((signal) => (
                <div key={signal.value} className="contact-card">
                  <p className="text-[11px] uppercase tracking-[0.55em] text-white/40">{signal.label[language]}</p>
                  {signal.href ? (
                    <a href={signal.href} className="text-2xl text-white transition hover:text-white/80">
                      {signal.value}
                    </a>
                  ) : (
                    <p className="text-2xl text-white">{signal.value}</p>
                  )}
                  <p className="text-sm text-white/60">{signal.hint[language]}</p>
                </div>
              ))}
              <p className="text-xs uppercase tracking-[0.5em] text-white/45">
                Notion / Figma / Power BI / Google Workspace
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 px-6 text-xs uppercase tracking-[0.5em] text-white/40 md:flex-row md:items-center md:px-10">
          <span>&copy; {new Date().getFullYear()} Marek A. Pisetsky Neyra</span>
          <span>International business / technology strategy</span>
        </div>
      </footer>
    </div>
  )
}

export default App
