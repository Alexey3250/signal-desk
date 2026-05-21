import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Building2,
  Car,
  CircleDollarSign,
  Plane,
  PackageSearch,
  Radar,
  TrendingUp
} from "lucide-react";

const sectors = [
  {
    label: "Automotive",
    status: "Live case study",
    icon: Car,
    detail: "Pricing intelligence, stock velocity, segment shifts"
  },
  {
    label: "Aviation",
    status: "Next desk",
    icon: Plane,
    detail: "Capacity, fares, route economics, travel demand"
  },
  {
    label: "Real Estate",
    status: "Planned",
    icon: Building2,
    detail: "Supply, absorption, rents, project positioning"
  },
  {
    label: "Finance / Macro",
    status: "Planned",
    icon: CircleDollarSign,
    detail: "Rates, inflation, liquidity, sector exposure"
  },
  {
    label: "Product Analytics",
    status: "Planned",
    icon: PackageSearch,
    detail: "Funnels, cohorts, retention, monetization signals"
  }
];

const portfolioMetrics = [
  { label: "Live sectors", value: "1", context: "automotive desk launched" },
  { label: "Pipeline desks", value: "4", context: "aviation, real estate, macro, product" },
  { label: "First market", value: "UAE", context: "dealer and platform intelligence" },
  { label: "Core output", value: "Insight", context: "dashboards plus executive studies" }
];

const projects = [
  {
    title: "UAE Automotive Pricing Intelligence",
    sector: "Automotive",
    status: "Live",
    href: "/automotive",
    summary:
      "A market analysis case study reviewing pricing patterns, segment trends, and business implications for dealers and platforms.",
    outputs: ["Market narrative", "Segment trends", "Dealer and platform implications"]
  },
  {
    title: "Aviation Market Desk",
    sector: "Aviation",
    status: "Planned",
    summary:
      "A future desk for capacity, fare, route economics, passenger demand, and airline-facing market signals.",
    outputs: ["Route demand", "Fare pressure", "Capacity shifts"]
  },
  {
    title: "Real Estate Intelligence",
    sector: "Real Estate",
    status: "Planned",
    summary:
      "A future desk for supply, absorption, pricing, rents, and project positioning across property markets.",
    outputs: ["Supply trends", "Absorption", "Pricing signals"]
  }
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Signal Desk navigation">
        <Link href="/" className="brand-lockup" aria-label="Signal Desk home">
          <span className="brand-mark">
            <BarChart3 size={19} aria-hidden="true" />
          </span>
          <span>
            <strong>Signal Desk</strong>
            <small>Analytics Portfolio</small>
          </span>
        </Link>
        <nav className="topnav">
          <a href="#projects">Projects</a>
          <Link href="/automotive">Automotive</Link>
          <a href="https://github.com/Alexey3250/signal-desk" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      </header>

      <section className="workspace-hero" aria-labelledby="signal-desk-title">
        <div className="hero-copy">
          <p className="eyebrow">Sector intelligence portfolio</p>
          <h1 id="signal-desk-title">Signal Desk</h1>
          <p className="lede">
            Sector-focused dashboards and market studies that turn raw data into business
            insight.
          </p>
          <div className="hero-meta" aria-label="Portfolio coverage">
            <span>Market intelligence</span>
            <span>Executive dashboards</span>
            <span>Sector studies</span>
          </div>
          <div className="hero-actions">
            <a href="#projects" className="button primary">
              Explore project catalog
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              href="https://github.com/Alexey3250/signal-desk"
              className="button secondary"
              target="_blank"
              rel="noreferrer"
            >
              View repository
            </a>
          </div>
        </div>

        <div className="portfolio-panel" aria-label="Portfolio metrics">
          <div className="panel-header">
            <span>Portfolio map</span>
            <Radar size={18} aria-hidden="true" />
          </div>
          <p className="panel-copy">
            A focused publishing system for turning messy sector data into decision-ready
            narratives.
          </p>
          <div className="metric-grid compact">
            {portfolioMetrics.map((metric) => (
              <article className="metric-card" key={metric.label}>
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
                <small>{metric.context}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band" aria-labelledby="sector-heading">
        <div className="section-heading">
          <p className="eyebrow">Desk structure</p>
          <h2 id="sector-heading">Five sectors, one publishing system</h2>
        </div>
        <div className="sector-grid">
          {sectors.map((sector) => {
            const Icon = sector.icon;

            return (
              <article className={`sector-card ${sector.label === "Automotive" ? "is-live" : ""}`} key={sector.label}>
                <div className="sector-icon" aria-hidden="true">
                  <Icon size={21} />
                </div>
                <div>
                  <h3>{sector.label}</h3>
                  <p>{sector.detail}</p>
                </div>
                <span>{sector.status}</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-band project-catalog" id="projects" aria-labelledby="projects-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Project bridge</p>
            <h2 id="projects-heading">Open the desk you want to review</h2>
          </div>
          <p>
            The homepage stays as the portfolio overview. Each project opens on its own
            route when it is ready.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${project.status === "Live" ? "is-live" : ""}`}
              key={project.title}
            >
              <div>
                <span className="project-sector">{project.sector}</span>
                <strong className="project-status">{project.status}</strong>
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul>
                {project.outputs.map((output) => (
                  <li key={output}>{output}</li>
                ))}
              </ul>
              {project.href ? (
                <Link href={project.href} className="text-link">
                  Open project
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              ) : (
                <span className="project-soon">Coming soon</span>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="cv-strip" aria-label="CV positioning">
        <TrendingUp size={22} aria-hidden="true" />
        <p>
          Built Signal Desk, a Next.js analytics portfolio publishing market intelligence
          dashboards across automotive, aviation, and real estate.
        </p>
      </section>
    </main>
  );
}
