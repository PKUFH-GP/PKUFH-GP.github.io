const FEATURE_ORDER = ["sex", "age", "sq2", "sq3", "sq5", "ps5", "pef"];
const THRESHOLD = 0.2159;

const I18N = {
  en: {
    pageTitle: "COPD Risk Prediction",
    pageDescription:
      "Static COPD risk prediction site based on an XGBoost model, with interactive risk inference and force-plot style explanation.",
    tagText: "Clinical AI Tool",
    heroTitle: "COPD Risk Prediction",
    heroDesc:
      "Enter key clinical and questionnaire features to estimate COPD risk and view a force-plot style explanation.",
    modelLabel: "Model",
    thresholdLabel: "Threshold",
    formTitle: "Patient Inputs",
    labelSex: "Sex",
    labelAge: "Age (years)",
    labelSq2: "Smoking exposure (pack-years)",
    labelSq3: "BMI category score",
    labelSq5: "Dyspnea status score",
    labelPs5: "Breathing impact on activity",
    labelPef: "PEF peak expiratory flow (L/min)",
    selectPlaceholder: "Please select",
    agePlaceholder: "e.g. 68",
    pefPlaceholder: "e.g. 320",
    predictBtn: "Predict",
    resetBtn: "Reset",
    resultTitle: "Prediction Result",
    meterLabel: "COPD Risk",
    riskProbaLabel: "Predicted probability",
    riskClassLabel: "Classification",
    riskThresholdLabel: "Decision threshold",
    forceTitle: "Individual SHAP Force Plot (Approx.)",
    forceNote:
      "The plot updates per prediction. Red pushes risk higher; blue pushes risk lower.",
    forceBaseLabel: "Base value (log-odds)",
    forceOutputLabel: "Model output (log-odds)",
    footerNote:
      "For research and education only. Not a substitute for clinical diagnosis.",
    statusIdle: "Fill in the form and click Predict.",
    statusReady: "Model is ready. Enter patient inputs and run prediction.",
    statusLoadFail: "Model loading failed. Please check assets/xgboost_model.json.",
    classHigh: "Above threshold, tends to COPD",
    classLow: "Below threshold, tends to non-COPD",
    riskAbove:
      "Result is {delta} above threshold. Further clinical evaluation is recommended.",
    riskBelow: "Result is {delta} below threshold. Current risk appears relatively lower.",
    errorMissing: "Please complete this field:",
    errorInvalid: "This field requires a valid number:",
    forceBaseFx: "E[f(x)]",
    forceOutputFx: "f(x)",
    forceLegendPositive: "Pushes COPD risk higher",
    forceLegendNegative: "Pushes COPD risk lower",
    forceEmpty: "A force-plot style explanation will be generated after prediction.",
    featureLabels: {
      sex: "Sex",
      age: "Age",
      sq2: "Smoking exposure",
      sq3: "BMI category score",
      sq5: "Dyspnea status score",
      ps5: "Breathing impact score",
      pef: "PEF",
    },
    selectOptions: {
      sex: [
        { value: "1", label: "Male (1)" },
        { value: "0", label: "Female (0)" },
      ],
      sq2: [
        { value: "0", label: "0-14 pack-years (0)" },
        { value: "1", label: "15-30 pack-years (1)" },
        { value: "2", label: ">=30 pack-years (2)" },
      ],
      sq3: [
        { value: "7", label: "BMI <18.5 kg/m² (7)" },
        { value: "4", label: "BMI 18.5-23.9 kg/m² (4)" },
        { value: "1", label: "BMI 24.0-27.9 kg/m² (1)" },
        { value: "0", label: "BMI >=28.0 kg/m² (0)" },
      ],
      sq5: [
        { value: "0", label: "No dyspnea (0)" },
        { value: "2", label: "Dyspnea when hurrying/climbing slight hill (2)" },
        { value: "3", label: "Dyspnea while normal walking on level ground (3)" },
      ],
      ps5: [
        { value: "0", label: "Strongly disagree / Disagree / Unsure (0)" },
        { value: "1", label: "Agree (1)" },
        { value: "2", label: "Strongly agree (2)" },
      ],
    },
  },
  zh: {
    pageTitle: "COPD 风险预测",
    pageDescription:
      "基于 XGBoost 的 COPD 静态预测网站，支持交互式风险推断与力图风格解释。",
    tagText: "临床 AI 工具",
    heroTitle: "COPD 风险预测",
    heroDesc: "输入关键临床与问卷特征，估计 COPD 风险并查看力图风格解释图。",
    modelLabel: "模型",
    thresholdLabel: "阈值",
    formTitle: "患者输入",
    labelSex: "性别",
    labelAge: "年龄（岁）",
    labelSq2: "吸烟量（包/年）",
    labelSq3: "BMI 分档评分",
    labelSq5: "气促情况评分",
    labelPs5: "呼吸影响活动评分",
    labelPef: "PEF 呼气峰流速（L/min）",
    selectPlaceholder: "请选择",
    agePlaceholder: "例如 68",
    pefPlaceholder: "例如 320",
    predictBtn: "开始预测",
    resetBtn: "重置",
    resultTitle: "预测结果",
    meterLabel: "COPD 风险",
    riskProbaLabel: "预测概率",
    riskClassLabel: "分类判断",
    riskThresholdLabel: "决策阈值",
    forceTitle: "个体 SHAP 力图（近似）",
    forceNote: "该图会随每次预测动态更新。红色推高风险，蓝色降低风险。",
    forceBaseLabel: "基线值（log-odds）",
    forceOutputLabel: "模型输出（log-odds）",
    footerNote: "仅用于科研与教学演示，不替代临床诊断。",
    statusIdle: "请填写表单后点击“开始预测”。",
    statusReady: "模型已就绪，请输入患者信息并进行预测。",
    statusLoadFail: "模型加载失败，请检查 assets/xgboost_model.json 文件。",
    classHigh: "高于阈值，倾向 COPD",
    classLow: "低于阈值，倾向非 COPD",
    riskAbove: "结果高于阈值 {delta}，建议结合临床进一步评估。",
    riskBelow: "结果低于阈值 {delta}，当前风险相对较低。",
    errorMissing: "请完整填写字段：",
    errorInvalid: "字段需要有效数字：",
    forceBaseFx: "E[f(x)]",
    forceOutputFx: "f(x)",
    forceLegendPositive: "推高 COPD 风险",
    forceLegendNegative: "降低 COPD 风险",
    forceEmpty: "提交预测后将在此生成力图风格解释图。",
    featureLabels: {
      sex: "性别",
      age: "年龄",
      sq2: "吸烟量",
      sq3: "BMI 分档评分",
      sq5: "气促情况评分",
      ps5: "呼吸影响活动评分",
      pef: "PEF",
    },
    selectOptions: {
      sex: [
        { value: "1", label: "男（1）" },
        { value: "0", label: "女（0）" },
      ],
      sq2: [
        { value: "0", label: "0~14 包•年（0）" },
        { value: "1", label: "15~30 包•年（1）" },
        { value: "2", label: ">=30 包•年（2）" },
      ],
      sq3: [
        { value: "7", label: "BMI <18.5 kg/m²（7）" },
        { value: "4", label: "BMI 18.5~23.9 kg/m²（4）" },
        { value: "1", label: "BMI 24.0~27.9 kg/m²（1）" },
        { value: "0", label: "BMI >=28.0 kg/m²（0）" },
      ],
      sq5: [
        { value: "0", label: "没有气促（0）" },
        { value: "2", label: "平地急行或爬小坡时气促（2）" },
        { value: "3", label: "平地正常行走时气促（3）" },
      ],
      ps5: [
        { value: "0", label: "强烈反对/反对/不确定（0）" },
        { value: "1", label: "同意（1）" },
        { value: "2", label: "非常同意（2）" },
      ],
    },
  },
};

const state = {
  predictor: null,
  language: "en",
  lastResult: null,
};

const els = {
  form: document.querySelector("#predict-form"),
  resetBtn: document.querySelector("#reset-btn"),
  predictBtn: document.querySelector("#predict-btn"),
  langToggle: document.querySelector("#lang-toggle"),
  riskMeter: document.querySelector("#risk-meter"),
  riskPercent: document.querySelector("#risk-percent"),
  riskProba: document.querySelector("#risk-proba"),
  riskClass: document.querySelector("#risk-class"),
  riskText: document.querySelector("#risk-text"),
  forceBase: document.querySelector("#force-base"),
  forceOutput: document.querySelector("#force-output"),
  forceSvg: document.querySelector("#force-svg"),
  tagText: document.querySelector("#tag-text"),
  heroTitle: document.querySelector("#hero-title"),
  heroDesc: document.querySelector("#hero-desc"),
  formTitle: document.querySelector("#form-title"),
  labelSex: document.querySelector("#label-sex"),
  labelAge: document.querySelector("#label-age"),
  labelSq2: document.querySelector("#label-sq2"),
  labelSq3: document.querySelector("#label-sq3"),
  labelSq5: document.querySelector("#label-sq5"),
  labelPs5: document.querySelector("#label-ps5"),
  labelPef: document.querySelector("#label-pef"),
  resultTitle: document.querySelector("#result-title"),
  meterLabel: document.querySelector("#meter-label"),
  riskProbaLabel: document.querySelector("#risk-proba-label"),
  riskClassLabel: document.querySelector("#risk-class-label"),
  forceTitle: document.querySelector("#force-title"),
  forceNote: document.querySelector("#force-note"),
  forceBaseLabel: document.querySelector("#force-base-label"),
  forceOutputLabel: document.querySelector("#force-output-label"),
  footerNote: document.querySelector("#footer-note"),
};

boot();

async function boot() {
  els.langToggle.checked = false;

  applyLanguage("en");

  els.langToggle.addEventListener("change", () => {
    applyLanguage(els.langToggle.checked ? "zh" : "en");
  });
  els.form.addEventListener("submit", onSubmit);
  els.resetBtn.addEventListener("click", onReset);

  try {
    state.predictor = await loadPredictor("./assets/xgboost_model.json");
    if (!state.lastResult) {
      els.riskText.textContent = t().statusReady;
    }
  } catch (error) {
    console.error(error);
    els.riskText.textContent = t().statusLoadFail;
    els.predictBtn.disabled = true;
  }
}

function t() {
  return I18N[state.language];
}

function applyLanguage(lang) {
  state.language = lang;
  const tx = t();

  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = tx.pageTitle;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", tx.pageDescription);

  els.tagText.textContent = tx.tagText;
  els.heroTitle.textContent = tx.heroTitle;
  els.heroDesc.textContent = tx.heroDesc;
  els.formTitle.textContent = tx.formTitle;
  els.labelSex.textContent = tx.labelSex;
  els.labelAge.textContent = tx.labelAge;
  els.labelSq2.textContent = tx.labelSq2;
  els.labelSq3.textContent = tx.labelSq3;
  els.labelSq5.textContent = tx.labelSq5;
  els.labelPs5.textContent = tx.labelPs5;
  els.labelPef.textContent = tx.labelPef;
  els.predictBtn.textContent = tx.predictBtn;
  els.resetBtn.textContent = tx.resetBtn;
  els.resultTitle.textContent = tx.resultTitle;
  els.meterLabel.textContent = tx.meterLabel;
  els.riskProbaLabel.textContent = tx.riskProbaLabel;
  els.riskClassLabel.textContent = tx.riskClassLabel;
  els.forceTitle.textContent = tx.forceTitle;
  els.forceNote.textContent = tx.forceNote;
  els.forceBaseLabel.textContent = tx.forceBaseLabel;
  els.forceOutputLabel.textContent = tx.forceOutputLabel;
  els.footerNote.textContent = tx.footerNote;

  const ageInput = els.form.elements.age;
  const pefInput = els.form.elements.pef;
  if (ageInput) ageInput.placeholder = tx.agePlaceholder;
  if (pefInput) pefInput.placeholder = tx.pefPlaceholder;

  renderSelectOptions(tx);

  if (state.lastResult) {
    renderResult(state.lastResult);
  } else {
    renderIdle();
    if (state.predictor) {
      els.riskText.textContent = tx.statusReady;
    }
    if (els.predictBtn.disabled) {
      els.riskText.textContent = tx.statusLoadFail;
    }
  }
}

function renderSelectOptions(tx) {
  const defs = tx.selectOptions;
  const names = ["sex", "sq2", "sq3", "sq5", "ps5"];

  for (const name of names) {
    const select = els.form.elements[name];
    if (!select) continue;
    const prev = select.value;

    select.innerHTML = "";
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = tx.selectPlaceholder;
    select.appendChild(placeholder);

    for (const item of defs[name]) {
      const opt = document.createElement("option");
      opt.value = item.value;
      opt.textContent = item.label;
      select.appendChild(opt);
    }

    const hasPrev = Array.from(select.options).some((opt) => opt.value === prev);
    select.value = hasPrev ? prev : "";
  }
}

async function loadPredictor(modelPath) {
  const response = await fetch(modelPath, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Failed to load model: ${response.status}`);
  }

  const model = await response.json();
  const learner = model?.learner;
  const featureNames = learner?.feature_names;
  const treeModel = learner?.gradient_booster?.model;
  const trees = treeModel?.trees;

  if (!Array.isArray(featureNames) || !Array.isArray(trees)) {
    throw new Error("Invalid model structure.");
  }

  const baseScore = parseBaseScore(learner?.learner_model_param?.base_score);
  const baseMargin = logit(baseScore);

  return { featureNames, baseMargin, trees };
}

function parseBaseScore(rawValue) {
  if (typeof rawValue === "number") return rawValue;
  if (typeof rawValue === "string") {
    const cleaned = rawValue.replace(/[\[\]\s]/g, "");
    const first = cleaned.split(",")[0];
    const val = Number(first);
    if (Number.isFinite(val) && val > 0 && val < 1) return val;
  }
  return 0.5;
}

function onSubmit(event) {
  event.preventDefault();
  if (!state.predictor) return;

  const payload = readFormValues();
  if (!payload.valid) {
    els.riskText.textContent = payload.message;
    return;
  }

  const result = predict(payload.features, state.predictor);
  state.lastResult = result;
  renderResult(result);
}

function onReset() {
  els.form.reset();
  state.lastResult = null;
  renderIdle();
  if (state.predictor) {
    els.riskText.textContent = t().statusReady;
  }
}

function readFormValues() {
  const tx = t();
  const formData = new FormData(els.form);
  const features = {};

  for (const feature of FEATURE_ORDER) {
    const value = formData.get(feature);
    const label = tx.featureLabels[feature] ?? feature;
    if (value === null || value === "") {
      return { valid: false, message: `${tx.errorMissing} ${label}` };
    }

    const num = Number(value);
    if (!Number.isFinite(num)) {
      return { valid: false, message: `${tx.errorInvalid} ${label}` };
    }
    features[feature] = num;
  }

  return { valid: true, features };
}

function predict(features, predictor) {
  const { featureNames, trees, baseMargin } = predictor;
  const featureValues = featureNames.map((name) => Number(features[name]));

  let treeScoreSum = 0;
  const contributions = new Array(featureNames.length).fill(0);

  for (const tree of trees) {
    const leftChildren = tree.left_children;
    const rightChildren = tree.right_children;
    const splitIndices = tree.split_indices;
    const splitConditions = tree.split_conditions;
    const defaultLeft = tree.default_left;

    let node = 0;
    const visitedFeatures = [];

    while (leftChildren[node] !== -1) {
      const featureIdx = splitIndices[node];
      const threshold = splitConditions[node];
      const value = featureValues[featureIdx];

      visitedFeatures.push(featureIdx);

      const goLeft = Number.isNaN(value)
        ? defaultLeft[node] === 1
        : value < threshold;

      node = goLeft ? leftChildren[node] : rightChildren[node];
    }

    const leafValue = splitConditions[node];
    treeScoreSum += leafValue;

    if (visitedFeatures.length > 0) {
      const uniqueFeatures = [...new Set(visitedFeatures)];
      const share = leafValue / uniqueFeatures.length;
      for (const idx of uniqueFeatures) {
        contributions[idx] += share;
      }
    }
  }

  const outputMargin = baseMargin + treeScoreSum;
  const probability = sigmoid(outputMargin);

  return {
    probability,
    threshold: THRESHOLD,
    isCopd: probability >= THRESHOLD,
    baseMargin,
    outputMargin,
    contributionRows: featureNames.map((name, idx) => ({
      feature: name,
      value: features[name],
      contrib: contributions[idx],
    })),
  };
}

function renderResult(result) {
  const tx = t();
  const { probability, threshold, isCopd } = result;
  const percent = probability * 100;
  const meterColor = isCopd ? "var(--danger)" : "var(--safe)";

  els.riskMeter.style.background = `conic-gradient(${meterColor} ${probability}turn, rgba(20, 33, 39, 0.12) 0turn)`;
  els.riskPercent.textContent = `${percent.toFixed(1)}%`;
  els.riskProba.textContent = probability.toFixed(4);
  els.riskClass.textContent = isCopd ? tx.classHigh : tx.classLow;
  els.riskClass.style.color = isCopd ? "var(--danger)" : "var(--safe)";

  const delta = Math.abs(probability - threshold).toFixed(4);
  const textTpl = isCopd ? tx.riskAbove : tx.riskBelow;
  els.riskText.textContent = textTpl.replace("{delta}", delta);

  renderForcePlot(result);
}

function renderForcePlot(result) {
  const tx = t();
  const rows = [...result.contributionRows].sort((a, b) => Math.abs(b.contrib) - Math.abs(a.contrib));

  let current = result.baseMargin;
  const steps = rows.map((row) => {
    const from = current;
    const to = current + row.contrib;
    current = to;
    return { ...row, from, to };
  });

  const points = [result.baseMargin, result.outputMargin, ...steps.map((s) => s.from), ...steps.map((s) => s.to)];
  const minPoint = Math.min(...points);
  const maxPoint = Math.max(...points);
  const span = Math.max(maxPoint - minPoint, 0.1);
  const pad = span * 0.18;
  const xMin = minPoint - pad;
  const xMax = maxPoint + pad;

  const labelColX = 24;
  const left = 360;
  const right = 1140;
  const axisY = 376;
  const toX = (value) => left + ((value - xMin) / (xMax - xMin)) * (right - left);

  const baseX = toX(result.baseMargin);
  const outX = toX(result.outputMargin);

  const tickParts = [];
  for (let i = 0; i <= 4; i += 1) {
    const tValue = i / 4;
    const tickVal = xMin + (xMax - xMin) * tValue;
    const tickX = toX(tickVal);
    tickParts.push(`<line x1="${tickX.toFixed(2)}" y1="${axisY}" x2="${tickX.toFixed(2)}" y2="${axisY + 8}" stroke="#9fb0b5" stroke-width="1" />`);
    tickParts.push(`<text x="${tickX.toFixed(2)}" y="${axisY + 24}" font-size="12" fill="#62757b" text-anchor="middle">${tickVal.toFixed(2)}</text>`);
  }

  const stepParts = [];
  const baseY = 72;
  const rowGap = 42;

  steps.forEach((step, idx) => {
    const y = baseY + idx * rowGap;
    const x1 = toX(step.from);
    const x2 = toX(step.to);
    const isPositive = step.contrib >= 0;
    const color = isPositive ? "#d44f3a" : "#2d79ba";
    const arrow = isPositive
      ? `${x2.toFixed(2)},${y} ${(x2 - 10).toFixed(2)},${(y - 7).toFixed(2)} ${(x2 - 10).toFixed(2)},${(y + 7).toFixed(2)}`
      : `${x2.toFixed(2)},${y} ${(x2 + 10).toFixed(2)},${(y - 7).toFixed(2)} ${(x2 + 10).toFixed(2)},${(y + 7).toFixed(2)}`;

    const featureLabel = tx.featureLabels[step.feature] ?? step.feature;
    const rowLabel = `${featureLabel}: ${step.value}`;
    const contribLabel = `${step.contrib >= 0 ? "+" : ""}${step.contrib.toFixed(3)}`;
    const width = Math.abs(x2 - x1);
    const anchor = width < 140 ? (isPositive ? "start" : "end") : "middle";
    const contribX = width < 140 ? (isPositive ? x2 + 12 : x2 - 12) : (x1 + x2) / 2;

    stepParts.push(`<text x="${labelColX}" y="${(y + 4).toFixed(2)}" font-size="13" fill="#33454a">${escapeXml(rowLabel)}</text>`);
    stepParts.push(`<line x1="${x1.toFixed(2)}" y1="${y}" x2="${x2.toFixed(2)}" y2="${y}" stroke="${color}" stroke-width="14" stroke-linecap="round" />`);
    stepParts.push(`<polygon points="${arrow}" fill="${color}" />`);
    stepParts.push(`<text x="${contribX.toFixed(2)}" y="${(y - 12).toFixed(2)}" font-size="12" fill="#33454a" text-anchor="${anchor}">${escapeXml(contribLabel)}</text>`);
  });

  const baseProb = sigmoid(result.baseMargin);
  const outProb = sigmoid(result.outputMargin);
  const tooClose = Math.abs(baseX - outX) < 120;
  const baseTextX = tooClose ? Math.max(left + 16, baseX - 70) : baseX;
  const outTextX = tooClose ? Math.min(right - 16, outX + 70) : outX;
  const baseAnchor = tooClose ? "end" : "middle";
  const outAnchor = tooClose ? "start" : "middle";

  els.forceBase.textContent = result.baseMargin.toFixed(4);
  els.forceOutput.textContent = result.outputMargin.toFixed(4);

  els.forceSvg.innerHTML = `
    <line x1="${left}" y1="${axisY}" x2="${right}" y2="${axisY}" stroke="#9fb0b5" stroke-width="1.2" />
    ${tickParts.join("")}

    <line x1="${baseX.toFixed(2)}" y1="30" x2="${baseX.toFixed(2)}" y2="${axisY}" stroke="#7e8f95" stroke-dasharray="4 4" stroke-width="1.2" />
    <line x1="${outX.toFixed(2)}" y1="30" x2="${outX.toFixed(2)}" y2="${axisY}" stroke="#1f2e33" stroke-dasharray="4 4" stroke-width="1.2" />

    <text x="${baseTextX.toFixed(2)}" y="22" font-size="13" fill="#4b5c62" text-anchor="${baseAnchor}">${tx.forceBaseFx} ${baseProb.toFixed(3)}</text>
    <text x="${outTextX.toFixed(2)}" y="22" font-size="13" fill="#1f2e33" font-weight="700" text-anchor="${outAnchor}">${tx.forceOutputFx} ${outProb.toFixed(3)}</text>

    ${stepParts.join("")}

    <rect x="${left}" y="392" width="14" height="8" rx="4" fill="#d44f3a" />
    <text x="${left + 20}" y="400" font-size="12" fill="#5d6f75">${tx.forceLegendPositive}</text>
    <rect x="${left + 250}" y="392" width="14" height="8" rx="4" fill="#2d79ba" />
    <text x="${left + 270}" y="400" font-size="12" fill="#5d6f75">${tx.forceLegendNegative}</text>
  `;
}

function renderEmptyForce() {
  const tx = t();
  els.forceBase.textContent = "--";
  els.forceOutput.textContent = "--";
  els.forceSvg.innerHTML = `
    <rect x="24" y="26" width="1152" height="366" rx="10" fill="rgba(20,33,39,0.02)" stroke="rgba(20,33,39,0.12)" />
    <text x="600" y="205" text-anchor="middle" fill="#6a7b81" font-size="17">${escapeXml(tx.forceEmpty)}</text>
  `;
}

function renderIdle() {
  els.riskMeter.style.background =
    "conic-gradient(var(--brand) 0turn, rgba(20, 33, 39, 0.12) 0turn)";
  els.riskPercent.textContent = "--";
  els.riskProba.textContent = "--";
  els.riskClass.textContent = "--";
  els.riskClass.style.color = "inherit";
  els.riskText.textContent = t().statusIdle;
  renderEmptyForce();
}

function sigmoid(x) {
  if (x >= 0) {
    const z = Math.exp(-x);
    return 1 / (1 + z);
  }
  const z = Math.exp(x);
  return z / (1 + z);
}

function logit(p) {
  const clipped = Math.min(1 - 1e-12, Math.max(1e-12, p));
  return Math.log(clipped / (1 - clipped));
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
