import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the complete portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Christopher Park Ramos/);
  assert.match(html, /Define the problem\. Then build the tool it actually needs\./);
  assert.match(html, /The Campaign Everyone Assumed Was Fine/);
  assert.match(html, /Turning a Maintenance Channel Into a Growth Channel/);
  assert.match(html, /One Sheet, Three Platforms, No Dashboard/);
  assert.match(html, /Running Three Brands as a Company of One/);
  assert.match(html, /Coda v1984/);
  assert.match(html, />CODA</);
  assert.match(html, /Everything above this is measured in quarters/);
  assert.match(html, /href="https:\/\/v1984\.art"/);
  assert.match(html, /cpramos@me\.com/);
  assert.match(html, /linkedin\.com\/in\/christopherparkramos/);
  assert.doesNotMatch(html, /CR[–-]0[1-4]/);
  assert.doesNotMatch(html, /Most inefficiency survives exactly/);
  assert.doesNotMatch(html, /The distinction that mattered/);
  assert.doesNotMatch(html, /Why It Mattered/);
});

test("keeps the visible typography flat and sans-serif", async () => {
  const [page, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /CR[–-]0[1-4]|entry-type|Case study/);
  assert.doesNotMatch(css, /font-family:\s*var\(--serif\)|--serif:/);
  assert.match(css, /--sans:\s*"Helvetica Neue"/);
  assert.match(css, /\.case-section h3\s*\{[^}]*font:\s*inherit/s);
  assert.match(css, /\.case-header h2\s*\{[^}]*font:\s*inherit/s);
});
