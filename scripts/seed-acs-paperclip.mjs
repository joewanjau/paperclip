import fs from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";

const paperclipNpxRoot =
  process.env.PAPERCLIP_NPX_ROOT ??
  "C:\\Users\\USER\\AppData\\Local\\npm-cache\\_npx\\43414d9b790239bb";
const requireFromPaperclip = createRequire(path.join(paperclipNpxRoot, "seed-loader.js"));
const postgres = requireFromPaperclip("postgres");

const connectionString =
  process.env.PAPERCLIP_DATABASE_URL ??
  "postgres://paperclip:paperclip@127.0.0.1:54329/paperclip";

const instanceRoot =
  process.env.PAPERCLIP_INSTANCE_ROOT ??
  "C:\\Users\\USER\\.paperclip\\instances\\default";

const sourceTrust = {
  origin: "local_seed",
  seed: "acs-paperclip",
  sensitiveCustomerRecords: false,
  credentialsIncluded: false,
};

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

const departments = [
  "Executive Office",
  "Product & Technology",
  "Cloud School Business Unit",
  "ACS Membership / Shiriki365",
  "MajiCloud / Water Billing",
  "Implementation & Support",
  "Sales & Business Development",
  "Finance & Accounts",
  "HR & Administration",
  "Projects, Tenders & Enterprise Delivery",
];

const reportingContext = [
  ["Joseph Wanjau", "CEO", "confirmed"],
  ["James Mwigwa", "Technical leadership", "confirm"],
  ["Joe", "Cloud School stabilization", "confirm"],
  ["Ann", "Finance/Admin", "confirm"],
  ["Omwenga", "AI/MCP", "confirm"],
  ["Juliet", "AI support", "confirm"],
  ["Mayeku", "WhatsApp/AI interface", "confirm"],
  ["Marvene", "WhatsApp/AI support", "confirm"],
  ["Carol", "Sales", "confirm"],
  ["Operations Manager", "Operations leadership to be hired", "confirm"],
  ["Sales Manager", "Sales leadership to be hired", "confirm"],
];

const governance =
  "Medium autonomy. Agents may plan, draft, summarize, create tasks, and recommend actions. Joseph must approve production changes, spending, client communication, contracts, tenders, pricing, staff terms, deployments, customer-data actions, external API actions, and irreversible data changes.";

const agents = [
  {
    key: "acs-strategy-ceo-agent",
    name: "ACS Strategy CEO Agent",
    role: "executive",
    title: "AI COO/strategy assistant to Joseph",
    reportsTo: null,
    capabilities:
      "Executive strategy, operating cadence, cross-department prioritization, risk tracking, weekly management reporting.",
    icon: "briefcase-business",
    permissions: { canCreateAgents: true },
    skills: [
      "strategic-planning",
      "weekly-reporting",
      "risk-tracking",
      "meeting-minutes",
      "staff-performance-tracking",
    ],
  },
  {
    key: "product-engineering-manager",
    name: "Product & Engineering Manager",
    role: "engineering",
    title: "Development, APIs, database, bugs, releases",
    reportsTo: "acs-strategy-ceo-agent",
    capabilities:
      "Development planning, API design, database analysis, bug triage, release planning, modernization.",
    icon: "code-xml",
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
    key: "cloud-school-product-manager",
    name: "Cloud School Product Manager",
    role: "product",
    title:
      "Cloud School roadmap, college module, academics, finance, inventory, exams",
    reportsTo: "product-engineering-manager",
    capabilities:
      "Cloud School stabilization, roadmap management, module planning, requirements, school operations workflows.",
    icon: "school",
    skills: [
      "cloud-school-module-design",
      "product-requirements",
      "software-task-breakdown",
      "support-triage",
    ],
  },
  {
    key: "sales-crm-manager",
    name: "Sales & CRM Manager",
    role: "sales",
    title: "Pipeline, warm/cold leads, proposals, CRM, closure rates",
    reportsTo: "acs-strategy-ceo-agent",
    capabilities:
      "Lead tracking, proposal follow-up, CRM hygiene, sales reporting, closure-rate improvement.",
    icon: "chart-no-axes-combined",
    skills: [
      "sales-pipeline-analysis",
      "crm-follow-up",
      "tender-proposal-drafting",
      "weekly-reporting",
    ],
  },
  {
    key: "implementation-support-manager",
    name: "Implementation & Support Manager",
    role: "support",
    title: "Onboarding, training, tickets, escalations",
    reportsTo: "acs-strategy-ceo-agent",
    capabilities:
      "Customer onboarding, support triage, training plans, escalation workflows, retention handoffs.",
    icon: "headphones",
    skills: [
      "support-triage",
      "implementation-planning",
      "meeting-minutes",
      "weekly-reporting",
    ],
  },
  {
    key: "finance-revenue-controller",
    name: "Finance & Revenue Controller",
    role: "finance",
    title: "Invoicing, collections, reports, QuickBooks, payroll, compliance",
    reportsTo: "acs-strategy-ceo-agent",
    capabilities:
      "Revenue tracking, invoicing, collections, finance reporting, payroll and compliance checklists.",
    icon: "receipt",
    skills: ["finance-reporting", "weekly-reporting", "risk-tracking"],
  },
  {
    key: "tender-proposal-manager",
    name: "Tender & Proposal Manager",
    role: "enterprise_delivery",
    title: "Tenders, proposals, contracts, compliance checklists",
    reportsTo: "acs-strategy-ceo-agent",
    capabilities:
      "Tender readiness, proposal drafting, compliance matrices, contract checklists, enterprise delivery planning.",
    icon: "file-check-2",
    skills: [
      "tender-proposal-drafting",
      "risk-tracking",
      "meeting-minutes",
    ],
  },
  {
    key: "ai-automation-manager",
    name: "AI & Automation Manager",
    role: "automation",
    title:
      "AI interface, WhatsApp, Telegram, AI credits, lesson plans, reports",
    reportsTo: "product-engineering-manager",
    capabilities:
      "AI product design, prompt engineering, WhatsApp/Telegram workflow planning, automation cost controls.",
    icon: "bot",
    skills: [
      "ai-prompt-engineering",
      "whatsapp-telegram-workflow-design",
      "nextjs-planning",
      "payment-integration-planning",
    ],
  },
  {
    key: "hr-operations-manager",
    name: "HR & Operations Manager",
    role: "operations",
    title: "Staff structure, meetings, policies, performance",
    reportsTo: "acs-strategy-ceo-agent",
    capabilities:
      "Meeting cadence, staff accountability, HR policy drafts, performance tracking, hiring plans.",
    icon: "users-round",
    skills: [
      "staff-performance-tracking",
      "meeting-minutes",
      "weekly-reporting",
      "risk-tracking",
    ],
  },
  {
    key: "customer-success-retention-manager",
    name: "Customer Success & Retention Manager",
    role: "customer_success",
    title: "Renewals, satisfaction, retention risk",
    reportsTo: "implementation-support-manager",
    capabilities:
      "Renewal tracking, satisfaction monitoring, retention risk analysis, customer health summaries.",
    icon: "heart-handshake",
    skills: [
      "support-triage",
      "sales-pipeline-analysis",
      "weekly-reporting",
      "risk-tracking",
    ],
  },
];

const skillNames = [
  "strategic planning",
  "weekly reporting",
  "product requirements",
  "software task breakdown",
  "ASP.NET Web Forms modernization",
  ".NET Core API planning",
  "SQL Server SP analysis",
  "Next.js planning",
  "Cloud School module design",
  "sales pipeline analysis",
  "CRM follow-up",
  "tender/proposal drafting",
  "finance reporting",
  "support triage",
  "implementation planning",
  "AI prompt engineering",
  "WhatsApp/Telegram workflow design",
  "payment integration planning",
  "risk tracking",
  "meeting minutes",
  "staff performance tracking",
];

const startingTasks = [
  ["30-day ACS execution plan", "ACS Strategy CEO Agent", "high"],
  ["Cloud School stabilization tracker", "Cloud School Product Manager", "high"],
  [
    "ACS AI web/WhatsApp/Telegram interface design",
    "AI & Automation Manager",
    "high",
  ],
  ["Weekly sales pipeline report template", "Sales & CRM Manager", "medium"],
  [
    "Monthly management report template",
    "ACS Strategy CEO Agent",
    "medium",
  ],
  ["Tender readiness tracker", "Tender & Proposal Manager", "medium"],
  [
    "Customer support escalation workflow",
    "Implementation & Support Manager",
    "high",
  ],
  [
    "Staff accountability and weekly reporting template",
    "HR & Operations Manager",
    "medium",
  ],
];

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function issueDescription(title, assigneeName) {
  return [
    `Seeded ACS starting task: ${title}.`,
    "",
    `Owner: ${assigneeName}.`,
    `Governance: ${governance}`,
    "",
    "Do not include credentials or sensitive customer records. Draft plans, trackers, and templates for Joseph approval.",
  ].join("\n");
}

function skillMarkdown(name) {
  return [
    `# ${name}`,
    "",
    "Use this skill for Africa Cloud Space Ltd work only when it is relevant to the current task.",
    "",
    "Principles:",
    "- Keep recommendations practical for a Kenyan SaaS/software business.",
    "- Distinguish confirmed facts from items marked confirm.",
    "- Do not store credentials, API keys, or sensitive customer records.",
    "- Escalate production changes, spending, client communication, contracts, tenders, pricing, staff terms, deployments, customer-data actions, external API actions, and irreversible data changes to Joseph for approval.",
  ].join("\n");
}

function contextDocument() {
  const departmentLines = departments.map((d) => `- ${d}`).join("\n");
  const reportingLines = reportingContext
    .map(([person, role, status]) => `- ${person}: ${role} (${status})`)
    .join("\n");
  const skillLines = skillNames.map((s) => `- ${s}`).join("\n");
  const taskLines = startingTasks
    .map(([title, owner, priority]) => `- ${title}: ${owner}, priority ${priority}`)
    .join("\n");
  return [
    "# Africa Cloud Space Ltd Operating Context",
    "",
    `Short name: ${company.shortName}`,
    `Owner/CEO: ${company.owner}`,
    "",
    "## Description",
    company.description,
    "",
    "## Mission",
    company.mission,
    "",
    "## Main Goal",
    company.mainGoal,
    "",
    "## Departments",
    departmentLines,
    "",
    "## Reporting Context",
    reportingLines,
    "",
    "## Governance",
    governance,
    "",
    "## Supported Skills",
    skillLines,
    "",
    "## Starting Goals and Tasks",
    taskLines,
    "",
    "## Data Handling",
    "Use relevant ACS context only. Do not store credentials, API keys, or sensitive customer records.",
  ].join("\n");
}

async function ensureAgentFiles(agent, companyId, agentId) {
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
  const body = [
    `# ${agent.name}`,
    "",
    `Title: ${agent.title}`,
    `Role: ${agent.role}`,
    "",
    "## Company",
    `${company.name} (${company.shortName}) is led by ${company.owner}.`,
    company.description,
    "",
    "## Mission",
    company.mission,
    "",
    "## Main Goal",
    company.mainGoal,
    "",
    "## Capabilities",
    agent.capabilities,
    "",
    "## Governance",
    governance,
    "",
    "## Safety",
    "- Keep useful ACS business context, but never store credentials or sensitive customer records.",
    "- Mark uncertain roles or assumptions as confirm.",
  ].join("\n");
  await fs.writeFile(path.join(instructionsRoot, "AGENTS.md"), body, "utf8");
  await fs.writeFile(
    path.join(instructionsRoot, "SOUL.md"),
    `${agent.name} serves ACS by helping Joseph and the team turn business priorities into clear, reviewable work.\n`,
    "utf8",
  );
  await fs.writeFile(
    path.join(instructionsRoot, "TOOLS.md"),
    "Use available Paperclip, Codex, and local workspace tools only within approved governance boundaries.\n",
    "utf8",
  );
  await fs.writeFile(
    path.join(instructionsRoot, "HEARTBEAT.md"),
    "On heartbeat, review assigned ACS work, summarize status, identify blockers, and propose next actions.\n",
    "utf8",
  );
  return { root, instructionsRoot, codexHome };
}

const sql = postgres(connectionString, { max: 1 });

try {
  await sql.begin(async (tx) => {
    const existingCompany = await tx`
      select id from companies where id = ${company.id}
    `;
    if (existingCompany.length === 0) {
      await tx`
        insert into companies (id, name, description, issue_prefix, status)
        values (${company.id}, ${company.name}, ${company.description}, ${company.shortName}, 'active')
      `;
    } else {
      await tx`
        update companies
        set name = ${company.name},
            description = ${company.description},
            issue_prefix = ${company.shortName},
            status = 'active',
            require_board_approval_for_new_agents = false,
            updated_at = now()
        where id = ${company.id}
      `;
    }

    const userMembership = await tx`
      select id from company_memberships
      where company_id = ${company.id}
        and principal_type = 'user'
        and principal_id = 'local-board'
    `;
    if (userMembership.length === 0) {
      await tx`
        insert into company_memberships (company_id, principal_type, principal_id, membership_role)
        values (${company.id}, 'user', 'local-board', 'owner')
      `;
    }

    for (const department of departments) {
      await tx`
        insert into labels (company_id, name, color)
        select ${company.id}, ${`department: ${department}`}, '#2563eb'
        where not exists (
          select 1 from labels where company_id = ${company.id} and name = ${`department: ${department}`}
        )
      `;
    }

    const skillRowsBySlug = new Map();
    for (const name of skillNames) {
      const slug = slugify(name);
      const key = `acs/${slug}`;
      const existing = await tx`
        select id from company_skills where company_id = ${company.id} and key = ${key}
      `;
      let skillId = existing[0]?.id;
      if (!skillId) {
        const inserted = await tx`
          insert into company_skills
            (company_id, key, slug, name, description, markdown, source_type, source_locator, trust_level, compatibility, file_inventory, metadata, categories, tagline, author_name, color)
          values
            (${company.id}, ${key}, ${slug}, ${name}, ${`ACS skill: ${name}`}, ${skillMarkdown(name)}, 'local_path', ${`acs-seed://${slug}`}, 'markdown_only', 'compatible', ${sql.json([])}, ${sql.json({ sourceTrust })}, ${["acs", "operations"]}, ${name}, 'Africa Cloud Space Ltd', '#2563eb')
          returning id
        `;
        skillId = inserted[0].id;
      } else {
        await tx`
          update company_skills
          set name = ${name},
              description = ${`ACS skill: ${name}`},
              markdown = ${skillMarkdown(name)},
              updated_at = now()
          where id = ${skillId}
        `;
      }
      skillRowsBySlug.set(slug, skillId);
      const existingVersion = await tx`
        select id from company_skill_versions
        where company_id = ${company.id}
          and company_skill_id = ${skillId}
          and revision_number = 1
      `;
      let versionId = existingVersion[0]?.id;
      if (!versionId) {
        const insertedVersion = await tx`
          insert into company_skill_versions
            (company_id, company_skill_id, revision_number, label, file_inventory, author_user_id)
          values
            (${company.id}, ${skillId}, 1, 'ACS seed v1', ${sql.json([{ path: "SKILL.md", sizeBytes: skillMarkdown(name).length }])}, 'local-board')
          returning id
        `;
        versionId = insertedVersion[0].id;
      }
      await tx`
        update company_skills
        set current_version_id = ${versionId},
            updated_at = now()
        where id = ${skillId}
      `;
    }

    const agentIdsByKey = new Map();
    for (const agent of agents) {
      const existing = await tx`
        select id from agents
        where company_id = ${company.id}
          and lower(name) = lower(${agent.name})
      `;
      let agentId = existing[0]?.id;
      if (!agentId) {
        const inserted = await tx`
          insert into agents
            (company_id, name, role, title, status, capabilities, adapter_type, adapter_config, runtime_config, permissions, metadata, icon)
          values
            (${company.id}, ${agent.name}, ${agent.role}, ${agent.title}, 'idle', ${agent.capabilities}, 'codex_local', ${sql.json({ model: "gpt-5.4", search: false, fastMode: false, timeoutSec: 0, graceSec: 15 })}, ${sql.json({ heartbeat: { enabled: false, intervalSec: 300, cooldownSec: 10, wakeOnDemand: true, maxConcurrentRuns: 20 } })}, ${sql.json(agent.permissions ?? {})}, ${sql.json({ key: agent.key, desiredSkills: agent.skills, governance, sourceTrust })}, ${agent.icon})
          returning id
        `;
        agentId = inserted[0].id;
      } else {
        await tx`
          update agents
          set role = ${agent.role},
              title = ${agent.title},
              capabilities = ${agent.capabilities},
              status = case when status = 'terminated' then status else 'idle' end,
              permissions = ${sql.json(agent.permissions ?? {})},
              metadata = ${sql.json({ key: agent.key, desiredSkills: agent.skills, governance, sourceTrust })},
              icon = ${agent.icon},
              updated_at = now()
          where id = ${agentId}
        `;
      }
      agentIdsByKey.set(agent.key, agentId);

      await tx`
        insert into company_memberships (company_id, principal_type, principal_id, membership_role)
        select ${company.id}, 'agent', ${agentId}, 'member'
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

    for (const agent of agents) {
      const id = agentIdsByKey.get(agent.key);
      const reportsTo = agent.reportsTo ? agentIdsByKey.get(agent.reportsTo) : null;
      const paths = await ensureAgentFiles(agent, company.id, id);
      await tx`
        update agents
        set reports_to = ${reportsTo ?? null},
            adapter_config = ${sql.json({
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
            })},
            updated_at = now()
        where id = ${id}
      `;
    }

    const ceoAgentId = agentIdsByKey.get("acs-strategy-ceo-agent");
    const mainGoalTitle = `${company.shortName}: ${company.mainGoal}`;
    const mainGoalRows = await tx`
      select id from goals
      where company_id = ${company.id}
        and title = ${mainGoalTitle}
    `;
    let mainGoalId = mainGoalRows[0]?.id;
    if (!mainGoalId) {
      const inserted = await tx`
        insert into goals (company_id, title, description, level, status, owner_agent_id)
        values (${company.id}, ${mainGoalTitle}, ${company.mission}, 'company', 'active', ${ceoAgentId})
        returning id
      `;
      mainGoalId = inserted[0].id;
    } else {
      await tx`
        update goals
        set description = ${company.mission},
            level = 'company',
            status = 'active',
            owner_agent_id = ${ceoAgentId},
            updated_at = now()
        where id = ${mainGoalId}
      `;
    }

    for (const [title, ownerName, priority] of startingTasks) {
      const owner = agents.find((a) => a.name === ownerName);
      const ownerId = owner ? agentIdsByKey.get(owner.key) : ceoAgentId;
      const existingGoal = await tx`
        select id from goals where company_id = ${company.id} and title = ${title}
      `;
      let goalId = existingGoal[0]?.id;
      if (!goalId) {
        const insertedGoal = await tx`
          insert into goals (company_id, title, description, level, status, parent_id, owner_agent_id)
          values (${company.id}, ${title}, ${issueDescription(title, ownerName)}, 'task', 'planned', ${mainGoalId}, ${ownerId})
          returning id
        `;
        goalId = insertedGoal[0].id;
      } else {
        await tx`
          update goals
          set description = ${issueDescription(title, ownerName)},
              status = case when status in ('completed', 'cancelled') then status else 'planned' end,
              parent_id = ${mainGoalId},
              owner_agent_id = ${ownerId},
              updated_at = now()
          where id = ${goalId}
        `;
      }

      const existingIssue = await tx`
        select id from issues
        where company_id = ${company.id}
          and title = ${title}
      `;
      if (existingIssue.length === 0) {
        const [{ next_number }] = await tx`
          update companies
          set issue_counter = issue_counter + 1,
              updated_at = now()
          where id = ${company.id}
          returning issue_counter as next_number
        `;
        await tx`
          insert into issues
            (company_id, goal_id, title, description, status, priority, assignee_agent_id, created_by_user_id, issue_number, identifier, origin_kind, origin_fingerprint, source_trust)
          values
            (${company.id}, ${goalId}, ${title}, ${issueDescription(title, ownerName)}, 'backlog', ${priority}, ${ownerId}, 'local-board', ${next_number}, ${`${company.shortName}-${next_number}`}, 'manual', ${`acs-seed:${slugify(title)}`}, ${sql.json(sourceTrust)})
        `;
      } else {
        await tx`
          update issues
          set goal_id = ${goalId},
              description = ${issueDescription(title, ownerName)},
              priority = ${priority},
              assignee_agent_id = ${ownerId},
              updated_at = now(),
              source_trust = ${sql.json(sourceTrust)}
          where id = ${existingIssue[0].id}
        `;
      }
    }

    const docTitle = "Africa Cloud Space Ltd Operating Context";
    const docBody = contextDocument();
    const existingDoc = await tx`
      select id, latest_revision_number from documents
      where company_id = ${company.id}
        and title = ${docTitle}
    `;
    let docId = existingDoc[0]?.id;
    let revisionNumber = (existingDoc[0]?.latest_revision_number ?? 0) + 1;
    if (!docId) {
      const insertedDoc = await tx`
        insert into documents (company_id, title, format, latest_body, latest_revision_number, created_by_user_id, updated_by_user_id, source_trust)
        values (${company.id}, ${docTitle}, 'markdown', ${docBody}, 1, 'local-board', 'local-board', ${sql.json(sourceTrust)})
        returning id
      `;
      docId = insertedDoc[0].id;
      revisionNumber = 1;
    } else {
      await tx`
        update documents
        set latest_body = ${docBody},
            latest_revision_number = ${revisionNumber},
            updated_by_user_id = 'local-board',
            updated_at = now(),
            source_trust = ${sql.json(sourceTrust)}
        where id = ${docId}
      `;
    }
    const revision = await tx`
      insert into document_revisions
        (company_id, document_id, revision_number, body, change_summary, created_by_user_id, title, format)
      values
        (${company.id}, ${docId}, ${revisionNumber}, ${docBody}, 'Seed/update ACS operating context', 'local-board', ${docTitle}, 'markdown')
      returning id
    `;
    await tx`
      update documents
      set latest_revision_id = ${revision[0].id}
      where id = ${docId}
    `;
  });

  const summary = await sql`
    select
      (select count(*)::int from agents where company_id = ${company.id}) as agents,
      (select count(*)::int from company_skills where company_id = ${company.id} and key like 'acs/%') as acs_skills,
      (select count(*)::int from goals where company_id = ${company.id}) as goals,
      (select count(*)::int from issues where company_id = ${company.id}) as issues,
      (select count(*)::int from labels where company_id = ${company.id} and name like 'department:%') as departments
  `;
  console.log(JSON.stringify({ companyId: company.id, ...summary[0] }, null, 2));
} finally {
  await sql.end();
}
