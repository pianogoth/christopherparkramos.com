const cases = [
  { id: "CR–01", title: "The Campaign Everyone Assumed Was Fine" },
  { id: "CR–02", title: "Turning a Maintenance Channel Into a Growth Channel" },
  { id: "CR–03", title: "One Sheet, Three Platforms, No Dashboard" },
  { id: "CR–04", title: "Running Three Brands as a Company of One" },
];

function CaseHeader({ number, title }: { number: string; title: string }) {
  return (
    <header className="case-header">
      <p className="case-number">{number}</p>
      <h2>{title}</h2>
    </header>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="case-section">
      <h3>{label}</h3>
      <div className="case-copy">{children}</div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Christopher Park Ramos, home">
          Christopher Park Ramos
        </a>
        <p className="header-meta">Los Angeles, CA<br /><a href="mailto:cpramos@me.com">cpramos@me.com</a><br /><a href="https://www.linkedin.com/in/christopherparkramos/" target="_blank" rel="noreferrer">LinkedIn<span className="sr-only"> (opens in a new tab)</span></a></p>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <h1 id="hero-title">Define the problem. Then build the tool it actually needs.</h1>
        <p className="dek">Four cases from a decade spent turning ambiguous sales, inventory, and revenue data into decisions people could act on.</p>
      </section>

      <nav className="contents" id="contents" aria-label="Case studies">
        <p className="contents-label">Contents</p>
        <ol>
          {cases.map((item, index) => (
            <li key={item.id}>
              <a href={`#case-${index + 1}`}>
                <span>{item.id}</span>
                <strong>{item.title}</strong>
                <span className="entry-type">Case study</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <article className="case-study" id="case-1">
        <CaseHeader number="CR–01" title="The Campaign Everyone Assumed Was Fine" />
        <div className="case-body">
          <Section label="The Problem"><p>Paid media ran through an outside agency. The reports looked normal — spend, impressions, the usual dashboard fare — but return on ad spend told a different story: 0.83. Less than a dollar came back for every dollar spent. Nobody had flagged it, because “paid media is expensive” is an easy assumption to hide behind.</p></Section>
          <Section label="What I Did"><p>Audited the actual campaign structure instead of the summary numbers — targeting, creative rotation, bid strategy — and found the gap between what was being spent and what was actually converting. Rebuilt the strategy and reporting in-house.</p></Section>
          <Section label="Result"><p>ROAS moved from 0.83 to 5.55. Spend went down at the same time.</p></Section>
          <blockquote>Trusting a report and verifying it are not the same action. Most inefficiency survives exactly because no one does the second one.</blockquote>
        </div>
      </article>

      <article className="case-study" id="case-2">
        <CaseHeader number="CR–02" title="Turning a Maintenance Channel Into a Growth Channel" />
        <div className="case-body">
          <Section label="The Problem"><p>Email was treated the way most retailers treat it: a maintenance channel. Promotions, order updates, the same message to everyone on the list. It generated revenue, but nobody was actively managing it the way they’d manage paid acquisition.</p></Section>
          <Section label="What I Did"><p>Rebuilt it around segmentation and behavioral targeting — what a customer had actually done, not just that they were on a list. Lifecycle automation — welcome flows, post-purchase, win-back — went from an afterthought to a real system, scaling from $33K to $112K on its own.</p></Section>
          <Section label="Result"><p>Channel revenue overall grew 91% year over year — $474K to $907K.</p></Section>
          <blockquote>The distinction that mattered wasn’t effort, it was category. A maintenance channel gets more attention; a growth channel gets rebuilt around behavior.</blockquote>
        </div>
      </article>

      <article className="case-study" id="case-3">
        <CaseHeader number="CR–03" title="One Sheet, Three Platforms, No Dashboard" />
        <div className="case-body">
          <Section label="The Problem"><p>Performance data lived in three separate systems — Meta Ads Manager, Google Analytics, Shopify — each with its own interface and its own definition of a sale. Getting a straight answer to “how did we do this week” meant three tabs and hand math, every time.</p></Section>
          <Section label="What Ownership Actually Wanted"><p>The obvious fix is a dashboard. I built one early on and it didn’t land — ownership wanted the actual numbers, not a chart standing in for them.</p></Section>
          <blockquote>Revenue is revenue. Once it’s been turned into a graph, there’s a layer between the person and the number they’re trying to trust.</blockquote>
          <Section label="What I Built Instead"><p>A single Google Sheet, rebuilt weekly, consolidating all three sources — with formulas doing the calculation work (revenue, ROAS, growth) so ownership never had to. Not automated end to end; the consolidation was a manual weekly rebuild, by design. Every number had to be one you could trust without checking underneath it.</p></Section>
          <Section label="Why It Mattered"><p>The best tool isn’t the more sophisticated one. It’s the one that matches how the person using it actually thinks.</p></Section>
        </div>
      </article>

      <article className="case-study" id="case-4">
        <CaseHeader number="CR–04" title="Running Three Brands as a Company of One" />
        <div className="case-body">
          <Section label="The Setup"><p>I joined as the first dedicated marketing hire across three brands — XHIBITION, Rule of Next, two:minds — under one roof, each needing a distinct visual and commercial identity, none of them with a dedicated team. Eleven years later, I was still the connective layer between them.</p></Section>
          <Section label="The Actual Job"><p>It was never “do marketing for three brands.” It was building shared infrastructure — reporting cadence, creative production process, e-commerce operations — flexible enough to let each brand keep its own voice without needing its own department. Campaign shoots that became each brand’s highest-performing creative. Executive business reviews synthesizing sales and inventory for global brand partners. Visual identity and packaging maintained as a system, not reinvented per project.</p></Section>
          <blockquote>None of it worked because I was a marketing specialist, or a data specialist, or a design specialist. It worked because someone had to be the thing connecting all three — and for eleven years, that was the actual job description, whatever the title said.</blockquote>
        </div>
      </article>

      <footer>
        <p>If any of this is relevant to something you’re building, I’d like to hear about it.</p>
        <div className="footer-meta"><a href="mailto:cpramos@me.com">cpramos@me.com</a><a href="https://www.linkedin.com/in/christopherparkramos/" target="_blank" rel="noreferrer">LinkedIn</a><span>Los Angeles, CA</span></div>
        <a className="back-top" href="#top">Back to top</a>
      </footer>
    </main>
  );
}
