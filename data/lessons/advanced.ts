import { Lesson } from "@/types";

// ============================================================
// ADVANCED LESSONS
// ============================================================

export const advancedLessons: Lesson[] = [
  // ----------------------------------------------------------
  // 1. CSS GRID
  // ----------------------------------------------------------
  {
    id: "grid",
    title: "CSS Grid",
    level: "advanced",
    icon: "🔲",
    explanation:
      "CSS Grid is a two-dimensional layout system — it handles both rows AND columns simultaneously.\n\n" +
      "Apply display: grid to a container. Then define structure:\n" +
      "• grid-template-columns — define column sizes (e.g. 1fr 2fr 1fr, repeat(3, 1fr))\n" +
      "• grid-template-rows — define row sizes\n" +
      "• gap / column-gap / row-gap — space between cells\n" +
      "• grid-template-areas — name areas for readable layout\n\n" +
      "Items can span multiple cells:\n" +
      "• grid-column: 1 / 3 — spans from line 1 to line 3\n" +
      "• grid-row: 2 / 4 — spans rows 2 to 4\n" +
      "• grid-area — assign to a named area\n\n" +
      "fr unit: fraction of available space — 1fr = equal share.",
    keyPoints: [
      "Grid is 2D, Flexbox is 1D — use accordingly",
      "fr units create flexible equal columns",
      "repeat(3, 1fr) = three equal columns",
      "grid-area with grid-template-areas creates named layouts",
      "minmax(200px, 1fr) prevents columns getting too narrow",
    ],
    previewHTML: `
<div class="preview-root">
  <h3>Basic Grid</h3>
  <div class="grid-container">
    <div class="grid-item g1">Header</div>
    <div class="grid-item g2">Sidebar</div>
    <div class="grid-item g3">Main Content</div>
    <div class="grid-item g4">Footer</div>
  </div>
</div>`,
    defaultCSS: `.grid-container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
  gap: 12px;
  min-height: 200px;
}

.grid-item {
  background: #ede9fe;
  border: 2px solid #6366f1;
  padding: 16px;
  border-radius: 6px;
  text-align: center;
  font-weight: bold;
  color: #4338ca;
  display: flex;
  align-items: center;
  justify-content: center;
}

.g1 { grid-area: header;  background: #4f46e5; color: white; }
.g2 { grid-area: sidebar; background: #818cf8; color: white; }
.g3 { grid-area: main;    background: #c7d2fe; color: #312e81; }
.g4 { grid-area: footer;  background: #4f46e5; color: white; }`,
    challenges: [
      {
        id: "grid-challenge-1",
        title: "Photo gallery",
        description:
          "Create a responsive 3-column photo gallery using CSS Grid. Each .photo item should have equal width using fr units and a fixed height of 120px.",
        hint: "grid-template-columns: repeat(3, 1fr) and a fixed height on items",
        htmlTemplate: `
<div class="preview-root">
  <div class="gallery">
    <div class="photo" style="background:#6366f1">1</div>
    <div class="photo" style="background:#8b5cf6">2</div>
    <div class="photo" style="background:#a78bfa">3</div>
    <div class="photo" style="background:#7c3aed">4</div>
    <div class="photo" style="background:#6d28d9">5</div>
    <div class="photo" style="background:#5b21b6">6</div>
  </div>
</div>`,
        starterCSS: `.gallery {
  /* display grid here */
  gap: 12px;
  padding: 8px;
}

.photo {
  height: 120px;
  border-radius: 8px;
  color: white;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}`,
        solutionCSS: `.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 8px;
}
.photo {
  height: 120px;
  border-radius: 8px;
  color: white;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}`,
      },
    ],
  },

  // ----------------------------------------------------------
  // 2. ANIMATIONS & TRANSITIONS
  // ----------------------------------------------------------
  {
    id: "animations",
    title: "Animations & Transitions",
    level: "advanced",
    icon: "✨",
    explanation:
      "CSS animations bring elements to life without JavaScript.\n\n" +
      "Transitions — smooth change between two states:\n" +
      "transition: property duration timing-function delay\n" +
      "Example: transition: all 0.3s ease;\n" +
      "Trigger on :hover, :focus, class changes.\n\n" +
      "Animations — multi-step animations with @keyframes:\n" +
      "@keyframes bounce {\n" +
      "  0%   { transform: translateY(0); }\n" +
      "  50%  { transform: translateY(-20px); }\n" +
      "  100% { transform: translateY(0); }\n" +
      "}\n\n" +
      "Apply with:\n" +
      "animation: bounce 1s ease-in-out infinite;\n\n" +
      "Key animation properties:\n" +
      "• animation-name, animation-duration, animation-timing-function\n" +
      "• animation-delay, animation-iteration-count, animation-direction\n" +
      "• animation-fill-mode (forwards keeps end state)\n\n" +
      "transform: translate, scale, rotate, skew — apply without reflow!",
    keyPoints: [
      "Transitions need a trigger (hover, focus, class change)",
      "Use transform instead of top/left for smooth animations",
      "@keyframes defines multi-step animation",
      "animation-fill-mode: forwards preserves end state",
      "Use will-change: transform for performance hints",
    ],
    previewHTML: `
<div class="preview-root">
  <h3>Hover me!</h3>
  <div class="transition-box">Hover to scale</div>

  <h3 style="margin-top:16px">Animated elements</h3>
  <div class="bounce-ball"></div>
  <div class="spin-box">Spinning</div>
  <div class="fade-in-box">Fade In</div>
</div>`,
    defaultCSS: `.transition-box {
  background: #6366f1;
  color: white;
  padding: 16px 24px;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  width: fit-content;
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
}

.transition-box:hover {
  transform: scale(1.1);
  background-color: #4f46e5;
  box-shadow: 0 10px 25px rgba(99, 102, 241, 0.4);
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-30px); }
}

.bounce-ball {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #10b981;
  animation: bounce 1s ease-in-out infinite;
  margin: 10px 0;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.spin-box {
  display: inline-block;
  background: #f59e0b;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  animation: spin 2s linear infinite;
  margin: 8px 0;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

.fade-in-box {
  background: #ef4444;
  color: white;
  padding: 12px 20px;
  border-radius: 6px;
  animation: fadeIn 1.5s ease forwards;
  margin-top: 8px;
  width: fit-content;
}`,
    challenges: [
      {
        id: "animations-challenge-1",
        title: "Pulsing button",
        description:
          "Create a button that pulses (scale between 1 and 1.05) infinitely using @keyframes. Also add a smooth color transition on hover.",
        hint: "@keyframes pulse { 0%,100% { transform: scale(1) } 50% { transform: scale(1.05) } }",
        htmlTemplate: `
<div class="preview-root" style="display:flex;align-items:center;justify-content:center;height:200px;">
  <button class="pulse-btn">Subscribe Now</button>
</div>`,
        starterCSS: `.pulse-btn {
  background: #6366f1;
  color: white;
  border: none;
  padding: 14px 32px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  /* add animation and transition */
}

/* add @keyframes pulse */`,
        solutionCSS: `@keyframes pulse {
  0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(99,102,241,0.4); }
  50% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(99,102,241,0); }
}
.pulse-btn {
  background: #6366f1;
  color: white;
  border: none;
  padding: 14px 32px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  animation: pulse 1.5s ease-in-out infinite;
  transition: background-color 0.3s ease;
}
.pulse-btn:hover { background: #4f46e5; }`,
      },
    ],
  },

  // ----------------------------------------------------------
  // 3. CSS VARIABLES
  // ----------------------------------------------------------
  {
    id: "css-variables",
    title: "CSS Variables",
    level: "advanced",
    icon: "🔧",
    explanation:
      "CSS Custom Properties (variables) let you store values and reuse them throughout your stylesheet.\n\n" +
      "Declaration:\n" +
      ":root {\n" +
      "  --primary-color: #6366f1;\n" +
      "  --border-radius: 8px;\n" +
      "}\n\n" +
      "Usage:\n" +
      "background-color: var(--primary-color);\n" +
      "border-radius: var(--border-radius);\n\n" +
      "Fallback value:\n" +
      "color: var(--text-color, black);\n\n" +
      "Variables are scoped — defined on :root they're global. You can also scope them to specific elements and override for themes.\n\n" +
      "Power feature: change variables with JavaScript to create dynamic themes!",
    keyPoints: [
      "Declare with --name: value syntax",
      "Access with var(--name) or var(--name, fallback)",
      ":root scope makes them global",
      "Variables cascade and inherit like other properties",
      "Perfect for theming — dark/light mode with one variable swap",
    ],
    previewHTML: `
<div class="preview-root">
  <div class="theme-demo">
    <h3>CSS Variables Theme</h3>
    <p>All colors below come from CSS variables.</p>
    <div class="card">
      <div class="card-header">Card Header</div>
      <div class="card-body">
        <p>Card content using <code>var(--text)</code></p>
        <button class="btn">Primary Button</button>
        <button class="btn btn-secondary">Secondary</button>
      </div>
    </div>
  </div>
</div>`,
    defaultCSS: `:root {
  --primary: #6366f1;
  --primary-dark: #4f46e5;
  --secondary: #10b981;
  --bg: #f8fafc;
  --surface: #ffffff;
  --text: #1e293b;
  --text-muted: #64748b;
  --border: #e2e8f0;
  --radius: 10px;
  --shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.theme-demo {
  background: var(--bg);
  padding: 16px;
  border-radius: var(--radius);
  color: var(--text);
}

.theme-demo h3 { color: var(--primary); margin-bottom: 4px; }
.theme-demo p  { color: var(--text-muted); margin-bottom: 12px; }

.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
}

.card-header {
  background: var(--primary);
  color: white;
  padding: 12px 16px;
  font-weight: bold;
}

.card-body {
  padding: 16px;
  color: var(--text);
}

.btn {
  background: var(--primary);
  color: white;
  border: none;
  padding: 8px 18px;
  border-radius: calc(var(--radius) / 2);
  cursor: pointer;
  font-weight: 600;
  margin-right: 8px;
  transition: background 0.2s;
}

.btn:hover { background: var(--primary-dark); }

.btn-secondary {
  background: transparent;
  color: var(--secondary);
  border: 2px solid var(--secondary);
}

.btn-secondary:hover { background: var(--secondary); color: white; }`,
    challenges: [
      {
        id: "css-variables-challenge-1",
        title: "Dark theme with variables",
        description:
          "Define a set of CSS variables on :root for a dark theme (dark background, light text, accent color). Use them to style the .dark-card component.",
        hint: "Define --bg, --text, --accent etc. on :root, then use var() in .dark-card",
        htmlTemplate: `
<div class="preview-root" style="padding:16px;">
  <div class="dark-card">
    <h2>Dark Theme Card</h2>
    <p>Styled entirely with CSS variables.</p>
    <span class="tag">CSS Variables</span>
  </div>
</div>`,
        starterCSS: `:root {
  /* define your dark theme variables here */
}

.dark-card {
  /* use var() to apply the variables */
  padding: 24px;
  border-radius: 12px;
}

.dark-card h2 { /* use accent color */ }
.dark-card p  { /* muted text */ }
.tag {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 99px;
  font-size: 0.8rem;
}`,
        solutionCSS: `:root {
  --dark-bg: #1e293b;
  --dark-surface: #0f172a;
  --dark-accent: #818cf8;
  --dark-text: #f1f5f9;
  --dark-muted: #94a3b8;
  --dark-radius: 12px;
}
.dark-card {
  background: var(--dark-bg);
  color: var(--dark-text);
  padding: 24px;
  border-radius: var(--dark-radius);
  border: 1px solid #334155;
}
.dark-card h2 { color: var(--dark-accent); margin-bottom: 8px; }
.dark-card p  { color: var(--dark-muted); margin-bottom: 16px; }
.tag {
  display: inline-block;
  background: var(--dark-accent);
  color: var(--dark-surface);
  padding: 4px 12px;
  border-radius: 99px;
  font-size: 0.8rem;
  font-weight: bold;
}`,
      },
    ],
  },

  // ----------------------------------------------------------
  // 4. PSEUDO-CLASSES & PSEUDO-ELEMENTS
  // ----------------------------------------------------------
  {
    id: "pseudo",
    title: "Pseudo-classes & Elements",
    level: "advanced",
    icon: "🔮",
    explanation:
      "Pseudo-classes and pseudo-elements let you style elements based on their state or add virtual content.\n\n" +
      "Pseudo-classes (single colon) — based on state or position:\n" +
      "• :hover — mouse over element\n" +
      "• :focus — element has keyboard focus\n" +
      "• :active — element being clicked\n" +
      "• :nth-child(n) — nth child element (e.g. :nth-child(odd))\n" +
      "• :first-child / :last-child\n" +
      "• :not(selector) — elements that don't match\n" +
      "• :checked, :disabled, :valid, :invalid — form states\n\n" +
      "Pseudo-elements (double colon) — virtual content:\n" +
      "• ::before — inserts content before the element's content\n" +
      "• ::after — inserts content after\n" +
      "• ::placeholder — styles input placeholder text\n" +
      "• ::selection — styles text the user highlights\n" +
      "• ::first-line — styles just the first line of text",
    keyPoints: [
      ":hover, :focus, :active for interactive states",
      ":nth-child() for powerful pattern matching",
      "::before and ::after need content: '' to appear",
      "Both pseudo-elements and classes can be combined",
      "::selection customises text highlight appearance",
    ],
    previewHTML: `
<div class="preview-root">
  <h3>Pseudo-classes</h3>
  <ul class="styled-list">
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
    <li>Fourth item</li>
    <li>Fifth item</li>
  </ul>

  <h3 style="margin-top:16px">Pseudo-elements</h3>
  <p class="fancy-paragraph">This paragraph has a fancy first line and decorative quote marks.</p>

  <h3 style="margin-top:16px">Hover effects</h3>
  <div class="hover-card">Hover over me!</div>
</div>`,
    defaultCSS: `.styled-list {
  list-style: none;
  padding: 0;
}

.styled-list li {
  padding: 8px 16px;
  border-bottom: 1px solid #e5e7eb;
  transition: background 0.2s;
}

/* Every odd row */
.styled-list li:nth-child(odd) {
  background: #ede9fe;
}

/* First and last */
.styled-list li:first-child { border-radius: 6px 6px 0 0; font-weight: bold; }
.styled-list li:last-child  { border: none; border-radius: 0 0 6px 6px; }

.styled-list li:hover { background: #c7d2fe; cursor: pointer; }

/* ::before adds decorative element */
.fancy-paragraph::before {
  content: '"';
  font-size: 4rem;
  color: #a5b4fc;
  line-height: 0;
  vertical-align: -1.5rem;
  margin-right: 4px;
}

.fancy-paragraph::first-line {
  font-weight: bold;
  color: #4338ca;
  font-size: 1.1rem;
}

/* ::after tooltip example */
.hover-card {
  position: relative;
  display: inline-block;
  background: #6366f1;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
}

.hover-card::after {
  content: "You found me! 🎉";
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) scale(0);
  background: #1e293b;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  white-space: nowrap;
  font-size: 0.8rem;
  transition: transform 0.2s ease;
  transform-origin: bottom center;
}

.hover-card:hover::after {
  transform: translateX(-50%) scale(1);
}`,
    challenges: [
      {
        id: "pseudo-challenge-1",
        title: "Highlight every 3rd list item",
        description:
          "Style every 3rd .list-item with a gold background and bold text using :nth-child. Also add a ✓ ::before pseudo-element to each item.",
        hint: "Use :nth-child(3n) for every 3rd item, ::before with content: '✓'",
        htmlTemplate: `
<div class="preview-root">
  <ul class="todo-list">
    <li class="list-item">Buy groceries</li>
    <li class="list-item">Write CSS</li>
    <li class="list-item">Learn Grid</li>
    <li class="list-item">Practice flexbox</li>
    <li class="list-item">Build a project</li>
    <li class="list-item">Review variables</li>
  </ul>
</div>`,
        starterCSS: `.todo-list {
  list-style: none;
  padding: 0;
}

.list-item {
  padding: 10px 16px;
  border-bottom: 1px solid #e5e7eb;
}

/* highlight every 3rd item */

/* add checkmark before each */`,
        solutionCSS: `.todo-list { list-style: none; padding: 0; }
.list-item {
  padding: 10px 16px;
  border-bottom: 1px solid #e5e7eb;
}
.list-item:nth-child(3n) {
  background: #fef9c3;
  font-weight: bold;
  color: #78350f;
}
.list-item::before {
  content: "✓ ";
  color: #10b981;
  font-weight: bold;
}`,
      },
    ],
  },
];
