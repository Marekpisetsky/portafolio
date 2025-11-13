
import { useEffect, useState } from 'react'

const languageOptions = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'nl', label: 'NL' },
]

const themeOptions = [
  { code: 'light', label: { es: 'Claro', en: 'Light', nl: 'Licht' } },
  { code: 'dark', label: { es: 'Oscuro', en: 'Dark', nl: 'Donker' } },
]


const copy = {
  es: {
    meta: 'CV internacional / 2025',
    heroTitle: 'Marek Andrei Pisetsky Neyra',
    heroSubtitle: 'Negocios internacionales | Estrategia | Desarrollo organizacional',
    heroParagraph:
      'Estudiante de Negocios Internacionales enfocado en estrategia, administracion y desarrollo organizacional. Conecto analisis de mercado, proyectos multiculturales y herramientas digitales para apoyar a empresas de comercio, logistica y consultoria.',
    heroPrimaryCta: 'Coordinar una reunion',
    heroSecondaryCta: 'Ver detalles',
    heroSignal: 'Disponible para programas trainee y practicas en negocios internacionales',
    highlightsTitle: 'Casos destacados',
    highlightsDescription: 'Estrategia de marca para Comfort Zone, analisis de mercado para BYK y mapa de experiencia de cliente para Print.com.',
    layersTitle: 'Pilares profesionales',
    layersDescription: 'Estrategia, investigacion, liderazgo y habilitadores digitales en una sola vista.',
    toolsTitle: 'Plataformas de trabajo',
    toolsDescription: 'Herramientas para investigacion, coordinacion y reportes ejecutivos.',
    skillsTitle: 'Fortalezas clave',
    skillsDescription: 'Estrategia, analisis y liderazgo intercultural.',
    educationTitle: 'Educacion y liderazgo',
    educationDescription: 'Programa BBA en Saxion y representacion estudiantil activa.',
    experienceTitle: 'Experiencia aplicada',
    experienceDescription: 'Proyectos reales orientados a marca, analisis y servicio al cliente.',
    contactTitle: 'Contacto directo',
    contactDescription: 'Correo, llamada o mensaje. Respondo en menos de 48 horas.',
    languageLabel: 'Idioma',
    themeLabel: 'Tema',
    currentFocusLabel: 'Enfoque actual',
    statusLabel: 'Estado',
    languagesAvailabilityLabel: 'Idiomas y disponibilidad',
    availabilityLabel: 'Disponibilidad',
    nextStepsLabel: 'Proximos pasos',
    certificationsLabel: 'Certificaciones',
    contactTools: 'Notion / Trello / Power BI / Microsoft Office',
    spotlightsTitle: 'Casos de negocio',
    spotlightsDescription: 'Ejemplos de como conecto estrategia, investigacion y equipos internacionales.',
    spotlightsBadge: 'Casos',
    footerTagline: 'Negocios internacionales con enfoque estrategico',
  },
  en: {
    meta: 'International CV / 2025',
    heroTitle: 'Marek Andrei Pisetsky Neyra',
    heroSubtitle: 'International Business | Strategy | Organizational development',
    heroParagraph:
      'International Business student focused on strategy, administration, and organizational development. I connect market analysis, multicultural teamwork, and digital tools to support companies in trade, logistics, and consulting.',
    heroPrimaryCta: 'Set up a call',
    heroSecondaryCta: 'View details',
    heroSignal: 'Available for international business placements and trainee programs',
    highlightsTitle: 'Featured work',
    highlightsDescription: 'Brand strategy for Comfort Zone, market analysis for BYK, and customer journey design for Print.com.',
    layersTitle: 'Professional pillars',
    layersDescription: 'Strategy, research, leadership, and digital enablers in one view.',
    toolsTitle: 'Work platforms',
    toolsDescription: 'Suites for research, coordination, and executive reporting.',
    skillsTitle: 'Core strengths',
    skillsDescription: 'Strategy, analysis, and cross-cultural leadership.',
    educationTitle: 'Education & leadership',
    educationDescription: 'BBA program at Saxion plus active student representation.',
    experienceTitle: 'Applied experience',
    experienceDescription: 'Real assignments focused on branding, research, and client journeys.',
    contactTitle: 'Direct contact',
    contactDescription: 'Email, call, or message. I reply within 48 hours.',
    languageLabel: 'Language',
    themeLabel: 'Theme',
    currentFocusLabel: 'Current focus',
    statusLabel: 'Status',
    languagesAvailabilityLabel: 'Languages & availability',
    availabilityLabel: 'Availability',
    nextStepsLabel: 'Next steps',
    certificationsLabel: 'Certifications',
    contactTools: 'Notion / Trello / Power BI / Microsoft Office',
    spotlightsTitle: 'Business spotlights',
    spotlightsDescription: 'Examples of how I connect strategy, research, and international teams.',
    spotlightsBadge: 'Labs',
    footerTagline: 'International business with a strategic lens',
  },
  nl: {
    meta: 'Internationaal CV / 2025',
    heroTitle: 'Marek Andrei Pisetsky Neyra',
    heroSubtitle: 'International Business | Strategie | Organisatieontwikkeling',
    heroParagraph:
      'International Business student met focus op strategie, administratie en organisatieontwikkeling. Ik verbind marktanalyse, multiculturele teams en digitale tools om bedrijven in handel, logistiek en consultancy te ondersteunen.',
    heroPrimaryCta: 'Plan een gesprek',
    heroSecondaryCta: 'Bekijk details',
    heroSignal: 'Beschikbaar voor internationale business traineeships',
    highlightsTitle: 'Belangrijkste cases',
    highlightsDescription: 'Brandstrategie voor Comfort Zone, marktanalyse voor BYK en customer journey voor Print.com.',
    layersTitle: 'Professionele pijlers',
    layersDescription: 'Strategie, research, leiderschap en digitale enablers in een overzicht.',
    toolsTitle: 'Werkplatforms',
    toolsDescription: 'Suites voor research, coordinatie en executive rapportages.',
    skillsTitle: 'Belangrijkste sterktes',
    skillsDescription: 'Strategie, analyse en cross-cultureel leiderschap.',
    educationTitle: 'Opleiding en leiderschap',
    educationDescription: 'BBA-programma bij Saxion plus actieve studentenvertegenwoordiging.',
    experienceTitle: 'Toegepaste ervaring',
    experienceDescription: 'Echte opdrachten rond branding, research en klantreizen.',
    contactTitle: 'Direct contact',
    contactDescription: 'Mail, bel of stuur een bericht. Reactie binnen 48 uur.',
    languageLabel: 'Taal',
    themeLabel: 'Thema',
    currentFocusLabel: 'Huidige focus',
    statusLabel: 'Status',
    languagesAvailabilityLabel: 'Talen en beschikbaarheid',
    availabilityLabel: 'Beschikbaarheid',
    nextStepsLabel: 'Volgende stappen',
    certificationsLabel: 'Certificeringen',
    contactTools: 'Notion / Trello / Power BI / Microsoft Office',
    spotlightsTitle: 'Business cases',
    spotlightsDescription: 'Voorbeelden van hoe ik strategie, research en internationale teams verbind.',
    spotlightsBadge: 'Cases',
    footerTagline: 'International business met een strategische blik',
  },
}


const heroFocus = [
  { es: 'Estrategia de negocio', en: 'Business strategy', nl: 'Business strategie' },
  { es: 'Inteligencia de mercado', en: 'Market intelligence', nl: 'Marktinzicht' },
  { es: 'Coordinacion multicultural', en: 'Multicultural coordination', nl: 'Multiculturele coordinatie' },
]

const navigationLinks = [
  { id: 'overview', label: { es: 'Resumen', en: 'Overview', nl: 'Overzicht' } },
  { id: 'impact', label: { es: 'Impacto', en: 'Impact', nl: 'Impact' } },
  { id: 'experience', label: { es: 'Experiencia', en: 'Experience', nl: 'Ervaring' } },
  { id: 'capabilities', label: { es: 'Capacidades', en: 'Capabilities', nl: 'Capaciteiten' } },
  { id: 'education', label: { es: 'Educacion', en: 'Education', nl: 'Opleiding' } },
  { id: 'contact', label: { es: 'Contacto', en: 'Contact', nl: 'Contact' } },
]


const spotlights = [
  {
    title: { es: 'Comfort Zone - Estrategia de marca', en: 'Comfort Zone - Brand strategy', nl: 'Comfort Zone - Merkstrategie' },
    focus: { es: 'Marca + posicionamiento', en: 'Branding + positioning', nl: 'Branding + positionering' },
    body: {
      es: 'Desarrollamos una propuesta de marca alineada con los objetivos de crecimiento y la narrativa de bienestar premium.',
      en: 'Developed a brand proposal aligned with growth goals and the premium wellbeing narrative.',
      nl: 'Ontwikkelde een merkvoorstel dat aansloot op groeidoelen en de premium wellbeing propositie.',
    },
    outcome: {
      es: 'Guia de tono y plan de activacion para nuevos puntos de contacto.',
      en: 'Tone of voice guide plus activation plan for new touchpoints.',
      nl: 'Tone-of-voicegids en activatieplan voor nieuwe touchpoints.',
    },
    tone: 'one',
  },
  {
    title: { es: 'BYK - Inteligencia de mercado', en: 'BYK - Market intelligence', nl: 'BYK - Marktinzicht' },
    focus: { es: 'Investigacion + analisis', en: 'Research + analysis', nl: 'Research + analyse' },
    body: {
      es: 'Realice un estudio de mercado sobre instrumentos de medicion de color evaluando clientes, competidores y oportunidades globales.',
      en: 'Led a market study on color measurement instruments assessing customers, competitors, and global opportunities.',
      nl: 'Voerde een marktonderzoek uit naar kleurmeetinstrumenten en beoordeelde klanten, concurrenten en wereldwijde kansen.',
    },
    outcome: {
      es: 'Matriz de oportunidades y pasos de posicionamiento para direccion.',
      en: 'Opportunity matrix and positioning steps for leadership.',
      nl: 'Kansenmatrix en positioneringsstappen voor het management.',
    },
    tone: 'two',
  },
  {
    title: { es: 'Print.com - Viaje del cliente', en: 'Print.com - Customer journey', nl: 'Print.com - Klantreis' },
    focus: { es: 'Experiencia de cliente', en: 'Customer experience', nl: 'Klantbeleving' },
    body: {
      es: 'Mapee el viaje del cliente en Benelux para mejorar compromiso y lealtad.',
      en: 'Mapped the Benelux customer journey to improve engagement and loyalty.',
      nl: 'Kaartte de klantreis in de Benelux om betrokkenheid en loyaliteit te verhogen.',
    },
    outcome: {
      es: 'Mapa integral con recomendaciones accionables por etapa.',
      en: 'End to end journey map with stage based recommendations.',
      nl: 'Routekaart met aanbevelingen per fase.',
    },
    tone: 'three',
  },
]


const highlightMetrics = [
  {
    label: { es: 'Comfort Zone', en: 'Comfort Zone', nl: 'Comfort Zone' },
    value: { es: 'Guia de marca', en: 'Brand guide', nl: 'Merkgids' },
    detail: {
      es: 'Narrativa y activaciones alineadas con bienestar premium.',
      en: 'Narrative and activations aligned with premium wellbeing.',
      nl: 'Narratief en activaties afgestemd op premium wellbeing.',
    },
    tone: 'one',
  },
  {
    label: { es: 'BYK', en: 'BYK', nl: 'BYK' },
    value: { es: 'Analisis de mercado', en: 'Market analysis', nl: 'Marktanalyse' },
    detail: {
      es: 'Hallazgos sobre instrumentos de medicion de color y oportunidades B2B.',
      en: 'Insights on color measurement instruments and B2B opportunities.',
      nl: 'Inzichten over kleurmeetinstrumenten en B2B kansen.',
    },
    tone: 'two',
  },
  {
    label: { es: 'Print.com', en: 'Print.com', nl: 'Print.com' },
    value: { es: 'Mapa del viaje del cliente', en: 'Customer journey map', nl: 'Klantreis-plan' },
    detail: {
      es: 'Hoja de ruta para reforzar la relacion y la lealtad en Benelux.',
      en: 'Roadmap to drive engagement and loyalty in the Benelux.',
      nl: 'Routekaart om betrokkenheid en loyaliteit in de Benelux te versterken.',
    },
    tone: 'three',
  },
  {
    label: { es: 'Consejo Saxion', en: 'Saxion council', nl: 'Saxion-raad' },
    value: { es: 'Representacion estudiantil', en: 'Student representation', nl: 'Studentenvertegenwoordiging' },
    detail: {
      es: 'Participacion en decisiones academicas y estrategicas.',
      en: 'Input on academic and strategic decisions.',
      nl: 'Input in academische en strategische besluiten.',
    },
    tone: 'four',
  },
]


const cvLayers = [
  {
    code: '01',
    title: { es: 'Estrategia y administracion', en: 'Strategy and administration', nl: 'Strategie en administratie' },
    detail: {
      es: 'Planeacion estrategica, casos de negocio y ordenamiento de operaciones.',
      en: 'Strategic planning, business cases, and operating discipline.',
      nl: 'Strategische planning, business cases en operationele structuur.',
    },
    tag: { es: 'Base', en: 'Foundation', nl: 'Basis' },
  },
  {
    code: '02',
    title: { es: 'Inteligencia de mercado', en: 'Market intelligence', nl: 'Marktinzicht' },
    detail: {
      es: 'Investigacion, analisis de competencia y mapeo de clientes.',
      en: 'Research, competitive analysis, and customer mapping.',
      nl: 'Onderzoek, concurrentieanalyse en klantmapping.',
    },
    tag: { es: 'Analitica', en: 'Analytics', nl: 'Analyse' },
  },
  {
    code: '03',
    title: { es: 'Coordinacion multicultural', en: 'Multicultural coordination', nl: 'Multiculturele coordinatie' },
    detail: {
      es: 'Gestion de equipos y stakeholders en entornos EU / LATAM.',
      en: 'Managing teams and stakeholders across EU / LATAM hubs.',
      nl: 'Teams en stakeholders aansturen over EU / LATAM hubs.',
    },
    tag: { es: 'Colaboracion', en: 'Collaboration', nl: 'Samenwerking' },
  },
  {
    code: '04',
    title: { es: 'Habilitacion digital', en: 'Digital enablement', nl: 'Digitale enablement' },
    detail: {
      es: 'Herramientas para reportes, tableros y documentacion clara.',
      en: 'Tools for reporting, dashboards, and clear documentation.',
      nl: 'Tools voor rapportage, dashboards en duidelijke documentatie.',
    },
    tag: { es: 'Soporte', en: 'Support', nl: 'Ondersteuning' },
  },
]


const experience = [
  {
    role: {
      es: 'Lider de branding estrategico',
      en: 'Branding strategy lead',
      nl: 'Lead merkstrategie',
    },
    company: 'Comfort Zone',
    period: { es: '2024 / Proyecto universitario', en: '2024 / University project', nl: '2024 / Universitair project' },
    impact: {
      es: 'Codirigi una propuesta de marca que alineo posicionamiento, storytelling y experiencias en tienda.',
      en: 'Co-led a brand proposal aligning positioning, storytelling, and in-store experiences.',
      nl: 'Co-leidde een merkvoorstel dat positionering, storytelling en in-store experiences op elkaar afstemde.',
    },
    stack: [
      { es: 'Estrategia de marca', en: 'Brand strategy', nl: 'Merkstrategie' },
      { es: 'Narrativa ejecutiva', en: 'Storytelling', nl: 'Storytelling' },
      { es: 'Talleres facilitados', en: 'Workshops', nl: 'Workshops' },
    ],
  },
  {
    role: {
      es: 'Analista de mercado',
      en: 'Market analyst',
      nl: 'Marktanalist',
    },
    company: 'BYK',
    period: { es: '2024 / Proyecto universitario', en: '2024 / University project', nl: '2024 / Universitair project' },
    impact: {
      es: 'Investigue el mercado europeo de instrumentos de medicion de color y presente oportunidades de crecimiento.',
      en: 'Researched the European market for color measurement instruments and presented growth opportunities.',
      nl: 'Onderzocht de Europese markt voor kleurmeetinstrumenten en presenteerde groeikansen.',
    },
    stack: [
      { es: 'Investigacion de mercado', en: 'Market research', nl: 'Marktonderzoek' },
      { es: 'Analisis competitivo', en: 'Competitive scanning', nl: 'Concurrentiescan' },
      { es: 'Reportes para direccion', en: 'Executive reporting', nl: 'Rapportage voor management' },
    ],
  },
  {
    role: {
      es: 'Coordinador del viaje del cliente',
      en: 'Customer journey coordinator',
      nl: 'Coordinator klantreis',
    },
    company: 'Print.com',
    period: { es: '2023 / Arnhem', en: '2023 / Arnhem', nl: '2023 / Arnhem' },
    impact: {
      es: 'Mapee y optimice el viaje del cliente para aumentar relacion y retencion.',
      en: 'Mapped and optimised the customer journey to increase engagement and retention.',
      nl: 'Kaartte en optimaliseerde de klantreis om betrokkenheid en retentie te verhogen.',
    },
    stack: [
      { es: 'Mapeo de experiencia del cliente', en: 'Customer journey mapping', nl: 'Klantreis in kaart brengen' },
      { es: 'Entrevistas con equipos clave', en: 'Stakeholder interviews', nl: 'Interviews met stakeholders' },
      { es: 'Analisis de fidelizacion', en: 'Loyalty insights', nl: 'Inzichten over loyaliteit' },
    ],
  },
  {
    role: {
      es: 'Miembro del consejo estudiantil',
      en: 'School council member',
      nl: 'Lid studentenraad',
    },
    company: 'Saxion University',
    period: { es: '2024 - presente / Deventer', en: '2024 - present / Deventer', nl: '2024 - heden / Deventer' },
    impact: {
      es: 'Represento a estudiantes en decisiones academicas y de estrategia institucional.',
      en: 'Represent students in academic and institutional strategy decisions.',
      nl: 'Vertegenwoordig studenten in academische en strategische besluiten.',
    },
    stack: [
      { es: 'Politicas academicas', en: 'Policy input', nl: 'Beleidsinput' },
      { es: 'Gobernanza', en: 'Governance', nl: 'Governance' },
      { es: 'Liderazgo estudiantil', en: 'Student leadership', nl: 'Studentenleiderschap' },
    ],
  },
]


const education = [
  {
    institution: 'Saxion University of Applied Sciences',
    program: {
      es: 'BBA International Business',
      en: 'BBA International Business',
      nl: 'BBA International Business',
    },
    year: '2021 - 2025',
    detail: {
      es: 'Enfasis en estrategia, innovacion sostenible y comercio internacional.',
      en: 'Focus on strategy, sustainable innovation, and international trade.',
      nl: 'Focus op strategie, duurzame innovatie en internationale handel.',
    },
  },
  {
    institution: 'Saxion School Council',
    program: {
      es: 'Representacion estudiantil',
      en: 'Student representation',
      nl: 'Studentenvertegenwoordiging',
    },
    year: '2024 - presente',
    detail: {
      es: 'Participacion activa en politicas academicas y de calidad educativa.',
      en: 'Active participation in academic policy and quality assurance.',
      nl: 'Actieve deelname aan academisch beleid en kwaliteitsbewaking.',
    },
  },
]


const certifications = [
  { name: 'Microsoft Office Specialist', issuer: 'Microsoft', year: '2023' },
  { name: 'Google Workspace Productivity', issuer: 'Google', year: '2023' },
  { name: 'Power BI Fundamentals', issuer: 'Microsoft Learn', year: '2022' },
  { name: 'Unity AR/VR Foundations', issuer: 'Unity', year: '2022' },
]


const skillClusters = [
  {
    title: { es: 'Estrategia y administracion', en: 'Strategy & administration', nl: 'Strategie en administratie' },
    skills: [
      { label: { es: 'Planeacion estrategica', en: 'Strategic planning', nl: 'Strategische planning' }, level: 0.9 },
      { label: { es: 'Organizacion y procesos', en: 'Organization & processes', nl: 'Organisatie en processen' }, level: 0.85 },
      { label: { es: 'Desarrollo de negocios', en: 'Business development', nl: 'Business development' }, level: 0.82 },
    ],
  },
  {
    title: { es: 'Inteligencia de mercado', en: 'Market intelligence', nl: 'Marktinzicht' },
    skills: [
      { label: { es: 'Investigacion cuantitativa', en: 'Quantitative research', nl: 'Kwantitatief onderzoek' }, level: 0.83 },
      { label: { es: 'Analisis competitivo', en: 'Competitive analysis', nl: 'Concurrentieanalyse' }, level: 0.8 },
      { label: { es: 'Reportes ejecutivos', en: 'Executive reporting', nl: 'Executive reporting' }, level: 0.78 },
    ],
  },
  {
    title: { es: 'Liderazgo y comunicacion', en: 'Leadership & communication', nl: 'Leiderschap en communicatie' },
    skills: [
      { label: { es: 'Coordinacion multicultural', en: 'Multicultural coordination', nl: 'Multiculturele coordinatie' }, level: 0.88 },
      { label: { es: 'Presentaciones y propuestas', en: 'Presentations & pitching', nl: 'Presentaties en pitching' }, level: 0.84 },
      { label: { es: 'Gestion de grupos de interes', en: 'Stakeholder engagement', nl: 'Stakeholder engagement' }, level: 0.86 },
    ],
  },
]


const languageSkills = [
  { label: { es: 'Espanol', en: 'Spanish', nl: 'Spaans' }, level: { es: 'Nativo / C2', en: 'Native / C2', nl: 'Moedertaal / C2' } },
  { label: { es: 'Ingles', en: 'English', nl: 'Engels' }, level: { es: 'C1 profesional', en: 'Professional C1', nl: 'Professioneel C1' } },
  { label: { es: 'Holandes', en: 'Dutch', nl: 'Nederlands' }, level: { es: 'A1 en progreso', en: 'A1 in progress', nl: 'A1 in ontwikkeling' } },
]


const techTools = [
  {
    name: 'Microsoft Office',
    detail: {
      es: 'Certificacion MOS para modelos, reportes y presentaciones.',
      en: 'MOS certification for models, reports, and presentations.',
      nl: 'MOS-certificering voor modellen, rapportages en presentaties.',
    },
  },
  {
    name: 'Power BI',
    detail: {
      es: 'Dashboards basicos para mercado y rendimiento.',
      en: 'Foundational dashboards for market and performance views.',
      nl: 'Basisdashboards voor markt en performance.',
    },
  },
  {
    name: 'Notion + Trello',
    detail: {
      es: 'Sistemas ligeros para documentar proyectos y tareas.',
      en: 'Lightweight systems to document projects and tasks.',
      nl: 'Lichte systemen om projecten en taken te documenteren.',
    },
  },
  {
    name: 'Google Workspace',
    detail: {
      es: 'Colaboracion asincrona y seguimiento con equipos globales.',
      en: 'Asynchronous collaboration and follow-up with global teams.',
      nl: 'Asynchrone samenwerking en opvolging met globale teams.',
    },
  },
  {
    name: 'Figma',
    detail: {
      es: 'Presentaciones visuales y hojas de ruta para stakeholders.',
      en: 'Visual presentations and roadmaps for stakeholders.',
      nl: 'Visuele presentaties en roadmaps voor stakeholders.',
    },
  },
  {
    name: 'Unity + Blender',
    detail: {
      es: 'Prototipos conceptuales para explicar soluciones digitales.',
      en: 'Concept prototypes to explain digital solutions.',
      nl: 'Conceptprototypes om digitale oplossingen toe te lichten.',
    },
  },
]

const signals = [
  {
    label: { es: 'Email', en: 'Email', nl: 'Email' },
    value: 'marekpisetsky001@gmail.com',
    hint: {
      es: 'Comparte contexto o una presentacion y coordinamos agenda.',
      en: 'Share context or a deck and we align calendars.',
      nl: 'Deel context of een deck en we plannen direct.',
    },
    href: 'mailto:marekpisetsky001@gmail.com',
  },
  {
    label: { es: 'WhatsApp / Telefono', en: 'WhatsApp / Phone', nl: 'WhatsApp / Telefoon' },
    value: '+31 620 935 300',
    hint: {
      es: 'Notas de voz y seguimiento rapido. Signal disponible.',
      en: 'Voice notes and fast follow-ups. Signal available.',
      nl: 'Voice notes en snelle follow-ups. Signal beschikbaar.',
    },
    href: 'tel:+31620935300',
  },
  {
    label: { es: 'Base', en: 'Base', nl: 'Standplaats' },
    value: 'Arnhem, NL / movilidad EU',
    hint: {
      es: 'Trabajo hibrido, remoto y viajes puntuales.',
      en: 'Hybrid, remote, and targeted travel.',
      nl: 'Hybride, remote en gerichte reizen.',
    },
  },
]


const timeline = [
  {
    year: '2025',
    month: { es: 'Junio 2025', en: 'June 2025', nl: 'Juni 2025' },
    detail: {
      es: 'Buscando traineeships y roles junior en estrategia, comercio internacional o consultoria.',
      en: 'Looking for traineeships and junior roles in strategy, international trade, or consulting.',
      nl: 'Zoekt traineeships en junior rollen in strategie, internationale handel of consultancy.',
    },
    status: { es: 'Disponible', en: 'Available', nl: 'Beschikbaar' },
  },
  {
    year: '2024',
    detail: {
      es: 'Liderando proyectos con Comfort Zone, BYK y Print.com y participando en el consejo estudiantil.',
      en: 'Leading projects with Comfort Zone, BYK, and Print.com while serving on the student council.',
      nl: 'Leidde projecten met Comfort Zone, BYK en Print.com en diende in de studentenraad.',
    },
    status: { es: 'Proyectos activos', en: 'Active projects', nl: 'Actieve projecten' },
  },
  {
    year: 'Origen',
    detail: {
      es: 'Lima > Barcelona > Arnhem. Perspectiva multicultural y redes EU / LATAM.',
      en: 'Lima > Barcelona > Arnhem. Multicultural view and EU / LATAM network.',
      nl: 'Lima > Barcelona > Arnhem. Multiculturele blik en EU / LATAM netwerk.',
    },
    status: { es: 'Perspectiva global', en: 'Global lens', nl: 'Wereldwijde blik' },
  },
]

const App = () => {
  const [language, setLanguage] = useState('es')
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    return window.localStorage.getItem('theme') ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', theme)
    }
  }, [theme])

  const t = copy[language]
  const translate = (value) => (value && typeof value === 'object' && !Array.isArray(value) ? value[language] ?? value.en ?? '' : value)
  const availability = timeline[0]
  const availabilityWindow = availability.month ? translate(availability.month) : availability.year

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="header-inner">
          <div>
            <p className="eyebrow">{t.meta}</p>
            <p className="text-muted">{t.heroSignal}</p>
          </div>
          <div className="header-actions">
            <nav className="nav-links" aria-label="Primary">
              {navigationLinks.map((link) => (
                <a key={link.id} href={`#${link.id}`}>
                  {translate(link.label)}
                </a>
              ))}
            </nav>
            <div className="chip-groups">
              <div className="chip-group" aria-label={t.languageLabel}>
                {languageOptions.map((option) => (
                  <button
                    key={option.code}
                    type="button"
                    className="chip-button"
                    data-active={option.code === language}
                    onClick={() => setLanguage(option.code)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <div className="chip-group" aria-label={t.themeLabel}>
                {themeOptions.map((option) => (
                  <button
                    key={option.code}
                    type="button"
                    className="chip-button"
                    data-active={option.code === theme}
                    onClick={() => setTheme(option.code)}
                  >
                    {option.label[language]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="content-grid">
        <section id="overview" className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="panel p-10 space-y-6">
            <div>
              <p className="text-muted uppercase tracking-[0.4em] text-xs">{t.meta}</p>
              <h1 className="text-4xl font-semibold leading-tight">{t.heroTitle}</h1>
              <p className="text-xl text-muted">{t.heroSubtitle}</p>
            </div>
            <p className="text-base text-muted">{t.heroParagraph}</p>
            <div className="flex flex-wrap gap-2">
              {heroFocus.map((item) => (
                <span key={item.en} className="pill">
                  {translate(item)}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a className="btn-primary" href="mailto:marekpisetsky001@gmail.com?subject=Coordinemos">
                {t.heroPrimaryCta}
              </a>
              <a className="btn-secondary" href="#contact">
                {t.heroSecondaryCta}
              </a>
            </div>
          </article>

          <div className="flex flex-col gap-6">
            <article className="panel p-6 space-y-4">
              <p className="eyebrow">{t.currentFocusLabel}</p>
              <div className="flex flex-wrap gap-2">
                {cvLayers.slice(0, 3).map((layer) => (
                  <span key={layer.code} className="pill pill--soft">
                    {layer.code} | {translate(layer.title)}
                  </span>
                ))}
              </div>
            </article>
            <article className="panel p-6 space-y-3">
              <p className="eyebrow">{t.statusLabel}</p>
              <h3 className="text-2xl font-semibold">{t.heroSignal}</h3>
              <p className="text-sm text-muted">{translate(availability.detail)}</p>
              <div className="availability-box">
                <span className="eyebrow">{t.availabilityLabel}</span>
                <p className="text-xl font-semibold">{availabilityWindow}</p>
              </div>
            </article>
          </div>
        </section>

        <section id="impact" className="space-y-6">
          <div>
            <p className="eyebrow">{t.highlightsTitle}</p>
            <p className="text-muted">{t.highlightsDescription}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {highlightMetrics.map((metric) => (
              <article key={metric.value.en} className="panel panel--muted p-6 space-y-2">
                <span className="eyebrow">{translate(metric.label)}</span>
                <h3 className="text-xl font-semibold">{translate(metric.value)}</h3>
                <p className="text-sm text-muted">{translate(metric.detail)}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="space-y-8">
          <div>
            <p className="eyebrow">{t.experienceTitle}</p>
            <p className="text-muted">{t.experienceDescription}</p>
          </div>
          <div className="grid gap-6">
            {experience.map((item) => (
              <article key={item.company} className="panel p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-lg font-semibold">{translate(item.role)}</p>
                    <p className="text-sm text-muted">
                      {item.company} | {translate(item.period)}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted">{translate(item.impact)}</p>
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((tag, idx) => {
                    const label = typeof tag === 'string' ? tag : translate(tag)
                    const keyBase = typeof tag === 'string' ? tag : tag.en ?? tag.es ?? idx
                    return (
                      <span key={`${item.company}-${keyBase}-${idx}`} className="pill pill--ghost">
                        {label}
                      </span>
                    )
                  })}
                </div>
              </article>
            ))}
          </div>
          <article className="panel p-6 space-y-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="eyebrow">{t.spotlightsTitle}</p>
                <p className="text-sm text-muted">{t.spotlightsDescription}</p>
              </div>
              <span className="badge">{t.spotlightsBadge}</span>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {spotlights.map((spotlight) => (
                <div key={spotlight.title.en} className="panel panel--muted p-4 space-y-2">
                  <p className="eyebrow">{translate(spotlight.focus)}</p>
                  <h3 className="text-lg font-semibold">{translate(spotlight.title)}</h3>
                  <p className="text-sm text-muted">{translate(spotlight.body)}</p>
                  <p className="text-sm font-medium">{translate(spotlight.outcome)}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section id="capabilities" className="space-y-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="panel p-6 space-y-4">
              <div>
                <p className="eyebrow">{t.layersTitle}</p>
                <p className="text-sm text-muted">{t.layersDescription}</p>
              </div>
              <div className="space-y-4">
                {cvLayers.map((layer) => (
                  <div key={layer.code} className="layer-card">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-muted">
                      <span>{layer.code}</span>
                      <span>{translate(layer.tag)}</span>
                    </div>
                    <p className="text-base font-semibold">{translate(layer.title)}</p>
                    <p className="text-sm text-muted">{translate(layer.detail)}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="panel p-6 space-y-4">
              <p className="eyebrow">{t.toolsTitle}</p>
              <p className="text-sm text-muted">{t.toolsDescription}</p>
              <ul className="space-y-3">
                {techTools.map((tool) => (
                  <li key={tool.name} className="tool-card">
                    <p className="font-semibold">{tool.name}</p>
                    <p className="text-sm text-muted">{translate(tool.detail)}</p>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="panel p-6 space-y-5">
              <div>
                <p className="eyebrow">{t.skillsTitle}</p>
                <p className="text-sm text-muted">{t.skillsDescription}</p>
              </div>
              <div className="space-y-5">
                {skillClusters.map((cluster) => (
                  <div key={cluster.title.en} className="space-y-3">
                    <p className="font-semibold">{translate(cluster.title)}</p>
                    <div className="space-y-2">
                      {cluster.skills.map((skill) => (
                        <div key={skill.label.en}>
                          <div className="flex items-center justify-between text-xs text-muted">
                            <span>{translate(skill.label)}</span>
                            <span>{Math.round(skill.level * 100)}%</span>
                          </div>
                          <div className="progress-track">
                            <div className="progress-bar" style={{ width: `${skill.level * 100}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="panel p-6 space-y-4">
              <p className="eyebrow">{t.languagesAvailabilityLabel}</p>
              <div className="space-y-3">
                {languageSkills.map((lang) => (
                  <div key={lang.label.en} className="flex items-center justify-between rounded-2xl border border-[color:var(--border-subtle)] px-4 py-2">
                    <span className="font-medium">{translate(lang.label)}</span>
                    <span className="text-sm text-muted">{translate(lang.level)}</span>
                  </div>
                ))}
              </div>
              <div className="availability-box">
                <p className="eyebrow">{t.availabilityLabel}</p>
                <p className="text-lg font-semibold">{availabilityWindow}</p>
                <p className="text-sm text-muted">
                  {translate(availability.status)} | {translate(availability.detail)}
                </p>
              </div>
            </article>
          </div>
        </section>

        <section id="education" className="space-y-8">
          <div>
            <p className="eyebrow">{t.educationTitle}</p>
            <p className="text-muted">{t.educationDescription}</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="panel p-6 space-y-5">
              {education.map((edu) => (
                <div key={edu.institution} className="education-card">
                  <div className="flex items-center justify-between text-xs text-muted">
                    <span>{edu.institution}</span>
                    <span>{edu.year}</span>
                  </div>
                  <p className="font-semibold">{translate(edu.program)}</p>
                  <p className="text-sm text-muted">{translate(edu.detail)}</p>
                </div>
              ))}
            </article>
            <article className="panel p-6 space-y-4">
              <p className="eyebrow">{t.certificationsLabel}</p>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex items-center justify-between rounded-2xl border border-[color:var(--border-subtle)] px-4 py-2">
                    <span className="text-sm font-medium">{cert.name}</span>
                    <span className="text-xs uppercase tracking-[0.3em] text-muted">{cert.year}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="space-y-8">
          <div>
            <p className="eyebrow">{t.contactTitle}</p>
            <p className="text-muted">{t.contactDescription}</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="panel p-6 space-y-4">
              <p className="eyebrow">{t.nextStepsLabel}</p>
              <div className="space-y-4">
                {timeline.map((entry) => (
                  <div key={entry.year} className="timeline-row">
                    <div className="flex items-center justify-between text-xs text-muted">
                      <span>{entry.year}</span>
                      <span className="pill pill--ghost">{translate(entry.status)}</span>
                    </div>
                    <p className="text-sm text-muted">{translate(entry.detail)}</p>
                  </div>
                ))}
              </div>
            </article>
            <article className="panel p-6 space-y-4">
              <div className="space-y-4">
                {signals.map((signal) => (
                  <div key={signal.value} className="signal-card">
                    <p className="eyebrow">{translate(signal.label)}</p>
                    {signal.href ? (
                      <a href={signal.href} className="text-lg font-semibold transition hover:text-accent">
                        {signal.value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold">{signal.value}</p>
                    )}
                    <p className="text-sm text-muted">{translate(signal.hint)}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs uppercase tracking-[0.35em] text-muted">{t.contactTools}</p>
            </article>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <div className="footer-inner">
          <span>&copy; {new Date().getFullYear()} Marek A. Pisetsky Neyra</span>
          <span>{t.footerTagline}</span>
        </div>
      </footer>
    </div>
  )
}

export default App











