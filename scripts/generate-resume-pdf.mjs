#!/usr/bin/env node
/**
 * Prints public/Christopher-Park-Ramos-Resume.pdf from the static export of
 * app/resume (out/resume/index.html) using the résumé's own print stylesheet.
 *
 * The export is served over localhost because its asset URLs are root-absolute
 * (/_next/...) and would break under a file:// URL. Headless Chrome is used
 * because it is already installed and applies full print CSS. The server is
 * python3's built-in http.server, so no npm dependencies are added.
 *
 * Run via `npm run pdf`, which builds the GitHub Pages export first.
 */
import { spawn, execFile } from "node:child_process";
import { existsSync } from "node:fs";
import { createServer } from "node:net";
import { resolve } from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);

function findChrome() {
  return CHROME_CANDIDATES.find((candidate) => existsSync(candidate));
}

async function findFreePort() {
  return new Promise((resolvePort, reject) => {
    const server = createServer();
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const { port } = server.address();
      server.close(() => resolvePort(port));
    });
  });
}

async function waitForServer(port, timeoutMs = 15000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/resume/`);
      if (response.ok) return;
    } catch {
      // Server not up yet; retry.
    }
    await new Promise((resolveSleep) => setTimeout(resolveSleep, 200));
  }
  throw new Error(`Static server did not come up on port ${port}`);
}

const chrome = findChrome();
if (!chrome) {
  console.error(
    "No Chrome/Chromium/Edge binary found. Install one or set CHROME_PATH to its executable.",
  );
  process.exit(1);
}

const exportDir = resolve("out");
if (!existsSync(resolve(exportDir, "resume/index.html"))) {
  console.error(
    'Missing out/resume/index.html. Run "npm run build:pages" first.',
  );
  process.exit(1);
}

const pdfPath = resolve("public/Christopher-Park-Ramos-Resume.pdf");
const port = await findFreePort();

const server = spawn(
  "python3",
  ["-m", "http.server", String(port), "--bind", "127.0.0.1", "--directory", exportDir],
  { stdio: "ignore" },
);

try {
  await waitForServer(port);
  await execFileAsync(chrome, [
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    "--no-pdf-header-footer",
    `--print-to-pdf=${pdfPath}`,
    `http://127.0.0.1:${port}/resume/`,
  ]);
  console.log(`Wrote ${pdfPath}`);
} finally {
  server.kill();
}
