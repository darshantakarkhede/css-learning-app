import { Lesson } from "@/types";

// ============================================================
// INTERMEDIATE LESSONS
// ============================================================

export const intermediateLessons: Lesson[] = [
  // ----------------------------------------------------------
  // 1. FLEXBOX
  // ----------------------------------------------------------
  {
    id: "flexbox",
    title: "Flexbox",
    level: "intermediate",
    icon: "📐",
    explanation:
      "Flexbox (Flexible Box Layout) is a one-dimensional layout system for rows OR columns.\n\n" +
      "Apply display: flex to a container. Its direct children become flex items.\n\n" +
      "Key container properties:\n" +
      "• flex-direction — row (default) | column | row-reverse | column-reverse\n" +
      "• justify-content — alignment along the main axis (start, center, space-between, space-around, space-evenly)\n" +
      "• align-items — alignment along the cross axis (stretch, center, flex-start, flex-end, baseline)\n" +
      "• flex-wrap — nowrap | wrap | wrap-reverse\n" +
      "• gap — space between flex items\n\n" +
      "Key item properties:\n" +
      "• flex-grow — how much the item grows to fill space\n" +
      "• flex-shrink — how much the item shrinks\n" +
      "• flex-basis — initial size before growing/shrinking\n" +
      "• align-self — overrides container's align-items for one item",
    keyPoints: [
      "display: flex on the container, not the items",
      "justify-content controls main-axis spacing",
      "align-items controls cross-axis alignment",
      "flex: 1 makes an item grow to fill available space",
      "Perfect for centering: justify-content + align-items: center",
    ],
    previewHTML: `
<div class="preview-root">
  <h3>Flex Container</h3>
  <div class="flex-container">
    <div class="flex-item">1</div>
    <div class="flex-item">2</div>
    <div class="flex-item wide">3 (wider)</div>
    <div class="flex-item">4</div>
  </div>

  <h3 style="margin-top:16px">Centering with Flex</h3>
  <div class="center-demo">
    <div class="centered-box">Centered!</div>
  </div>
</div>`,
    defaultCSS: `.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  background: #f1f5f9;
  padding: 16px;
  border-radius: 8px;
  border: 2px dashed #94a3b8;
}

.flex-item {
  background: #6366f1;
  color: white;
  padding: 12px 16px;
  border-radius: 6px;
  font-weight: bold;
  text-align: center;
  min-width: 48px;
}

.flex-item.wide { flex-grow: 2; }

.center-demo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background: #ede9fe;
  border-radius: 8px;
}

.centered-box {
  background: #4f46e5;
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: bold;
}`,
    challenges: [
      {
        id: "flexbox-challenge-1",
        title: "Center the box",
        description:
          "Use flexbox to perfectly center the .box both horizontally AND vertically inside .container.",
        hint: "display: flex + justify-content: center + align-items: center",
        htmlTemplate: `
<div class="preview-root">
  <div class="container">
    <div class="box">Center me!</div>
  </div>
</div>`,
        starterCSS: `.container {
  width: 100%;
  height: 200px;
  background: #f1f5f9;
  border: 2px dashed #64748b;
  /* add flex centering here */
}

.box {
  background: #6366f1;
  color: white;
  padding: 20px 32px;
  border-radius: 8px;
  font-weight: bold;
}`,
        solutionCSS: `.container {
  width: 100%;
  height: 200px;
  background: #f1f5f9;
  border: 2px dashed #64748b;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  background: #6366f1;
  color: white;
  padding: 20px 32px;
  border-radius: 8px;
  font-weight: bold;
}`,
      },
      {
        id: "flexbox-challenge-2",
        title: "Responsive card row",
        description:
          "Make the .card-row display its three .card children in a row with equal spacing, and allow them to wrap on smaller screens.",
        hint: "display: flex + gap + flex-wrap: wrap + flex: 1",
        htmlTemplate: `
<div class="preview-root">
  <div class="card-row">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
  </div>
</div>`,
        starterCSS: `.card-row {
  /* flex layout here */
  padding: 8px;
}

.card {
  background: #ede9fe;
  border: 2px solid #6366f1;
  padding: 24px;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  color: #4338ca;
}`,
        solutionCSS: `.card-row {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  padding: 8px;
}
.card {
  flex: 1;
  min-width: 120px;
  background: #ede9fe;
  border: 2px solid #6366f1;
  padding: 24px;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  color: #4338ca;
}`,
      },
    ],
  },

  // ----------------------------------------------------------
  // 2. POSITIONING
  // ----------------------------------------------------------
  {
    id: "positioning",
    title: "Positioning",
    level: "intermediate",
    icon: "📍",
    explanation:
      "The position property controls how an element is placed in the document.\n\n" +
      "• static (default) — normal document flow, top/left/etc. have no effect.\n" +
      "• relative — stays in normal flow but offset from its original position using top/right/bottom/left. Creates a containing block for absolute children.\n" +
      "• absolute — removed from normal flow, positioned relative to the nearest non-static ancestor.\n" +
      "• fixed — removed from normal flow, positioned relative to the viewport.\n" +
      "• sticky — acts like relative until it hits a scroll threshold, then acts like fixed.\n\n" +
      "z-index controls stacking order of overlapping positioned elements.",
    keyPoints: [
      "relative keeps space in flow; absolute does not",
      "Parent must be position: relative for absolute child to work predictably",
      "fixed stays on screen during scroll",
      "sticky is great for table headers and navbars",
      "z-index only works on positioned elements",
    ],
    previewHTML: `
<div class="preview-root">
  <h3>Relative vs Absolute</h3>
  <div class="relative-parent">
    Parent (relative)
    <div class="absolute-child">Absolute child</div>
  </div>

  <h3 style="margin-top:16px">Sticky header example</h3>
  <div class="scroll-container">
    <div class="sticky-header">Sticky Header</div>
    <div class="scroll-content">
      <p>Scroll this box to see sticky in action.</p>
      <p>More content...</p>
      <p>Even more content...</p>
      <p>Keep scrolling...</p>
    </div>
  </div>
</div>`,
    defaultCSS: `.relative-parent {
  position: relative;
  background: #fef9c3;
  border: 2px solid #ca8a04;
  padding: 12px;
  height: 80px;
  color: #92400e;
}

.absolute-child {
  position: absolute;
  top: 8px;
  right: 8px;
  background: #ef4444;
  color: white;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
}

.scroll-container {
  height: 150px;
  overflow-y: scroll;
  border: 2px solid #d1d5db;
  border-radius: 8px;
}

.sticky-header {
  position: sticky;
  top: 0;
  background: #4f46e5;
  color: white;
  padding: 10px 16px;
  font-weight: bold;
}

.scroll-content {
  padding: 12px 16px;
  color: #374151;
}

.scroll-content p { margin: 12px 0; }`,
    challenges: [
      {
        id: "positioning-challenge-1",
        title: "Badge on a card",
        description:
          "Place the .badge in the top-right corner of .card using absolute positioning. The card must be the positioned ancestor.",
        hint: "position: relative on .card, position: absolute on .badge with top and right values",
        htmlTemplate: `
<div class="preview-root">
  <div class="card">
    <h3>Product Card</h3>
    <p>A nice product description.</p>
    <div class="badge">NEW</div>
  </div>
</div>`,
        starterCSS: `.card {
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  padding: 24px;
  width: 240px;
  /* make this a positioned ancestor */
}

.badge {
  background: #ef4444;
  color: white;
  font-size: 0.7rem;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 99px;
  /* position in top-right corner */
}`,
        solutionCSS: `.card {
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  padding: 24px;
  width: 240px;
  position: relative;
}
.badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: #ef4444;
  color: white;
  font-size: 0.7rem;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 99px;
}`,
      },
    ],
  },

  // ----------------------------------------------------------
  // 3. CSS UNITS
  // ----------------------------------------------------------
  {
    id: "units",
    title: "Units (rem, em, %, vh/vw)",
    level: "intermediate",
    icon: "📏",
    explanation:
      "CSS supports many units for length, font-size, and more:\n\n" +
      "Absolute:\n" +
      "• px — pixels, fixed size, not affected by user font preferences.\n\n" +
      "Relative:\n" +
      "• em — relative to the element's own font-size (or parent's if used in font-size).\n" +
      "• rem — relative to the root <html> font-size (default 16px). Best for accessibility.\n" +
      "• % — percentage of the parent element's value.\n" +
      "• vh — 1% of viewport height.\n" +
      "• vw — 1% of viewport width.\n" +
      "• dvh/dvw — dynamic viewport units (mobile-friendly).\n\n" +
      "Best practices: use rem for font sizes, px for borders/shadows, % or vw/vh for layout.",
    keyPoints: [
      "rem is preferred for font-size (respects user settings)",
      "em compounds with nesting — use with care",
      "100vh = full viewport height (useful for hero sections)",
      "% is relative to the parent's size",
      "mix units strategically: rem text + px border + % width",
    ],
    previewHTML: `
<div class="preview-root">
  <div class="units-demo">
    <div class="px-box">200px wide</div>
    <div class="percent-box">50% of parent</div>
    <div class="rem-box">font: 1.5rem</div>
    <div class="em-box">padding: 2em (relative to font-size)</div>
    <div class="vw-box">width: 40vw</div>
  </div>
</div>`,
    defaultCSS: `.units-demo {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.px-box {
  width: 200px;
  background: #ede9fe;
  padding: 10px;
  border: 2px solid #6366f1;
  border-radius: 4px;
  color: #4338ca;
}

.percent-box {
  width: 50%;
  background: #d1fae5;
  padding: 10px;
  border: 2px solid #10b981;
  border-radius: 4px;
  color: #065f46;
}

.rem-box {
  font-size: 1.5rem;
  background: #fef9c3;
  padding: 10px;
  border: 2px solid #ca8a04;
  border-radius: 4px;
  color: #92400e;
}

.em-box {
  font-size: 0.9rem;
  padding: 2em;
  background: #fee2e2;
  border: 2px solid #ef4444;
  border-radius: 4px;
  color: #991b1b;
}

.vw-box {
  width: 40vw;
  background: #e0f2fe;
  padding: 10px;
  border: 2px solid #0ea5e9;
  border-radius: 4px;
  color: #0369a1;
}`,
    challenges: [
      {
        id: "units-challenge-1",
        title: "Full-height hero",
        description:
          "Make .hero exactly the full viewport height (100vh) with centered content using flexbox. Set the heading to 3rem.",
        hint: "height: 100vh on .hero, font-size: 3rem on h1",
        htmlTemplate: `
<div class="preview-root" style="padding:0; overflow:hidden;">
  <section class="hero">
    <h1>Welcome to CSS!</h1>
    <p>Learning one unit at a time.</p>
  </section>
</div>`,
        starterCSS: `.hero {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  text-align: center;
  /* fill the full viewport height */
  /* center content with flexbox */
}

.hero h1 {
  /* use rem for font size */
  margin-bottom: 0.5rem;
}`,
        solutionCSS: `.hero {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.hero h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}`,
      },
    ],
  },

  // ----------------------------------------------------------
  // 4. RESPONSIVE DESIGN
  // ----------------------------------------------------------
  {
    id: "responsive",
    title: "Responsive Design",
    level: "intermediate",
    icon: "📱",
    explanation:
      "Responsive design ensures your website looks great on all screen sizes — mobile, tablet, and desktop.\n\n" +
      "Key technique: Media Queries.\n" +
      "@media (max-width: 768px) { ... } — applies styles when viewport ≤ 768px.\n\n" +
      "Common breakpoints:\n" +
      "• Mobile-first: start with mobile styles, add breakpoints for larger screens.\n" +
      "• 480px — small phones\n" +
      "• 768px — tablets\n" +
      "• 1024px — small desktops\n" +
      "• 1280px — large desktops\n\n" +
      "Best practices:\n" +
      "• Use mobile-first design\n" +
      "• Use relative units (%, rem, vw)\n" +
      "• Use flexible layouts (flexbox/grid)\n" +
      "• Add <meta name='viewport' content='width=device-width, initial-scale=1'> to HTML",
    keyPoints: [
      "Mobile-first: write mobile styles first, scale up",
      "@media (min-width: ...) for mobile-first approach",
      "Flexible containers beat fixed widths",
      "Fluid images: max-width: 100%",
      "Test on real devices or browser DevTools",
    ],
    previewHTML: `
<div class="preview-root">
  <div class="responsive-grid">
    <div class="grid-item">Item 1</div>
    <div class="grid-item">Item 2</div>
    <div class="grid-item">Item 3</div>
    <div class="grid-item">Item 4</div>
  </div>
  <p class="hint-text">Resize the preview to see responsive changes</p>
</div>`,
    defaultCSS: `.responsive-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.grid-item {
  flex: 1 1 calc(50% - 12px);
  background: #6366f1;
  color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  min-width: 120px;
}

/* On small screens, stack to 1 column */
@media (max-width: 480px) {
  .grid-item {
    flex: 1 1 100%;
  }
}

/* On larger screens, 4 columns */
@media (min-width: 900px) {
  .grid-item {
    flex: 1 1 calc(25% - 12px);
  }
}

.hint-text {
  margin-top: 12px;
  font-size: 0.8rem;
  color: #6b7280;
  text-align: center;
}`,
    challenges: [
      {
        id: "responsive-challenge-1",
        title: "Mobile nav to horizontal nav",
        description:
          "The .nav should stack vertically on mobile (max-width: 600px) and display horizontally on wider screens.",
        hint: "flex-direction: column on mobile, flex-direction: row on wider screens",
        htmlTemplate: `
<div class="preview-root">
  <nav class="nav">
    <a class="nav-link" href="#">Home</a>
    <a class="nav-link" href="#">About</a>
    <a class="nav-link" href="#">Work</a>
    <a class="nav-link" href="#">Contact</a>
  </nav>
</div>`,
        starterCSS: `.nav {
  display: flex;
  background: #1e293b;
  padding: 8px;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 10px 16px;
  border-radius: 4px;
}

/* Add media query here */`,
        solutionCSS: `.nav {
  display: flex;
  flex-direction: row;
  background: #1e293b;
  padding: 8px;
  gap: 4px;
}
.nav-link {
  color: white;
  text-decoration: none;
  padding: 10px 16px;
  border-radius: 4px;
}
.nav-link:hover { background: #334155; }
@media (max-width: 600px) {
  .nav { flex-direction: column; }
}`,
      },
    ],
  },
];
