"use client";

import React, { useRef, useCallback } from "react";

// ============================================================
// CodeEditor — syntax-highlighted-feeling textarea editor
// ============================================================

interface CodeEditorProps {
  /** Current CSS value */
  value: string;
  /** Called on every keystroke */
  onChange: (value: string) => void;
  /** Called when reset button is clicked */
  onReset: () => void;
}

export default function CodeEditor({ value, onChange, onReset }: CodeEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  /**
   * Handle Tab key — insert 2 spaces instead of losing focus.
   */
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Tab") {
        e.preventDefault();
        const ta = textareaRef.current!;
        const start = ta.selectionStart;
        const end = ta.selectionEnd;
        const newVal = value.substring(0, start) + "  " + value.substring(end);
        onChange(newVal);
        // Restore cursor after the inserted spaces
        requestAnimationFrame(() => {
          ta.selectionStart = ta.selectionEnd = start + 2;
        });
      }
    },
    [value, onChange]
  );

  return (
    <div className="flex flex-col h-full">
      {/* Editor toolbar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[var(--editor-header)] border-b border-[var(--border)] flex-shrink-0">
        <div className="flex items-center gap-2">
          {/* Fake macOS traffic lights */}
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <span className="ml-2 text-xs font-mono text-[var(--text-muted)]">
            styles.css
          </span>
        </div>
        <button
          onClick={onReset}
          title="Reset to default code"
          className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--text)] transition-colors px-2 py-1 rounded hover:bg-[var(--hover-bg)]"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Reset
        </button>
      </div>

      {/* Textarea */}
      <div className="flex-1 relative overflow-hidden">
        {/* Line numbers column */}
        <LineNumbers code={value} />

        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          spellCheck={false}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          className="
            absolute inset-0 w-full h-full resize-none
            bg-[var(--editor-bg)] text-[var(--editor-text)]
            font-mono text-sm leading-6
            pl-12 pr-4 py-3
            focus:outline-none
            border-0
          "
          style={{ caretColor: "var(--accent)" }}
        />
      </div>
    </div>
  );
}

// ── Line numbers ─────────────────────────────────────────────

function LineNumbers({ code }: { code: string }) {
  const lines = code.split("\n");
  return (
    <div
      aria-hidden
      className="
        absolute left-0 top-0 h-full w-10
        bg-[var(--editor-bg)] border-r border-[var(--border)]
        flex flex-col py-3 pr-2
        select-none pointer-events-none
        overflow-hidden
      "
    >
      {lines.map((_, i) => (
        <span
          key={i}
          className="text-right text-xs leading-6 text-[var(--text-muted)] opacity-50"
        >
          {i + 1}
        </span>
      ))}
    </div>
  );
}
