import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Building2,
  Car,
  CircleDollarSign,
  Gauge,
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

const caseSignals = [
  { label: "UAE new-car registrations, H1 2025", value: "157k", tone: "positive" },
  { label: "UAE vehicle sales, Q1 2026", value: "69.3k", tone: "negative" },
  { label: "DubiCars demand, H1 2025", value: "+42%", tone: "positive" },
  { label: "Dubai used-car price index, 2025", value: "108", tone: "warning" }
];

const segmentRows = [
  { segment: "Export-grade SUVs", direction: "Protected", score: 88 },
  { segment: "Chinese brands", direction: "Share gain", score: 76 },
  { segment: "Sedans", direction: "Repricing", score: 54 },
  { segment: "Luxury stock", direction: "Selective", score: 49 }
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
            <Link href="/automotive" className="button primary">
              Open automotive desk
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
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

      <section className="case-preview" aria-labelledby="case-heading">
        <div className="case-intro">
          <p className="eyebrow">First project</p>
          <h2 id="case-heading">UAE Automotive Pricing Intelligence</h2>
          <p>
            A market analysis case study reviewing pricing patterns, segment trends, and
            business implications for dealers and platforms.
          </p>
          <Link href="/automotive" className="text-link">
            Read the market study
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="dashboard-preview" aria-label="Automotive market signal preview">
          <div className="panel-header">
            <span>Automotive signal board</span>
            <Gauge size={18} aria-hidden="true" />
          </div>
          <div className="signal-grid">
            {caseSignals.map((signal) => (
              <article className={`signal-card ${signal.tone}`} key={signal.label}>
                <span>{signal.label}</span>
                <strong>{signal.value}</strong>
              </article>
            ))}
          </div>

          <div className="split-dashboard">
            <div className="mini-chart">
              <div>
                <span>Used price index</span>
                <strong>Softening from the 2022 peak</strong>
              </div>
              <svg viewBox="0 0 360 160" role="img" aria-label="Used price index trend chart">
                <line x1="24" y1="132" x2="336" y2="132" />
                <line x1="24" y1="28" x2="24" y2="132" />
                <polyline points="24,56 86,34 148,52 210,72 272,96 336,110" />
                <circle cx="86" cy="34" r="5" />
                <circle cx="336" cy="110" r="5" />
              </svg>
            </div>

            <div className="segment-stack" aria-label="Segment pressure scores">
              {segmentRows.map((row) => (
                <div className="segment-row" key={row.segment}>
                  <div>
                    <strong>{row.segment}</strong>
                    <span>{row.direction}</span>
                  </div>
                  <div className="bar-track" aria-hidden="true">
                    <span style={{ width: `${row.score}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
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
