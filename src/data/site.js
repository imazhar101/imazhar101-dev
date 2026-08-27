export const profile = {
  name: 'Azhar',
  handle: 'imazhar101',
  role: 'Engineering leader · Cloud platforms, dev tooling, AI systems',
  blurb:
    'I specialize in building and leading cloud platforms, developer tooling, and AI / agentic systems — from backend architecture to shipping open-source Model Context Protocol servers.',
  location: 'Arizona, US',
  email: 'azhar@oneorigin.us',
};

// $ cat roadmap.md — things I'm building / exploring. EDIT THESE.
export const roadmap = [
  { status: 'building', text: 'sharemydocs.dev — MCP-native doc publishing, growing the feature set.' },
  { status: 'building', text: 'A unified MCP gateway for running many servers behind one endpoint.' },
];

// Right sidebar: neofetch-style spec card
export const specs = [
  ['role', 'Engineering leader'],
  ['focus', 'MCP · AI · Platforms'],
  ['langs', 'TS · Python · JS'],
  ['cloud', 'AWS · Cloudflare'],
  ['loc', 'Arizona, US'],
  ['status', 'building & shipping'],
];

// Right sidebar: GitHub achievements
export const achievements = [
  { icon: '🦈', label: 'Pull Shark', x: 3 },
  { icon: '👯', label: 'Pair Extraordinaire', x: 3 },
  { icon: '⚡', label: 'Quickdraw', x: 1 },
  { icon: '🎯', label: 'YOLO', x: 1 },
];

export const links = {
  github: 'https://github.com/imazhar101',
  npm: 'https://www.npmjs.com/~imazhar101',
  sharemydocs: 'https://sharemydocs.dev',
  linkedin: 'https://www.linkedin.com/in/imazhar101',
  x: 'https://x.com/imazhar101',
};

export const credential = {
  title: 'Skill Badge: AI Architect',
  issuer: 'ASU Enterprise Technology · Spark Challenge',
  note: 'Awarded for building & extending AI solutions',
  url: 'https://credid.asu.edu/public/awards/8555d1c7-abe6-4b1c-94fb-27f8657272cd',
};

// $ cat stack.txt
export const stack = {
  Languages: ['TypeScript', 'Python', 'JavaScript', 'SQL'],
  Cloud: ['AWS', 'Cloudflare', 'Serverless'],
  Focus: ['MCP servers', 'AI/ML', 'Agentic systems', 'Platform infra'],
  Building: ['Node', 'NestJS', 'Next.js', 'Astro', 'FastAPI'],
};

// Featured sites / products
export const projects = [
  {
    name: 'sharemydocs.dev',
    url: 'https://sharemydocs.dev',
    desc: 'MCP-native markdown publishing.',
    outcome: 'Turn a markdown file into a live, shareable doc URL straight from your editor — no dashboard, no copy-paste.',
    tag: 'live',
  },
];

// Featured: 6 standout MCP servers, each with a one-line outcome.
export const featured = [
  {
    name: '@imazhar101/mcp-canvas-server',
    short: 'mcp-canvas-server',
    v: '2.0.10',
    outcome: 'Drive Canvas LMS from an AI agent — courses, enrollments, grading, and 200+ API tools.',
  },
  {
    name: '@imazhar101/salesforce-mcp-jsforce',
    short: 'salesforce-mcp-jsforce',
    v: '0.5.2',
    outcome: 'Query and mutate a single Salesforce org over stdio or HTTP with a bring-your-own OAuth token.',
  },
  {
    name: '@imazhar101/mcp-jira-server',
    short: 'mcp-jira-server',
    v: '2.0.6',
    outcome: 'Let an agent triage, create, and move Jira issues without leaving the conversation.',
  },
  {
    name: '@imazhar101/mcp-bigquery-server',
    short: 'mcp-bigquery-server',
    v: '1.1.0',
    outcome: 'Give an LLM read-only BigQuery access — schema discovery and safe query execution.',
  },
  {
    name: '@imazhar101/paypal-mcp',
    short: 'paypal-mcp',
    v: '0.1.0',
    outcome: 'Read PayPal data with per-merchant client-credentials auth the server mints and refreshes itself.',
  },
  {
    name: '@imazhar101/mcp-figma-server',
    short: 'mcp-figma-server',
    v: '2.0.3',
    outcome: 'Pull Figma design files and metadata into an agent workflow via the Figma API.',
  },
];

// Full published set (maintainer: imazhar101) — count drives the "view all" link.
export const packages = [
  { name: '@imazhar101/mcp-canvas-server', v: '2.0.10', desc: 'Canvas LMS MCP server' },
  { name: '@imazhar101/mcp-jira-server', v: '2.0.6', desc: 'Jira issue management + project tracking' },
  { name: '@imazhar101/mcp-bitbucket-server', v: '2.0.4', desc: 'Bitbucket API tools' },
  { name: '@imazhar101/mcp-puppeteer-server', v: '2.0.3', desc: 'Browser automation + scraping' },
  { name: '@imazhar101/mcp-figma-server', v: '2.0.3', desc: 'Figma design-file + API integration' },
  { name: '@imazhar101/mcp-clickup-server', v: '2.0.3', desc: 'ClickUp task management' },
  { name: '@imazhar101/mcp-rippling-server', v: '1.3.0', desc: 'Rippling HR + employee management' },
  { name: '@imazhar101/mcp-bigquery-server', v: '1.1.0', desc: 'Read-only BigQuery query + schema' },
  { name: '@imazhar101/mcp-stripe-server', v: '1.0.4', desc: 'Stripe payments' },
  { name: '@imazhar101/mcp-aws-server', v: '1.0.3', desc: 'AWS: DynamoDB, Lambda, API Gateway' },
  { name: '@imazhar101/mcp-salesforce-server', v: '1.0.3', desc: 'Salesforce CRUD via REST' },
  { name: '@imazhar101/salesforce-mcp-jsforce', v: '0.5.2', desc: 'Lite single-org Salesforce, BYO OAuth' },
  { name: '@imazhar101/mcp-notion-server', v: '1.0.3', desc: 'Notion knowledge management' },
  { name: '@imazhar101/mcp-postgresql-server', v: '1.0.3', desc: 'PostgreSQL query execution' },
  { name: '@imazhar101/mcp-elasticsearch-server', v: '1.0.3', desc: 'Elasticsearch search + analytics' },
  { name: '@imazhar101/mcp-paypal-server', v: '1.0.5', desc: 'PayPal payments + transactions' },
  { name: '@imazhar101/paypal-mcp', v: '0.1.0', desc: 'Lite PayPal, per-merchant client-credentials auth' },
  { name: '@imazhar101/mcp-zoominfo-server', v: '0.1.0', desc: 'ZoomInfo read-only enrichment + intent' },
];

// Right sidebar: quick stats — DERIVED so they can't drift from the data above.
export const stats = [
  ['packages published', String(packages.length)],
  ['featured servers', String(featured.length)],
  ['open source', 'live'],
];
