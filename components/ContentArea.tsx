"use client";

import React from "react";
import { Lesson } from "@/types";
import { levelGroups } from "@/data";
import PreviewBox from "./PreviewBox";
import CodeEditor from "./CodeEditor";
import ChallengeSection from "./ChallengeSection";

// ============================================================
// ContentArea — main lesson display
// Left: explanation + key-points | Right: live editor + preview
// ============================================================

interface ContentAreaProps {
  lesson: Lesson;
  css: string;
  isCompleted: boolean;
  completedChallenges: string[];
  onCSSChange: (css: string) => void;
  onReset: () => void;
  onComplete: () => void;
  onChallengeComplete: (challengeId: string) => void;
}

/** Level badge colours */
const LEVEL_COLORS: Record<string, string> = {
  beginner: "bg-emerald-100 text-emerald-800",
  intermediate: "bg-blue-100 text-blue-800",
  advanced: "bg-purple-100 text-purple-800",
};

export default function ContentArea({
  lesson,
  css,
  isCompleted,
  completedChallenges,
  onCSSChange,
  onReset,
  onComplete,
  onChallengeComplete,
}: ContentAreaProps) {
  // Find the level label for display
  const levelLabel =
    levelGroups.find((g) => g.id === lesson.level)?.label ?? lesson.level;

  return (
    <div className="flex-1 overflow-y-auto">
      {/* ── Lesson header ───────────────────────────────────── */}
      <header className="sticky top-0 z-10 bg-[var(--bg)] border-b border-[var(--border)] px-6 py-4">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{lesson.icon}</span>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl font-bold text-[var(--text)]">
                  {lesson.title}
                </h2>
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-full capitalize ${
                    LEVEL_COLORS[lesson.level]
                  }`}
                >
                  {levelLabel}
                </span>
                {isCompleted && (
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    ✓ Completed
                  </span>
                )}
              </div>
              <p className="text-sm text-[var(--text-muted)] mt-0.5">
                {lesson.challenges.length > 0
                  ? `${lesson.challenges.length} challenge${lesson.challenges.length > 1 ? "s" : ""} included`
                  : "Lesson with live editor"}
              </p>
            </div>
          </div>

          {/* Mark complete button */}
          <button
            onClick={onComplete}
            disabled={isCompleted}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              isCompleted
                ? "bg-emerald-100 text-emerald-700 cursor-default"
                : "bg-[var(--accent)] text-white hover:opacity-90 shadow-md hover:shadow-lg"
            }`}
          >
            {isCompleted ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Lesson Complete!
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Mark Complete
              </>
            )}
          </button>
        </div>
      </header>

      <div className="p-6 space-y-8">
        {/* ── Explanation section ──────────────────────────────── */}
        <section>
          <h3 className="text-base font-bold text-[var(--text)] mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[var(--accent)] text-white text-xs flex items-center justify-center font-bold">1</span>
            Explanation
          </h3>
          <div className="prose-custom bg-[var(--surface)] rounded-xl border border-[var(--border)] p-5">
            {lesson.explanation.split("\n").map((para, i) =>
              para.trim() === "" ? (
                <div key={i} className="h-2" />
              ) : (
                <p
                  key={i}
                  className="text-sm leading-relaxed text-[var(--text)] whitespace-pre-wrap"
                >
                  {para}
                </p>
              )
            )}
          </div>
        </section>

        {/* ── Key points section ───────────────────────────────── */}
        <section>
          <h3 className="text-base font-bold text-[var(--text)] mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[var(--accent)] text-white text-xs flex items-center justify-center font-bold">2</span>
            Key Points
          </h3>
          <ul className="space-y-2">
            {lesson.keyPoints.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-3 bg-[var(--surface)] rounded-lg border border-[var(--border)] px-4 py-2.5"
              >
                <span className="w-5 h-5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-sm text-[var(--text)]">{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Live editor + preview ────────────────────────────── */}
        <section>
          <h3 className="text-base font-bold text-[var(--text)] mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[var(--accent)] text-white text-xs flex items-center justify-center font-bold">3</span>
            Live Editor
          </h3>

          <div
            className="rounded-xl border border-[var(--border)] overflow-hidden shadow-sm"
            style={{ height: "420px" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full divide-y lg:divide-y-0 lg:divide-x divide-[var(--border)]">
              {/* Code editor (left) */}
              <div className="flex flex-col h-full overflow-hidden">
                <CodeEditor
                  value={css}
                  onChange={onCSSChange}
                  onReset={onReset}
                />
              </div>

              {/* Live preview (right) */}
              <div className="flex flex-col h-full overflow-hidden">
                <PreviewBox
                  html={lesson.previewHTML}
                  css={css}
                  title="Live Preview"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Challenges ───────────────────────────────────────── */}
        {lesson.challenges.length > 0 && (
          <section>
            <h3 className="text-base font-bold text-[var(--text)] mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[var(--accent)] text-white text-xs flex items-center justify-center font-bold">4</span>
              Practice Challenges
              <span className="text-xs font-normal text-[var(--text-muted)]">
                ({completedChallenges.filter((id) =>
                  lesson.challenges.some((c) => c.id === id)
                ).length}/{lesson.challenges.length} completed)
              </span>
            </h3>

            <div className="space-y-6">
              {lesson.challenges.map((challenge) => (
                <ChallengeSection
                  key={challenge.id}
                  challenge={challenge}
                  isCompleted={completedChallenges.includes(challenge.id)}
                  onComplete={onChallengeComplete}
                />
              ))}
            </div>
          </section>
        )}

        {/* Bottom spacer */}
        <div className="h-8" />
      </div>
    </div>
  );
}
