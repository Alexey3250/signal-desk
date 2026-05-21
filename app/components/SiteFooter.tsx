import Link from "next/link";
import { ArrowUpRight, BarChart3, ExternalLink, Layers3 } from "lucide-react";

const footerLinks = [
  {
    label: "GitHub profile",
    href: "https://github.com/Alexey3250",
    external: true
  },
  {
    label: "Repository",
    href: "https://github.com/Alexey3250/signal-desk",
    external: true
  },
  {
    label: "Automotive study",
    href: "/automotive",
    external: false
  }
];

export function SiteFooter() {
  return (
    <footer className="site-footer" aria-label="Signal Desk footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="brand-mark footer-mark">
            <BarChart3 size={18} aria-hidden="true" />
          </span>
          <div>
            <strong>Signal Desk</strong>
            <p>
              A project by Alexey for publishing compact market intelligence,
              analytics dashboards, and business-facing case studies.
            </p>
          </div>
        </div>

        <div className="footer-note">
          <Layers3 size={19} aria-hidden="true" />
          <span>
            Built as a living portfolio across automotive, aviation, real estate,
            finance, macro, and product analytics.
          </span>
        </div>

        <nav className="footer-links" aria-label="Footer links">
          {footerLinks.map((link) =>
            link.external ? (
              <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>
                {link.label}
                {link.label.includes("GitHub") ? (
                  <ExternalLink size={15} aria-hidden="true" />
                ) : (
                  <ArrowUpRight size={15} aria-hidden="true" />
                )}
              </a>
            ) : (
              <Link href={link.href} key={link.label}>
                {link.label}
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            )
          )}
        </nav>
      </div>
    </footer>
  );
}
