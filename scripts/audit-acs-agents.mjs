import fs from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";

const paperclipNpxRoot =
  process.env.PAPERCLIP_NPX_ROOT ??
  "C:\\Users\\USER\\AppData\\Local\\npm-cache\\_npx\\43414d9b790239bb";
const requireFromPaperclip = createRequire(
  path.join(paperclipNpxRoot, "seed-loader.js"),
);
const postgres = requireFromPaperclip("postgres");

const connectionString =
  process.env.PAPERCLIP_DATABASE_URL ??
  "postgres://paperclip:paperclip@127.0.0.1:54329/paperclip";

const instanceRoot =
  process.env.PAPERCLIP_INSTANCE_ROOT ??
  "C:\\Users\\USER\\.paperclip\\instances\\default";

const company = {
  id: "ae25671c-172b-475a-aab3-1e64a676a830",
  name: "Africa Cloud Space Ltd",
  shortName: "ACS",
  owner: "Joseph Wanjau",
  description:
    "Kenyan SaaS/software company building Cloud School, ACS Membership/Shiriki365, MajiCloud Water Billing, HRMS, ACSMailer, AI tools, WhatsApp/Telegram automation, payment integrations, and bespoke systems.",
  mission:
    "Digitize African institutions through reliable, affordable, AI-powered cloud systems.",
  mainGoal:
    "Stabilize Cloud School, improve sales/support/project delivery, grow Membership and Water Billing, modernize tech, and commercialize AI/WhatsApp/Telegram automation.",
};

const sourceTrust = {
  origin: "local_audit",
  seed: "acs-agent-audit",
  sensitiveCustomerRecords: false,
  credentialsIncluded: false,
};

const governance =
  "Medium autonomy. Agents may plan, draft, summarize, create tasks, and recommend actions. Joseph must approve production changes, spending, client communication, contracts, tenders, pricing, staff terms, deployments, customer-data actions, external API actions, and irreversible data changes.";

const desiredAgents = [
  {
    key: "acs-strategy-ceo-agent",
    name: "ACS Strategy CEO Agent",
    role: "executive",
    title: "AI COO and strategy lead for Joseph",
    reportsTo: null,
    icon: "briefcase-business",
    permissions: { canCreateAgents: true },
    responsibilities:
      "Own ACS operating strategy, management cadence, cross-department priorities, escalations, risks, and weekly executive reporting.",
    routine:
      "Daily: review company goals, blocked issues, and cross-functional handoffs. Weekly: produce the ACS management report, risk register, and next-week priorities for Joseph.",
    skills: [
      "strategic-planning",
      "weekly-reporting",
      "risk-tracking",
      "meeting-minutes",
      "staff-performance-tracking",
    ],
  },
  {
    key: "ceo-assistant-agent",
    name: "CEO Assistant Agent",
    role: "executive_assistant",
    title: "Executive assistant to Joseph and the ACS strategy office",
    reportsTo: "acs-strategy-ceo-agent",
    icon: "clipboard-list",
    permissions: { canCreateAgents: false },
    responsibilities:
      "Protect Joseph's attention, prepare briefings, maintain follow-up lists, draft meeting notes, coordinate decisions, and route work to the correct ACS manager.",
    routine:
      "Daily: summarize Joseph-facing priorities, overdue follow-ups, pending approvals, meetings, and blocked delegated work. Weekly: prepare a CEO briefing pack and decision log.",
    skills: [
      "meeting-minutes",
      "weekly-reporting",
      "risk-tracking",
      "staff-performance-tracking",
    ],
    reuseWeakNames: ["CEO"],
  },
  {
    key: "finance-revenue-controller",
    name: "Finance & Revenue Controller",
    role: "finance",
    title: "Invoicing, collections, reports, QuickBooks, payroll, compliance",
    reportsTo: "acs-strategy-ceo-agent",
    icon: "receipt",
    responsibilities:
      "Track revenue, invoicing, collections, payroll preparation, finance reporting, compliance checklists, and payment follow-up.",
    routine:
      "Daily: review due invoices, collections, payment exceptions, and finance blockers. Weekly: update revenue, collections, expense, payroll, and compliance summaries.",
    skills: ["finance-reporting", "weekly-reporting", "risk-tracking"],
  },
  {
    key: "hr-operations-manager",
    name: "HR & Operations Manager",
    role: "operations",
    title: "Staff structure, meetings, policies, performance",
    reportsTo: "acs-strategy-ceo-agent",
    icon: "users-round",
    responsibilities:
      "Maintain staff structure, accountability, operating meetings, HR policy drafts, hiring support, and performance follow-up.",
    routine:
      "Daily: check staff blockers and operational follow-ups. Weekly: update performance notes, meeting actions, HR risks, and hiring plan status.",
    skills: [
      "staff-performance-tracking",
      "meeting-minutes",
      "weekly-reporting",
      "risk-tracking",
    ],
  },
  {
    key: "implementation-support-manager",
    name: "Implementation & Support Manager",
    role: "support",
    title: "Onboarding, training, tickets, escalations",
    reportsTo: "acs-strategy-ceo-agent",
    icon: "headphones",
    responsibilities:
      "Coordinate onboarding, training, ticket triage, escalation workflows, client implementation plans, and support handoffs.",
    routine:
      "Daily: review open support issues, urgent escalations, onboarding tasks, and stalled customer responses. Weekly: summarize support health and implementation risks.",
    skills: [
      "support-triage",
      "implementation-planning",
      "meeting-minutes",
      "weekly-reporting",
    ],
  },
  {
    key: "product-engineering-manager",
    name: "Product & Engineering Manager",
    role: "engineering",
    title: "Development, APIs, database, bugs, releases",
    reportsTo: "acs-strategy-ceo-agent",
    icon: "code-xml",
    responsibilities:
      "Own product engineering planning, bug triage, technical design, releases, database/API work, and modernization sequencing.",
    routine:
      "Daily: review bugs, releases, blocked technical tasks, and production risk. Weekly: update roadmap delivery, technical debt, modernization, and release notes.",
    skills: [
      "product-requirements",
      "software-task-breakdown",
      "asp-net-web-forms-modernization",
      "dotnet-core-api-planning",
      "sql-server-sp-analysis",
      "nextjs-planning",
      "payment-integration-planning",
    ],
  },
  {
    key: "sales-crm-manager",
    name: "Sales & CRM Manager",
    role: "sales",
    title: "Pipeline, warm/cold leads, proposals, CRM, closure rates",
    reportsTo: "acs-strategy-ceo-agent",
    icon: "chart-no-axes-combined",
    responsibilities:
      "Maintain lead pipeline, CRM hygiene, proposal follow-ups, sales reporting, and closure-rate improvement.",
    routine:
      "Daily: review new leads, stale opportunities, proposal follow-ups, and next actions. Weekly: publish pipeline movement, forecast, and conversion blockers.",
    skills: [
      "sales-pipeline-analysis",
      "crm-follow-up",
      "tender-proposal-drafting",
      "weekly-reporting",
    ],
  },
  {
    key: "tender-proposal-manager",
    name: "Tender & Proposal Manager",
    role: "enterprise_delivery",
    title: "Tenders, proposals, contracts, compliance checklists",
    reportsTo: "acs-strategy-ceo-agent",
    icon: "file-check-2",
    responsibilities:
      "Prepare tender readiness, proposal drafts, compliance matrices, contract checklists, and enterprise delivery planning.",
    routine:
      "Daily: check tender deadlines, missing documents, proposal blockers, and approval needs. Weekly: update tender pipeline, compliance status, and submission risks.",
    skills: ["tender-proposal-drafting", "risk-tracking", "meeting-minutes"],
  },
  {
    key: "customer-success-retention-manager",
    name: "Customer Success & Retention Manager",
    role: "customer_success",
    title: "Renewals, satisfaction, retention risk",
    reportsTo: "implementation-support-manager",
    icon: "heart-handshake",
    responsibilities:
      "Track renewals, satisfaction, retention risks, customer health, and proactive success actions.",
    routine:
      "Daily: review renewal risks, unhappy customers, and unresolved success follow-ups. Weekly: summarize customer health, retention actions, and expansion opportunities.",
    skills: [
      "support-triage",
      "sales-pipeline-analysis",
      "weekly-reporting",
      "risk-tracking",
    ],
  },
  {
    key: "ai-automation-manager",
    name: "AI & Automation Manager",
    role: "automation",
    title: "AI interface, WhatsApp, Telegram, AI credits, lesson plans, reports",
    reportsTo: "product-engineering-manager",
    icon: "bot",
    responsibilities:
      "Plan AI products, prompts, WhatsApp/Telegram automations, AI credit controls, and automation delivery workflows.",
    routine:
      "Daily: review automation issues, AI cost/risk notes, and integration blockers. Weekly: update AI roadmap, experiments, adoption, and governance needs.",
    skills: [
      "ai-prompt-engineering",
      "whatsapp-telegram-workflow-design",
      "nextjs-planning",
      "payment-integration-planning",
    ],
  },
  {
    key: "cloud-school-product-manager",
    name: "Cloud School Product Manager",
    role: "product",
    title: "Cloud School roadmap, college module, academics, finance, inventory, exams",
    reportsTo: "product-engineering-manager",
    icon: "school",
    responsibilities:
      "Own Cloud School stabilization, product roadmap, school workflows, module requirements, and release priorities.",
    routine:
      "Daily: review Cloud School bugs, school blockers, implementation feedback, and release readiness. Weekly: update roadmap, stabilization tracker, and module decisions.",
    skills: [
      "cloud-school-module-design",
      "product-requirements",
      "software-task-breakdown",
      "support-triage",
    ],
  },
  {
    key: "sql-server-database-agent",
    name: "SQL Server & Database Agent",
    role: "database_engineering",
    title: "SQL Server, stored procedures, schema, performance, data integrity",
    reportsTo: "product-engineering-manager",
    icon: "database",
    responsibilities:
      "Analyze SQL Server schemas, stored procedures, performance, migrations, reporting queries, backup readiness, and data-integrity risks.",
    routine:
      "Daily: review database-related blockers and risky changes. Weekly: summarize schema changes, slow queries, backup/restore concerns, and modernization opportunities.",
    skills: ["sql-server-sp-analysis", "risk-tracking", "weekly-reporting"],
  },
  {
    key: "asp-net-web-forms-agent",
    name: "ASP.NET Web Forms Agent",
    role: "legacy_web_engineering",
    title: "ASP.NET Web Forms maintenance, debugging, refactoring, and modernization prep",
    reportsTo: "product-engineering-manager",
    icon: "file-code-2",
    responsibilities:
      "Support legacy ASP.NET Web Forms systems, diagnose bugs, plan safe refactors, document dependencies, and prepare modernization paths.",
    routine:
      "Daily: review Web Forms bugs, regressions, deployment risk, and support escalations. Weekly: summarize technical debt, fixes, and migration candidates.",
    skills: [
      "asp-net-web-forms-modernization",
      "software-task-breakdown",
      "risk-tracking",
    ],
  },
  {
    key: "api-dotnet-core-modernization-agent",
    name: "API / .NET Core Modernization Agent",
    role: "api_modernization",
    title: ".NET Core APIs, integration design, migration planning, service modernization",
    reportsTo: "product-engineering-manager",
    icon: "braces",
    responsibilities:
      "Plan .NET Core API modernization, integration boundaries, service extraction, authentication, API documentation, and migration sequencing.",
    routine:
      "Daily: review API blockers, integration failures, and modernization tasks. Weekly: update migration roadmap, interface contracts, and release risks.",
    skills: [
      "dotnet-core-api-planning",
      "software-task-breakdown",
      "payment-integration-planning",
      "risk-tracking",
    ],
  },
  {
    key: "documentation-policy-agent",
    name: "Documentation & Policy Agent",
    role: "documentation_policy",
    title: "Policies, SOPs, product documentation, client guides, internal knowledge",
    reportsTo: "hr-operations-manager",
    icon: "book-open-check",
    responsibilities:
      "Maintain SOPs, policy drafts, product documentation, client guides, internal knowledge, and approval-ready documentation packs.",
    routine:
      "Daily: review documentation gaps, policy tasks, and client-guide requests. Weekly: update document status, policy approvals, and knowledge-base improvements.",
    skills: ["meeting-minutes", "weekly-reporting", "risk-tracking"],
  },
];

function capabilityFor(agent) {
  return `${agent.responsibilities} Routine: ${agent.routine}`;
}

function instructionsFor(agent, reportsToName) {
  const reportingLine = reportsToName
    ? `${agent.name} reports to ${reportsToName}.`
    : `${agent.name} reports directly to Joseph Wanjau / the ACS board.`;
  return [
    `# ${agent.name}`,
    "",
    `Title: ${agent.title}`,
    `Role: ${agent.role}`,
    "",
    "## Company",
    `${company.name} (${company.shortName}) is led by ${company.owner}.`,
    company.description,
    "",
    "## Reporting Line",
    reportingLine,
    "",
    "## Responsibilities",
    agent.responsibilities,
    "",
    "## Routine",
    agent.routine,
    "",
    "## Governance",
    governance,
    "",
    "## Operating Rules",
    "- Work only on Africa Cloud Space Ltd context unless Joseph explicitly assigns other work.",
    "- Distinguish confirmed facts from assumptions or items that need confirmation.",
    "- Do not store credentials, API keys, or sensitive customer records.",
    "- Escalate production changes, spending, client communication, contracts, tenders, pricing, staff terms, deployments, customer-data actions, external API actions, and irreversible data changes to Joseph for approval.",
    "- Leave concise durable notes: objective, owner, current blocker, decision needed, and next action.",
  ].join("\n");
}

async function ensureAgentFiles(agent, companyId, agentId, reportsToName) {
  const root = path.join(instanceRoot, "companies", companyId, "agents", agentId);
  const instructionsRoot = path.join(root, "instructions");
  const codexHome = path.join(root, "codex-home");
  await fs.mkdir(instructionsRoot, { recursive: true });
  await fs.mkdir(codexHome, { recursive: true });
  await fs.writeFile(
    path.join(codexHome, "config.toml"),
    'model = "gpt-5.4"\nmodel_reasoning_effort = "medium"\n',
    "utf8",
  );
  await fs.writeFile(
    path.join(instructionsRoot, "AGENTS.md"),
    instructionsFor(agent, reportsToName),
    "utf8",
  );
  await fs.writeFile(
    path.join(instructionsRoot, "SOUL.md"),
    `${agent.name} serves ${company.name} by turning assigned responsibilities into clear, reviewable work for Joseph and the ACS team.\n`,
    "utf8",
  );
  await fs.writeFile(
    path.join(instructionsRoot, "TOOLS.md"),
    "Use available Paperclip, Codex, and local workspace tools only within approved ACS governance boundaries.\n",
    "utf8",
  );
  await fs.writeFile(
    path.join(instructionsRoot, "HEARTBEAT.md"),
    `${agent.routine}\n\nOn heartbeat, summarize status, identify blockers, update assigned work, and propose next actions.\n`,
    "utf8",
  );
  return { instructionsRoot, codexHome };
}

function metadataFor(agent, reportsToName) {
  return {
    key: agent.key,
    desiredSkills: agent.skills,
    responsibility: agent.responsibilities,
    routine: agent.routine,
    reportingLine: reportsToName
      ? `Reports to ${reportsToName}`
      : "Reports directly to Joseph Wanjau / ACS board",
    governance,
    sourceTrust,
  };
}

function adapterConfig(paths) {
  return {
    model: "gpt-5.4",
    search: false,
    fastMode: false,
    timeoutSec: 0,
    graceSec: 15,
    env: {
      CODEX_HOME: { type: "plain", value: paths.codexHome },
      OPENAI_API_KEY: { type: "plain", value: "" },
    },
    instructionsFilePath: path.join(paths.instructionsRoot, "AGENTS.md"),
    instructionsRootPath: paths.instructionsRoot,
    instructionsEntryFile: "AGENTS.md",
    instructionsBundleMode: "managed",
    dangerouslyBypassApprovalsAndSandbox: false,
  };
}

const sql = postgres(connectionString, { max: 1 });

try {
  const before = await sql`
    select id, name, role, title, status, reports_to, capabilities, metadata
    from agents
    where company_id = ${company.id}
    order by lower(name)
  `;

  const result = {
    projectPath: "C:\\Projects\\PaperClip",
    paperclipPackagePath: paperclipNpxRoot,
    instanceRoot,
    database: connectionString.replace(/:[^:@/]+@/, ":***@"),
    companyId: company.id,
    foundBefore: before.map((row) => ({
      id: row.id,
      name: row.name,
      role: row.role,
      status: row.status,
      reportsTo: row.reports_to,
      hasTitle: Boolean(row.title),
      hasCapabilities: Boolean(row.capabilities),
      hasMetadata: Boolean(row.metadata),
    })),
    created: [],
    updated: [],
    renamed: [],
    routinesCreated: [],
    routinesUpdated: [],
    issues: [],
  };

  await sql.begin(async (tx) => {
    const companyRows = await tx`
      select id, name from companies where id = ${company.id}
    `;
    if (companyRows.length === 0 || companyRows[0].name !== company.name) {
      throw new Error(`Expected ACS company ${company.id} was not found.`);
    }

    const idByKey = new Map();
    const currentAgents = await tx`
      select id, name, metadata
      from agents
      where company_id = ${company.id}
    `;
    for (const row of currentAgents) {
      if (row.metadata?.key) idByKey.set(row.metadata.key, row.id);
    }

    for (const agent of desiredAgents) {
      let existing = await tx`
        select id, name
        from agents
        where company_id = ${company.id}
          and lower(name) = lower(${agent.name})
        limit 1
      `;

      if (existing.length === 0 && agent.reuseWeakNames?.length) {
        existing = await tx`
          select id, name
          from agents
          where company_id = ${company.id}
            and lower(name) = any(${agent.reuseWeakNames.map((n) => n.toLowerCase())})
          order by created_at
          limit 1
        `;
      }

      let agentId = existing[0]?.id;
      if (!agentId) {
        const inserted = await tx`
          insert into agents
            (company_id, name, role, title, status, capabilities, adapter_type, adapter_config, runtime_config, permissions, metadata, icon)
          values
            (${company.id}, ${agent.name}, ${agent.role}, ${agent.title}, 'idle', ${capabilityFor(agent)}, 'codex_local', ${sql.json({})}, ${sql.json({ heartbeat: { enabled: false, intervalSec: 300, cooldownSec: 10, wakeOnDemand: true, maxConcurrentRuns: 20 } })}, ${sql.json(agent.permissions ?? {})}, ${sql.json(metadataFor(agent, null))}, ${agent.icon})
          returning id
        `;
        agentId = inserted[0].id;
        result.created.push(agent.name);
      } else {
        if (existing[0].name !== agent.name) {
          result.renamed.push(`${existing[0].name} -> ${agent.name}`);
        } else {
          result.updated.push(agent.name);
        }
      }
      idByKey.set(agent.key, agentId);

      await tx`
        insert into company_memberships (company_id, principal_type, principal_id, membership_role, status)
        select ${company.id}, 'agent', ${agentId}, 'member', 'active'
        where not exists (
          select 1 from company_memberships
          where company_id = ${company.id}
            and principal_type = 'agent'
            and principal_id = ${agentId}
        )
      `;
      await tx`
        insert into agent_runtime_state (agent_id, company_id, adapter_type, state_json)
        values (${agentId}, ${company.id}, 'codex_local', ${sql.json({})})
        on conflict (agent_id) do update
        set company_id = excluded.company_id,
            adapter_type = excluded.adapter_type,
            updated_at = now()
      `;
    }

    for (const agent of desiredAgents) {
      const agentId = idByKey.get(agent.key);
      const reportsToId = agent.reportsTo ? idByKey.get(agent.reportsTo) : null;
      const reportsToName =
        desiredAgents.find((candidate) => candidate.key === agent.reportsTo)
          ?.name ?? null;
      const paths = await ensureAgentFiles(
        agent,
        company.id,
        agentId,
        reportsToName,
      );
      await tx`
        update agents
        set name = ${agent.name},
            role = ${agent.role},
            title = ${agent.title},
            status = case when status in ('terminated', 'paused', 'pending_approval') then status else 'idle' end,
            reports_to = ${reportsToId},
            capabilities = ${capabilityFor(agent)},
            adapter_type = 'codex_local',
            adapter_config = ${sql.json(adapterConfig(paths))},
            runtime_config = ${sql.json({ heartbeat: { enabled: false, intervalSec: 300, cooldownSec: 10, wakeOnDemand: true, maxConcurrentRuns: 20 } })},
            permissions = ${sql.json(agent.permissions ?? {})},
            metadata = ${sql.json(metadataFor(agent, reportsToName))},
            icon = ${agent.icon},
            updated_at = now()
        where id = ${agentId}
      `;

      const routineTitle = `ACS: ${agent.name} operating routine`;
      const routineDescription = instructionsFor(agent, reportsToName);
      const existingRoutine = await tx`
        select id, latest_revision_number
        from routines
        where company_id = ${company.id}
          and title = ${routineTitle}
        limit 1
      `;

      let routineId = existingRoutine[0]?.id;
      let revisionNumber = (existingRoutine[0]?.latest_revision_number ?? 0) + 1;
      if (!routineId) {
        const insertedRoutine = await tx`
          insert into routines
            (company_id, title, description, assignee_agent_id, priority, status, concurrency_policy, catch_up_policy, variables, created_by_user_id, updated_by_user_id)
          values
            (${company.id}, ${routineTitle}, ${routineDescription}, ${agentId}, 'medium', 'draft', 'coalesce_if_active', 'skip_missed', ${sql.json([])}, 'local-board', 'local-board')
          returning id
        `;
        routineId = insertedRoutine[0].id;
        revisionNumber = 1;
        result.routinesCreated.push(routineTitle);
      } else {
        await tx`
          update routines
          set description = ${routineDescription},
              assignee_agent_id = ${agentId},
              status = case when status = 'archived' then status else 'draft' end,
              updated_by_user_id = 'local-board',
              updated_at = now(),
              latest_revision_number = ${revisionNumber}
          where id = ${routineId}
        `;
        result.routinesUpdated.push(routineTitle);
      }

      const snapshot = {
        title: routineTitle,
        description: routineDescription,
        assigneeAgentId: agentId,
        priority: "medium",
        status: "draft",
        concurrencyPolicy: "coalesce_if_active",
        catchUpPolicy: "skip_missed",
        variables: [],
        env: null,
      };
      const revision = await tx`
        insert into routine_revisions
          (company_id, routine_id, revision_number, title, description, snapshot, change_summary, created_by_user_id)
        values
          (${company.id}, ${routineId}, ${revisionNumber}, ${routineTitle}, ${routineDescription}, ${sql.json(snapshot)}, 'ACS agent audit/update', 'local-board')
        returning id
      `;
      await tx`
        update routines
        set latest_revision_id = ${revision[0].id},
            latest_revision_number = ${revisionNumber}
        where id = ${routineId}
      `;
    }
  });

  const after = await sql`
    select a.id, a.name, a.role, a.title, a.status, a.reports_to, rt.name as reports_to_name,
           a.capabilities, a.metadata, a.adapter_config
    from agents a
    left join agents rt on rt.id = a.reports_to
    where a.company_id = ${company.id}
    order by lower(a.name)
  `;
  const routines = await sql`
    select title, status, assignee_agent_id
    from routines
    where company_id = ${company.id}
      and title like 'ACS:% operating routine'
    order by lower(title)
  `;
  const duplicateNames = await sql`
    select lower(name) as normalized_name, count(*)::int as count, array_agg(name order by created_at) as names
    from agents
    where company_id = ${company.id}
    group by lower(name)
    having count(*) > 1
  `;

  const desiredNames = new Set(desiredAgents.map((agent) => agent.name));
  const missing = desiredAgents
    .map((agent) => agent.name)
    .filter((name) => !after.some((row) => row.name === name));
  const weak = after.filter(
    (row) =>
      !row.title ||
      !row.capabilities ||
      !row.metadata?.responsibility ||
      !row.metadata?.routine,
  );

  result.foundAfter = after.map((row) => ({
    id: row.id,
    name: row.name,
    role: row.role,
    status: row.status,
    reportsTo: row.reports_to_name,
    title: row.title,
    hasRoutineMetadata: Boolean(row.metadata?.routine),
    safeSandboxBypass:
      row.adapter_config?.dangerouslyBypassApprovalsAndSandbox === false,
  }));
  result.requiredMissingAfter = missing;
  result.duplicateNamesAfter = duplicateNames;
  result.weakAgentsAfter = weak.map((row) => row.name);
  result.routineCount = routines.length;
  result.requiredAgentCount = after.filter((row) => desiredNames.has(row.name)).length;
  result.totalAcsAgentCount = after.length;

  if (missing.length > 0) {
    result.issues.push(`Missing required agents after update: ${missing.join(", ")}`);
  }
  if (duplicateNames.length > 0) {
    result.issues.push("Duplicate agent names remain after update.");
  }
  if (weak.length > 0) {
    result.issues.push(
      `Some agents still lack title/capability/routine metadata: ${weak
        .map((row) => row.name)
        .join(", ")}`,
    );
  }

  console.log(JSON.stringify(result, null, 2));
} finally {
  await sql.end();
}
