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
  name: "SABIMA AI",
  shortName: "SAB",
  description:
    "SABIMA AI is a startup focused on AI agents, business automation, school AI tools, teacher and learner AI assistants, WhatsApp/Telegram automation, AI reporting, tender automation, CRM automation, and AI-powered productivity tools for African SMEs, schools, associations, and enterprises.",
  purpose:
    "Build practical AI automation products and implementation services for African SMEs, schools, associations, and enterprises.",
  relationshipToAcs:
    "SABIMA AI is a separate startup/company from Africa Cloud Space Ltd. It may reuse relevant product ideas and non-sensitive knowledge from ACS only when explicitly useful, but its agents, goals, documents, and routines must remain under SABIMA AI unless explicitly linked.",
};

const sourceTrust = {
  origin: "local_setup",
  seed: "sabima-ai-setup",
  sensitiveCustomerRecords: false,
  credentialsIncluded: false,
};

const governance =
  "Medium autonomy. Agents may plan, draft, summarize, create tasks, and recommend actions. Human approval is required for production changes, spending, external client communication, contracts, tenders, pricing, staff terms, deployments, customer-data actions, external API actions, and irreversible data changes.";

const focusAreas = [
  "AI agents for companies and departments",
  "WhatsApp and Telegram business automation",
  "Teacher AI tools: lesson plans, schemes of work, exams, formative assessments, reports",
  "Learner AI tools: revision, tutoring, quizzes, guided learning",
  "School AI interface that can integrate with Cloud School",
  "Business AI assistants for sales, finance, HR, operations, and customer support",
  "Tender and proposal automation",
  "CRM automation and sales follow-up agents",
  "AI credits and subscription monetization",
  "AI implementation, consulting, and training",
];

const goals = [
  {
    title: "Build MVP AI agent platform",
    description:
      "Define and ship the first SABIMA AI platform experience for creating, configuring, and operating AI agents for companies and departments.",
    owner: "Product & Innovation Manager",
  },
  {
    title: "Package AI services for schools, SMEs, and associations",
    description:
      "Turn SABIMA AI capabilities into clear service/product packages for schools, SMEs, associations, and enterprise clients.",
    owner: "Sales & Partnerships Manager",
  },
  {
    title: "Monetize through subscription and AI credits",
    description:
      "Create pricing, subscription tiers, AI credit rules, usage controls, and revenue tracking for SABIMA AI.",
    owner: "Finance & Monetization Manager",
  },
  {
    title: "Integrate with WhatsApp, Telegram, and web AI interface",
    description:
      "Plan and implement reusable automation flows across WhatsApp, Telegram, and web interfaces.",
    owner: "WhatsApp & Telegram Automation Manager",
  },
  {
    title:
      "Build reusable templates for tenders, reports, lesson plans, CRM, and customer support",
    description:
      "Create reusable SABIMA AI prompt/workflow templates for tender automation, reporting, teacher tools, CRM follow-up, and customer support.",
    owner: "Documentation & Knowledge Manager",
  },
  {
    title: "Prepare pitch deck content and investor/business plan materials",
    description:
      "Prepare investor-ready and business-development materials covering market, product, business model, roadmap, traction, and financial assumptions.",
    owner: "SABIMA CEO Strategy Agent",
  },
];

const agents = [
  {
    key: "sabima-ceo-strategy-agent",
    name: "SABIMA CEO Strategy Agent",
    role: "executive",
    title: "Startup strategy, operating model, roadmap, partnerships, investor readiness",
    reportsTo: null,
    icon: "briefcase-business",
    permissions: { canCreateAgents: true },
    purpose:
      "Lead SABIMA AI strategy, priorities, operating cadence, partner positioning, investor readiness, and cross-functional execution.",
    responsibilities: [
      "Define company strategy, target markets, and product/service priorities.",
      "Coordinate all SABIMA AI managers and resolve cross-functional blockers.",
      "Own the startup roadmap, risk register, decision log, and investor/business-plan narrative.",
      "Keep SABIMA AI separate from ACS while allowing explicit, non-sensitive knowledge sharing where useful.",
    ],
    routineTasks: [
      "Review company goals, blockers, risks, and manager updates.",
      "Prioritize the next seven days of execution.",
      "Prepare weekly leadership summary and investor/business-plan updates.",
    ],
    reports: [
      "Weekly SABIMA AI execution report",
      "Startup risk and decision log",
      "Investor/business-plan readiness summary",
    ],
    escalationRules: [
      "Escalate pricing, contracts, spending, production commitments, investor claims, and customer-facing promises for human approval.",
      "Escalate any proposed data sharing with ACS unless explicitly approved.",
    ],
    expectedOutputs: [
      "Roadmap",
      "Management briefings",
      "Decision logs",
      "Pitch/business-plan content",
    ],
  },
  {
    key: "product-innovation-manager",
    name: "Product & Innovation Manager",
    role: "product",
    title: "AI product roadmap, MVP design, packaging, experiments, user feedback",
    reportsTo: "sabima-ceo-strategy-agent",
    icon: "sparkles",
    purpose:
      "Turn SABIMA AI focus areas into viable products, MVP scope, experiments, user stories, and launch packages.",
    responsibilities: [
      "Own product discovery, MVP scope, feature prioritization, and product packaging.",
      "Translate school, SME, association, and enterprise needs into product requirements.",
      "Coordinate product handoffs to architecture, implementation, sales, and documentation.",
    ],
    routineTasks: [
      "Maintain the product backlog and MVP scope.",
      "Review feedback, product risks, and feature dependencies.",
      "Prepare sprint-ready product briefs.",
    ],
    reports: [
      "Product roadmap report",
      "MVP scope and release readiness report",
      "Customer feedback synthesis",
    ],
    escalationRules: [
      "Escalate major scope changes, product promises, pricing assumptions, and integration commitments.",
    ],
    expectedOutputs: [
      "Product briefs",
      "User stories",
      "Roadmap updates",
      "MVP acceptance criteria",
    ],
  },
  {
    key: "ai-agents-architect",
    name: "AI Agents Architect",
    role: "ai_architecture",
    title: "Agent design, orchestration, prompts, memory, governance, reusable blueprints",
    reportsTo: "product-innovation-manager",
    icon: "bot",
    purpose:
      "Design reusable AI agent patterns for businesses, schools, departments, tenders, CRM, support, and reporting.",
    responsibilities: [
      "Define agent architectures, prompts, role boundaries, memory rules, and governance patterns.",
      "Create reusable agent blueprints for company departments and industry workflows.",
      "Coordinate with implementation and documentation teams on deployable templates.",
    ],
    routineTasks: [
      "Review agent designs for safety, usefulness, and reuse.",
      "Maintain the SABIMA agent blueprint library.",
      "Document risks, assumptions, and test scenarios for each agent pattern.",
    ],
    reports: [
      "Agent architecture review",
      "Prompt/template quality report",
      "Agent governance risk report",
    ],
    escalationRules: [
      "Escalate autonomous actions, external API actions, customer-data use, and cross-company data-sharing proposals.",
    ],
    expectedOutputs: [
      "Agent blueprints",
      "Prompt packs",
      "Governance notes",
      "Testing checklists",
    ],
  },
  {
    key: "whatsapp-telegram-automation-manager",
    name: "WhatsApp & Telegram Automation Manager",
    role: "automation",
    title: "Messaging automation, bot flows, business workflows, channel integrations",
    reportsTo: "technical-implementation-manager",
    icon: "message-circle",
    purpose:
      "Own WhatsApp and Telegram automation products, bot flows, message templates, channel workflows, and integration readiness.",
    responsibilities: [
      "Design WhatsApp/Telegram automation flows for schools, SMEs, associations, and enterprises.",
      "Coordinate message templates, opt-in expectations, escalation paths, and reporting.",
      "Work with implementation on integrations, testing, and deployment plans.",
    ],
    routineTasks: [
      "Review automation requests, flow blockers, and integration readiness.",
      "Maintain reusable messaging workflow templates.",
      "Check compliance, customer experience, and fallback paths.",
    ],
    reports: [
      "Messaging automation pipeline report",
      "Bot flow readiness report",
      "Channel risk and compliance notes",
    ],
    escalationRules: [
      "Escalate external messaging, customer communication, paid API usage, data retention, and production bot launch decisions.",
    ],
    expectedOutputs: [
      "Bot flow maps",
      "Message templates",
      "Integration briefs",
      "Automation QA checklists",
    ],
  },
  {
    key: "school-ai-product-manager",
    name: "School AI Product Manager",
    role: "school_product",
    title: "School AI interface, Cloud School integration concepts, school workflows",
    reportsTo: "product-innovation-manager",
    icon: "school",
    purpose:
      "Own the SABIMA School AI product experience and integration concepts for Cloud School and other school systems.",
    responsibilities: [
      "Define school AI workflows for administrators, teachers, learners, parents, and support teams.",
      "Plan Cloud School integration concepts without mixing SABIMA and ACS records.",
      "Coordinate school-focused MVP scope, feedback, and adoption materials.",
    ],
    routineTasks: [
      "Review school product backlog, integration assumptions, and user feedback.",
      "Maintain school AI interface requirements.",
      "Prepare school demo scenarios and acceptance criteria.",
    ],
    reports: [
      "School AI roadmap report",
      "Cloud School integration concept report",
      "School adoption and feedback report",
    ],
    escalationRules: [
      "Escalate Cloud School integration commitments, school data handling, pricing, and customer-facing demos.",
    ],
    expectedOutputs: [
      "School AI requirements",
      "Integration concept notes",
      "Demo scripts",
      "School workflow templates",
    ],
  },
  {
    key: "teacher-learner-ai-manager",
    name: "Teacher & Learner AI Manager",
    role: "education_ai",
    title: "Lesson plans, schemes, exams, assessments, tutoring, revision, quizzes",
    reportsTo: "school-ai-product-manager",
    icon: "graduation-cap",
    purpose:
      "Own teacher and learner AI tools for lesson planning, schemes of work, exams, formative assessments, reports, revision, tutoring, quizzes, and guided learning.",
    responsibilities: [
      "Design teacher-assistant and learner-assistant workflows.",
      "Create reusable education templates and quality checks.",
      "Coordinate curriculum assumptions, safety boundaries, and learning support outputs.",
    ],
    routineTasks: [
      "Review education template backlog and quality issues.",
      "Test teacher and learner outputs for clarity, age-appropriateness, and usefulness.",
      "Update assessment, quiz, and report templates.",
    ],
    reports: [
      "Teacher AI template report",
      "Learner AI quality report",
      "Education content risk report",
    ],
    escalationRules: [
      "Escalate curriculum claims, learner safety issues, sensitive learner data use, and school-facing content approvals.",
    ],
    expectedOutputs: [
      "Lesson-plan templates",
      "Schemes-of-work templates",
      "Exam and quiz templates",
      "Guided learning flows",
    ],
  },
  {
    key: "sales-partnerships-manager",
    name: "Sales & Partnerships Manager",
    role: "sales",
    title: "Pipeline, partnerships, sales packages, demos, CRM follow-up",
    reportsTo: "sabima-ceo-strategy-agent",
    icon: "handshake",
    purpose:
      "Build SABIMA AI sales pipeline, partnerships, demos, packaged offers, and CRM follow-up systems.",
    responsibilities: [
      "Own sales pipeline, partner targets, demos, outreach, and sales follow-up routines.",
      "Package offerings for schools, SMEs, associations, and enterprises.",
      "Coordinate CRM automation and handoffs to customer success/training.",
    ],
    routineTasks: [
      "Review leads, proposals, demo requests, and stale opportunities.",
      "Update CRM follow-up actions and partnership notes.",
      "Prepare weekly pipeline and partner progress summaries.",
    ],
    reports: [
      "Sales pipeline report",
      "Partnership opportunity report",
      "CRM follow-up report",
    ],
    escalationRules: [
      "Escalate pricing, contract terms, partner commitments, and customer-facing promises.",
    ],
    expectedOutputs: [
      "Sales packages",
      "Demo plans",
      "Pipeline summaries",
      "CRM follow-up sequences",
    ],
  },
  {
    key: "tender-proposal-automation-agent",
    name: "Tender & Proposal Automation Agent",
    role: "proposal_automation",
    title: "Tender automation, proposal templates, compliance matrices, bid content",
    reportsTo: "sales-partnerships-manager",
    icon: "file-check-2",
    purpose:
      "Create SABIMA AI tender and proposal automation workflows, templates, compliance matrices, and bid content systems.",
    responsibilities: [
      "Design reusable tender/proposal automation templates.",
      "Prepare compliance checklists, bid outlines, and response structures.",
      "Coordinate tender content with sales, product, documentation, and finance.",
    ],
    routineTasks: [
      "Review tender opportunities, deadlines, and missing documents.",
      "Update proposal templates and compliance matrices.",
      "Flag approval needs and bid risks.",
    ],
    reports: [
      "Tender readiness report",
      "Proposal automation template report",
      "Bid risk and compliance report",
    ],
    escalationRules: [
      "Escalate all submissions, legal claims, pricing, eligibility statements, and binding commitments.",
    ],
    expectedOutputs: [
      "Tender templates",
      "Compliance matrices",
      "Proposal drafts",
      "Submission checklists",
    ],
  },
  {
    key: "finance-monetization-manager",
    name: "Finance & Monetization Manager",
    role: "finance",
    title: "Pricing, subscriptions, AI credits, revenue model, unit economics",
    reportsTo: "sabima-ceo-strategy-agent",
    icon: "coins",
    purpose:
      "Own SABIMA AI pricing, subscriptions, AI credits, revenue model, financial assumptions, and monetization controls.",
    responsibilities: [
      "Design subscription tiers, AI credit rules, usage limits, and monetization dashboards.",
      "Track revenue assumptions, costs, margins, and pricing experiments.",
      "Support business-plan and investor financial materials.",
    ],
    routineTasks: [
      "Review usage-cost assumptions, pricing risks, and monetization blockers.",
      "Update AI credit and subscription model notes.",
      "Prepare finance inputs for pitch and business-plan materials.",
    ],
    reports: [
      "Monetization report",
      "AI credits and usage-cost report",
      "Startup financial assumptions report",
    ],
    escalationRules: [
      "Escalate pricing changes, discounts, spending, customer billing rules, and investor financial claims.",
    ],
    expectedOutputs: [
      "Pricing model",
      "AI credit policy",
      "Revenue assumptions",
      "Financial-plan notes",
    ],
  },
  {
    key: "customer-success-training-manager",
    name: "Customer Success & Training Manager",
    role: "customer_success",
    title: "Onboarding, training, adoption, support, implementation success",
    reportsTo: "sabima-ceo-strategy-agent",
    icon: "heart-handshake",
    purpose:
      "Ensure SABIMA AI customers are onboarded, trained, supported, and guided toward measurable adoption.",
    responsibilities: [
      "Design onboarding journeys, training materials, support workflows, and adoption checklists.",
      "Track customer health, support issues, training needs, and success risks.",
      "Coordinate implementation handoffs and customer feedback loops.",
    ],
    routineTasks: [
      "Review onboarding status, support blockers, and training requests.",
      "Update customer health notes and adoption actions.",
      "Prepare weekly success and training summary.",
    ],
    reports: [
      "Customer success report",
      "Training delivery report",
      "Adoption and retention risk report",
    ],
    escalationRules: [
      "Escalate unhappy customers, sensitive customer data, production support commitments, and contract-impacting issues.",
    ],
    expectedOutputs: [
      "Onboarding plans",
      "Training guides",
      "Customer health summaries",
      "Support escalation workflows",
    ],
  },
  {
    key: "technical-implementation-manager",
    name: "Technical Implementation Manager",
    role: "technical_delivery",
    title: "Implementation planning, integrations, QA, deployment readiness, technical support",
    reportsTo: "product-innovation-manager",
    icon: "settings-2",
    purpose:
      "Turn SABIMA AI product and automation designs into implementable technical plans, integrations, QA steps, and deployment-ready work.",
    responsibilities: [
      "Own technical implementation planning, integration design, QA, release readiness, and technical support handoffs.",
      "Coordinate web AI interface, messaging integrations, APIs, automation workflows, and reusable deployment patterns.",
      "Maintain implementation risks and technical decision notes.",
    ],
    routineTasks: [
      "Review technical blockers, integration tasks, and QA findings.",
      "Prepare implementation plans and deployment readiness notes.",
      "Coordinate with automation, architecture, product, and customer success.",
    ],
    reports: [
      "Technical implementation report",
      "Integration readiness report",
      "QA and deployment risk report",
    ],
    escalationRules: [
      "Escalate production deployments, credentials, customer-data handling, paid API usage, and irreversible technical changes.",
    ],
    expectedOutputs: [
      "Implementation plans",
      "Integration specs",
      "QA checklists",
      "Deployment readiness notes",
    ],
  },
  {
    key: "documentation-knowledge-manager",
    name: "Documentation & Knowledge Manager",
    role: "documentation",
    title: "Knowledge base, templates, SOPs, guides, pitch/business-plan materials",
    reportsTo: "product-innovation-manager",
    icon: "book-open-check",
    purpose:
      "Maintain SABIMA AI knowledge, reusable templates, SOPs, client guides, internal documentation, and pitch/business-plan content drafts.",
    responsibilities: [
      "Create and maintain SABIMA knowledge base, templates, SOPs, and client-facing guides.",
      "Document tender, report, lesson plan, CRM, support, and training templates.",
      "Coordinate pitch deck and business-plan materials with strategy, finance, sales, and product.",
    ],
    routineTasks: [
      "Review documentation gaps, template requests, and knowledge updates.",
      "Update reusable template library and SOPs.",
      "Prepare weekly documentation status and content backlog.",
    ],
    reports: [
      "Documentation status report",
      "Template library report",
      "Pitch/business-plan content readiness report",
    ],
    escalationRules: [
      "Escalate public-facing claims, legal/policy content, pricing statements, and customer-specific documentation.",
    ],
    expectedOutputs: [
      "Knowledge base pages",
      "Template packs",
      "SOPs",
      "Client guides",
      "Pitch/business-plan drafts",
    ],
  },
];

function lines(title, items) {
  return [`## ${title}`, ...items.map((item) => `- ${item}`)].join("\n");
}

function capabilities(agent) {
  return [
    `Purpose: ${agent.purpose}`,
    `Responsibilities: ${agent.responsibilities.join(" ")}`,
    `Routine tasks: ${agent.routineTasks.join(" ")}`,
    `Reports: ${agent.reports.join(", ")}.`,
    `Expected outputs: ${agent.expectedOutputs.join(", ")}.`,
  ].join(" ");
}

function metadataFor(agent, reportsToName) {
  return {
    key: agent.key,
    purpose: agent.purpose,
    responsibilities: agent.responsibilities,
    routineTasks: agent.routineTasks,
    reportsToGenerate: agent.reports,
    escalationRules: agent.escalationRules,
    expectedOutputs: agent.expectedOutputs,
    reportingLine: reportsToName
      ? `Reports to ${reportsToName}`
      : "Reports to SABIMA AI board / founder",
    focusAreas,
    relationshipToAcs: company.relationshipToAcs,
    governance,
    sourceTrust,
  };
}

function instructionsFor(agent, reportsToName) {
  const reportingLine = reportsToName
    ? `${agent.name} reports to ${reportsToName}.`
    : `${agent.name} reports to the SABIMA AI board / founder.`;
  return [
    `# ${agent.name}`,
    "",
    `Title: ${agent.title}`,
    `Role: ${agent.role}`,
    "",
    "## Company",
    `${company.name}: ${company.description}`,
    "",
    "## Purpose",
    agent.purpose,
    "",
    "## Relationship to Africa Cloud Space",
    company.relationshipToAcs,
    "",
    "## Reporting Line",
    reportingLine,
    "",
    lines("Responsibilities", agent.responsibilities),
    "",
    lines("Routine Tasks", agent.routineTasks),
    "",
    lines("Reports to Generate", agent.reports),
    "",
    lines("Escalation Rules", agent.escalationRules),
    "",
    lines("Expected Outputs", agent.expectedOutputs),
    "",
    "## Governance",
    governance,
    "",
    "## Operating Rules",
    "- Keep SABIMA AI records, agents, goals, routines, and documents under the SABIMA AI company.",
    "- Do not overwrite or mix Africa Cloud Space Ltd agents unless an explicit linked task says to do so.",
    "- Do not store credentials, API keys, or sensitive customer records.",
    "- Mark assumptions clearly and ask for approval before irreversible or external actions.",
  ].join("\n");
}

function contextDocument() {
  const goalLines = goals.map((goal) => `- ${goal.title}: ${goal.description}`).join("\n");
  const agentLines = agents
    .map((agent) => `- ${agent.name}: ${agent.purpose}`)
    .join("\n");
  const focusLines = focusAreas.map((area) => `- ${area}`).join("\n");
  return [
    "# SABIMA AI Operating Context",
    "",
    "## Purpose",
    company.purpose,
    "",
    "## Description",
    company.description,
    "",
    "## Relationship to Africa Cloud Space",
    company.relationshipToAcs,
    "",
    "## Core Focus Areas",
    focusLines,
    "",
    "## Startup Goals",
    goalLines,
    "",
    "## Agents",
    agentLines,
    "",
    "## Governance",
    governance,
    "",
    "## Data Handling",
    "Keep SABIMA AI separate from ACS. Do not store credentials, API keys, or sensitive customer records.",
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
    `${agent.name} serves SABIMA AI by turning its assigned startup function into practical, reviewable work.\n`,
    "utf8",
  );
  await fs.writeFile(
    path.join(instructionsRoot, "TOOLS.md"),
    "Use available Paperclip, Codex, and local workspace tools only within SABIMA AI governance boundaries.\n",
    "utf8",
  );
  await fs.writeFile(
    path.join(instructionsRoot, "HEARTBEAT.md"),
    [
      "# Heartbeat",
      "",
      "On heartbeat:",
      ...agent.routineTasks.map((item) => `- ${item}`),
      "- Summarize status, blockers, risks, approvals needed, and next actions.",
    ].join("\n"),
    "utf8",
  );
  return { instructionsRoot, codexHome };
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
  const result = {
    projectPath: "C:\\Projects\\PaperClip",
    paperclipPackagePath: paperclipNpxRoot,
    instanceRoot,
    database: connectionString.replace(/:[^:@/]+@/, ":***@"),
    company: null,
    companyCreated: false,
    agentsCreated: [],
    agentsUpdated: [],
    goalsCreated: [],
    goalsUpdated: [],
    routinesCreated: [],
    routinesUpdated: [],
    documentsCreated: [],
    documentsUpdated: [],
    changedFilesRoot: null,
    issues: [],
  };

  let companyId;
  await sql.begin(async (tx) => {
    const existingCompany = await tx`
      select id from companies where lower(name) = lower(${company.name}) limit 1
    `;
    if (existingCompany.length === 0) {
      const inserted = await tx`
        insert into companies
          (name, description, issue_prefix, status, require_board_approval_for_new_agents, brand_color, attachment_max_bytes)
        values
          (${company.name}, ${company.description}, ${company.shortName}, 'active', false, '#0f766e', 20971520)
        returning id
      `;
      companyId = inserted[0].id;
      result.companyCreated = true;
    } else {
      companyId = existingCompany[0].id;
      await tx`
        update companies
        set name = ${company.name},
            description = ${company.description},
            issue_prefix = ${company.shortName},
            status = 'active',
            require_board_approval_for_new_agents = false,
            brand_color = '#0f766e',
            updated_at = now()
        where id = ${companyId}
      `;
    }

    result.company = { id: companyId, name: company.name };
    result.changedFilesRoot = path.join(instanceRoot, "companies", companyId);

    await tx`
      insert into company_memberships (company_id, principal_type, principal_id, membership_role, status)
      select ${companyId}, 'user', 'local-board', 'owner', 'active'
      where not exists (
        select 1 from company_memberships
        where company_id = ${companyId}
          and principal_type = 'user'
          and principal_id = 'local-board'
      )
    `;

    for (const area of focusAreas) {
      await tx`
        insert into labels (company_id, name, color)
        select ${companyId}, ${`focus: ${area}`}, '#0f766e'
        where not exists (
          select 1 from labels where company_id = ${companyId} and name = ${`focus: ${area}`}
        )
      `;
    }

    const idByKey = new Map();
    for (const agent of agents) {
      const existing = await tx`
        select id from agents
        where company_id = ${companyId}
          and lower(name) = lower(${agent.name})
        limit 1
      `;
      let agentId = existing[0]?.id;
      if (!agentId) {
        const inserted = await tx`
          insert into agents
            (company_id, name, role, title, status, capabilities, adapter_type, adapter_config, runtime_config, permissions, metadata, icon)
          values
            (${companyId}, ${agent.name}, ${agent.role}, ${agent.title}, 'idle', ${capabilities(agent)}, 'codex_local', ${sql.json({})}, ${sql.json({ heartbeat: { enabled: false, intervalSec: 300, cooldownSec: 10, wakeOnDemand: true, maxConcurrentRuns: 20 } })}, ${sql.json(agent.permissions ?? {})}, ${sql.json(metadataFor(agent, null))}, ${agent.icon})
          returning id
        `;
        agentId = inserted[0].id;
        result.agentsCreated.push(agent.name);
      } else {
        result.agentsUpdated.push(agent.name);
      }
      idByKey.set(agent.key, agentId);

      await tx`
        insert into company_memberships (company_id, principal_type, principal_id, membership_role, status)
        select ${companyId}, 'agent', ${agentId}, 'member', 'active'
        where not exists (
          select 1 from company_memberships
          where company_id = ${companyId}
            and principal_type = 'agent'
            and principal_id = ${agentId}
        )
      `;
      await tx`
        insert into agent_runtime_state (agent_id, company_id, adapter_type, state_json)
        values (${agentId}, ${companyId}, 'codex_local', ${sql.json({})})
        on conflict (agent_id) do update
        set company_id = excluded.company_id,
            adapter_type = excluded.adapter_type,
            updated_at = now()
      `;
    }

    for (const agent of agents) {
      const agentId = idByKey.get(agent.key);
      const reportsToId = agent.reportsTo ? idByKey.get(agent.reportsTo) : null;
      const reportsToName =
        agents.find((candidate) => candidate.key === agent.reportsTo)?.name ??
        null;
      const paths = await ensureAgentFiles(
        agent,
        companyId,
        agentId,
        reportsToName,
      );

      await tx`
        update agents
        set role = ${agent.role},
            title = ${agent.title},
            status = case when status in ('terminated', 'paused', 'pending_approval') then status else 'idle' end,
            reports_to = ${reportsToId},
            capabilities = ${capabilities(agent)},
            adapter_type = 'codex_local',
            adapter_config = ${sql.json(adapterConfig(paths))},
            runtime_config = ${sql.json({ heartbeat: { enabled: false, intervalSec: 300, cooldownSec: 10, wakeOnDemand: true, maxConcurrentRuns: 20 } })},
            permissions = ${sql.json(agent.permissions ?? {})},
            metadata = ${sql.json(metadataFor(agent, reportsToName))},
            icon = ${agent.icon},
            updated_at = now()
        where id = ${agentId}
      `;

      const routineTitle = `SABIMA: ${agent.name} operating routine`;
      const routineDescription = instructionsFor(agent, reportsToName);
      const existingRoutine = await tx`
        select id, latest_revision_number
        from routines
        where company_id = ${companyId}
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
            (${companyId}, ${routineTitle}, ${routineDescription}, ${agentId}, 'medium', 'draft', 'coalesce_if_active', 'skip_missed', ${sql.json([])}, 'local-board', 'local-board')
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
          (${companyId}, ${routineId}, ${revisionNumber}, ${routineTitle}, ${routineDescription}, ${sql.json(snapshot)}, 'SABIMA AI setup/update', 'local-board')
        returning id
      `;
      await tx`
        update routines
        set latest_revision_id = ${revision[0].id},
            latest_revision_number = ${revisionNumber}
        where id = ${routineId}
      `;
    }

    const ceoAgentId = idByKey.get("sabima-ceo-strategy-agent");
    const mainGoalTitle = "SABIMA AI startup launch and operating system";
    const mainGoalRows = await tx`
      select id from goals
      where company_id = ${companyId}
        and title = ${mainGoalTitle}
      limit 1
    `;
    let mainGoalId = mainGoalRows[0]?.id;
    if (!mainGoalId) {
      const insertedMainGoal = await tx`
        insert into goals (company_id, title, description, level, status, owner_agent_id)
        values (${companyId}, ${mainGoalTitle}, ${company.purpose}, 'company', 'active', ${ceoAgentId})
        returning id
      `;
      mainGoalId = insertedMainGoal[0].id;
    } else {
      await tx`
        update goals
        set description = ${company.purpose},
            level = 'company',
            status = 'active',
            owner_agent_id = ${ceoAgentId},
            updated_at = now()
        where id = ${mainGoalId}
      `;
    }

    for (const goal of goals) {
      const owner = agents.find((agent) => agent.name === goal.owner);
      const ownerId = owner ? idByKey.get(owner.key) : ceoAgentId;
      const existingGoal = await tx`
        select id from goals
        where company_id = ${companyId}
          and title = ${goal.title}
        limit 1
      `;
      if (existingGoal.length === 0) {
        await tx`
          insert into goals
            (company_id, title, description, level, status, parent_id, owner_agent_id)
          values
            (${companyId}, ${goal.title}, ${goal.description}, 'task', 'planned', ${mainGoalId}, ${ownerId})
        `;
        result.goalsCreated.push(goal.title);
      } else {
        await tx`
          update goals
          set description = ${goal.description},
              level = 'task',
              status = case when status in ('completed', 'cancelled') then status else 'planned' end,
              parent_id = ${mainGoalId},
              owner_agent_id = ${ownerId},
              updated_at = now()
          where id = ${existingGoal[0].id}
        `;
        result.goalsUpdated.push(goal.title);
      }
    }

    const docTitle = "SABIMA AI Operating Context";
    const docBody = contextDocument();
    const existingDoc = await tx`
      select id, latest_revision_number
      from documents
      where company_id = ${companyId}
        and title = ${docTitle}
      limit 1
    `;
    let docId = existingDoc[0]?.id;
    let revisionNumber = (existingDoc[0]?.latest_revision_number ?? 0) + 1;
    if (!docId) {
      const insertedDoc = await tx`
        insert into documents
          (company_id, title, format, latest_body, latest_revision_number, created_by_user_id, updated_by_user_id, source_trust)
        values
          (${companyId}, ${docTitle}, 'markdown', ${docBody}, 1, 'local-board', 'local-board', ${sql.json(sourceTrust)})
        returning id
      `;
      docId = insertedDoc[0].id;
      revisionNumber = 1;
      result.documentsCreated.push(docTitle);
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
      result.documentsUpdated.push(docTitle);
    }
    const docRevision = await tx`
      insert into document_revisions
        (company_id, document_id, revision_number, body, change_summary, created_by_user_id, title, format)
      values
        (${companyId}, ${docId}, ${revisionNumber}, ${docBody}, 'SABIMA AI setup/update', 'local-board', ${docTitle}, 'markdown')
      returning id
    `;
    await tx`
      update documents
      set latest_revision_id = ${docRevision[0].id}
      where id = ${docId}
    `;
  });

  const verification = await sql`
    select
      (select count(*)::int from agents where company_id = ${result.company.id}) as agents,
      (select count(*)::int from goals where company_id = ${result.company.id} and title = any(${goals.map((goal) => goal.title)})) as requested_goals,
      (select count(*)::int from routines where company_id = ${result.company.id} and title like 'SABIMA:% operating routine') as routines,
      (select count(*)::int from documents where company_id = ${result.company.id} and title = 'SABIMA AI Operating Context') as documents,
      (select count(*)::int from company_memberships where company_id = ${result.company.id} and principal_type = 'agent' and status = 'active') as active_agent_memberships,
      (select count(*)::int from agents where company_id = 'ae25671c-172b-475a-aab3-1e64a676a830') as acs_agent_count
  `;
  const duplicateNames = await sql`
    select lower(name) as normalized_name, count(*)::int as count, array_agg(name order by created_at) as names
    from agents
    where company_id = ${result.company.id}
    group by lower(name)
    having count(*) > 1
  `;
  const agentRows = await sql`
    select a.name, a.role, a.status, coalesce(rt.name, 'SABIMA AI board / founder') as reports_to
    from agents a
    left join agents rt on rt.id = a.reports_to
    where a.company_id = ${result.company.id}
    order by lower(a.name)
  `;

  result.verification = verification[0];
  result.agentList = agentRows;
  result.duplicateNames = duplicateNames;
  if (duplicateNames.length > 0) {
    result.issues.push("Duplicate SABIMA AI agent names found.");
  }
  if (verification[0].agents !== agents.length) {
    result.issues.push(`Expected ${agents.length} agents but found ${verification[0].agents}.`);
  }
  if (verification[0].requested_goals !== goals.length) {
    result.issues.push(`Expected ${goals.length} requested goals but found ${verification[0].requested_goals}.`);
  }

  console.log(JSON.stringify(result, null, 2));
} finally {
  await sql.end();
}
