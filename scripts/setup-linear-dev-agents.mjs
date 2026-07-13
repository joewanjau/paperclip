#!/usr/bin/env node

const API_BASE = (process.env.PAPERCLIP_API_BASE ?? "http://127.0.0.1:3000").replace(/\/$/, "");
const COMPANY_ID = process.env.PAPERCLIP_COMPANY_ID ?? "ae25671c-172b-475a-aab3-1e64a676a830";
const DEFAULT_MANAGER_NAME = process.env.PAPERCLIP_LINEAR_MANAGER_NAME ?? "Product & Engineering Manager";
const DEFAULT_CWD = process.env.PAPERCLIP_LINEAR_AGENT_CWD ?? "C:\\Projects";

const governance =
  "Medium autonomy. Agents may inspect Linear/Paperclip issues, plan, implement code changes in approved repositories, run tests, create work products, and recommend deployment steps. Joseph must approve production deploys, spending, customer-data changes, external communications, and irreversible data changes.";

const runtimeConfig = {
  heartbeat: {
    enabled: false,
    cooldownSec: 10,
    intervalSec: 300,
    wakeOnDemand: true,
    maxConcurrentRuns: 20,
  },
};

const adapterConfig = {
  cwd: DEFAULT_CWD,
  env: {
    OPENAI_API_KEY: "",
  },
  model: "gpt-5.4",
  search: false,
  fastMode: false,
  graceSec: 15,
  timeoutSec: 0,
  extraArgs: ["--skip-git-repo-check"],
  dangerouslyBypassApprovalsAndSandbox: false,
};

const skills = [
  {
    slug: "linear-issue-resolution",
    name: "Linear Issue Resolution",
    description: "Resolve Linear.app project issues through Paperclip agents with triage, implementation, review, and status hygiene.",
    color: "#2563eb",
    categories: ["software-development", "linear", "project-management"],
    markdown: `# Linear Issue Resolution

Use this skill when an agent is assigned a Linear.app issue, asked to sync Linear project work, or asked to turn Linear issues into implementation tasks.

Core workflow:

1. Identify the Linear workspace, team, project, issue id, labels, priority, state, assignee, linked repository, acceptance criteria, and blocking comments.
2. If the Linear MCP/tooling is unavailable or unauthenticated, state the exact missing connection and continue with any Paperclip-local context already available.
3. Classify the issue by project type: web, app/mobile, backend/API, database, QA/release, DevOps, design, or documentation.
4. Route implementation to the narrowest capable subagent. Prefer existing ACS specialists before creating new agents.
5. For implementation work, inspect the repository before changing code, make a small focused branch, run relevant tests, and summarize the diff and risk.
6. Keep Linear status clean: move work to in progress when starting, comment with blockers or review notes, and move to done only after verification.
7. Never store Linear tokens or OAuth secrets in agent instructions, code, commits, or issue comments.

Routing guidance:

- Web/frontend issues go to the Linear Web Project Engineer unless they are legacy ASP.NET Web Forms, where the ASP.NET Web Forms Agent is preferred.
- Mobile/app issues go to the Linear App Project Engineer.
- Backend/API/integration issues go to the Linear Backend/API Project Engineer, API / .NET Core Modernization Agent, or SQL Server & Database Agent depending on the stack.
- QA, regression, release, and verification issues go to the Linear QA & Release Engineer.
- Ambiguous issues stay with the Linear Software Development Lead until clarified.
`,
  },
  {
    slug: "web-project-engineering",
    name: "Web Project Engineering",
    description: "Frontend and full-stack web issue execution for React, Next.js, browser UI, accessibility, and API-facing web flows.",
    color: "#059669",
    categories: ["software-development", "web"],
    markdown: `# Web Project Engineering

Use this skill for web application issues involving browser UI, React, Next.js, CSS, accessibility, web performance, forms, dashboards, admin panels, routing, or frontend integration.

Execution rules:

1. Read the repository structure, package scripts, and existing component patterns before editing.
2. Keep UI changes consistent with the existing design system.
3. Prefer focused fixes with tests or screenshots for user-facing changes.
4. Verify responsive behavior for affected screens.
5. When the issue spans frontend and backend, define the contract first and coordinate with the backend/API agent.
`,
  },
  {
    slug: "app-project-engineering",
    name: "App Project Engineering",
    description: "Mobile and installed app issue execution for native, hybrid, desktop, and app-store oriented projects.",
    color: "#7c3aed",
    categories: ["software-development", "mobile", "app"],
    markdown: `# App Project Engineering

Use this skill for mobile, desktop, or installed app issues including React Native, Flutter, Electron, native platform work, app packaging, offline behavior, device permissions, and app release readiness.

Execution rules:

1. Identify the platform, build system, emulator/device expectation, and release channel before editing.
2. Preserve platform-specific conventions and permission models.
3. Test the smallest reliable path available locally, and document any missing simulator/device constraint.
4. Coordinate with backend/API agents for sync, authentication, notification, or data-contract changes.
5. Treat app signing, production stores, and customer data as approval-gated.
`,
  },
  {
    slug: "backend-api-engineering",
    name: "Backend API Engineering",
    description: "Backend, API, integration, authentication, database, and service issue execution.",
    color: "#0891b2",
    categories: ["software-development", "backend", "api"],
    markdown: `# Backend API Engineering

Use this skill for backend services, APIs, integrations, authentication, authorization, database access, migrations, jobs, queues, and service reliability issues.

Execution rules:

1. Map the request path, data model, external integrations, and failure mode before editing.
2. Add or update tests around contracts, authorization, validation, and data changes.
3. Keep migrations reversible or clearly documented.
4. Avoid logging secrets, tokens, or sensitive customer records.
5. For .NET modernization or SQL Server-heavy work, coordinate with the existing ACS API / .NET Core Modernization Agent and SQL Server & Database Agent.
`,
  },
  {
    slug: "qa-release-validation",
    name: "QA Release Validation",
    description: "Regression, acceptance, release readiness, bug reproduction, and verification for Linear-driven development work.",
    color: "#dc2626",
    categories: ["software-development", "qa", "release"],
    markdown: `# QA Release Validation

Use this skill for verifying fixes, reproducing bugs, testing Linear acceptance criteria, checking release readiness, and preparing QA notes.

Execution rules:

1. Reproduce before fixing when possible, or state why reproduction is blocked.
2. Convert vague acceptance criteria into concrete checks.
3. Run the narrowest useful automated tests and add manual verification notes for UI/device flows.
4. Check edge cases, regression risk, and rollback notes.
5. Do not mark a Linear issue done until verification evidence is recorded.
`,
  },
];

const agentSpecs = [
  {
    key: "linear-software-development-lead",
    name: "Linear Software Development Lead",
    role: "pm",
    title: "Main Linear.app project issue router and engineering coordinator",
    icon: "git-branch",
    managerName: DEFAULT_MANAGER_NAME,
    canCreateAgents: true,
    canAssignTasks: true,
    desiredSkills: [
      "linear-issue-resolution",
      "paperclipai/paperclip/paperclip",
      "paperclipai/paperclip/paperclip-converting-plans-to-tasks",
      "paperclipai/paperclip/paperclip-create-agent",
    ],
    responsibility:
      "Own Linear.app issue intake across ACS projects, classify project needs, route work to focused software agents, and keep issue status, blockers, and verification evidence clear.",
    routine:
      "Daily: review active Linear/Paperclip engineering issues, route new work, identify blockers, and confirm status hygiene. Weekly: summarize project delivery, recurring bottlenecks, agent fit, and specialization gaps.",
  },
  {
    key: "linear-web-project-engineer",
    name: "Linear Web Project Engineer",
    role: "engineer",
    title: "Web, frontend, and full-stack Linear issue resolver",
    icon: "globe",
    managerName: "Linear Software Development Lead",
    desiredSkills: ["linear-issue-resolution", "web-project-engineering", "paperclipai/paperclip/paperclip"],
    responsibility:
      "Resolve Linear issues for web projects including frontend UI, React/Next.js flows, browser behavior, accessibility, and web-facing integration bugs.",
    routine:
      "Daily: work assigned web issues, verify affected screens, and surface frontend/backend handoff needs. Weekly: summarize web regressions, design-system drift, and test coverage gaps.",
  },
  {
    key: "linear-app-project-engineer",
    name: "Linear App Project Engineer",
    role: "engineer",
    title: "Mobile, desktop, and installed app Linear issue resolver",
    icon: "package",
    managerName: "Linear Software Development Lead",
    desiredSkills: ["linear-issue-resolution", "app-project-engineering", "paperclipai/paperclip/paperclip"],
    responsibility:
      "Resolve Linear issues for app projects including mobile, desktop, hybrid app behavior, device-specific constraints, packaging, and release readiness.",
    routine:
      "Daily: work assigned app issues, record device/build constraints, and coordinate API or release dependencies. Weekly: summarize app blockers, platform risks, and verification gaps.",
  },
  {
    key: "linear-backend-api-engineer",
    name: "Linear Backend/API Engineer",
    role: "engineer",
    title: "Backend, API, database, and integration Linear issue resolver",
    icon: "database",
    managerName: "Linear Software Development Lead",
    desiredSkills: ["linear-issue-resolution", "backend-api-engineering", "paperclipai/paperclip/paperclip"],
    responsibility:
      "Resolve Linear issues for backend projects including APIs, integrations, authentication, database access, migrations, jobs, and service reliability.",
    routine:
      "Daily: work assigned backend/API issues, validate contracts and tests, and coordinate database/API specialist handoffs. Weekly: summarize integration risk, migrations, and reliability fixes.",
  },
  {
    key: "linear-qa-release-engineer",
    name: "Linear QA & Release Engineer",
    role: "qa",
    title: "QA, regression, and release validation for Linear issues",
    icon: "bug",
    managerName: "Linear Software Development Lead",
    desiredSkills: ["linear-issue-resolution", "qa-release-validation", "paperclipai/paperclip/paperclip"],
    responsibility:
      "Verify fixes, reproduce bugs, run acceptance checks, prepare release notes, and keep Linear issues from being closed without evidence.",
    routine:
      "Daily: verify completed fixes, reproduce urgent bugs, and flag release blockers. Weekly: summarize regression trends, flaky tests, and release readiness.",
  },
];

async function request(path, { method = "GET", body } = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    method,
    headers: body === undefined ? undefined : { "content-type": "application/json" },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`${method} ${path} failed (${response.status}): ${text}`);
  }
  if (response.status === 204) return null;
  return response.json();
}

async function upsertSkill(skill, existingBySlug) {
  const existing = existingBySlug.get(skill.slug);
  const payload = {
    name: skill.name,
    slug: skill.slug,
    description: skill.description,
    markdown: skill.markdown,
    color: skill.color,
    categories: skill.categories,
    sharingScope: "company",
  };
  if (!existing) {
    const created = await request(`/api/companies/${COMPANY_ID}/skills`, { method: "POST", body: payload });
    console.log(`created skill: ${created.name}`);
    return created;
  }

  const updated = await request(`/api/companies/${COMPANY_ID}/skills/${existing.id}`, {
    method: "PATCH",
    body: {
      name: skill.name,
      description: skill.description,
      color: skill.color,
      categories: skill.categories,
      sharingScope: "company",
    },
  });
  await request(`/api/companies/${COMPANY_ID}/skills/${existing.id}/files`, {
    method: "PATCH",
    body: { path: "SKILL.md", content: skill.markdown },
  });
  console.log(`updated skill: ${updated.name}`);
  return updated;
}

function instructionForAgent(spec) {
  return `# ${spec.name}

You are ${spec.name}, part of Africa Cloud Space Ltd's Paperclip software-development company.

Mission:
${spec.responsibility}

Operating rules:

1. Use Linear MCP/tooling when available to inspect project, issue, labels, comments, priority, assignee, state, and linked repositories.
2. If Linear auth is unavailable, state the exact blocker and continue with Paperclip-local context, repository evidence, or user-provided issue details.
3. Classify each issue by project need before implementing: web, app/mobile, backend/API, database, QA/release, DevOps, design, or documentation.
4. Prefer narrow ownership. Route or delegate work to the smallest suitable specialist, and avoid creating new agents unless a repeated project need justifies it.
5. Inspect the codebase before editing, follow local patterns, run focused verification, and leave a concise evidence trail.
6. Keep Linear/Paperclip status honest: in progress while working, blocked with a concrete blocker when blocked, done only after verification.
7. Never expose or persist Linear tokens, OAuth credentials, customer secrets, or private keys.

Governance:
${governance}

Routine:
${spec.routine}
`;
}

function agentPayload(spec, managerId) {
  return {
    name: spec.name,
    role: spec.role,
    title: spec.title,
    icon: spec.icon,
    reportsTo: managerId,
    capabilities: `${spec.responsibility} Routine: ${spec.routine}`,
    desiredSkills: spec.desiredSkills,
    adapterType: "codex_local",
    adapterConfig,
    instructionsBundle: {
      entryFile: "AGENTS.md",
      files: {
        "AGENTS.md": instructionForAgent(spec),
      },
    },
    runtimeConfig,
    permissions: {
      canCreateAgents: Boolean(spec.canCreateAgents),
      canAssignTasks: Boolean(spec.canAssignTasks),
    },
    metadata: {
      key: spec.key,
      responsibility: spec.responsibility,
      routine: spec.routine,
      governance,
      desiredSkills: spec.desiredSkills,
      reportingLine: spec.managerName ? `Reports to ${spec.managerName}` : "Top-level agent",
      linearMcp: {
        source: "Claude Linear.app MCP settings may be reused by runtime configuration; no credentials are stored here.",
        requiresAuthenticatedConnection: true,
      },
      sourceTrust: {
        seed: "setup-linear-dev-agents",
        origin: "local_setup_script",
        credentialsIncluded: false,
        sensitiveCustomerRecords: false,
      },
    },
  };
}

async function upsertAgent(spec, agentsByName) {
  const managerId = spec.managerName ? agentsByName.get(spec.managerName)?.id ?? null : null;
  if (spec.managerName && !managerId) {
    throw new Error(`Missing manager "${spec.managerName}" for ${spec.name}`);
  }

  const existing = agentsByName.get(spec.name);
  const payload = agentPayload(spec, managerId);
  if (!existing) {
    const created = await request(`/api/companies/${COMPANY_ID}/agents`, { method: "POST", body: payload });
    agentsByName.set(created.name, created);
    console.log(`created agent: ${created.name}`);
    return created;
  }

  const updated = await request(`/api/agents/${existing.id}`, {
    method: "PATCH",
    body: {
      title: payload.title,
      icon: payload.icon,
      reportsTo: payload.reportsTo,
      capabilities: payload.capabilities,
      metadata: payload.metadata,
      runtimeConfig: payload.runtimeConfig,
    },
  });
  await request(`/api/agents/${existing.id}/instructions-bundle/file`, {
    method: "PUT",
    body: { path: "AGENTS.md", content: instructionForAgent(spec), clearLegacyPromptTemplate: false },
  });
  await request(`/api/agents/${existing.id}/permissions`, {
    method: "PATCH",
    body: { canCreateAgents: Boolean(spec.canCreateAgents), canAssignTasks: Boolean(spec.canAssignTasks) },
  });
  agentsByName.set(updated.name, updated);
  console.log(`updated agent: ${updated.name}`);
  return updated;
}

async function syncAgentSkills(agent, desiredSkills) {
  await request(`/api/agents/${agent.id}/skills/sync`, {
    method: "POST",
    body: { desiredSkills },
  });
  console.log(`synced skills: ${agent.name}`);
}

async function main() {
  const health = await request("/api/health");
  if (health.bootstrapStatus !== "ready") {
    throw new Error(`Paperclip is not ready at ${API_BASE}; bootstrapStatus=${health.bootstrapStatus}`);
  }

  const existingSkills = await request(`/api/companies/${COMPANY_ID}/skills`);
  const skillsBySlug = new Map(existingSkills.map((skill) => [skill.slug, skill]));
  for (const skill of skills) {
    const upserted = await upsertSkill(skill, skillsBySlug);
    skillsBySlug.set(upserted.slug, upserted);
  }

  const existingAgents = await request(`/api/companies/${COMPANY_ID}/agents`);
  const agentsByName = new Map(existingAgents.map((agent) => [agent.name, agent]));
  const createdOrUpdated = [];
  for (const spec of agentSpecs) {
    const agent = await upsertAgent(spec, agentsByName);
    createdOrUpdated.push({ agent, spec });
  }
  for (const { agent, spec } of createdOrUpdated) {
    await syncAgentSkills(agent, spec.desiredSkills);
  }

  console.log(`Linear development agent pack is ready in company ${COMPANY_ID} via ${API_BASE}.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
