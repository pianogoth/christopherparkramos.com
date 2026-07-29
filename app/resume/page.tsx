import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Christopher Ramos — Résumé",
  description: "Résumé for Christopher Ramos, a marketing and e-commerce operator based in Los Angeles.",
};

function Category({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="resume-category">
      <h4>{title}</h4>
      <ul>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </section>
  );
}

export default function Resume() {
  return (
    <main className="resume-main" id="top">
      <nav className="resume-nav" aria-label="Résumé navigation">
        <Link href="/">Portfolio</Link>
      </nav>

      <header className="resume-header">
        <h1>CHRISTOPHER RAMOS</h1>
        <p className="resume-contact">Los Angeles, CA <span aria-hidden="true">·</span> <a href="tel:+14402121746">(440) 212-1746</a> <span aria-hidden="true">·</span> <a href="mailto:cpramos@me.com">cpramos@me.com</a> <span aria-hidden="true">·</span> <a href="https://www.linkedin.com/in/christopherparkramos/" target="_blank" rel="noreferrer">LinkedIn<span className="sr-only"> (opens in a new tab)</span></a></p>
        <p className="resume-summary">Marketing and e-commerce operator with over a decade at a luxury multi-brand retailer. Helped open the store and managed it before being pulled behind the scenes into operations, eventually owning the email, paid media, reporting, and site systems the business ran on across three brands. Worked across buying, merchandising, and creative rather than inside a single function.</p>
      </header>

      <section className="resume-section">
        <h2>Experience</h2>

        <article className="resume-role">
          <header className="resume-role-header">
            <h3>Independent Consultant — Brand &amp; Communication Systems</h3>
            <p><a href="https://ghurka.com/" target="_blank" rel="noreferrer">Ghurka<span className="sr-only"> (opens in a new tab)</span></a> (remote) · 2025 – Present</p>
          </header>
          <p>Rebuilt B2B and B2C communication frameworks for a heritage luxury brand, standardizing product storytelling, sales presentation, and reporting materials across digital and print for internal and buyer-facing use.</p>
        </article>

        <article className="resume-role">
          <header className="resume-role-header">
            <h3>Digital Marketing &amp; Design Manager</h3>
            <p>Finch Co. — <a href="https://www.xhibition.co/" target="_blank" rel="noreferrer">XHIBITION<span className="sr-only"> (opens in a new tab)</span></a> / <a href="https://www.ruleofnext.com/" target="_blank" rel="noreferrer">Rule of Next<span className="sr-only"> (opens in a new tab)</span></a> / <a href="https://twomindsnyc.com/" target="_blank" rel="noreferrer">two : minds<span className="sr-only"> (opens in a new tab)</span></a> · 2014 – 2025</p>
          </header>
          <p>Luxury multi-brand retailer, 50+ global and emerging designers, e-commerce and physical retail. Started in store management at opening and moved into operations; scope grew from one brand to three.</p>

          <Category title="Email & Lifecycle" items={[
            "Rebuilt the email program on segmentation and behavioral triggers with continuous A/B testing across subject lines, timing, design, and content; open rates +105%, click rates +30%, conversion +9%",
            "Grew attributed email revenue 91% YoY, $474K to $907K",
            "Built lifecycle automation (welcome, post-purchase, win-back) from near-dormant flows to $112K in annual revenue, up from $33K",
            "Implemented dynamic product blocks, raising average cart from 1.4 to 2.2 items and AOV from $180 to $223",
            "Klaviyo used the account as an internal case study for email optimization",
          ]} />
          <Category title="Paid Media & Analytics" items={[
            "Audited agency-managed Meta campaigns, identified 0.83 ROAS, and moved the operation in-house; rebuilt targeting, creative rotation, and bid strategy to reach 5.55 ROAS on reduced spend",
            "Consolidated Meta, Google Analytics, and Shopify data into a single weekly reporting model in Google Sheets, with built-in formulas calculating revenue, ROAS, and growth for ownership",
            "Ran multi-channel campaign strategy across primary and diffusion brands against ROAS targets",
          ]} />
          <Category title="Merchandising & Cross-Functional Planning" items={[
            "Sat between buying and marketing to align promotional calendars, working against buying-team forecasts to set sale timing and promotional depth in service of sell-through and inventory goals",
            "Led cross-departmental planning sessions connecting promotional strategy to inventory position and revenue targets",
            "Executed visual merchandising and category hierarchy for promotional events",
            "Built and delivered recurring executive business reviews for global brand partners, synthesizing sales, inventory, merchandising, and marketing performance into decks with go-forward recommendations",
          ]} />
          <Category title="E-Commerce & Site" items={[
            "Owned Shopify Plus backend, site speed optimization, and SEO implementation",
            "Developed SEO-driven blog content program with keyword research and editorial production",
            "Built the product and lifestyle photography workflow, holding the fastest turnaround on the team while maintaining brand standards",
            "Produced homepage creative and promotional graphics tied to seasonal campaigns",
          ]} />
          <Category title="Creative Direction" items={[
            "Directed off-site campaign photoshoots concept through execution, managing creative teams on budget; the resulting assets consistently outperformed all other campaign creative across channels",
            "Held visual identity and packaging as a system across three brands rather than rebuilding per project",
            "Established centralized digital asset management across email, social, and site",
          ]} />
        </article>

        <article className="resume-role">
          <header className="resume-role-header">
            <h3>Intelligence Analyst</h3>
            <p>U.S. Air Force / National Security Agency · Fort Gordon, GA · 2004 – 2010</p>
          </header>
          <ul>
            <li>Analyzed complex information and produced written assessments used by senior decision-makers</li>
            <li>Delivered time-sensitive analysis under tight deadlines and strict accuracy requirements</li>
            <li>Rewrote the onboarding and training manual for incoming analysts, reducing ramp time for new hires</li>
            <li>Coordinated with analyst teams across multiple agencies on joint assessments and briefings</li>
            <li>Held Top Secret/SCI clearance</li>
          </ul>
        </article>

        <article className="resume-role">
          <header className="resume-role-header">
            <h3>Founder &amp; Creative Director</h3>
            <p><a href="https://v1984.art" target="_blank" rel="noreferrer">v1984<span className="sr-only"> (opens in a new tab)</span></a> · 2014 – Present · <a href="https://v1984.art" target="_blank" rel="noreferrer">v1984.art<span className="sr-only"> (opens in a new tab)</span></a></p>
          </header>
          <p>Independent music and art direction practice. Releases on Glacial Industries (Dublin) and Knives (Berlin); coverage from FACT. Art direction for Purple Tape Pedigree, Glacial Sound, Sharp Veins, and Blastah. Scores for Adult Swim, for gallery work with Manolis D. Lemos and Tianzhuo Chen, and for a BFI-programmed short at the London Short Film Festival. Writing credit on a Cashmere Cat release. Creative direction, design, and artist relations for BUILD, a Columbus event series, 2013–2019. Designed both project sites.</p>
        </article>

        <article className="resume-role">
          <header className="resume-role-header">
            <h3>Industrial Design Teaching Assistant</h3>
            <p><a href="https://www.cia.edu/" target="_blank" rel="noreferrer">Cleveland Institute of Art<span className="sr-only"> (opens in a new tab)</span></a> · Summers 2013, 2014</p>
          </header>
          <p>Supported full-day studio instruction for high school students in the Pre-College Industrial Design Program, guiding concept development, critique, and final presentations.</p>
        </article>
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        <p><a href="https://www.cia.edu/" target="_blank" rel="noreferrer">Cleveland Institute of Art<span className="sr-only"> (opens in a new tab)</span></a> — BFA, Industrial Design</p>
      </section>

      <section className="resume-section">
        <h2>Core Competencies</h2>
        <p>Email &amp; Lifecycle Marketing · Retention &amp; CRM · Paid Media Management · KPI &amp; Revenue Analysis · Pricing &amp; Merchandising Analysis · Executive &amp; Stakeholder Reporting · Sales &amp; Inventory Data Synthesis · A/B Testing &amp; Optimization · Conversion Rate Optimization · E-Commerce Operations · Visual Merchandising · Creative Direction · Cross-Functional Collaboration · Process &amp; Systems Design</p>
      </section>

      <section className="resume-section">
        <h2>Tools</h2>
        <p>Shopify Plus · Klaviyo · Attentive · Google Analytics · Meta Ads &amp; Business Manager · Google Sheets (VLOOKUP, custom formulas) · Adobe Creative Suite · Heartland CRM · Asana · Slack</p>
      </section>

      <footer className="resume-footer">
        <nav className="footer-nav" aria-label="Résumé footer navigation"><Link href="/">Portfolio</Link><a href="#top">Back to top</a></nav>
      </footer>
    </main>
  );
}
