"use client";

import React from "react";
import { Lesson } from "@/types";
import { levelGroups } from "@/data";

// ============================================================
// WelcomeScreen — shown when no lesson is selected
// ============================================================

interface WelcomeScreenProps {
  completedCount: number;
  totalCount: number;
  lastLesson: Lesson | null;
  onSelectLesson: (lesson: Lesson) => void;
}

const FEATURE_CARDS = [
  {
    icon: "📖",
    title: "Structured Learning",
    description: "12 lessons across Beginner, Intermediate, and Advanced levels",
  },
  {
    icon: "⚡",
    title: "Live Editor",
    description: "Write CSS and see changes instantly in the live preview",
  },
  {
    icon: "🏋️",
    title: "Practice Challenges",
    description: "Real-world exercises with expected output comparison",
  },
  {
    icon: "📊",
    title: "Progress Tracking",
    description: "Your progress is saved automatically across sessions",
  },
];

export default function WelcomeScreen({
  completedCount,
  totalCount,
  lastLesson,
  onSelectLesson,
}: WelcomeScreenProps) {
  return (
    <div className="flex-1 overflow-y-auto flex flex-col items-center justify-start py-12 px-6">
      {/* Hero section */}
      <div className="text-center max-w-xl mb-10">
        <div className="text-6xl mb-4">🎨</div>
        <h1 className="text-4xl font-extrabold text-[var(--text)] mb-3">
          Learn CSS Interactively
        </h1>
        <p className="text-[var(--text-muted)] text-lg leading-relaxed">
          Master CSS from selectors to animations with hands-on lessons,
          live previews, and real challenges. No theory-only — every concept
          is immediately editable.
        </p>

        {/* Progress bar */}
        {completedCount > 0 && (
          <div className="mt-6 bg-[var(--surface)] rounded-xl border border-[var(--border)] p-4">
            <div className="flex justify-between text-sm font-medium mb-2">
              <span className="text-[var(--text)]">Your progress</span>
              <span className="text-[var(--accent)]">
                {completedCount}/{totalCount} lessons
              </span>
            </div>
            <div className="h-3 rounded-full bg-[var(--border)] overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] transition-all"
                style={{ width: `${(completedCount / totalCount) * 100}%` }}
              />
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-2">
              {Math.round((completedCount / totalCount) * 100)}% complete
            </p>
          </div>
        )}

        {/* CTA buttons */}
        <div className="flex justify-center gap-3 mt-6 flex-wrap">
          {lastLesson ? (
            <button
              onClick={() => onSelectLesson(lastLesson)}
              className="px-6 py-3 rounded-xl bg-[var(--accent)] text-white font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              ▶ Continue Learning
            </button>
          ) : null}
          <button
            onClick={() => {
              const first = levelGroups[0]?.lessons[0];
              if (first) onSelectLesson(first);
            }}
            className={`px-6 py-3 rounded-xl font-semibold transition-all border-2 ${
              lastLesson
                ? "border-[var(--border)] text-[var(--text)] hover:bg-[var(--hover-bg)]"
                : "bg-[var(--accent)] text-white border-transparent hover:opacity-90 shadow-lg"
            }`}
          >
            🚀 Start from Beginner
          </button>
        </div>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl w-full mb-10">
        {FEATURE_CARDS.map((card) => (
          <div
            key={card.title}
            className="bg-[var(--surface)] rounded-xl border border-[var(--border)] p-5 flex items-start gap-4"
          >
            <span className="text-2xl flex-shrink-0">{card.icon}</span>
            <div>
              <h3 className="font-semibold text-[var(--text)] text-sm">
                {card.title}
              </h3>
              <p className="text-xs text-[var(--text-muted)] mt-0.5 leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Level overview */}
      <div className="max-w-2xl w-full">
        <h2 className="font-bold text-[var(--text)] mb-4 text-center">
          Curriculum Overview
        </h2>
        <div className="space-y-3">
          {levelGroups.map((group) => (
            <div
              key={group.id}
              className="bg-[var(--surface)] rounded-xl border border-[var(--border)] overflow-hidden"
            >
              <div className={`px-4 py-2 flex items-center gap-2 ${group.color}`}>
                <span className={`text-sm font-bold ${group.textColor}`}>
                  {group.label}
                </span>
                <span className={`text-xs ${group.textColor} opacity-70`}>
                  {group.lessons.length} lessons
                </span>
              </div>
              <div className="px-4 py-2 flex flex-wrap gap-2">
                {group.lessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => onSelectLesson(lesson)}
                    className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-[var(--hover-bg)] text-[var(--text)] hover:bg-[var(--border)] transition-colors"
                  >
                    <span>{lesson.icon}</span>
                    <span>{lesson.title}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-12" />
    </div>
  );
}
