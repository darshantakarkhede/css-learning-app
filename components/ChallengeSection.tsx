"use client";

import React, { useState, useCallback } from "react";
import { Challenge } from "@/types";
import CodeEditor from "./CodeEditor";
import PreviewBox from "./PreviewBox";

// ============================================================
// ChallengeSection — practice mode for a single challenge
// Shows: instructions | split editor ↔ expected vs user output
// ============================================================

interface ChallengeSectionProps {
  challenge: Challenge;
  isCompleted: boolean;
  onComplete: (challengeId: string) => void;
}

export default function ChallengeSection({
  challenge,
  isCompleted,
  onComplete,
}: ChallengeSectionProps) {
  const [userCSS, setUserCSS] = useState(challenge.starterCSS);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [activeTab, setActiveTab] = useState<"split" | "user" | "expected">(
    "split"
  );

  const handleReset = useCallback(() => {
    setUserCSS(challenge.starterCSS);
    setShowHint(false);
    setShowSolution(false);
  }, [challenge.starterCSS]);

  const handleMarkDone = () => {
    if (!isCompleted) onComplete(challenge.id);
  };

  return (
    <div className="rounded-xl border border-[var(--border)] overflow-hidden bg-[var(--surface)] shadow-sm">
      {/* Challenge header */}
      <div className="px-5 py-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-b border-[var(--border)]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">🏋️</span>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                Challenge
              </span>
              {isCompleted && (
                <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">
                  ✓ Completed
                </span>
              )}
            </div>
            <h3 className="font-bold text-[var(--text)] text-base">
              {challenge.title}
            </h3>
            <p className="text-sm text-[var(--text-muted)] mt-1">
              {challenge.description}
            </p>
          </div>
        </div>
      </div>

      {/* Controls row */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-b border-[var(--border)] bg-[var(--editor-header)]">
        {/* View toggle tabs */}
        <div className="flex gap-1 bg-[var(--border)] rounded-lg p-0.5">
          {(["split", "user", "expected"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-md text-xs font-medium capitalize transition-all ${
                activeTab === tab
                  ? "bg-[var(--surface)] text-[var(--text)] shadow-sm"
                  : "text-[var(--text-muted)] hover:text-[var(--text)]"
              }`}
            >
              {tab === "split" ? "⚡ Split" : tab === "user" ? "✏️ Yours" : "🎯 Expected"}
            </button>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowHint((v) => !v)}
            className="text-xs px-3 py-1.5 rounded-lg bg-amber-100 text-amber-700 hover:bg-amber-200 transition-colors font-medium"
          >
            💡 {showHint ? "Hide" : "Show"} Hint
          </button>
          <button
            onClick={() => setShowSolution((v) => !v)}
            className="text-xs px-3 py-1.5 rounded-lg bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors font-medium"
          >
            👁️ {showSolution ? "Hide" : "Show"} Solution
          </button>
          <button
            onClick={handleMarkDone}
            disabled={isCompleted}
            className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors ${
              isCompleted
                ? "bg-emerald-100 text-emerald-700 cursor-default"
                : "bg-emerald-500 text-white hover:bg-emerald-600"
            }`}
          >
            {isCompleted ? "✓ Done!" : "Mark Complete"}
          </button>
        </div>
      </div>

      {/* Hint banner */}
      {showHint && (
        <div className="px-5 py-3 bg-amber-50 border-b border-amber-200 text-sm text-amber-800 dark:bg-amber-900/20 dark:text-amber-300">
          <strong>Hint:</strong> {challenge.hint}
        </div>
      )}

      {/* Solution viewer */}
      {showSolution && (
        <div className="border-b border-[var(--border)]">
          <div className="px-4 py-2 bg-purple-50 text-xs font-bold text-purple-700 uppercase tracking-wider dark:bg-purple-900/20 dark:text-purple-300">
            Solution CSS
          </div>
          <pre className="px-4 py-3 overflow-x-auto text-sm font-mono bg-[var(--editor-bg)] text-[var(--editor-text)] max-h-40">
            {challenge.solutionCSS}
          </pre>
        </div>
      )}

      {/* Editor + Preview area */}
      <div
        className={`grid ${
          activeTab === "split" ? "grid-cols-1 lg:grid-cols-3" : "grid-cols-1"
        } divide-x divide-[var(--border)]`}
        style={{ height: "340px" }}
      >
        {/* Code editor (hidden in expected tab) */}
        {activeTab !== "expected" && (
          <div className={`${activeTab === "split" ? "lg:col-span-1" : ""} flex flex-col h-full overflow-hidden`}>
            <CodeEditor
              value={userCSS}
              onChange={setUserCSS}
              onReset={handleReset}
            />
          </div>
        )}

        {/* User output (hidden in expected tab, full width in user tab) */}
        {activeTab !== "expected" && (
          <div className={`${activeTab === "split" ? "lg:col-span-1" : ""} flex flex-col h-full overflow-hidden border-t lg:border-t-0 border-[var(--border)]`}>
            <PreviewBox
              html={challenge.htmlTemplate}
              css={userCSS}
              title="Your Output"
            />
          </div>
        )}

        {/* Expected output */}
        {(activeTab === "split" || activeTab === "expected") && (
          <div className={`${activeTab === "split" ? "lg:col-span-1" : ""} flex flex-col h-full overflow-hidden border-t lg:border-t-0 border-[var(--border)]`}>
            <PreviewBox
              html={challenge.htmlTemplate}
              css={challenge.solutionCSS}
              title="Expected Output"
            />
          </div>
        )}
      </div>
    </div>
  );
}
