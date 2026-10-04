// =====================================================================
// ✏️ CUSTOMIZE EVERYTHING IN THIS SECTION — the page builds itself from it
// =====================================================================

// Skills: "label" is the filter button text. "All" shows every group together.
const skills = [
  {
    label: "AI/ML",
    items: [
      "Python", "PyTorch", "TensorFlow", "HuggingFace", "LangGraph", "LangChain",
      "vLLM", "Axolotl", "AWS SageMaker", "AWS Bedrock", "scikit-learn", "XGBoost",
      "OpenCV", "Databricks", "Dask",
    ],
  },
  {
    label: "SWE",
    items: [
      "C", "C++", "Java", "JavaScript", "TypeScript", "React", "Node.js", "Flask",
      "HTML / CSS", "SQL", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "AWS", "Git",
    ],
  },
];

// To add a project: copy one { ... } block, paste it, and edit the values.
// image: put a screenshot in an "images" folder and use "images/name.png".
//        Leave it "" to show a colored banner with the title instead.
// github / live: leave "" to hide the link.
// featured: true shows a "Featured" label.
const projects = [
  {
    title: "AskBruin",
    description: "A multi-agent AI assistant that centralizes UCLA data to answer questions about events, course planning, and campus resources. Automated ingestion, embedding, and RAG pipelines with persistent conversation sessions.",
    tags: ["AWS Bedrock", "Lambda", "S3", "Cognito", "React", "RAG"],
    image: "",
    github: "",
    live: "https://askbruin.com/",
  },
  {
    title: "LA Fire Relief Claim Tracker",
    description: "Helps LA fire victims rebuild insurance-claim inventories by parsing Amazon orders and credit-card statements. Includes a RAG policy analyzer over insurance documents and Perplexity-powered plan search.",
    tags: ["Flask", "React", "OpenAI API", "Azure", "RAG"],
    image: "",
    github: "",
    live: "",
  },
  {
    title: "EMG Keystroke Prediction",
    description: "Mapped sEMG wrist signals to keystrokes on the emg2qwerty dataset. Benchmarked CNN, LSTM, GRU, and Transformer models with CTC loss, plus temporal data augmentation, cutting character error rate by over 20% vs. the baseline.",
    tags: ["PyTorch", "Transformers", "CTC", "TensorBoard"],
    image: "",
    github: "",
    live: "",
  },
  {
    title: "Traffic Prediction with STGNNs",
    description: "Led a team of 5 at Data Science Union building a spatiotemporal graph neural network for real-time traffic prediction and route optimization, combining OpenStreetMap, TomTom, and PeMS data with a GRU + GCN + Transformer model.",
    tags: ["PyTorch", "GNNs", "Time Series", "Team Lead"],
    image: "",
    github: "",
    live: "",
  },
  {
    title: "HopOn",
    description: "A full-stack web app prototype that helps college students find affordable, safe transportation. Integrated the Google Maps API for dynamic route rendering and distance calculation, and built the login and ride-posting flows with a MongoDB backend schema.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Google Maps API"],
    image: "",
    github: "https://github.com/suhanishukla/hopon",
    live: "",
  },
  {
    title: "Algorithmic Bias in News Aggregators",
    description: "Researched political bias in the article-ranking algorithms of news aggregator sites. Built a Python web scraper for data collection, scored article bias with the Bipartisan Press NLP API, and fit a logistic regression model to measure how individual factors affect an article's bias.",
    tags: ["Python", "NumPy", "Pandas", "Matplotlib", "Logistic Regression"],
    image: "",
    github: "",
    live: "",
  },
];

const experience = [
  {
    role: "Machine Learning Engineer Intern",
    org: "Adobe",
    team: "Acrobat AI Assistant Team · Document Cloud AI",
    date: "Jun 2026 – Sep 2026 · San Jose, CA",
    points: [
      "Built, fine-tuned, and deployed a prompt-tunable <strong>fast-path SLM router</strong> for the <strong>Acrobat AI Assistant</strong> agentic harness using <strong>Axolotl</strong>, <strong>AWS SageMaker</strong>, and <strong>vLLM</strong>, routing simple queries directly to specialized agents to improve latency.",
      "Benchmarked and trained multiple SLMs, ultimately deploying <strong>Qwen3-1.7B</strong>, which reduced routing latency by <strong>80%</strong>, improved recall by <strong>21%</strong>, and cut misroutes by <strong>58%</strong>.",
      "Generated training data with <strong>varied system prompts</strong> across diverse agent rosters and output schemas, and <strong>simulated multi-turn user conversations</strong>, so the model adapts to changing <strong>routing policies without regenerating data or retraining</strong>.",
      "Developed a reusable <strong>model-distillation and SLM training framework</strong> with automated synthetic-data generation and evaluation using <strong>NVIDIA Data Designer</strong>, enabling scalable training for future SLM use cases.",
    ],
  },
  {
    role: "Undergraduate Researcher",
    org: "UCLA MARS Lab",
    link: "https://saadiagabriel.com/mars_lab.html",
    date: "May 2026 – Present · Los Angeles, CA",
    points: [
      "Analyze <strong>SLM agentic reasoning trajectories</strong> on <strong>SWE-ZERO</strong>, <strong>Endless Terminals</strong>, and <strong>Terminal-Bench 2</strong>, comparing models like <strong>Llama-3.2-3B</strong> and <strong>o3</strong>, to find why agents fail on coding and terminal tasks.",
      "Built <strong>heuristic and LLM-as-judge pipelines</strong> to score trajectories on progress, error recovery, looping, and verification.",
      "Developing a <strong>failure-mode taxonomy and labeling rubric</strong> to guide better datasets and training for agentic SLMs.",
    ],
  },
  {
    role: "Software Engineer Intern",
    org: "Apple",
    team: "Weather Forecasting Team · Info Apps",
    date: "Jun 2025 – Sep 2025 · Cambridge, MA",
    points: [
      "Researched and integrated text data from <strong>severe weather alerts</strong> and <strong>meteorologist reports</strong> into an end-to-end <strong>NLP and anomaly-detection pipeline</strong> to identify notable weather conditions.",
      "Experimented with <strong>BERT</strong>, <strong>Sentence Transformers</strong>, <strong>named-entity recognition (NER)</strong>, and <strong>LLM-based extraction</strong> to pull insights from free-form text.",
      "Processed large-scale datasets with <strong>Dask</strong> and <strong>AWS</strong> infrastructure for scalable data processing and model training.",
      "Trained an <strong>XGBoost</strong> severe-weather classifier achieving <strong>90%+ accuracy</strong>, and used feature engineering and <strong>SHAP analysis</strong> to identify the key weather features and thresholds behind its predictions.",
    ],
  },
  {
    role: "Software Engineer Intern",
    org: "Juniper Networks",
    team: "Generative AI Team · Core Engineering",
    date: "Jun 2024 – Sep 2024 · Sunnyvale, CA",
    points: [
      "Automated the creation of code-review training data with <strong>Python</strong> and generated synthetic Q&A data from product documentation using <strong>LangChain</strong>, then fine-tuned <strong>Llama 3</strong> with <strong>LoRA</strong> on it, achieving <strong>95% accuracy</strong> on code reviews and Q&A.",
      "Designed and implemented a <strong>prompt-chaining pipeline</strong> to customize the model for coding guidelines.",
      "Built an <strong>LLM routing engine</strong> that directs user queries by intent to the right backend: LLM chat, natural-language-to-SQL queries, or a <strong>RAG</strong> vector database.",
    ],
  },
];


// Leadership & involvement: one entry per organization, with every role you've held there.
// date: leave "" to hide. points: optional bullets (leave [] for none)
const clubs = [
  {
    org: "UCLA Computer Science Department",
    short: "CS",
    roles: [
      { title: "Learning Assistant, CS 162 (Natural Language Processing)", date: "" },
      { title: "Learning Assistant, CS 33 (Computer Organization)", date: "" },
    ],
    points: [
      "Led the <strong>first quarter of learning assistants</strong> for CS 162, developing curriculum including worksheets, coding demos, and review sessions on NLP course content.",
      "Led <strong>discussion sections</strong> for CS 33, reinforcing course concepts, guiding students through projects, and preparing them for exams.",
    ],
  },
  {
    org: "Bruin AI",
    short: "AI",
    roles: [
      { title: "AI/ML Engineer", date: "2024 – Present" },
      { title: "Director of External Events", date: "2025 – 2026" },
    ],
    points: [
      "Built an <strong>AI-powered vendor intelligence platform</strong> for UCLA: a <strong>React</strong> dashboard of spend metrics and purchase records with a <strong>RAG chat agent</strong> that answers through keyword analytics, retrieval lookups, or deep corpus-wide analysis.",
      "Led external programming for <strong>400+ attendee</strong> events, including <strong>company info sessions</strong>, <strong>collaborations with other clubs</strong>, and the <strong>Generative AI Summit</strong> in partnership with <strong>AWS</strong> (industry panels, technical AI workshops, a research panel, a hackathon, and a pitch competition).",
    ],
  },
  {
    org: "Data Science Union",
    short: "DSU",
    roles: [{ title: "Project Lead & Data Scientist", date: "2024 – Present" }],
    points: [
      "Led a team of 5 building a <strong>spatiotemporal graph neural network</strong> for real-time traffic prediction and route optimization.",
      "Developed a multi-class <strong>emotion recognition model</strong> with deep CNNs (OpenCV, TensorFlow) and deployed it with <strong>Docker</strong> and <strong>Kubernetes</strong>; presented at the DSU showcase.",
      "Conducted data cleaning and EDA on public datasets with NumPy, scikit-learn, Matplotlib, and Seaborn.",
    ],
  },
  {
    org: "ACM Hack",
    short: "ACM",
    roles: [{ title: "Tech Director", date: "2023 – Present" }],
    points: [
      "Directed a team of <strong>12</strong> to run a full-day Python library event with hands-on projects: web scraping with <strong>Beautiful Soup</strong> and <strong>Selenium</strong>, and object detection and facial recognition with <strong>OpenCV</strong>.",
      "Directed a multi-week <strong>full-stack Swift workshop</strong> covering databases, backend integration, user authentication, and <strong>SwiftUI</strong>.",
      "Develop and maintain the Hack and HOTH websites with <strong>React.js</strong>, <strong>Material UI</strong>, and <strong>Gatsby</strong>, improving responsiveness, navigation, and user engagement.",
    ],
  },
  {
    org: "Society of Women Engineers",
    short: "SWE",
    roles: [
      { title: "Outreach Committee Lead", date: "2023 – 2024" },
      { title: "Internal Board Treasurer", date: "2024 – 2025" },
    ],
    points: [
      "Elected <strong>Internal Board Treasurer</strong> to manage finances and yearly expenses for all <strong>8 SWE committees</strong>.",
      "Spearheaded fundraising and company-sponsored scholarships by collaborating with local businesses and the UCLA Finance Office.",
      "Organized outreach events for <strong>200+ high school students</strong>, including career-planning panels and technical workshops.",
    ],
  },
];

// =====================================================================
// You don't need to edit below this line
// =====================================================================

const $ = (id) => document.getElementById(id);

function renderSkills(label = "All") {
  const groups = label === "All" ? skills : skills.filter((g) => g.label === label);
  const cls = { "AI/ML": "ai", SWE: "swe" };
  $("skills").innerHTML = groups
    .flatMap((g) => g.items.map((s) => `<li class="${cls[g.label]}">${s}</li>`))
    .join("");
}
$("skill-filters").innerHTML = ["All", "AI/ML", "SWE"]
  .map((l, i) => `<button class="${i === 0 ? "active" : ""}" data-label="${l}">${l}</button>`)
  .join("");
$("skill-filters").addEventListener("click", (e) => {
  if (!e.target.dataset.label) return;
  document.querySelectorAll("#skill-filters button").forEach((b) => b.classList.remove("active"));
  e.target.classList.add("active");
  renderSkills(e.target.dataset.label);
});
renderSkills();

function renderProjects() {
  $("project-grid").innerHTML = projects
    .map(
      (p, i) => `
      <article class="card">
        ${
          p.image
            ? `<img src="${p.image}" alt="${p.title} screenshot" loading="lazy" />`
            : `<div class="banner banner-${projects.indexOf(p) % 4}"><span>${p.title}</span></div>`
        }
        <div class="card-body">
          ${p.featured ? `<span class="badge">Featured</span>` : ""}
          <div class="card-top">
            <h4>${p.title}</h4>
            <div class="links">
              ${p.github ? `<a href="${p.github}" target="_blank">GitHub ↗</a>` : ""}
              ${p.live ? `<a href="${p.live}" target="_blank">Live ↗</a>` : ""}
            </div>
          </div>
          <p>${p.description}</p>
          <div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
        </div>
      </article>`
    )
    .join("");
}

renderProjects();

$("timeline").innerHTML = experience
  .map(
    (x) => `
    <li>
      <h4>${x.role} <span>@ ${x.link ? `<a href="${x.link}" target="_blank" rel="noopener">${x.org} ↗</a>` : x.org}</span></h4>
      ${x.team ? `<p class="team">${x.team}</p>` : ""}
      <p class="mono date">${x.date}</p>
      <ul>${x.points.map((pt) => `<li>${pt}</li>`).join("")}</ul>
    </li>`
  )
  .join("");

$("clubs").innerHTML = clubs
  .map(
    (c) => `
    <article class="club">
      <div class="club-head">
        <span class="club-mark">${c.short}</span>
        <h4>${c.org}</h4>
      </div>
      <ul class="roles">
        ${c.roles.map((r) => `<li><span>${r.title}</span>${r.date ? `<span class="date">${r.date}</span>` : ""}</li>`).join("")}
      </ul>
      ${c.points.length ? `<ul class="club-points">${c.points.map((pt) => `<li>${pt}</li>`).join("")}</ul>` : ""}
    </article>`
  )
  .join("");

$("year").textContent = new Date().getFullYear();

// Dark mode toggle (remembers your choice)
const root = document.documentElement;
try {
  const saved = localStorage.getItem("theme");
  if (saved) root.dataset.theme = saved;
  else if (matchMedia("(prefers-color-scheme: dark)").matches) root.dataset.theme = "dark";
} catch {}
$("theme-toggle").addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch {}
});
