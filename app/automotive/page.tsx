import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  Database,
  Gauge,
  LineChart,
  ShieldCheck,
  TrendingDown
} from "lucide-react";

export const metadata: Metadata = {
  title: "UAE Automotive Pricing Intelligence | Signal Desk",
  description:
    "A market analysis case study reviewing pricing patterns, segment trends, and business implications for dealers and platforms."
};

const kpis = [
  {
    label: "UAE new-car registrations, H1 2025",
    value: "157k",
    note: "+11% YoY",
    tone: "positive"
  },
  {
    label: "UAE vehicle sales, Q1 2026",
    value: "69.3k",
    note: "-19.1% YoY",
    tone: "negative"
  },
  {
    label: "DubiCars platform demand, H1 2025",
    value: "+42%",
    note: "strong demand signal",
    tone: "positive"
  },
  {
    label: "Dubai used-car price index, 2025",
    value: "108",
    note: "-20.6% from 2022 peak",
    tone: "warning"
  },
  {
    label: "Chinese-brand demand share",
    value: "13%",
    note: "from 3% in 2024",
    tone: "positive"
  },
  {
    label: "Dubai active vehicle base, Q1 2026",
    value: "4.85m",
    note: "+8.4% YoY proxy",
    tone: "positive"
  }
];

const regimeCards = [
  {
    title: "Old regime",
    subtitle: "Stock scarcity gave sellers pricing power.",
    points: [
      "Dealer advantage came from access and allocation",
      "Buyer urgency absorbed weaker pricing logic",
      "Generic depreciation curves were good enough"
    ]
  },
  {
    title: "New regime",
    subtitle: "Abundance makes pricing intelligence the advantage.",
    points: [
      "Price confidence depends on segment, spec, and history",
      "Stock age becomes a live margin risk",
      "Export demand can protect selected models"
    ]
  }
];

const segmentMatrix = [
  {
    segment: "Export-grade large SUVs",
    pricing: "Protected",
    reason: "GCC reliability, cross-border demand, and brand liquidity support premiums.",
    strength: 92
  },
  {
    segment: "Compact SUVs",
    pricing: "Competitive",
    reason: "High buyer interest but more available substitutes cap price upside.",
    strength: 74
  },
  {
    segment: "Chinese brands",
    pricing: "Share gain",
    reason: "Value positioning expanded demand while rewriting buyer reference prices.",
    strength: 68
  },
  {
    segment: "Sedans",
    pricing: "Pressure",
    reason: "More supply, softer desirability, and limited export optionality compress pricing.",
    strength: 44
  },
  {
    segment: "Luxury cars",
    pricing: "Selective",
    reason: "Brand, warranty, and condition create a wider gap between strong and weak stock.",
    strength: 58
  }
];

const productLevers = [
  {
    title: "Spec Confidence Score",
    body: "Flag pricing risk from wrong trim, non-GCC spec, missing service history, accident uncertainty, or weak warranty confidence."
  },
  {
    title: "Segment-Specific Depreciation",
    body: "Separate sedans, compact SUVs, export-grade SUVs, luxury cars, Chinese brands, hybrids, and EVs instead of forcing one curve."
  },
  {
    title: "Inventory Age Risk Alert",
    body: "Show the point where waiting for a higher sticker price becomes more expensive than repricing the car now."
  },
  {
    title: "Export Premium Detector",
    body: "Identify models whose prices are supported by GCC, Africa, or Asia demand, not only local retail buyers."
  },
  {
    title: "Market Shock Overlay",
    body: "Connect external shocks to flows: fuel, freight, PMI, travel, lead times, delivery delays, and luxury demand."
  },
  {
    title: "Agentic Market Reports",
    body: "Generate podcast-ready market summaries for dealers: what changed, why it matters, and what action to take this week."
  }
];

const scenarios = [
  {
    title: "Best case",
    probability: "25%",
    tone: "positive",
    body: "Shipping normalises, fuel prices ease, tourism stays strong, and Chinese OEM supply remains disciplined.",
    points: ["Registrations: +8% to +12%", "Used transactions: +8% to +12%", "Days-to-sell: 25-30 days"]
  },
  {
    title: "Likely case",
    probability: "55%",
    tone: "warning",
    body: "Partial logistics recovery, resilient tourism, available financing, but continued mass-market oversupply.",
    points: ["Registrations: 0% to +4%", "Used transactions: +3% to +6%", "Days-to-sell: 32-38 days"]
  },
  {
    title: "Worst case",
    probability: "20%",
    tone: "negative",
    body: "Conflict extends, shipping disruption repeats, fuel stays high, tourism softens, and dealers overstock.",
    points: ["Registrations: -8% to -12%", "Used transactions: -5% to -10%", "Days-to-sell: 45-55+ days"]
  }
];

const hooks = [
  "Dubai did not lose cars. It lost urgency.",
  "A Land Cruiser in Dubai behaves more like a tradable asset than a normal used car.",
  "Year and mileage are the receipt. Spec, history, and confidence are the price.",
  "In 2026, dealers win by moving faster, not by holding out.",
  "Chinese brands did not just add cars. They rewrote the value ceiling."
];

function VehicleBaseChart() {
  return (
    <svg viewBox="0 0 620 260" role="img" aria-label="Dubai active vehicle base rose from 4.31 million to 4.85 million">
      <g className="chart-grid">
        <line x1="56" y1="42" x2="580" y2="42" />
        <line x1="56" y1="92" x2="580" y2="92" />
        <line x1="56" y1="142" x2="580" y2="142" />
        <line x1="56" y1="192" x2="580" y2="192" />
      </g>
      <line className="axis" x1="56" y1="214" x2="580" y2="214" />
      <line className="axis" x1="56" y1="34" x2="56" y2="214" />
      <polyline className="line-blue" points="56,198 160,170 264,140 368,112 472,82 580,52" />
      {[56, 160, 264, 368, 472, 580].map((x, index) => (
        <circle className="dot-blue" cx={x} cy={[198, 170, 140, 112, 82, 52][index]} r="6" key={x} />
      ))}
      <text x="42" y="218">4.3</text>
      <text x="42" y="46">4.9</text>
      <text x="47" y="240">2021</text>
      <text x="552" y="240">Q1 26</text>
      <text className="chart-callout" x="396" y="62">4.85m</text>
    </svg>
  );
}

function PriceIndexChart() {
  return (
    <svg viewBox="0 0 620 260" role="img" aria-label="Dubai used car price index fell from 136 to 108">
      <g className="chart-grid">
        <line x1="56" y1="42" x2="580" y2="42" />
        <line x1="56" y1="92" x2="580" y2="92" />
        <line x1="56" y1="142" x2="580" y2="142" />
        <line x1="56" y1="192" x2="580" y2="192" />
      </g>
      <line className="axis" x1="56" y1="214" x2="580" y2="214" />
      <line className="axis" x1="56" y1="34" x2="56" y2="214" />
      <polyline className="line-red" points="56,142 160,84 264,54 368,92 472,132 580,166" />
      {[56, 160, 264, 368, 472, 580].map((x, index) => (
        <circle className="dot-red" cx={x} cy={[142, 84, 54, 92, 132, 166][index]} r="6" key={x} />
      ))}
      <text x="40" y="218">100</text>
      <text x="40" y="46">140</text>
      <text x="47" y="240">2020</text>
      <text x="556" y="240">2025</text>
      <text className="chart-callout" x="438" y="122">Index 108</text>
    </svg>
  );
}

function DemandShareChart() {
  return (
    <svg viewBox="0 0 620 260" role="img" aria-label="Chinese brand demand share rose from 3 percent to 13 percent">
      <line className="axis" x1="72" y1="212" x2="568" y2="212" />
      <line className="axis" x1="72" y1="40" x2="72" y2="212" />
      <rect className="bar-muted" x="126" y="174" width="94" height="38" rx="6" />
      <rect className="bar-teal" x="398" y="74" width="94" height="138" rx="6" />
      <text x="142" y="164">3%</text>
      <text x="408" y="64">13%</text>
      <text x="128" y="238">2024</text>
      <text x="398" y="238">2025</text>
      <text className="chart-callout" x="312" y="120">Demand share widened</text>
    </svg>
  );
}

export default function AutomotivePage() {
  return (
    <main className="site-shell detail-shell">
      <header className="topbar" aria-label="Automotive navigation">
        <Link href="/" className="back-link">
          <ArrowLeft size={17} aria-hidden="true" />
          Signal Desk
        </Link>
        <nav className="topnav">
          <a href="#signals">Signals</a>
          <a href="#segments">Segments</a>
          <a href="#outlook">Outlook</a>
        </nav>
      </header>

      <section className="case-hero" aria-labelledby="automotive-title">
        <div>
          <p className="eyebrow">UAE Automotive Pricing Intelligence</p>
          <h1 id="automotive-title">Dubai did not lose cars. It lost urgency.</h1>
          <p className="lede">
            A market analysis case study reviewing pricing patterns, segment trends, and
            business implications for dealers and platforms.
          </p>
          <div className="hero-meta" aria-label="Study format">
            <span>Dashboard</span>
            <span>Market study</span>
            <span>Product implications</span>
          </div>
          <div className="hero-pills" aria-label="Case study themes">
            <span>Supply abundance</span>
            <span>Slow stock turn</span>
            <span>Export-grade SUVs</span>
            <span>Spec confidence</span>
          </div>
        </div>
        <aside className="thesis-panel" aria-label="CEO-level sentence">
          <Gauge size={28} aria-hidden="true" />
          <span>One CEO-level sentence</span>
          <strong>Pricing power now depends on segment, specification confidence, stock age, buyer urgency, and export demand.</strong>
        </aside>
      </section>

      <section className="metric-grid" aria-label="Automotive market KPIs">
        {kpis.map((kpi) => (
          <article className={`metric-card ${kpi.tone}`} key={kpi.label}>
            <span>{kpi.label}</span>
            <strong>{kpi.value}</strong>
            <small>{kpi.note}</small>
          </article>
        ))}
      </section>

      <section className="section-band" id="signals" aria-labelledby="signals-title">
        <div className="section-heading">
          <p className="eyebrow">Signals, not noise</p>
          <h2 id="signals-title">The market moved into an intelligence-driven inventory cycle</h2>
        </div>
        <div className="chart-grid-layout">
          <article className="chart-card">
            <div className="chart-heading">
              <div>
                <h3>Active vehicle base kept rising</h3>
                <p>Registered active vehicles proxy, millions.</p>
              </div>
              <LineChart size={20} aria-hidden="true" />
            </div>
            <VehicleBaseChart />
          </article>
          <article className="chart-card">
            <div className="chart-heading">
              <div>
                <h3>Used-car pricing softened</h3>
                <p>Price index moved below the shortage-cycle peak.</p>
              </div>
              <TrendingDown size={20} aria-hidden="true" />
            </div>
            <PriceIndexChart />
          </article>
          <article className="chart-card">
            <div className="chart-heading">
              <div>
                <h3>Chinese brands reset value anchors</h3>
                <p>Demand share rose from a small base into a real pricing force.</p>
              </div>
              <BarChart3 size={20} aria-hidden="true" />
            </div>
            <DemandShareChart />
          </article>
        </div>
      </section>

      <section className="section-band" aria-labelledby="regime-title">
        <div className="section-heading">
          <p className="eyebrow">Core narrative</p>
          <h2 id="regime-title">The regime shift</h2>
        </div>
        <div className="regime-grid">
          {regimeCards.map((card, index) => (
            <article className="regime-card" key={card.title}>
              <span>0{index + 1}</span>
              <h3>{card.title}</h3>
              <p>{card.subtitle}</p>
              <ul>
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band" id="segments" aria-labelledby="segments-title">
        <div className="section-heading">
          <p className="eyebrow">Segment economics</p>
          <h2 id="segments-title">Not every car is in the same cycle</h2>
        </div>
        <div className="matrix">
          {segmentMatrix.map((row) => (
            <article className="matrix-row" key={row.segment}>
              <div>
                <h3>{row.segment}</h3>
                <p>{row.reason}</p>
              </div>
              <strong>{row.pricing}</strong>
              <div className="bar-track" aria-label={`${row.segment} pricing support ${row.strength} percent`}>
                <span style={{ width: `${row.strength}%` }} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band" aria-labelledby="product-title">
        <div className="section-heading">
          <p className="eyebrow">Business implications</p>
          <h2 id="product-title">What a dealer or platform should build from this</h2>
        </div>
        <div className="lever-grid">
          {productLevers.map((lever, index) => (
            <article className="lever-card" key={lever.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{lever.title}</h3>
              <p>{lever.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band" id="outlook" aria-labelledby="outlook-title">
        <div className="section-heading">
          <p className="eyebrow">Scenario view</p>
          <h2 id="outlook-title">12-month outlook</h2>
        </div>
        <div className="scenario-grid">
          {scenarios.map((scenario) => (
            <article className={`scenario-card ${scenario.tone}`} key={scenario.title}>
              <div>
                <h3>{scenario.title}</h3>
                <strong>{scenario.probability}</strong>
              </div>
              <p>{scenario.body}</p>
              <ul>
                {scenario.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band" aria-labelledby="method-title">
        <div className="method-grid">
          <article className="method-card">
            <Database size={24} aria-hidden="true" />
            <h2 id="method-title">Methodology caveat</h2>
            <p>
              The analysis uses a proxy stack: UAE registrations, Dubai active
              vehicle-base proxies, marketplace demand and listings, used-car price
              indices, dealer commentary, transport CPI, fuel prices, taxi-trip data,
              PMI, and logistics reports. The strongest claims are about direction,
              turning points, and relative segment behavior, not exact transaction
              microdata.
            </p>
          </article>
          <article className="method-card">
            <ShieldCheck size={24} aria-hidden="true" />
            <h2>Decision discipline</h2>
            <p>
              The practical output is not a single price forecast. It is a better
              decision system: when to hold, when to reprice, which cars deserve a
              premium, and which units are quietly becoming aged stock.
            </p>
          </article>
        </div>
      </section>

      <section className="section-band" aria-labelledby="hooks-title">
        <div className="section-heading">
          <p className="eyebrow">Shareable insights</p>
          <h2 id="hooks-title">Podcast-ready hooks</h2>
        </div>
        <div className="hook-grid">
          {hooks.map((hook, index) => (
            <blockquote key={hook}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {hook}
            </blockquote>
          ))}
        </div>
      </section>

      <section className="final-summary" aria-label="CEO summary">
        <div>
          <p className="eyebrow">CEO summary</p>
          <h2>Winners will know when to move stock, not just how to set sticker prices.</h2>
        </div>
        <Link href="/" className="button secondary">
          Back to portfolio
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
