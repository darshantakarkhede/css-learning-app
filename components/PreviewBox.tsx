"use client";

import React, { useEffect, useRef } from "react";

// ============================================================
// PreviewBox — renders HTML + CSS in a sandboxed <iframe>
// The preview updates instantly whenever css or html changes.
// ============================================================

interface PreviewBoxProps {
  html: string;
  css: string;
  title?: string;
}

export default function PreviewBox({ html, css, title = "Preview" }: PreviewBoxProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    // Build a self-contained HTML document for the iframe
    const doc = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    /* Base reset for preview */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      padding: 16px;
      min-height: 100vh;
      background: #ffffff;
      color: #1e293b;
    }
    /* Helper class wrapper */
    .preview-root { width: 100%; }
    h2, h3, h4 { margin-bottom: 8px; }
    p { margin-bottom: 8px; line-height: 1.5; }
    code { background: #f1f5f9; padding: 1px 4px; border-radius: 3px; font-size: 0.85em; }
    /* User-provided CSS */
    ${css}
  </style>
</head>
<body>
  ${html}
</body>
</html>`;

    // Write to iframe using srcdoc pattern
    // Using contentDocument.write for maximum compatibility
    try {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(doc);
        iframeDoc.close();
      }
    } catch {
      // Fallback: use srcdoc
      iframe.srcdoc = doc;
    }
  }, [html, css]);

  return (
    <div className="flex flex-col h-full">
      {/* Preview toolbar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-[var(--editor-header)] border-b border-[var(--border)] flex-shrink-0">
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs font-medium text-[var(--text-muted)]">
          {title}
        </span>
        <span className="ml-auto text-xs text-[var(--text-muted)] opacity-60">
          Live
        </span>
      </div>

      {/* Iframe sandbox */}
      <iframe
        ref={iframeRef}
        title={title}
        sandbox="allow-same-origin"
        className="flex-1 w-full border-0 bg-white"
        style={{ minHeight: 0 }}
      />
    </div>
  );
}
