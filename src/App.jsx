const navigation = [
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

const capabilities = [
  {
    title: 'Strategic narratives',
    description:
      'Research-driven positioning, brand territories, and storytelling frameworks that give ventures a confident voice.',
  },
  {
    title: 'Digital experiences',
    description:
      'Immersive yet minimal product, marketing, and editorial websites where interaction, motion, and clarity align.',
  },
  {
    title: 'Growth experiments',
    description:
      'Rapid testing, analytics, and go-to-market loops designed to help founders validate assumptions in the real world.',
  },
]

const projects = [
  {
    name: 'Monochrome Futures',
    scope: 'Speculative design lab',
    description:
      'Built a long-form manifesto site with volumetric scenes, scroll choreography, and an editorial narrative about near-future habitats.',
  },
  {
    name: 'Arctic Index',
    scope: 'Climate fintech platform',
    description:
      'Led strategy and product website design for a fund tracking Arctic resilience projects with immersive data storytelling.',
  },
  {
    name: 'Quiet Patterns',
    scope: 'Boutique architecture studio',
    description:
      'Developed a calm digital catalogue for spatial works, balancing cinematic renders with precise typography and motion.',
  },
]

const contactDetails = [
  { label: 'Email', value: 'marekpisetsky001@gmail.com', href: 'mailto:marekpisetsky001@gmail.com' },
  { label: 'Phone', value: '+31 620 935 300', href: 'tel:+31620935300' },
  { label: 'Location', value: 'Arnhem, NL', href: null },
]

const App = () => (
  <div className="relative min-h-screen overflow-hidden bg-[#030407]">
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(54,83,203,0.18),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(98,112,255,0.16)_0%,rgba(6,11,24,0)_36%,rgba(6,11,24,0)_64%,rgba(132,219,255,0.1)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(255,255,255,0.04)_45%,transparent_90%)]" />
    </div>

    <div className="pointer-events-none absolute inset-0 -z-10 noise-texture" />

    <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-10 md:px-10">
      <div className="flex items-center gap-4 uppercase tracking-[0.45em] text-[11px] text-white/60">
        <span>MAREK</span>
        <span className="hidden md:inline">/// PORTFOLIO 2025</span>
      </div>
      <nav className="hidden items-center gap-8 text-sm text-white/60 md:flex">
        {navigation.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="transition hover:text-white"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <a
        href="#contact"
        className="rounded-full border border-white/20 px-5 py-2 text-xs uppercase tracking-[0.35em] text-white/70 transition hover:border-white/60 hover:text-white"
      >
        Connect
      </a>
    </header>

    <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-6 pb-24 pt-16 md:px-10">
      <section
        id="manifesto"
        className="relative flex min-h-[70vh] flex-col justify-end gap-16"
      >
        <div className="flex flex-col gap-6 md:max-w-4xl">
          <p className="text-xs uppercase tracking-[0.65em] text-white/50">/// manifesto</p>
          <h1 className="text-4xl font-light leading-tight text-white md:text-6xl">
            Designing calm digital territories for founders who want their ideas to feel inevitable.
          </h1>
          <p className="max-w-xl text-base text-white/65 md:text-lg">
            I’m Marek Andrei Pisetsky Neyra, an international business strategist exploring how narrative, design, and technology can make emerging ventures tangible. I build atmospheric yet functional experiences that mirror the ambition of the teams behind them.
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs uppercase tracking-[0.6em] text-white/40">
          <span className="h-px w-24 bg-white/20" />
          Scroll to discover
        </div>
      </section>

      <section
        id="capabilities"
        className="mt-24 border-t border-white/10 pt-16"
      >
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-start">
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-[0.65em] text-white/50">/// capabilities</p>
            <h2 className="text-3xl font-light text-white md:text-[42px]">
              From the first sketch of a brand mythology to the launch sequence of an interactive experience.
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-white/60">
            Every engagement is bespoke. I work in tight feedback loops with founders, creative directors, and engineers to build narratives that feel cinematic yet intentional. No noise, only atmospheric clarity.
          </p>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {capabilities.map((capability) => (
            <article
              key={capability.title}
              className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/0 p-6 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/5"
            >
              <h3 className="text-lg font-medium text-white">{capability.title}</h3>
              <p className="text-sm leading-relaxed text-white/65">{capability.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="work"
        className="mt-28 border-t border-white/10 pt-16"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.65em] text-white/50">/// selected work</p>
            <h2 className="mt-4 text-3xl font-light text-white md:text-[42px]">Atmospheric builds for visionary teams.</h2>
          </div>
          <span className="text-xs uppercase tracking-[0.55em] text-white/40">2021 — 2025</span>
        </div>
        <div className="mt-12 divide-y divide-white/10">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex flex-col gap-4 py-10 transition hover:bg-white/5"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div className="text-2xl font-medium text-white">{project.name}</div>
                <span className="text-xs uppercase tracking-[0.55em] text-white/45">{project.scope}</span>
              </div>
              <p className="max-w-3xl text-sm leading-relaxed text-white/65">{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="mt-28 border-t border-white/10 pt-16"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="md:max-w-xl">
            <p className="text-xs uppercase tracking-[0.65em] text-white/50">/// contact</p>
            <h2 className="mt-5 text-3xl font-light text-white md:text-[40px]">
              Let’s build the digital flagship your vision deserves.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Send a note, share a deck, or invite me into your workspace. I work across Europe and remotely with founders worldwide.
            </p>
          </div>
          <div className="flex flex-col gap-6 text-sm text-white/65">
            {contactDetails.map((item) => (
              <div key={item.label}>
                <p className="text-xs uppercase tracking-[0.6em] text-white/40">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-2 inline-flex items-center gap-3 text-lg text-white transition hover:gap-4 hover:text-white/80"
                  >
                    {item.value}
                    <span className="text-xs">↗</span>
                  </a>
                ) : (
                  <p className="mt-2 text-lg text-white">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>

    <footer className="relative z-10 border-t border-white/10 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 text-xs uppercase tracking-[0.5em] text-white/35 md:flex-row md:items-center md:px-10">
        <span>© {new Date().getFullYear()} Marek A. Pisetsky Neyra</span>
        <span>Crafted in Arnhem — Built for everywhere</span>
      </div>
    </footer>
  </div>
)

export default App
