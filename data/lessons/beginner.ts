import { Lesson } from "@/types";

// ============================================================
// BEGINNER LESSONS
// ============================================================

export const beginnerLessons: Lesson[] = [
  // ----------------------------------------------------------
  // 1. SELECTORS
  // ----------------------------------------------------------
  {
    id: "selectors",
    title: "Selectors",
    level: "beginner",
    icon: "🎯",
    explanation:
      "CSS selectors are patterns used to select the element(s) you want to style.\n\n" +
      "The most common selectors are:\n" +
      "• Element selector — targets all elements of a given tag (e.g. p, h1, div).\n" +
      "• Class selector (.) — targets elements with a specific class attribute.\n" +
      "• ID selector (#) — targets a single element with a unique id.\n" +
      "• Universal selector (*) — targets every element on the page.\n" +
      "• Attribute selector — targets elements with a given attribute.\n\n" +
      "Selectors can be combined for more precision, e.g. div.card selects only <div> elements that also have class 'card'.",
    keyPoints: [
      "Element selectors match by tag name",
      "Class selectors start with a dot (.classname)",
      "ID selectors start with a hash (#id)",
      "Multiple selectors can be comma-separated",
      "Specificity determines which rule wins",
    ],
    previewHTML: `
<div class="preview-root">
  <h2 id="main-title">Hello, CSS!</h2>
  <p class="intro">This is styled with a class selector.</p>
  <p>This plain paragraph uses the element selector.</p>
  <div class="box">I'm a div with class "box"</div>
</div>`,
    defaultCSS: `/* Element selector */
h2 {
  color: #6366f1;
  font-size: 1.8rem;
}

/* Class selector */
.intro {
  color: #10b981;
  font-weight: bold;
}

/* ID selector */
#main-title {
  border-bottom: 3px solid #6366f1;
  padding-bottom: 8px;
}

/* Element selector */
p {
  font-size: 1rem;
  line-height: 1.6;
  color: #374151;
}

/* Class selector */
.box {
  background-color: #ede9fe;
  padding: 16px;
  border-radius: 8px;
  margin-top: 12px;
}`,
    challenges: [
      {
        id: "selectors-challenge-1",
        title: "Style the heading",
        description:
          "Make the <h1> red, the paragraph with class 'note' italic and grey, and the element with id 'highlight' have a yellow background.",
        hint: "Use h1, .note, and #highlight selectors",
        htmlTemplate: `
<div class="preview-root">
  <h1>CSS Challenge</h1>
  <p class="note">This is a note paragraph.</p>
  <p id="highlight">This one should be highlighted!</p>
</div>`,
        starterCSS: `/* Style the h1 */

/* Style .note */

/* Style #highlight */
`,
        solutionCSS: `h1 { color: red; }
.note { font-style: italic; color: #6b7280; }
#highlight { background-color: yellow; padding: 4px 8px; }`,
      },
    ],
  },

  // ----------------------------------------------------------
  // 2. COLORS
  // ----------------------------------------------------------
  {
    id: "colors",
    title: "Colors",
    level: "beginner",
    icon: "🎨",
    explanation:
      "CSS lets you define colors in several ways:\n\n" +
      "• Named colors — 'red', 'blue', 'tomato', 'coral' etc.\n" +
      "• Hex — #RRGGBB or shorthand #RGB (e.g. #ff6347 = tomato).\n" +
      "• RGB — rgb(255, 99, 71) — specify red, green and blue channels 0-255.\n" +
      "• RGBA — rgba(255, 99, 71, 0.5) — same plus alpha (opacity) 0-1.\n" +
      "• HSL — hsl(9, 100%, 64%) — hue (0-360°), saturation, lightness.\n" +
      "• HSLA — hsl with alpha channel.\n\n" +
      "Colors can be applied via color (text), background-color, border-color, box-shadow, etc.",
    keyPoints: [
      "color sets the text colour",
      "background-color sets the background",
      "Use rgba/hsla for transparency",
      "HSL is great for programmatic colour generation",
      "CSS custom properties (variables) enable consistent palettes",
    ],
    previewHTML: `
<div class="preview-root">
  <h3>Color Samples</h3>
  <div class="swatch named">Named: tomato</div>
  <div class="swatch hex">Hex: #6366f1</div>
  <div class="swatch rgb">RGB: rgb(16, 185, 129)</div>
  <div class="swatch rgba">RGBA: rgba(99, 102, 241, 0.4)</div>
  <div class="swatch hsl">HSL: hsl(270, 80%, 60%)</div>
</div>`,
    defaultCSS: `.swatch {
  padding: 12px 16px;
  margin: 6px 0;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
}

.named  { background-color: tomato; }
.hex    { background-color: #6366f1; }
.rgb    { background-color: rgb(16, 185, 129); }
.rgba   { background-color: rgba(99, 102, 241, 0.4); color: #312e81; }
.hsl    { background-color: hsl(270, 80%, 60%); }`,
    challenges: [
      {
        id: "colors-challenge-1",
        title: "Build a color palette",
        description:
          "Give each .palette-item a different background color using different CSS color formats: named, hex, rgb, and hsl.",
        hint: "Try: background-color: coral; / #3b82f6; / rgb(52,211,153); / hsl(45,100%,60%)",
        htmlTemplate: `
<div class="preview-root">
  <div class="palette-item" id="c1">Named color</div>
  <div class="palette-item" id="c2">Hex color</div>
  <div class="palette-item" id="c3">RGB color</div>
  <div class="palette-item" id="c4">HSL color</div>
</div>`,
        starterCSS: `.palette-item {
  padding: 16px;
  margin: 8px 0;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  text-align: center;
}

#c1 { /* named color here */ }
#c2 { /* hex color here */ }
#c3 { /* rgb color here */ }
#c4 { /* hsl color here */ }`,
        solutionCSS: `.palette-item {
  padding: 16px;
  margin: 8px 0;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  text-align: center;
}
#c1 { background-color: coral; }
#c2 { background-color: #3b82f6; }
#c3 { background-color: rgb(52, 211, 153); color: #065f46; }
#c4 { background-color: hsl(45, 100%, 60%); color: #78350f; }`,
      },
    ],
  },

  // ----------------------------------------------------------
  // 3. BOX MODEL
  // ----------------------------------------------------------
  {
    id: "box-model",
    title: "Box Model",
    level: "beginner",
    icon: "📦",
    explanation:
      "Every HTML element is a rectangular box. The CSS box model describes how these boxes are sized and spaced:\n\n" +
      "• content — the actual content (text, images).\n" +
      "• padding — space between content and border.\n" +
      "• border — a line around the padding.\n" +
      "• margin — space outside the border, between elements.\n\n" +
      "By default box-sizing: content-box means width/height apply only to the content. Setting box-sizing: border-box includes padding and border in the width, making layouts more predictable.\n\n" +
      "Use the browser DevTools 'Computed' panel to inspect the box model visually.",
    keyPoints: [
      "content → padding → border → margin (inside out)",
      "box-sizing: border-box is strongly recommended",
      "margin: auto centers block elements horizontally",
      "Collapsing margins: adjacent top/bottom margins merge",
      "padding adds clickable area; margin does not",
    ],
    previewHTML: `
<div class="preview-root">
  <div class="outer">
    Margin (outer gap)
    <div class="box-demo">
      <div class="content-box">Content</div>
    </div>
  </div>
</div>`,
    defaultCSS: `* { box-sizing: border-box; }

.outer {
  background-color: #fef9c3;
  padding: 20px;
  border: 2px dashed #ca8a04;
  font-size: 0.85rem;
  color: #92400e;
}

.box-demo {
  background-color: #d1fae5;
  padding: 24px;
  border: 4px solid #10b981;
  margin: 20px;
  border-radius: 8px;
}

.content-box {
  background-color: #ede9fe;
  padding: 16px;
  border: 2px solid #6366f1;
  text-align: center;
  font-weight: bold;
  color: #4338ca;
  border-radius: 4px;
}`,
    challenges: [
      {
        id: "box-model-challenge-1",
        title: "Create a card",
        description:
          "Style the .card so it has: 24px padding, a light grey border (1px solid), 12px border-radius, a white background, and 16px margin on all sides.",
        hint: "Use padding, border, border-radius, background-color, and margin",
        htmlTemplate: `
<div class="preview-root" style="background:#f3f4f6; min-height:200px;">
  <div class="card">
    <h3>My Card</h3>
    <p>This is some card content.</p>
  </div>
</div>`,
        starterCSS: `.card {
  /* your styles here */
}`,
        solutionCSS: `.card {
  padding: 24px;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  background-color: white;
  margin: 16px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}`,
      },
    ],
  },

  // ----------------------------------------------------------
  // 4. DISPLAY
  // ----------------------------------------------------------
  {
    id: "display",
    title: "Display",
    level: "beginner",
    icon: "🖥️",
    explanation:
      "The display property controls how an element is rendered in the layout flow.\n\n" +
      "• block — element takes up the full width, starts on a new line (div, p, h1).\n" +
      "• inline — element only takes as much width as needed, stays in text flow (span, a, strong).\n" +
      "• inline-block — like inline but you can set width/height/padding.\n" +
      "• none — hides the element completely (no space reserved).\n" +
      "• flex — turns the element into a flex container (covered in Intermediate).\n" +
      "• grid — turns the element into a grid container (covered in Advanced).\n\n" +
      "Understanding display is fundamental before diving into Flexbox or Grid.",
    keyPoints: [
      "Block elements stack vertically",
      "Inline elements flow with text",
      "inline-block: best of both worlds",
      "display: none removes element from layout",
      "visibility: hidden hides but preserves space",
    ],
    previewHTML: `
<div class="preview-root">
  <h3>Display Examples</h3>

  <p>Block elements:</p>
  <div class="block-demo">div (block)</div>
  <div class="block-demo">another div (block)</div>

  <p>Inline elements:</p>
  <span class="inline-demo">span</span>
  <span class="inline-demo">span</span>
  <span class="inline-demo">span</span>

  <p>Inline-block elements (can have width/height):</p>
  <span class="inline-block-demo">50px wide</span>
  <span class="inline-block-demo">50px wide</span>
  <span class="inline-block-demo">50px wide</span>
</div>`,
    defaultCSS: `.block-demo {
  display: block;
  background: #ede9fe;
  border: 2px solid #6366f1;
  padding: 8px 12px;
  margin: 4px 0;
  color: #4338ca;
}

.inline-demo {
  display: inline;
  background: #d1fae5;
  border: 2px solid #10b981;
  padding: 4px 8px;
  color: #065f46;
}

.inline-block-demo {
  display: inline-block;
  width: 90px;
  height: 40px;
  background: #fef9c3;
  border: 2px solid #ca8a04;
  text-align: center;
  line-height: 36px;
  font-size: 0.75rem;
  color: #92400e;
  margin: 4px;
}`,
    challenges: [
      {
        id: "display-challenge-1",
        title: "Navigation bar",
        description:
          "Make the .nav-item elements display as inline-block so they sit side-by-side like a navigation bar. Give them padding and a hover-friendly appearance.",
        hint: "Set display: inline-block on .nav-item",
        htmlTemplate: `
<div class="preview-root">
  <nav class="navbar">
    <span class="nav-item">Home</span>
    <span class="nav-item">About</span>
    <span class="nav-item">Projects</span>
    <span class="nav-item">Contact</span>
  </nav>
</div>`,
        starterCSS: `.navbar {
  background-color: #1e293b;
  padding: 8px 16px;
}

.nav-item {
  /* make these sit side by side */
  color: white;
}`,
        solutionCSS: `.navbar {
  background-color: #1e293b;
  padding: 8px 16px;
}
.nav-item {
  display: inline-block;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
.nav-item:hover {
  background-color: #334155;
}`,
      },
    ],
  },
];
