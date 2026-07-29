import Link from "next/link";

const cases = [
  "The Campaign Everyone Assumed Was Fine",
  "The Channel Nobody Was Managing",
  "One Sheet, Three Platforms, No Dashboard",
  "Running Three Brands as a Company of One",
  "Coda — v1984",
];

function CaseHeader({ title }: { title: string }) {
  return (
    <header className="case-header">
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
        <a className="wordmark" href="#top" aria-label="Christopher Ramos, home">
          CHRISTOPHER RAMOS
        </a>
        <p className="header-meta">Los Angeles, CA <span aria-hidden="true">·</span> <a href="mailto:cpramos@me.com">cpramos@me.com</a> <span aria-hidden="true">·</span> <a href="https://www.linkedin.com/in/christopherparkramos/" target="_blank" rel="noreferrer">LinkedIn<span className="sr-only"> (opens in a new tab)</span></a></p>
      </header>

      <section className="intro" id="top">
        <p className="dek">Over a decade building the reporting, e-commerce, and creative systems a luxury multi-brand retailer ran on — across three brands, from the marketing side of the business. Currently consulting on brand systems for Ghurka. Los Angeles.</p>
      </section>

      <div className="contents-break" aria-hidden="true" style={{ blockSize: "clamp(140px, 14vw, 220px)" }} />

      <nav className="contents" id="contents" aria-label="Case studies">
        <p className="contents-label">Contents</p>
        <ol>
          {cases.map((title, index) => (
            <li key={title}>
              <a href={`#case-${index + 1}`}>
                {title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="contents-break" aria-hidden="true" style={{ blockSize: "clamp(140px, 14vw, 220px)" }} />

      <article className="case-study" id="case-1">
        <CaseHeader title="The Campaign Everyone Assumed Was Fine" />
        <div className="case-body">
          <Section label="The Problem"><p>Paid media for the primary brand ran through an outside agency. The reports looked normal — spend, impressions, the usual dashboard fare — but return on ad spend was 0.83. Less than a dollar came back for every dollar spent. Nobody had flagged it, because &quot;paid media is expensive&quot; is an easy assumption to hide behind.</p></Section>
          <Section label="What I Did"><p>Audited the campaign structure rather than the summary reporting — targeting, creative rotation, bid strategy — and found where spend and conversion had come apart. Moved the whole operation in-house and rebuilt it.</p></Section>
          <Section label="Result"><p>ROAS went from 0.83 to 5.55, on less spend than the agency had been using.</p></Section>
          <blockquote>Trusting a report and verifying it are not the same action.</blockquote>
        </div>
      </article>

      <article className="case-study" id="case-2">
        <CaseHeader title="The Channel Nobody Was Managing" />
        <div className="case-body">
          <Section label="The Problem"><p>Email was treated the way most retailers treat it — promotions out, order confirmations out, the same message to everyone on the list. It produced revenue, so nobody questioned it. It was also the only channel where we owned the audience outright and weren&apos;t paying for reach.</p></Section>
          <Section label="What I Did"><p>Rebuilt it on segmentation and behavioral triggers, then tested continuously rather than in campaigns: subject lines, send timing, design, dynamic product blocks. Lifecycle automation — welcome, post-purchase, win-back — went from three flows nobody had touched to the system doing the steady work.</p></Section>
          <Section label="Result"><p>Open rates up 105%, clicks up 30%, conversion up 9%. Attributed revenue grew 91% year over year, $474K to $907K. Automated flow revenue went from $33K to $112K. Dynamic product blocks moved average cart from 1.4 items to 2.2 and AOV from $180 to $223.</p></Section>
          <blockquote>Klaviyo used the account as an internal case study.</blockquote>
        </div>
      </article>

      <article className="case-study" id="case-3">
        <CaseHeader title="One Sheet, Three Platforms, No Dashboard" />
        <div className="case-body">
          <Section label="The Problem"><p>Performance data lived in three systems — Meta, Google Analytics, Shopify — each with its own interface and its own definition of a sale. Answering &quot;how did we do this week&quot; meant three tabs and hand math, every week.</p></Section>
          <Section label="What Ownership Actually Wanted"><p>The obvious fix is a dashboard. I built one and it didn&apos;t land. Ownership wanted the numbers themselves, not a chart standing in for them.</p></Section>
          <blockquote>Revenue is revenue. Once it&apos;s been turned into a graph, there&apos;s a layer between the person and the number they&apos;re trying to trust.</blockquote>
          <Section label="What I Built Instead"><p>One sheet, rebuilt weekly, pulling all three sources together with the formulas doing the calculation work so nobody downstream had to. Not automated end to end — the consolidation stayed manual by choice. Every number in it had to be one you could trust without going to check the source.</p></Section>
        </div>
      </article>

      <article className="case-study" id="case-4">
        <CaseHeader title="Running Three Brands as a Company of One" />
        <div className="case-body">
          <Section label="The Setup"><p>I joined XHIBITION in 2014 as the first dedicated marketing hire. By the end there were three brands — XHIBITION, Rule of Next, two:minds — each with its own identity and customer, none with a dedicated team. Eleven years in, I was still the only person working across all three.</p></Section>
          <Section label="What That Actually Meant"><p>Shopify Plus backend, site speed, SEO, and blog content. Product and lifestyle photography workflow, with the fastest turnaround on the team. Visual merchandising and category hierarchy for promotional events. Homepage creative and campaign graphics. Visual identity and packaging held as a system across all three brands rather than rebuilt per project. Off-site shoot production from concept through execution, on budget — the resulting creative consistently outperformed everything else we ran.</p></Section>
          <p>And the part that wasn&apos;t on the org chart: sitting between buying and marketing to align promotional calendars, working against the buying team&apos;s forecasts to time sales and set promotional depth, then reporting sell-through and revenue back to ownership and to global brand partners.</p>
          <blockquote>None of it worked because I was a marketing specialist, or a data specialist, or a design specialist. It worked because someone had to be the thing connecting all three — and for eleven years, that was the actual job description, whatever the title said.</blockquote>
        </div>
      </article>

      <article className="case-study coda" id="case-5">
        <CaseHeader title="Coda — v1984" />
        <div className="case-body">
          <p>An independent music and art direction practice, active since 2014. Becoming N(one) released on Glacial Industries in Dublin, Pansori on Knives in Berlin. Coverage from FACT. Cover and campaign art direction for Purple Tape Pedigree, Glacial Sound, Sharp Veins, and Blastah. A writing credit on a Cashmere Cat record. Scores for Adult Swim, for Manolis D. Lemos and Tianzhuo Chen, and for a Jamie Janković short the BFI programmed at the London Short Film Festival.</p>
          <p>From 2013 to 2019 I was one of three people behind BUILD, a series in Columbus, Ohio, where I handled creative direction, design, and artist relations — booking Machine Girl, Dis Fig, Ariel Zetina, Organ Tapes, Asian Dope Boys, and Aisha Devi to a city with no standing audience for any of it.</p>
          <p>I moved to Los Angeles in May 2026. On July 8 I performed with Rabit for the US debut of Stranger in a Strange Land — stems from the album broken down and rebuilt as custom granular patches, played live on a ROLI Seaboard.</p>
          <p>Everything above this is measured in quarters. This is measured differently — in whether the work keeps earning invitations from people who have no obligation to extend them.</p>
          <p><a className="external-link" href="https://v1984.art" target="_blank" rel="noreferrer">v1984.art<span className="sr-only"> (opens in a new tab)</span></a></p>
        </div>
      </article>

      <footer>
        <p>I&apos;m looking for work where the analytical and creative sides of a brand aren&apos;t handled by different people. If that describes something you&apos;re building, I&apos;d like to hear about it.</p>
        <div className="footer-meta"><a href="mailto:cpramos@me.com">cpramos@me.com</a><span aria-hidden="true">·</span><a href="https://www.linkedin.com/in/christopherparkramos/" target="_blank" rel="noreferrer">LinkedIn</a><span aria-hidden="true">·</span><span>Los Angeles, CA</span></div>
        <nav className="footer-nav" aria-label="Footer navigation"><a className="back-top" href="#top">Back to top</a><Link href="/resume/">Résumé</Link></nav>
      </footer>
    </main>
  );
}
