/*
Developer: Tejas Kamble
Email: tejasksocials@gmail.com
Website: https://tejas-personal-portfolio-dev.vercel.app/
LinkedIn: https://www.linkedin.com/in/tejas-kamble-5342443b1?utm_source=share_via&utm_content=profile&utm_medium=member_android
Instagram: https://www.instagram.com/tejasworkspace_u1?igsh=MXRzcG55N3psbWxzbw==
GitHub: https://github.com/tejasworkspacews1-ui
*/

const MODULES = [
  {
    id: "m1",
    title: "Module 1: Number Systems and Codes",
    summary: "Build the foundation of digital logic by moving comfortably between number systems and coded representations.",
    goals: [
      "Convert numbers across binary, octal, decimal, and hexadecimal systems.",
      "Perform binary and hexadecimal arithmetic using complement methods.",
      "Recognize Gray, BCD, Excess-3, and Hamming codes in practical use."
    ],
    topics: [
      { code: "1.1", title: "Introduction & Conversions", detail: "Binary, octal, decimal, and hexadecimal systems with conversion shortcuts and place-value reasoning.", keywords: ["binary", "octal", "decimal", "hexadecimal", "conversion"] },
      { code: "1.2", title: "Binary Arithmetic", detail: "Addition, subtraction, and signed representation using 1’s and 2’s complement methods.", keywords: ["addition", "subtraction", "1's complement", "2's complement"] },
      { code: "1.3", title: "Hexadecimal Arithmetic", detail: "Addition, subtraction, and 15’s/16’s complement methods for compact arithmetic.", keywords: ["hexadecimal", "15's complement", "16's complement"] },
      { code: "1.4", title: "Binary Codes", detail: "Gray code, BCD, Excess-3, and Hamming code with practical encoding and error-control perspectives.", keywords: ["gray code", "bcd", "excess-3", "hamming"] }
    ],
    resources: [
      { label: "Wikipedia: Number system", url: "https://en.wikipedia.org/wiki/Number_system" },
      { label: "Wikipedia: Binary-coded decimal", url: "https://en.wikipedia.org/wiki/Binary-coded_decimal" },
      { label: "Wikipedia: Hamming code", url: "https://en.wikipedia.org/wiki/Hamming_code" }
    ]
  },
  {
    id: "m2",
    title: "Module 2: Boolean Algebra and Logic Gates",
    summary: "Learn how digital circuits think: gates, laws, canonical forms, and systematic minimization.",
    goals: [
      "Write and test truth tables for all basic logic gates.",
      "Reduce Boolean expressions using algebraic laws and K-map grouping.",
      "Realize functions using NAND/NOR as universal gates."
    ],
    topics: [
      { code: "2.1", title: "Basic Gates", detail: "NOT, AND, OR, NAND, NOR, EXOR, and EXNOR with truth tables and symbol recognition.", keywords: ["logic gates", "truth tables", "nand", "nor", "xor", "xnor"] },
      { code: "2.2", title: "MSI Logic Hardware", detail: "Awareness of MSI ICs used to implement gate-level logic in actual lab setups.", keywords: ["msi", "ic", "hardware"] },
      { code: "2.3", title: "Universal Gates", detail: "Use only NAND or only NOR to build any logic function.", keywords: ["universal gates", "nand", "nor"] },
      { code: "2.4", title: "Boolean Algebra", detail: "Laws, theorems, properties, and function reduction strategies.", keywords: ["boolean algebra", "laws", "theorems", "reduction"] },
      { code: "2.5", title: "Representations", detail: "Canonical forms, standard SOP, and POS structures from truth tables.", keywords: ["canonical", "sop", "pos"] },
      { code: "2.6", title: "Simplification", detail: "K-map method for 2, 3, and 4 variables, plus grouping patterns.", keywords: ["k-map", "karnaugh", "simplification"] }
    ],
    resources: [
      { label: "Wikipedia: Boolean algebra", url: "https://en.wikipedia.org/wiki/Boolean_algebra" },
      { label: "Wikipedia: Karnaugh map", url: "https://en.wikipedia.org/wiki/Karnaugh_map" },
      { label: "Wikipedia: Logic gate", url: "https://en.wikipedia.org/wiki/Logic_gate" }
    ]
  },
  {
    id: "m3",
    title: "Module 3: Logic Families and Programmable Logic Devices",
    summary: "Study arithmetic circuits, multiplexing systems, comparators, and MSI building blocks.",
    goals: [
      "Analyze adders and subtractors from half-circuit to ripple-carry level.",
      "Trace how MUX, DEMUX, DECODER, and ENCODER routes data.",
      "Recognize 7483, 74151, 74138, and 7485 in standard lab exercises."
    ],
    topics: [
      { code: "3.1", title: "Arithmetic Circuits", detail: "Half/full adders and half/full subtractors as the base of arithmetic logic.", keywords: ["half adder", "full adder", "subtractor"] },
      { code: "3.2", title: "Advanced Adders", detail: "Ripple carry adder and carry look-ahead adder with propagation intuition.", keywords: ["ripple carry", "carry look ahead", "adder"] },
      { code: "3.3", title: "Data Routing", detail: "MUX up to 8:1 and cascading, DEMUX/DECODER up to 3:8, and 8:3 encoders.", keywords: ["multiplexer", "demultiplexer", "decoder", "encoder"] },
      { code: "3.4", title: "Comparators", detail: "4-bit magnitude comparator behavior and cascading comparisons.", keywords: ["comparator", "7485", "magnitude"] },
      { code: "3.5", title: "MSI Devices", detail: "Important IC references: 7483, 74151, 74138, and 7485.", keywords: ["7483", "74151", "74138", "7485"] }
    ],
    resources: [
      { label: "Wikipedia: Multiplexer", url: "https://en.wikipedia.org/wiki/Multiplexer" },
      { label: "Wikipedia: Demultiplexer", url: "https://en.wikipedia.org/wiki/Demultiplexer" },
      { label: "Wikipedia: Binary adder", url: "https://en.wikipedia.org/wiki/Binary_adder" }
    ]
  },
  {
    id: "m4",
    title: "Module 4: Sequential Circuits",
    summary: "Move from combinational logic to stateful systems with latches, flip-flops, and timing behavior.",
    goals: [
      "Understand how latches and flip-flops store state.",
      "Compare SR, D, JK, and T devices through truth and excitation tables.",
      "Explain race-around and master-slave JK mitigation."
    ],
    topics: [
      { code: "4.1", title: "Fundamentals", detail: "Introduction to latches and flip-flops as memory elements.", keywords: ["latch", "flip-flop", "memory"] },
      { code: "4.2", title: "Flip-flop Types", detail: "SR, D, JK, and T flip-flops with truth and excitation tables.", keywords: ["sr", "d", "jk", "t"] },
      { code: "4.3", title: "Timing Issues", detail: "Race-around condition and the master-slave JK solution.", keywords: ["race around", "master slave", "timing"] },
      { code: "4.4", title: "Conversion Techniques", detail: "Flip-flop conversion methods and inter-relationship exercises.", keywords: ["conversion", "excitation", "sequential"] }
    ],
    resources: [
      { label: "Wikipedia: Flip-flop (electronics)", url: "https://en.wikipedia.org/wiki/Flip-flop_(electronics)" },
      { label: "Wikipedia: Latch (electronics)", url: "https://en.wikipedia.org/wiki/Latch_(electronics)" },
      { label: "Wikipedia: Sequential logic", url: "https://en.wikipedia.org/wiki/Sequential_logic" }
    ]
  }
];

const GATE_MAP = {
  NOT: { inputs: 1, fn: (a) => !a, label: "Inverter" },
  AND: { inputs: 2, fn: (a, b) => a && b, label: "AND" },
  OR: { inputs: 2, fn: (a, b) => a || b, label: "OR" },
  NAND: { inputs: 2, fn: (a, b) => !(a && b), label: "NAND" },
  NOR: { inputs: 2, fn: (a, b) => !(a || b), label: "NOR" },
  XOR: { inputs: 2, fn: (a, b) => Boolean((a ? 1 : 0) ^ (b ? 1 : 0)), label: "XOR" },
  XNOR: { inputs: 2, fn: (a, b) => !Boolean((a ? 1 : 0) ^ (b ? 1 : 0)), label: "XNOR" }
};

const FF_TABLE = {
  SR: "S R | Q(next)\n0 0 | Q\n0 1 | 0\n1 0 | 1\n1 1 | Invalid",
  D: "D | Q(next)\n0 | 0\n1 | 1",
  JK: "J K | Q(next)\n0 0 | Q\n0 1 | 0\n1 0 | 1\n1 1 | Toggle",
  T: "T | Q(next)\n0 | Q\n1 | Toggle"
};

function initThemeSwitcher() {
  const stored = localStorage.getItem("dvl-theme") || "light";
  applyTheme(stored);
  const toggle = document.querySelector("[data-theme-toggle]");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-bs-theme") || "light";
      applyTheme(current === "light" ? "dark" : "light");
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-bs-theme", theme);
  localStorage.setItem("dvl-theme", theme);
  document.querySelectorAll("[data-theme-label]").forEach((el) => {
    el.textContent = theme === "dark" ? "Dark" : "Light";
  });
  const icon = document.querySelector("[data-theme-icon]");
  if (icon) {
    icon.className = theme === "dark" ? "bi bi-moon-stars-fill" : "bi bi-sun-fill";
  }
}

function initTooltips() {
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => new bootstrap.Tooltip(el));
}

function animateCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.counter, 10);
      const suffix = el.dataset.suffix || "";
      const duration = 1200;
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const value = Math.floor(progress * target);
        el.textContent = value.toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      observer.unobserve(el);
    });
  }, { threshold: 0.25 });

  counters.forEach((el) => observer.observe(el));
}

function filterModules() {
  const input = document.getElementById("moduleSearch");
  const cards = Array.from(document.querySelectorAll("[data-module-card]"));
  if (!input || !cards.length) return;

  const renderCount = document.getElementById("moduleCount");
  const update = () => {
    const q = input.value.trim().toLowerCase();
    let visible = 0;
    cards.forEach((card) => {
      const hay = (card.dataset.search || "").toLowerCase();
      const show = !q || hay.includes(q);
      card.closest(".module-wrap").style.display = show ? "" : "none";
      if (show) visible += 1;
    });
    if (renderCount) renderCount.textContent = `${visible} module${visible === 1 ? "" : "s"} visible`;
  };

  input.addEventListener("input", update);
  update();
}

function renderModules() {
  const holder = document.getElementById("modulesGrid");
  if (!holder) return;

  holder.innerHTML = MODULES.map((module, idx) => {
    const topics = module.topics.map((topic) => `
      <div class="list-group-item border-0 px-0 py-3 bg-transparent">
        <div class="d-flex justify-content-between align-items-start gap-3">
          <div>
            <div class="small text-muted-custom fw-semibold">Topic ${topic.code}</div>
            <h3 class="h6 mb-2">${topic.title}</h3>
            <p class="mb-2 small-muted">${topic.detail}</p>
            <div class="topic-tags">
              ${topic.keywords.slice(0,4).map((k) => `<span class="badge rounded-pill text-bg-primary-subtle text-primary-emphasis">${k}</span>`).join(" · ")}
            </div>
          </div>
        </div>
      </div>
    `).join("");

    const goals = module.goals.map((g) => `<li>${g}</li>`).join("");
    const resources = module.resources.map((r) => `
      <li class="mb-2">
        <a class="link-primary fw-semibold" href="${r.url}" target="_blank" rel="noopener noreferrer">${r.label}</a>
      </li>
    `).join("");

    return `
      <div class="module-wrap col-12" data-module-card data-search="${module.title} ${module.summary} ${module.topics.map(t => t.title + ' ' + t.detail + ' ' + t.keywords.join(' ')).join(' ')}">
        <div class="card-soft p-4 hover-lift">
          <div class="d-flex flex-wrap justify-content-between align-items-start gap-3 mb-3">
            <div>
              <span class="badge badge-soft mb-2">Module ${idx + 1}</span>
              <h2 class="h3 section-title mb-2">${module.title}</h2>
              <p class="mb-0 text-muted-custom">${module.summary}</p>
            </div>
            <div class="text-end">
              <div class="small text-muted-custom">Topics</div>
              <div class="h4 mb-0 fw-bold">${module.topics.length}</div>
            </div>
          </div>
          <div class="row g-4">
            <div class="col-lg-7">
              <div class="accordion" id="accordion${module.id}">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading${module.id}">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${module.id}" aria-expanded="${idx === 0 ? "true" : "false"}" aria-controls="collapse${module.id}">
                      View topic breakdown
                    </button>
                  </h2>
                  <div id="collapse${module.id}" class="accordion-collapse collapse ${idx === 0 ? "show" : ""}" aria-labelledby="heading${module.id}" data-bs-parent="#accordion${module.id}">
                    <div class="accordion-body">
                      <div class="list-group list-group-flush">${topics}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="p-3 rounded-4 border h-100" style="background: var(--surface); border-color: var(--border) !important;">
                <h3 class="h6 fw-bold mb-3">Learning goals</h3>
                <ul class="small-muted mb-4">${goals}</ul>
                <h3 class="h6 fw-bold mb-3">Open resources</h3>
                <ul class="ps-3 mb-0">${resources}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  filterModules();
}

function binaryInputs(count) {
  const vals = {};
  ["A", "B", "C", "D"].slice(0, count).forEach((key) => {
    const el = document.querySelector(`[data-bit="${key}"]`);
    vals[key] = el ? el.checked : false;
  });
  return vals;
}

function setGateVisibility(type) {
  const gate = GATE_MAP[type];
  if (!gate) return;
  // Shared input bank stays visible so the gate lab and expression builder can reuse the same switches.
}

function computeGate(type, a, b) {
  const gate = GATE_MAP[type];
  if (!gate) return false;
  return gate.inputs === 1 ? gate.fn(a) : gate.fn(a, b);
}

function truthTableForGate(type) {
  const gate = GATE_MAP[type];
  if (!gate) return [];
  const rows = [];
  if (gate.inputs === 1) {
    [0,1].forEach((a) => rows.push({ A: a, Y: computeGate(type, !!a, false) ? 1 : 0 }));
  } else {
    [0,1].forEach((a) => [0,1].forEach((b) => rows.push({ A: a, B: b, Y: computeGate(type, !!a, !!b) ? 1 : 0 })));
  }
  return rows;
}

function renderTruthTable(container, rows) {
  if (!container) return;
  if (!rows.length) {
    container.innerHTML = "";
    return;
  }
  const headers = Object.keys(rows[0]);
  container.innerHTML = `
    <table class="truth-table">
      <thead><tr>${headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead>
      <tbody>
        ${rows.map((row) => `<tr>${headers.map((h) => `<td>${row[h]}</td>`).join("")}</tr>`).join("")}
      </tbody>
    </table>
  `;
}

function initGateLab() {
  const gateSelect = document.getElementById("gateSelect");
  const output = document.getElementById("gateOutput");
  const info = document.getElementById("gateInfo");
  const table = document.getElementById("gateTruthTable");
  if (!gateSelect || !output || !table) return;

  const sync = () => {
    const type = gateSelect.value;
    setGateVisibility(type);
    const a = document.querySelector("[data-bit='A']")?.checked || false;
    const b = document.querySelector("[data-bit='B']")?.checked || false;
    const res = computeGate(type, a, b);
    output.textContent = res ? "HIGH" : "LOW";
    output.classList.toggle("off", !res);
    if (info) {
      info.textContent = `${type} gate • ${GATE_MAP[type]?.label || ""} • live output updates instantly`;
    }
    renderTruthTable(table, truthTableForGate(type));
  };

  gateSelect.addEventListener("change", sync);
  document.querySelectorAll("[data-bit]").forEach((el) => el.addEventListener("change", sync));

  const resetBtn = document.querySelector("[data-reset-gates]");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      document.querySelectorAll("[data-bit]").forEach((el, i) => { el.checked = i === 0 ? true : false; });
      if (document.querySelector("[data-bit='B']")) document.querySelector("[data-bit='B']").checked = false;
      if (document.querySelector("[data-bit='A']")) document.querySelector("[data-bit='A']").checked = false;
      sync();
    });
  }
  sync();
}

function safeEvaluateExpression(expr, values) {
  const clean = expr.replace(/\s+/g, "");
  if (!/^[ABCD!&|^()0-1]+$/.test(clean.replace(/[ABCD]/g, "A"))) return null;
  const jsExpr = clean
    .replace(/A/g, values.A ? "1" : "0")
    .replace(/B/g, values.B ? "1" : "0")
    .replace(/C/g, values.C ? "1" : "0")
    .replace(/D/g, values.D ? "1" : "0");
  try {
    const result = Function(`"use strict"; return (${jsExpr});`)();
    return Boolean(result);
  } catch (e) {
    return null;
  }
}

function expressionVariables(expr) {
  const vars = ["A", "B", "C", "D"].filter((v) => expr.includes(v));
  return vars.length ? vars : ["A", "B"];
}

function renderExpressionTruthTable(expr, container) {
  const vars = expressionVariables(expr);
  const combos = [];
  const total = 2 ** vars.length;
  for (let i = 0; i < total; i++) {
    const values = {};
    vars.forEach((v, idx) => values[v] = Boolean((i >> (vars.length - idx - 1)) & 1));
    const out = safeEvaluateExpression(expr, values);
    if (out === null) {
      container.innerHTML = `<div class="alert alert-warning mb-0">Use only A, B, C, D and the symbols !  &  |  ^  ( )</div>`;
      return;
    }
    combos.push({ ...Object.fromEntries(vars.map((v) => [v, values[v] ? 1 : 0])), Y: out ? 1 : 0 });
  }
  renderTruthTable(container, combos);
}

function initExpressionBuilder() {
  const expr = document.getElementById("booleanExpression");
  const live = document.getElementById("expressionResult");
  const truth = document.getElementById("expressionTruthTable");
  if (!expr || !live || !truth) return;

  const sync = () => {
    const values = binaryInputs(4);
    const result = safeEvaluateExpression(expr.value || "A&B", values);
    live.textContent = result === null ? "Invalid" : result ? "TRUE" : "FALSE";
    live.classList.toggle("off", result === false);
    if (expr.value.trim()) renderExpressionTruthTable(expr.value.trim(), truth);
  };

  expr.addEventListener("input", sync);
  document.querySelectorAll("[data-bit]").forEach((el) => el.addEventListener("change", sync));
  sync();
}

function initArithmeticLab() {
  const mode = document.getElementById("arithMode");
  const out = document.getElementById("arithOutput");
  const table = document.getElementById("arithTruthTable");
  const sync = () => {
    if (!mode || !out || !table) return;
    const A = document.querySelector("[data-a]")?.checked ? 1 : 0;
    const B = document.querySelector("[data-b]")?.checked ? 1 : 0;
    const Cin = document.querySelector("[data-cin]")?.checked ? 1 : 0;
    const kind = mode.value;
    let result = {};
    if (kind === "half-adder") {
      result.sum = A ^ B;
      result.carry = A & B;
      renderTruthTable(table, [
        { A:0, B:0, Sum:0, Carry:0 },
        { A:0, B:1, Sum:1, Carry:0 },
        { A:1, B:0, Sum:1, Carry:0 },
        { A:1, B:1, Sum:0, Carry:1 },
      ]);
    } else if (kind === "full-adder") {
      const sum = A ^ B ^ Cin;
      const carry = (A & B) | (Cin & (A ^ B));
      result = { sum, carry };
      renderTruthTable(table, [
        { A:0, B:0, Cin:0, Sum:0, Carry:0 },
        { A:0, B:0, Cin:1, Sum:1, Carry:0 },
        { A:0, B:1, Cin:0, Sum:1, Carry:0 },
        { A:0, B:1, Cin:1, Sum:0, Carry:1 },
        { A:1, B:0, Cin:0, Sum:1, Carry:0 },
        { A:1, B:0, Cin:1, Sum:0, Carry:1 },
        { A:1, B:1, Cin:0, Sum:0, Carry:1 },
        { A:1, B:1, Cin:1, Sum:1, Carry:1 }
      ]);
    } else if (kind === "half-subtractor") {
      const diff = A ^ B;
      const borrow = (!A && B) ? 1 : 0;
      result = { diff, borrow };
      renderTruthTable(table, [
        { A:0, B:0, Diff:0, Borrow:0 },
        { A:0, B:1, Diff:1, Borrow:1 },
        { A:1, B:0, Diff:1, Borrow:0 },
        { A:1, B:1, Diff:0, Borrow:0 },
      ]);
    } else if (kind === "full-subtractor") {
      const diff = A ^ B ^ Cin;
      const borrow = ((!A && B) || ((!A || B) && Cin)) ? 1 : 0;
      result = { diff, borrow };
      renderTruthTable(table, [
        { A:0, B:0, Bin:0, Diff:0, Borrow:0 },
        { A:0, B:0, Bin:1, Diff:1, Borrow:1 },
        { A:0, B:1, Bin:0, Diff:1, Borrow:1 },
        { A:0, B:1, Bin:1, Diff:0, Borrow:1 },
        { A:1, B:0, Bin:0, Diff:1, Borrow:0 },
        { A:1, B:0, Bin:1, Diff:0, Borrow:0 },
        { A:1, B:1, Bin:0, Diff:0, Borrow:0 },
        { A:1, B:1, Bin:1, Diff:1, Borrow:1 }
      ]);
    }

    out.innerHTML = `<span class="me-3">Sum/Diff: <strong>${result.sum ?? result.diff}</strong></span><span>Carry/Borrow: <strong>${result.carry ?? result.borrow}</strong></span>`;
  };

  [mode, ...document.querySelectorAll("[data-a], [data-b], [data-cin]")].filter(Boolean).forEach((el) => el.addEventListener("change", sync));
  sync();
}

function initFlipFlopLab() {
  const typeSelect = document.getElementById("ffType");
  const panel = document.getElementById("ffPanel");
  const table = document.getElementById("ffTruthTable");
  const qOut = document.getElementById("ffQ");
  const qBar = document.getElementById("ffQBar");
  const note = document.getElementById("ffNote");
  if (!typeSelect || !panel || !table || !qOut || !qBar) return;

  let q = 0;
  let qn = 1;

  const renderControls = () => {
    const type = typeSelect.value;
    const inputs = {
      SR: ['S', 'R'],
      D: ['D'],
      JK: ['J', 'K'],
      T: ['T']
    }[type] || [];
    panel.innerHTML = inputs.map((key) => `
      <label class="logic-toggle">
        <div class="fw-semibold">${key}</div>
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" data-ff-input="${key}">
        </div>
      </label>
    `).join("");
    if (note) note.textContent = FF_TABLE[type];
    renderTruthTable(table, {
      SR: [
        { S:0, R:0, Qnext:"Q" },
        { S:0, R:1, Qnext:0 },
        { S:1, R:0, Qnext:1 },
        { S:1, R:1, Qnext:"Invalid" },
      ],
      D: [
        { D:0, Qnext:0 },
        { D:1, Qnext:1 },
      ],
      JK: [
        { J:0, K:0, Qnext:"Q" },
        { J:0, K:1, Qnext:0 },
        { J:1, K:0, Qnext:1 },
        { J:1, K:1, Qnext:"Toggle" },
      ],
      T: [
        { T:0, Qnext:"Q" },
        { T:1, Qnext:"Toggle" },
      ]
    }[type]);
  };

  const syncDisplay = () => {
    qOut.textContent = String(q);
    qBar.textContent = String(qn);
  };

  const step = () => {
    const type = typeSelect.value;
    const vals = Object.fromEntries(Array.from(document.querySelectorAll("[data-ff-input]")).map((el) => [el.dataset.ffInput, el.checked ? 1 : 0]));
    let next = q;
    if (type === "SR") {
      if (vals.S && vals.R) next = "X";
      else if (vals.S) next = 1;
      else if (vals.R) next = 0;
    } else if (type === "D") {
      next = vals.D ? 1 : 0;
    } else if (type === "JK") {
      if (!vals.J && !vals.K) next = q;
      else if (!vals.J && vals.K) next = 0;
      else if (vals.J && !vals.K) next = 1;
      else next = q ? 0 : 1;
    } else if (type === "T") {
      next = vals.T ? (q ? 0 : 1) : q;
    }
    if (next === "X") {
      qOut.textContent = "X";
      qBar.textContent = "X";
    } else {
      q = next;
      qn = q ? 0 : 1;
      syncDisplay();
    }
  };

  typeSelect.addEventListener("change", () => { q = 0; qn = 1; renderControls(); syncDisplay(); });
  document.addEventListener("click", (e) => {
    if (e.target && e.target.matches("[data-ff-clock]")) step();
    if (e.target && e.target.matches("[data-ff-reset]")) { q = 0; qn = 1; renderControls(); syncDisplay(); }
  });
  renderControls();
  syncDisplay();
}

function variablesForCount(count) {
  return ["A", "B", "C", "D"].slice(0, count);
}

function grayCode(n) {
  return n ^ (n >> 1);
}

function bits(n, count) {
  return n.toString(2).padStart(count, "0");
}

function canonicalSOP(vars, minterms) {
  if (!minterms.length) return "F = 0";
  return `F = ${minterms.map((m) => {
    const code = bits(m, vars.length);
    return vars.map((v, i) => code[i] === "1" ? v : `${v}'`).join("");
  }).join(" + ")}`;
}

function canonicalPOS(vars, maxterms) {
  if (!maxterms.length) return "F = 1";
  return `F = ${maxterms.map((m) => {
    const code = bits(m, vars.length);
    return "(" + vars.map((v, i) => code[i] === "0" ? v : `${v}'`).join(" + ") + ")";
  }).join(" · ")}`;
}

function buildKMap() {
  const varsSelect = document.getElementById("kmapVars");
  const map = document.getElementById("kmapGrid");
  const result = document.getElementById("kmapResult");
  const sop = document.getElementById("kmapSOP");
  const pos = document.getElementById("kmapPOS");
  if (!varsSelect || !map || !result || !sop || !pos) return;

  let selected = new Set();

  const sync = () => {
    const count = parseInt(varsSelect.value, 10);
    const vars = variablesForCount(count);
    const rowVars = vars.slice(0, Math.ceil(count / 2));
    const colVars = vars.slice(Math.ceil(count / 2));
    const rowCount = 2 ** rowVars.length;
    const colCount = 2 ** colVars.length;
    const table = document.createElement("table");
    table.className = "truth-table";
    table.innerHTML = `
      <thead>
        <tr>
          <th>${rowVars.join("") || "0"} \\ ${colVars.join("") || "0"}</th>
          ${Array.from({length: colCount}, (_, c) => `<th>${bits(grayCode(c), colVars.length) || "0"}</th>`).join("")}
        </tr>
      </thead>
      <tbody>
        ${Array.from({length: rowCount}, (_, r) => {
          const rowGray = grayCode(r);
          return `<tr>
            <th>${bits(rowGray, rowVars.length) || "0"}</th>
            ${Array.from({length: colCount}, (_, c) => {
              const colGray = grayCode(c);
              const index = (rowGray << colVars.length) | colGray;
              const active = selected.has(index);
              return `<td>
                <button class="btn btn-sm ${active ? "btn-primary" : "btn-outline-primary"} w-100" data-kcell="${index}" type="button">${active ? 1 : 0}</button>
              </td>`;
            }).join("")}
          </tr>`;
        }).join("")}
      </tbody>
    `;
    map.innerHTML = "";
    map.appendChild(table);

    const minterms = Array.from(selected).sort((a,b) => a-b);
    const all = Array.from({length: 2 ** count}, (_, i) => i);
    const maxterms = all.filter((i) => !selected.has(i));
    result.innerHTML = `
      <div class="alert alert-info mb-0">
        Toggle cells to build a function from the selected minterms. The board updates canonical expressions instantly.
      </div>
    `;
    sop.textContent = canonicalSOP(vars, minterms);
    pos.textContent = canonicalPOS(vars, maxterms);
  };

  map.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-kcell]");
    if (!btn) return;
    const idx = parseInt(btn.dataset.kcell, 10);
    if (selected.has(idx)) selected.delete(idx); else selected.add(idx);
    sync();
  });

  document.querySelector("[data-kmap-clear]")?.addEventListener("click", () => { selected = new Set(); sync(); });
  varsSelect.addEventListener("change", () => { selected = new Set(); sync(); });
  sync();
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const alertWrap = document.getElementById("contactAlert");
    if (alertWrap) {
      alertWrap.innerHTML = `<div class="alert alert-success mb-0">Your message has been prepared locally. Connect this form to your backend or email service when deploying.</div>`;
    }
    form.reset();
  });
}

function initGoogleTranslate() {
  const targets = ["google_translate_element", "google_translate_element_mobile"].filter((id) => document.getElementById(id));
  if (!targets.length) return;
  window.googleTranslateElementInit = function () {
    if (!window.google || !window.google.translate) return;
    targets.forEach((id) => {
      const host = document.getElementById(id);
      if (host && !host.dataset.translated) {
        new google.translate.TranslateElement({
          pageLanguage: "en",
          includedLanguages: "en,hi,mr,bn,ta,te,gu,kn,ml,pa,ur",
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, id);
        host.dataset.translated = "true";
      }
    });
  };
  const script = document.createElement("script");
  script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  script.async = true;
  document.head.appendChild(script);
}

function initMisc() {
  document.querySelectorAll("[data-bs-toggle='popover']").forEach((el) => new bootstrap.Popover(el));
}

document.addEventListener("DOMContentLoaded", () => {
  initThemeSwitcher();
  initTooltips();
  initMisc();
  animateCounters();
  renderModules();
  filterModules();
  initGateLab();
  initExpressionBuilder();
  initArithmeticLab();
  initFlipFlopLab();
  buildKMap();
  initContactForm();
  initGoogleTranslate();
});
