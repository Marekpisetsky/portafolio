







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







const profilePhoto = 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80'











const copy = {



  es: {



    meta: 'CV internacional / 2025',



    heroTitle: 'Marek Andrei Pisetsky Neyra',



    heroSubtitle: 'Negocios internacionales y estrategia',



    heroParagraph:



      'Estudiante ambicioso de Negocios Internacionales con interés en estrategia, administración y desarrollo organizacional. Combino mentalidad global con proyectos de negocio, liderazgo y capacidades técnicas para habilitar innovación digital. Habilidades en análisis de mercados, planificación estratégica y coordinación de equipos multiculturales.',



    heroPrimaryCta: 'Coordinar llamada',



    heroSecondaryCta: 'Ver detalles',



    heroSignal: 'Basado en Arnhem, disponible para consultoría, tecnología, logística, sostenibilidad y comercio internacional.',



    highlightsTitle: 'Liderazgo y logros',



    highlightsDescription: 'Consejo estudiantil, coordinación de proyectos, certificaciones digitales y trayectoria multicultural.',



    layersTitle: 'Cómo se estructura este CV',



    layersDescription: 'Perfil, habilidades clave, liderazgo, proyectos, educación e idiomas.',



    toolsTitle: 'Competencias técnicas y digitales',



    toolsDescription: 'Herramientas y plataformas que soportan flujos modernos de negocio.',



    skillsTitle: 'Habilidades clave',



    skillsDescription: 'Capacidades estratégicas, comunicacionales y técnicas en una vista.',



    educationTitle: 'Educación',



    educationDescription: 'Formación academica y áreas de enfoque.',



    experienceTitle: 'Experiencia en proyectos',



    experienceDescription: 'Branding, investigación de mercado, customer journey y proyectos independientes.',



    contactTitle: 'Contacto',



    contactDescription: 'Teléfono o correo directo; respondo según disponibilidad.',



    languageLabel: 'Idioma',



    themeLabel: 'Tema',



    currentFocusLabel: 'Enfoque actual',



    statusLabel: 'Estado',



    languagesAvailabilityLabel: 'Idiomas',



    availabilityLabel: 'Disponibilidad',



    certificationsLabel: 'Certificaciones',



    profileTitle: 'Perfil',



    profileDescription: 'Lo que aporto a equipos internacionales.',



    formatTitle: 'Áreas de enfoque',



    formatDescription: 'Donde combino estrategia, tecnología y liderazgo.',



    hobbiesTitle: 'Interéses',



    hobbiesDescription: 'Rituales que equilibran lo estratégico y lo creativo.',



    spotlightsTitle: 'Trabajo digital independiente',



    spotlightsDescription: 'Proyectos propios desde 2019 combinando creatividad y negocio.',



    valueStatementLabel: 'Declaracion de valor',



    valueStatement: 'Motivado por unir estrategia, innovación digital y perspectivas globales para impulsar crecimiento sostenible.',



    footerTagline: 'Negocios internacionales y estrategia',



    contactDescriptionShort: 'Teléfono o correo directo.',



  },



  en: {



    meta: 'International Business CV / 2025',



    heroTitle: 'Marek Andrei Pisetsky Neyra',



    heroSubtitle: 'International Business & Strategy Professional',



    heroParagraph:



      'Ambitious International Business student interested in strategy, administration, and organizational development. Combines a global mindset with business projects, leadership activities, and technical capabilities that enable digital innovation. Skilled in market analysis, strategic planning, and coordinating multicultural teams.',



    heroPrimaryCta: 'Set up a call',



    heroSecondaryCta: 'View details',



    heroSignal: 'Based in Arnhem; open to consulting, technology, logistics, sustainability, and international trade roles.',



    highlightsTitle: 'Leadership & achievements',



    highlightsDescription: 'Student council member, project coordinator, certified in digital productivity, multicultural background.',



    layersTitle: 'How this CV is structured',



    layersDescription: 'Profile, key skills, leadership stories, project experience, education, and languages.',



    toolsTitle: 'Technical & digital skills',



    toolsDescription: 'Tools and platforms that support modern business workflows.',



    skillsTitle: 'Key skills',



    skillsDescription: 'Strategic, communication, and technical capabilities at a glance.',



    educationTitle: 'Education',



    educationDescription: 'Academic background and focus áreas.',



    experienceTitle: 'Project experience',



    experienceDescription: 'Branding, market research, customer journeys, and independent digital work.',



    contactTitle: 'Contact',



    contactDescription: 'Phone or email me directly; I reply as soon as schedules allow.',



    languageLabel: 'Language',



    themeLabel: 'Theme',



    currentFocusLabel: 'Current focus',



    statusLabel: 'Status',



    languagesAvailabilityLabel: 'Languages',



    availabilityLabel: 'Availability',



    certificationsLabel: 'Certifications',



    profileTitle: 'Profile',



    profileDescription: 'What I bring to international teams.',



    formatTitle: 'Focus áreas',



    formatDescription: 'Where I combine strategy, technology, and leadership.',



    hobbiesTitle: 'Interésts',



    hobbiesDescription: 'Routines that balance strategic and creative thinking.',



    spotlightsTitle: 'Independent digital work',



    spotlightsDescription: 'Self-initiated projects since 2019 combining creativity and strategy.',



    valueStatementLabel: 'Value statement',



    valueStatement: 'Driven to bridge business strategy, digital innovation, and global perspectives to support sustainable, long-term growth.',



    footerTagline: 'International business & strategy',



    contactDescriptionShort: 'Phone or email me directly.',



  },



  nl: {



    meta: 'International Business CV / 2025',



    heroTitle: 'Marek Andrei Pisetsky Neyra',



    heroSubtitle: 'International Business & Strategy Professional',



    heroParagraph:



      'Ambitieuze International Business student met interesse in strategie, administratie en organisatieontwikkeling. Combineert een wereldwijde mindset met businessprojecten, leiderschap en technische vaardigheden die digitale innovatie ondersteunen. Vaardig in marktanalyse, strategische planning en het coördineren van multiculturele teams.',



    heroPrimaryCta: 'Plan een call',



    heroSecondaryCta: 'Bekijk details',



    heroSignal: 'Gebaseerd in Arnhem en beschikbaar voor consulting, technologie, logistiek, duurzaamheid en internationale handel.',



    highlightsTitle: 'Leiderschap & prestaties',



    highlightsDescription: 'Lid van de studentenraad, projectcoördinator, digitale certificeringen en multiculturele achtergrond.',



    layersTitle: 'Hoe dit CV is opgebouwd',



    layersDescription: 'Profiel, kernvaardigheden, leiderschap, projecten, opleiding en talen.',



    toolsTitle: 'Technische & digitale skills',



    toolsDescription: 'Tools en platformen die moderne workflows ondersteunen.',



    skillsTitle: 'Kernvaardigheden',



    skillsDescription: 'Strategische, communicatieve en technische capaciteiten in één overzicht.',



    educationTitle: 'Opleiding',



    educationDescription: 'Academische achtergrond en focusgebieden.',



    experienceTitle: 'Projectervaring',



    experienceDescription: 'Branding, marktonderzoek, klantreizen en zelfstandig digitaal werk.',



    contactTitle: 'Contact',



    contactDescription: 'Bel of mail direct; ik reageer zodra het past.',



    languageLabel: 'Taal',



    themeLabel: 'Thema',



    currentFocusLabel: 'Huidige focus',



    statusLabel: 'Status',



    languagesAvailabilityLabel: 'Talen',



    availabilityLabel: 'Beschikbaarheid',



    certificationsLabel: 'Certificeringen',



    profileTitle: 'Profiel',



    profileDescription: 'Wat ik meebreng naar internationale teams.',



    formatTitle: 'Focusgebieden',



    formatDescription: 'Waar ik strategie, technologie en leiderschap combineer.',



    hobbiesTitle: 'Interésses',



    hobbiesDescription: 'Routines die strategie en creativiteit in balans brengen.',



    spotlightsTitle: 'Zelfstandige digitale projecten',



    spotlightsDescription: 'Eigen projecten sinds 2019 waarin creativiteit en strategie samenkomen.',



    valueStatementLabel: 'Waardepropositie',



    valueStatement: 'Gedreven om bedrijfsstrategie, digitale innovatie en wereldwijde perspectieven te verbinden voor duurzame groei.',



    footerTagline: 'International business & strategie',



    contactDescriptionShort: 'Bel of mail direct.',



  },



}



const heroFocus = [



  { es: 'Estrategia y administración', en: 'Strategy & administration', nl: 'Strategie en administratie' },



  { es: 'Análisis de mercado', en: 'Market analysis', nl: 'Marktanalyse' },



  { es: 'Innovación digital', en: 'Digital innovation', nl: 'Digitale innovatie' },



]







const navigationLinks = [



  { id: 'overview', label: { es: 'Resumen', en: 'Overview', nl: 'Overzicht' } },



  { id: 'profile', label: { es: 'Perfil', en: 'Profile', nl: 'Profiel' } },



  { id: 'impact', label: { es: 'Impacto', en: 'Impact', nl: 'Impact' } },



  { id: 'experience', label: { es: 'Experiencia', en: 'Experience', nl: 'Ervaring' } },



  { id: 'capabilities', label: { es: 'Habilidades', en: 'Skills', nl: 'Vaardigheden' } },



  { id: 'education', label: { es: 'Educación', en: 'Education', nl: 'Opleiding' } },



  { id: 'contact', label: { es: 'Contacto', en: 'Contact', nl: 'Contact' } },



]







const spotlights = [



  {



    title: { es: 'Consejo estudiantil Saxion', en: 'Saxion school council', nl: 'Saxion studentenraad' },



    focus: { es: 'Gobernanza', en: 'Governance', nl: 'Governance' },



    body: {



      es: 'Representacion electa para decisiones academicas, politicas y mejoras institucionales.',



      en: 'Elected representative contributing to academic, policy, and institutional improvements.',



      nl: 'Gekozen vertegenwoordiger voor academische besluiten, beleid en institutionele verbeteringen.',



    },



    outcome: {



      es: 'Voz estudiantil integrada en comites clave.',



      en: 'Student voice integrated into key committees.',



      nl: 'Studentengeluid ingebracht in kerngremia.',



    },



    tone: 'one',



  },



  {



    title: { es: 'Coordinación de equipos', en: 'Team coordination', nl: 'Teamcordinatie' },



    focus: { es: 'Colaboracion', en: 'Collaboration', nl: 'Samenwerking' },



    body: {



      es: 'Lidero pequenos equipos para entregar análisis, reportes y presentaciones a clientes.',



      en: 'Lead small teams to deliver analysis, reports, and client presentations.',



      nl: 'Leid kleine teams voor analyses, rapporten en klantpresentaties.',



    },



    outcome: {



      es: 'Entregables alineados a objetivos del curso y del cliente.',



      en: 'Deliverables aligned with course and client goals.',



      nl: 'Deliverables afgestemd op cursus- en klantdoelen.',



    },



    tone: 'two',



  },



  {



    title: { es: 'Certificaciones técnicas', en: 'Technical certifications', nl: 'Technische certificeringen' },



    focus: { es: 'Productividad digital', en: 'Digital productivity', nl: 'Digitale productiviteit' },



    body: {



      es: 'MOS, Google Workspace y Power BI respaldan workflows eficientes.',



      en: 'MOS, Google Workspace, and Power BI keep workflows efficient.',



      nl: 'MOS, Google Workspace en Power BI ondersteunen efficinte workflows.',



    },



    outcome: {



      es: 'Reportes y tableros claros para stakeholders.',



      en: 'Clear reports and dashboards for stakeholders.',



      nl: 'Heldere rapportages en dashboards voor stakeholders.',



    },



    tone: 'three',



  },



]







const highlightMetrics = [



  {



    label: { es: 'Consejo estudiantil', en: 'School council', nl: 'Studentenraad' },



    value: { es: 'Representante electo', en: 'Elected representative', nl: 'Gekozen vertegenwoordiger' },



    detail: {



      es: 'Participacion en decisiones y politicas en Saxion University.',



      en: 'Contributed to governance and policy decisions at Saxion University.',



      nl: 'Droeg bij aan governance en beleidsbesluiten binnen Saxion.',



    },



  },



  {



    label: { es: 'Coordinación de proyectos', en: 'Project coordination', nl: 'Projectcordinatie' },



    value: { es: 'Equipos academicos', en: 'Academic teams', nl: 'Academische teams' },



    detail: {



      es: 'Guiando entregables estratégicos y presentaciones para clientes.',



      en: 'Led strategic deliverables and client presentations.',



      nl: 'Leidde strategische deliverables en klantpresentaties.',



    },



  },



  {



    label: { es: 'Certificaciones digitales', en: 'Digital certifications', nl: 'Digitale certificeringen' },



    value: { es: 'Productividad + datos', en: 'Productivity + data', nl: 'Productiviteit + data' },



    detail: {



      es: 'Microsoft Office, Google Workspace, Power BI y mas.',



      en: 'Microsoft Office, Google Workspace, Power BI, and more.',



      nl: 'Microsoft Office, Google Workspace, Power BI en meer.',



    },



  },



  {



    label: { es: 'Perspectiva global', en: 'Global perspective', nl: 'Wereldwijde blik' },



    value: { es: 'Perú > NL', en: 'Perú > NL', nl: 'Perú > NL' },



    detail: {



      es: 'Experiencia multicultural estudiando y colaborando en multiples continentes.',



      en: 'Multicultural experience studying and collaborating across continents.',



      nl: 'Multiculturele ervaring met studie en samenwerking op meerdere continenten.',



    },



  },



]







const cvLayers = [



  {



    code: '01',



    title: { es: 'Perfil y datos clave', en: 'Profile & key info', nl: 'Profiel & kerninfo' },



    detail: {



      es: 'Contacto directo, ubicacion y disponibilidad inmediata.',



      en: 'Direct contact, location, and current availability.',



      nl: 'Direct contact, locatie en actuele beschikbaarheid.',



    },



    tag: { es: 'Inicio', en: 'Intro', nl: 'Intro' },



  },



  {



    code: '02',



    title: { es: 'Habilidades principales', en: 'Key skills', nl: 'Kernvaardigheden' },



    detail: {



      es: 'Bloques de estrategia, comunicacion y habilidades técnicas.',



      en: 'Blocks covering strategy, communication, and technical skills.',



      nl: 'Blokken voor strategie, communicatie en techniek.',



    },



    tag: { es: 'Habilidades', en: 'Skills', nl: 'Skills' },



  },



  {



    code: '03',



    title: { es: 'Liderazgo y logros', en: 'Leadership & achievements', nl: 'Leiderschap & prestaties' },



    detail: {



      es: 'Historias sobre representacion estudiantil y coordinación de proyectos.',



      en: 'Stories about student representation and project coordination.',



      nl: 'Verhalen over studentenvertegenwoordiging en projectcordinatie.',



    },



    tag: { es: 'Historia', en: 'Story', nl: 'Verhaal' },



  },



  {



    code: '04',



    title: { es: 'Educación e idiomas', en: 'Education & languages', nl: 'Opleiding & talen' },



    detail: {



      es: 'Programa Bachelor en International Business con énfasis en estrategia sostenible y dominio multilingüe.',



      en: 'Bachelor in International Business focused on sustainable strategy and multilingual delivery.',



      nl: 'Bachelor International Business met focus op duurzame strategie en meertaligheid.',



    },



    tag: { es: 'Base', en: 'Foundation', nl: 'Basis' },



  },



]







const profileStats = [

  {

    label: { es: 'Ubicacion', en: 'Location', nl: 'Standplaats' },

    value: { es: 'Arnhem, NL', en: 'Arnhem, NL', nl: 'Arnhem, NL' },

  },

  {

    label: { es: 'Disponibilidad', en: 'Availability', nl: 'Beschikbaarheid' },

    value: { es: 'Graduacion 2025', en: 'Graduation 2025', nl: 'Afstuderen 2025' },

  },

]



const profileNarrative = [



  {



    es: 'Estudiante de Negocios Internacionales orientado a estrategia, administración y desarrollo organizacional con mentalidad global y rigor técnico.',



    en: 'International Business student focused on strategy, administration, and organizational development with a global mindset and technical rigor.',



    nl: 'International Business student met focus op strategie, administratie en organisatieontwikkeling met een wereldwijde blik en technische scherpte.',



  },



  {



    es: 'Motivado para aportar a empresas visionarias en consultoría, tecnología, logística, sostenibilidad y comercio internacional.',



    en: 'Motivated to contribute to forward-thinking companies in consulting, technology, logistics, sustainability, and international trade.',



    nl: 'Gemotiveerd om bij te dragen aan vooruitstrevende bedrijven in consultancy, technologie, logistiek, duurzaamheid en internationale handel.',



  },



]







const profileHighlights = [



  { es: 'Mentalidad global', en: 'Global mindset', nl: 'Wereldwijde mindset' },



  { es: 'Pensamiento estratégico', en: 'Strategic thinking', nl: 'Strategisch denken' },



  { es: 'Rigor digital', en: 'Digital rigor', nl: 'Digitale scherpte' },



]







const experience = [



  {



    role: {



      es: 'Estrategia de marca - Comfort Zone',



      en: 'Branding strategy - Comfort Zone',



      nl: 'Brandingstrategie - Comfort Zone',



    },



    company: 'Comfort Zone',



    period: { es: '2024 / Proyecto universitario', en: '2024 / University project', nl: '2024 / Universitair project' },



    impact: {



      es: 'Desarrolle una propuesta de marca alineada a objetivos estratégicos y mejoras de comunicacion.',



      en: 'Developed a branding proposal tailored to strategic goals and communication improvements.',



      nl: 'Ontwikkelde een merkvoorstel afgestemd op strategische doelen en communicatieverbeteringen.',



    },



    stack: [



      { es: 'Concepto de marca', en: 'Brand concepting', nl: 'Merkconcept' },



      { es: 'Narrativa y storytelling', en: 'Narrative & storytelling', nl: 'Narratief & storytelling' },



      { es: 'Presentaciones ejecutivas', en: 'Executive presentations', nl: 'Executive presentaties' },



    ],



  },



  {



    role: {



      es: 'Análisis de mercado - BYK',



      en: 'Market analysis - BYK',



      nl: 'Marktanalyse - BYK',



    },



    company: 'BYK',



    period: { es: '2024 / Proyecto universitario', en: '2024 / University project', nl: '2024 / Universitair project' },



    impact: {



      es: 'Evale posicionamiento de productos, necesidades de clientes y panorama competitivo en instrumentos de medicion de color.',



      en: 'Evaluated product positioning, customer needs, and the competitive landscape for color measurement instruments.',



      nl: 'Beoordeelde productpositionering, klantbehoeften en het concurrentielandschap voor kleurmeetinstrumenten.',



    },



    stack: [



      { es: 'Investigación de mercado', en: 'Market research', nl: 'Marktonderzoek' },



      { es: 'Escaneo competitivo', en: 'Competitive scanning', nl: 'Concurrentiescan' },



      { es: 'Recomendaciones estratégicas', en: 'Strategic recommendations', nl: 'Strategische aanbevelingen' },



    ],



  },



  {



    role: {



      es: 'Optimizacion del viaje del cliente - Print.com',



      en: 'Customer journey optimization - Print.com',



      nl: 'Optimalisatie klantreis - Print.com',



    },



    company: 'Print.com',



    period: { es: '2023 / Arnhem', en: '2023 / Arnhem', nl: '2023 / Arnhem' },



    impact: {



      es: 'Colabore para mapear y mejorar el customer journey con recomendaciones accionables.',



      en: 'Collaborated on mapping and improving the customer journey with actionable recommendations.',



      nl: 'Werkte mee aan het in kaart brengen en verbeteren van de klantreis met concrete aanbevelingen.',



    },



    stack: [



      { es: 'Customer journey mapping', en: 'Customer journey mapping', nl: 'Customer journey mapping' },



      { es: 'Compromiso y lealtad', en: 'Engagement & loyalty', nl: 'Betrokkenheid & loyaliteit' },



      { es: 'Recomendaciones accionables', en: 'Actionable recommendations', nl: 'Actiegerichte aanbevelingen' },



    ],



  },



  {



    role: {



      es: 'Proyectos digitales independientes',



      en: 'Independent digital projects',



      nl: 'Zelfstandige digitale projecten',



    },



    company: 'Autogestionado',



    period: { es: '2019 - presente / Remoto', en: '2019 - present / Remote', nl: '2019 - heden / Remote' },



    impact: {



      es: 'Cree prototipos AR, herramientas web y sistemas digitales que combinan creatividad y pensamiento estratégico.',



      en: 'Created AR prototypes, web tools, and digital systems that combine creativity with strategic thinking.',



      nl: 'Maakte AR-prototypes, webtools en digitale systemen die creativiteit met strategie verbinden.',



    },



    stack: [



      { es: 'Unity + Blender', en: 'Unity + Blender', nl: 'Unity + Blender' },



      { es: 'Python / C# / C++', en: 'Python / C# / C++', nl: 'Python / C# / C++' },



      { es: 'Diseno de sistemas web', en: 'Web systems design', nl: 'Ontwerp van websystemen' },



    ],



  },



]







const education = [







  {







    institution: 'Saxion University of Applied Sciences',







    program: {







      es: 'Bachelor en International Business',







      en: 'Bachelor of International Business',







      nl: 'Bachelor International Business',







    },







    year: '2021 - 2025',







    detail: {







      es: 'Énfasis en estrategia, innovación sostenible y comercio internacional.',







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



    title: { es: 'Estrategia y administración', en: 'Strategic & administrative competencies', nl: 'Strategische & administratieve competenties' },



    skills: [



      { label: { es: 'Estrategia de negocio', en: 'Business strategy', nl: 'Business strategie' } },



      { label: { es: 'Investigación de mercado', en: 'Market research & analysis', nl: 'Marktonderzoek & analyse' } },



      { label: { es: 'Planeacion organizacional', en: 'Organizational planning', nl: 'Organisatieplanning' } },



      { label: { es: 'Coordinación de proyectos', en: 'Project coordination', nl: 'Projectcordinatie' } },



      { label: { es: 'Desarrollo de negocios', en: 'Business development', nl: 'Business development' } },



      { label: { es: 'Transformación digital', en: 'Digital transformation', nl: 'Digitale transformatie' } },



      { label: { es: 'Resolucion de problemas', en: 'Problem-solving & logical reasoning', nl: 'Probleemoplossing & logisch denken' } },



    ],



  },



  {



    title: { es: 'Comunicacion y liderazgo', en: 'Communication & leadership', nl: 'Communicatie & leiderschap' },



    skills: [



      { label: { es: 'Comunicacion intercultural', en: 'Cross-cultural communication', nl: 'Interculturele communicatie' } },



      { label: { es: 'Liderazgo de equipos', en: 'Team leadership & collaboration', nl: 'Teamleiderschap & samenwerking' } },



      { label: { es: 'Presentacion y reportes', en: 'Presentation & reporting', nl: 'Presentatie & rapportage' } },



      { label: { es: 'Gestion de stakeholders', en: 'Stakeholder engagement', nl: 'Stakeholder engagement' } },



    ],



  },



  {



    title: { es: 'Tecnico y digital', en: 'Technical & digital skills', nl: 'Technische & digitale skills' },



    skills: [



      { label: { es: 'Microsoft Office (MOS)', en: 'Microsoft Office (MOS)', nl: 'Microsoft Office (MOS)' } },



      { label: { es: 'Google Workspace', en: 'Google Workspace', nl: 'Google Workspace' } },



      { label: { es: 'Power BI (basico)', en: 'Power BI (basic)', nl: 'Power BI (basis)' } },



      { label: { es: 'Notion + Trello', en: 'Notion + Trello', nl: 'Notion + Trello' } },



      { label: { es: 'Desarrollo web (HTML/CSS/JS)', en: 'Web development (HTML/CSS/JS)', nl: 'Webontwikkeling (HTML/CSS/JS)' } },



      { label: { es: 'Programacion: Python, C#, C++', en: 'Programming: Python, C#, C++', nl: 'Programmeren: Python, C#, C++' } },



      { label: { es: 'Unity (AR/VR) + Blender', en: 'Unity (AR/VR) + Blender', nl: 'Unity (AR/VR) + Blender' } },



    ],



  },



]







const languageSkills = [
  { label: { es: 'Español', en: 'Spanish', nl: 'Spaans' }, level: { es: 'Nativo', en: 'Native', nl: 'Moedertaal' } },
  { label: { es: 'Ingles', en: 'English', nl: 'Engels' }, level: { es: 'Fluido (C1)', en: 'Fluent (C1)', nl: 'Vloeiend (C1)' } },
  { label: { es: 'Holandes', en: 'Dutch', nl: 'Nederlands' }, level: { es: 'En progreso (A1)', en: 'In progress (A1)', nl: 'In ontwikkeling (A1)' } },
]






















const techTools = [



  {



    name: 'Microsoft Office (MOS)',



    detail: {



      es: 'Certificacion MOS para modelar, reportar y presentar con precision.',



      en: 'MOS certification for precise modeling, reporting, and presenting.',



      nl: 'MOS-certificering voor nauwkeurige modellen, rapporten en presentaties.',



    },



  },



  {



    name: 'Google Workspace',



    detail: {



      es: 'Colaboracion asincrona y documentacion compartida con equipos globales.',



      en: 'Asynchronous collaboration and shared documentation with global teams.',



      nl: 'Asynchrone samenwerking en gedeelde documentatie met globale teams.',



    },



  },



  {



    name: 'Power BI (basico)',



    detail: {



      es: 'Dashboards ligeros para mercado, rendimiento y reportes ejecutivos.',



      en: 'Lightweight dashboards for market, performance, and executive reporting.',



      nl: 'Lichte dashboards voor markt-, performance- en executive rapportage.',



    },



  },



  {



    name: 'Notion + Trello',



    detail: {



      es: 'Planificación de proyectos, seguimiento y handoffs claros.',



      en: 'Project planning, tracking, and clear handoffs.',



      nl: 'Projectplanning, opvolging en heldere overdrachten.',



    },



  },



  {



    name: 'Desarrollo web (HTML/CSS/JS)',



    detail: {



      es: 'Creacion de herramientas web y recursos informativos para equipos.',



      en: 'Builds web tools and informational resources for teams.',



      nl: 'Bouwt webtools en informatieve resources voor teams.',



    },



  },



  {



    name: 'Programacion: Python, C#, C++',



    detail: {



      es: 'Automatizacion ligera y prototipos funcionales.',



      en: 'Light automation and functional prototypes.',



      nl: 'Lichte automatisering en functionele prototypes.',



    },



  },



  {



    name: 'Unity (AR/VR) + Blender',



    detail: {



      es: 'Prototipos AR/VR y explicaciones visuales para ideas emergentes.',



      en: 'AR/VR prototypes and visual explanations for emerging ideas.',



      nl: 'AR/VR-prototypes en visuele toelichtingen voor nieuwe ideen.',



    },



  },



]







const signals = [



  {



    icon: 'ML',



    label: { es: 'Email', en: 'Email', nl: 'Email' },



    value: 'marekpisetsky001@gmail.com',



    hint: {



      es: 'Prefiero correos con contexto y objetivos claros.',



      en: 'Send a short brief with context and next step.',



      nl: 'Stuur een korte briefing met context en doel.',



    },



    href: 'mailto:marekpisetsky001@gmail.com',



  },



  {



    icon: 'PH',



    label: { es: 'WhatsApp / Teléfono', en: 'WhatsApp / Phone', nl: 'WhatsApp / Telefoon' },



    value: '+31 620 935 300',



    hint: {



      es: 'Mensajes de voz y coordinación directa. Signal disponible.',



      en: 'Voice notes and direct coordination. Signal available.',



      nl: 'Voice notes en directe afstemming. Signal beschikbaar.',



    },



    href: 'tel:+31620935300',



  },



  {



    icon: 'HQ',



    label: { es: 'Base', en: 'Base', nl: 'Standplaats' },



    value: 'Arnhem, NL / movilidad EU',



    hint: {



      es: 'Disponible para reuniones virtuales y viajes puntuales.',



      en: 'Available for virtual meetings and focused travel.',



      nl: 'Beschikbaar voor virtuele meetings en gerichte reizen.',



    },



  },



]







const timeline = [







  {







    year: '2025',







    month: { es: 'Junio 2025', en: 'June 2025', nl: 'Juni 2025' },







    detail: {







      es: 'Buscando traineeships y roles junior en estrategia, comercio internacional o consultoría.',







      en: 'Looking for traineeships and junior roles in strategy, international trade, or consulting.',







      nl: 'Zoekt traineeships en junior rollen in strategie, internationale handel of consultancy.',







    },







    status: { es: 'Disponible', en: 'Available', nl: 'Beschikbaar' },







  },







  {



    year: '2024',



    detail: {



      es: 'Integrando estrategia de marca, investigación y experiencia del cliente mientras participo en el consejo estudiantil.',



      en: 'Integrating brand strategy, research, and customer experience projects while serving on the student council.',



      nl: 'Combineerde merkstrategie, research en customer experience projecten naast de studentenraad.',



    },



    status: { es: 'Proyectos activos', en: 'Active projects', nl: 'Actieve projecten' },



  },



  {







    year: 'Origen',



    label: { es: 'Origen', en: 'Origins', nl: 'Oorsprong' },







    detail: {







      es: 'Lima > Arnhem. Perspectiva multicultural y redes EU / LATAM.',







      en: 'Lima > Arnhem. Multicultural view and EU / LATAM network.',







      nl: 'Lima > Arnhem. Multiculturele blik en EU / LATAM netwerk.',







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



  const quickContacts = signals.slice(0, 2)



  const locationSignal = signals.find((signal) => signal.label?.en === 'Base') ?? signals[2]



  const profileContactRows = [...quickContacts, locationSignal].filter(Boolean)











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







          <article className="panel panel--hero p-10 space-y-6">







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



            <article className="panel profile-card">



              <div className="profile-card__media">



                <img src={profilePhoto} alt={`${t.heroTitle} portrait`} loading="lazy" />



              </div>



              <div className="profile-card__body">
                <div className="section-header">
                  <p className="eyebrow">{t.contactTitle}</p>
                  <p className="text-sm text-muted">{t.contactDescriptionShort}</p>
                </div>



                <div className="profile-card__contacts">



                  {profileContactRows.map((contact) => (



                    <div key={contact.value} className="profile-card__contact">



                      <span className="profile-card__label">{translate(contact.label)}</span>



                      {contact.href ? (



                        <a href={contact.href} className="profile-card__link">



                          {contact.value}



                        </a>



                      ) : (



                        <p className="profile-card__link">{contact.value}</p>



                      )}



                    </div>



                  ))}



                </div>



                <div className="profile-card__stats">



                  {profileStats.map((stat) => (



                    <div key={stat.label.en} className="profile-card__stat">



                      <span className="profile-card__label">{translate(stat.label)}</span>



                      <p className="text-sm font-semibold">{translate(stat.value)}</p>



                    </div>



                  ))}



                </div>



              </div>



            </article>



            <article className="panel p-6 space-y-4">



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







        <section id="profile" className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">

          <article className="panel panel--soft p-6 space-y-6 profile-intro">

            <div className="section-header">

              <p className="eyebrow">{t.profileTitle}</p>

              <p className="text-sm text-muted">{t.profileDescription}</p>

            </div>

            <div className="space-y-4">

              {profileNarrative.map((paragraph, idx) => (

                <p key={idx} className="text-base leading-relaxed text-muted">

                  {translate(paragraph)}

                </p>

              ))}

            </div>

            <ul className="profile-highlights">

              {profileHighlights.map((highlight) => (

                <li key={highlight.en}>{translate(highlight)}</li>

              ))}

            </ul>

          </article>

          <article className="panel p-6 space-y-5 profile-structure">

            <div className="section-header">

              <p className="eyebrow">{t.formatTitle}</p>

              <p className="text-sm text-muted">{t.formatDescription}</p>

            </div>

            <div className="profile-structure__grid">

              {cvLayers.map((layer) => (

                <div key={layer.code} className="structure-card">

                  <span className="structure-card__code">{layer.code}</span>

                  <div>

                    <p className="text-base font-semibold">{translate(layer.title)}</p>

                    <p className="text-sm text-muted">{translate(layer.detail)}</p>

                  </div>

                </div>

              ))}

            </div>

            <div className="value-card">

              <p className="value-card__label">{t.valueStatementLabel}</p>

              <p className="value-card__text">{t.valueStatement}</p>

            </div>

          </article>

        </section>



        <section id="impact" className="space-y-6">



          <div>







            <p className="eyebrow">{t.highlightsTitle}</p>







            <p className="text-muted">{t.highlightsDescription}</p>







          </div>







          <div className="grid gap-4 md:grid-cols-2">

            {highlightMetrics.map((metric) => (

              <article key={metric.value?.en ?? metric.value?.es ?? metric.label.en} className="panel metric-card">

                <p className="metric-label">{translate(metric.label)}</p>

                <p className="metric-value">{translate(metric.value)}</p>

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







          <article className="panel p-6 space-y-6">            <div className="section-header">





              <p className="eyebrow">{t.spotlightsTitle}</p>





              <p className="text-sm text-muted">{t.spotlightsDescription}</p>





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







          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">







            <article className="panel p-6 space-y-4">







              <div>







                <p className="eyebrow">{t.skillsTitle}</p>







                <p className="text-sm text-muted">{t.skillsDescription}</p>







              </div>







              <div className="space-y-5">







                {skillClusters.map((cluster) => (







                  <div key={cluster.title.en} className="skill-cluster">







                    <p className="font-semibold">{translate(cluster.title)}</p>







                    <div className="flex flex-wrap gap-2">







                      {cluster.skills.map((skill) => (







                        <span key={skill.label.en} className="pill pill--soft">







                          {translate(skill.label)}







                        </span>







                      ))}







                    </div>







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















          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">







            <article className="panel p-6 space-y-4">







              <p className="eyebrow">{t.languagesAvailabilityLabel}</p>







              <div className="space-y-3">







                {languageSkills.map((lang) => (







                  <div key={lang.label.en} className="language-card">







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















            <article className="panel p-6 space-y-4">







              <p className="eyebrow">{t.statusLabel}</p>







              <div className="timeline-mini space-y-4">







                {timeline.map((entry) => {







                  const entryWindow = entry.month ? translate(entry.month) : entry.label ? translate(entry.label) : entry.year







                  return (
                    <div key={entry.year} className="timeline-mini__row">

                      <p className="timeline-mini__moment">{entryWindow}</p>

                      <p className="timeline-mini__detail">{translate(entry.detail)}</p>

                      <p className="timeline-mini__status">{translate(entry.status)}</p>

                    </div>







                  )







                })}







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







                    <span className="profile-card__label">{cert.year}</span>







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



              <div className="space-y-4">



                {signals.map((signal) => (



                  <div key={signal.value} className="signal-card">



                    <div className="signal-card__icon">{signal.icon}</div>



                    <div className="space-y-1">



                      <p className="signal-card__label">{translate(signal.label)}</p>



                      {signal.href ? (



                        <a href={signal.href} className="signal-card__link">



                          {signal.value}



                        </a>



                      ) : (



                        <p className="signal-card__link">{signal.value}</p>



                      )}



                      <p className="text-sm text-muted">{translate(signal.hint)}</p>



                    </div>



                  </div>



                ))}



              </div>



            </article>







            <article className="panel value-panel p-6 space-y-4">





              <p className="value-card__label">{t.valueStatementLabel}</p>





              <p className="value-card__text">{t.valueStatement}</p>





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































































































