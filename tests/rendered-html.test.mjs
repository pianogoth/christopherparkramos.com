import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the complete portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Christopher Ramos/);
  assert.match(html, />Christopher Ramos</);
  assert.match(html, /Over a decade building the reporting, e-commerce, and creative systems/);
  assert.doesNotMatch(html, /Define the problem\. Then build the tool it actually needs\./);
  assert.match(html, /The Campaign Everyone Assumed Was Fine/);
  assert.match(html, />Contents</);
  assert.match(html, />The Problem</);
  assert.match(html, />What I Did</);
  assert.match(html, />What Ownership Actually Wanted</);
  assert.match(html, />What That Actually Meant</);
  assert.match(html, /The Channel Nobody Was Managing/);
  assert.match(html, /One Sheet, Three Platforms, No Dashboard/);
  assert.match(html, /Running Three Brands as a Company of One/);
  assert.match(html, /Coda — v1984/);
  assert.match(html, /Open rates up 105%, clicks up 30%, conversion up 9%/);
  assert.match(html, /Klaviyo used the account as an internal case study/);
  assert.match(html, /Shopify Plus backend, site speed, SEO, and blog content/);
  assert.match(html, /I performed with Rabit for the US debut of Stranger in a Strange Land/);
  assert.match(html, /Everything above this is measured in quarters/);
  assert.match(html, /href="https:\/\/v1984\.art"/);
  assert.match(html, /cpramos@me\.com/);
  assert.match(html, /linkedin\.com\/in\/christopherparkramos/);
  assert.match(html, /<div class="footer-meta"><a href="mailto:cpramos@me\.com">cpramos@me\.com<\/a><span aria-hidden="true">·<\/span><a href="https:\/\/www\.linkedin\.com\/in\/christopherparkramos\/"[^>]*>LinkedIn<\/a><span aria-hidden="true">·<\/span><a href="\/resume\/">Résumé<\/a><span aria-hidden="true">·<\/span><span>Los Angeles, CA<\/span><\/div>/);
  assert.match(html, /<nav class="footer-nav" aria-label="Footer navigation"><a class="back-top" href="#top">Back to top<\/a><\/nav>/);
  assert.doesNotMatch(html, /CR[–-]0[1-4]/);
  assert.doesNotMatch(html, /Most inefficiency survives exactly/);
  assert.doesNotMatch(html, /The distinction that mattered/);
  assert.doesNotMatch(html, /Why It Mattered/);
  assert.doesNotMatch(html, /Four cases from a decade spent turning ambiguous sales/);
  assert.doesNotMatch(html, /Turning a Maintenance Channel Into a Growth Channel/);
  assert.doesNotMatch(html, /Paid media ran through an outside agency/);
  assert.doesNotMatch(html, /Channel revenue overall grew 91% year over year/);
  assert.doesNotMatch(html, /co-created and performed the US debut of Rabit/);
  assert.doesNotMatch(html, />CONTENTS<|>THE PROBLEM<|>WHAT I DID<|>RESULT</);
});

test("server-renders the complete résumé route", async () => {
  const response = await render("/resume/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Christopher Ramos — Résumé<\/title>/);
  assert.match(html, /<h1>Christopher Ramos<\/h1>/);
  assert.doesNotMatch(html, /CHRISTOPHER RAMOS/);
  assert.match(html, /Marketing and e-commerce operator with over a decade/);
  assert.match(html, /open rates \+105%, click rates \+30%, conversion \+9%/);
  assert.match(html, /Grew attributed email revenue 91% YoY, \$474K to \$907K/);
  assert.match(html, /Held Top Secret\/SCI clearance/);
  assert.match(html, /Cleveland Institute of Art/);
  assert.match(html, /BFA, Industrial Design/);
  assert.match(html, /Google Sheets \(VLOOKUP, custom formulas\)/);
  assert.match(html, /<h2>Core Competencies<\/h2>/);
  assert.match(html, /Email &amp; Lifecycle Marketing · Retention &amp; CRM · Paid Media Management/);
  assert.match(html, /Cross-Functional Collaboration · Process &amp; Systems Design/);
  assert.match(html, /href="tel:\+14402121746"/);
  assert.match(html, /href="mailto:cpramos@me\.com"/);
  assert.match(html, /linkedin\.com\/in\/christopherparkramos/);
  assert.match(html, /href="https:\/\/ghurka\.com\/"/);
  assert.match(html, /href="https:\/\/www\.xhibition\.co\/"/);
  assert.match(html, /href="https:\/\/www\.ruleofnext\.com\/"[^>]*>Rule of Next<span class="sr-only"> \(opens in a new tab\)<\/span><\/a>/);
  assert.match(html, /href="https:\/\/twomindsnyc\.com\/"[^>]*>two : minds<span class="sr-only"> \(opens in a new tab\)<\/span><\/a>/);
  assert.match(html, /href="https:\/\/v1984\.art"/);
  assert.match(html, /href="https:\/\/www\.cia\.edu\/"/);
  assert.match(html, /<main class="resume-main" id="top">/);
  assert.doesNotMatch(html, /class="resume-nav"/);
  assert.match(html, /<div class="footer-meta"><a href="mailto:cpramos@me\.com">cpramos@me\.com<\/a><span aria-hidden="true">·<\/span><a href="https:\/\/www\.linkedin\.com\/in\/christopherparkramos\/"[^>]*>LinkedIn<\/a><span aria-hidden="true">·<\/span><a href="\/">Portfolio<\/a><span aria-hidden="true">·<\/span><span>Los Angeles, CA<\/span><\/div>/);
  assert.match(html, /aria-label="Résumé footer navigation"/);
  assert.match(html, /href="#top"[^>]*>Back to top</);

  const statementItems = [...html.matchAll(/<li>(.*?)<\/li>/g)].map((match) => match[1]);
  assert.equal(statementItems.length, 24);
  assert.ok(statementItems.every((item) => item.endsWith(".")));
  assert.match(html, /<h2>Core Competencies<\/h2>/);
  assert.doesNotMatch(html, /<h[1-4]>[^<]*\.<\/h[1-4]>/);
  assert.match(html, /BFA, Industrial Design<\/p>/);
  assert.match(html, /Process &amp; Systems Design<\/p>/);
  assert.match(html, /Asana · Slack<\/p>/);
  assert.doesNotMatch(html, /BFA, Industrial Design\.|Process &amp; Systems Design\.|Asana · Slack\./);
});

test("keeps the visible typography flat and sans-serif", async () => {
  const [page, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /CR[–-]0[1-4]|entry-type|Case study/);
  assert.doesNotMatch(css, /font-family:\s*var\(--serif\)|--serif:/);
  assert.match(css, /--sans:\s*"Helvetica Neue"/);
  assert.match(css, /--paper:\s*#111111/);
  assert.match(css, /--ink:\s*#f2f2ee/);
  assert.match(css, /--secondary:\s*#a7a7a2/);
  assert.match(css, /a\s*\{[^}]*text-decoration-line:\s*underline[^}]*text-decoration-color:\s*var\(--secondary\)[^}]*text-decoration-thickness:\s*3px[^}]*text-underline-offset:\s*3px/s);
  assert.doesNotMatch(css, /38ch/);
  assert.match(css, /\.dek\s*\{[^}]*max-width:\s*44ch/s);
  assert.match(css, /\.case-study\s*\{[^}]*max-width:\s*44ch/s);
  assert.match(css, /footer\s*>\s*p\s*\{[^}]*max-width:\s*44ch/s);
  assert.match(css, /\.contents\s*\{\s*margin:\s*0;\s*\}/s);
  assert.doesNotMatch(css, /\.contents\s*\{[^}]*(?:margin-bottom|padding-bottom):/s);
  assert.match(css, /\.intro\s*\{[^}]*margin:\s*0;[^}]*scroll-margin-top:\s*20px/s);
  assert.doesNotMatch(css, /@media \(max-width:\s*760px\)[\s\S]*\.intro\s*\{/s);
  assert.match(page, /<\/section>\s*<div className="contents-break" aria-hidden="true" style=\{\{ blockSize: "clamp\(140px, 14vw, 220px\)" \}\} \/>\s*<nav className="contents"/s);
  assert.match(page, /<\/nav>\s*<div className="contents-break" aria-hidden="true" style=\{\{ blockSize: "clamp\(140px, 14vw, 220px\)" \}\} \/>\s*<article className="case-study" id="case-1">/s);
  assert.equal(page.match(/className="contents-break"/g)?.length, 2);
  assert.match(css, /\.case-section h3\s*\{[^}]*font:\s*inherit/s);
  assert.match(css, /\.case-header h2\s*\{[^}]*font:\s*inherit/s);
  assert.match(css, /\.case-header h2\s*\{[^}]*text-decoration-line:\s*underline[^}]*text-decoration-color:\s*currentColor[^}]*text-decoration-thickness:\s*3px[^}]*text-underline-offset:\s*3px/s);
  assert.doesNotMatch(css, /\.case-section h3\s*\{[^}]*text-decoration-line:\s*underline/s);
});

test("uses the approved CR favicon", async () => {
  const [favicon, layout] = await Promise.all([
    readFile(new URL("../public/favicon.svg", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(favicon, /viewBox="0 0 64 64"/);
  assert.match(favicon, /<rect width="64" height="64" fill="#111111"\/>/);
  assert.match(favicon, /font-family="Helvetica Neue, Helvetica, Arial, sans-serif"/);
  assert.match(favicon, /font-weight="700"/);
  assert.match(favicon, /fill="#f2f2ee"/);
  assert.match(favicon, />CR<\/text>/);
  assert.doesNotMatch(favicon, /stroke=|gradient|filter|circle|path/);
  assert.match(layout, /icon:\s*"\/favicon\.svg"/);
  assert.match(layout, /shortcut:\s*"\/favicon\.svg"/);
});

test("keeps the résumé in the site system with a compact print mode", async () => {
  const [resume, css] = await Promise.all([
    readFile(new URL("../app/resume/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(resume, /title:\s*"Christopher Ramos — Résumé"/);
  assert.match(css, /\.resume-main\s*\{[^}]*max-width:\s*44ch/s);
  assert.match(css, /\.resume-main\s*\{[^}]*--resume-gap:\s*1\.3em/s);
  assert.match(css, /\.resume-section\s*>\s*h2\s*\{[^}]*margin:\s*0;[^}]*color:\s*var\(--secondary\)[^}]*font:\s*inherit/s);
  assert.match(css, /\.resume-section\s*>\s*p\s*\{\s*margin:\s*0;\s*\}/s);
  assert.match(css, /\.resume-category h4\s*\{[^}]*margin:\s*0;[^}]*color:\s*var\(--secondary\)/s);
  assert.match(css, /\.resume-role-header\s*\{\s*margin-bottom:\s*var\(--resume-gap\)/s);
  assert.match(css, /\.resume-(?:nav|header|section|role|footer)[^{]*\{[^}]*var\(--resume-gap\)/s);
  assert.doesNotMatch(css.split("@media print")[0], /\.resume-(?:nav|header|section|role|contact|category|footer)[^{]*\{[^}]*(?:30|40|48|56|64|70|82|110)px/s);
  assert.match(css, /\.resume-role-header h3\s*\{[^}]*text-decoration-line:\s*underline[^}]*text-decoration-thickness:\s*3px/s);
  assert.match(css, /\.resume-header h1\s*\{\s*margin:\s*0;\s*font:\s*inherit;\s*\}/s);
  assert.doesNotMatch(css, /\.resume-header h1\s*\{[^}]*text-decoration/s);
  assert.doesNotMatch(css, /\.resume-nav/);
  assert.match(css, /\.resume-main ul\s*\{[^}]*padding-left:\s*0;[^}]*list-style:\s*none/s);
  assert.doesNotMatch(css, /\.resume-main li\s*\{[^}]*padding-left:/s);
  assert.match(css, /@media print/);
  assert.match(css, /@page\s*\{\s*margin:\s*\.5in/);
  assert.match(css, /@media print[\s\S]*--paper:\s*#ffffff[\s\S]*--ink:\s*#111111/);
  assert.match(css, /\.resume-footer\s*\{\s*display:\s*none/);
});
