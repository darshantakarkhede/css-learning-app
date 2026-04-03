"use client";

import React from "react";
import { LevelGroup, Lesson } from "@/types";
import { levelGroups } from "@/data";

// ============================================================
// Sidebar — left panel with level groups and lesson links
// ============================================================

interface SidebarProps {
  activeLessonId: string | null;
  completedLessons: string[];
  onSelectLesson: (lesson: Lesson) => void;
  isOpen: boolean;
  onClose: () => void;
}

/** Badge showing the level label */
function LevelBadge({ group }: { group: LevelGroup }) {
  return (
    <span
      className={`text-xs font-bold px-2 py-0.5 rounded-full ${group.color} ${group.textColor}`}
    >
      {group.label}
    </span>
  );
}

export default function Sidebar({
  activeLessonId,
  completedLessons,
  onSelectLesson,
  isOpen,
  onClose,
}: SidebarProps) {
  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={`
          fixed top-0 left-0 h-full z-30 flex flex-col
          bg-[var(--sidebar-bg)] border-r border-[var(--border)]
          w-72 transition-transform duration-300
          lg:relative lg:translate-x-0 lg:h-auto lg:z-auto
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border)]">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎓</span>
            <div>
              <h1 className="font-bold text-sm text-[var(--text)]">
                CSS Learner
              </h1>
              <p className="text-xs text-[var(--text-muted)]">
                Master CSS interactively
              </p>
            </div>
          </div>
          {/* Close button (mobile only) */}
          <button
            onClick={onClose}
            className="lg:hidden text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
            aria-label="Close sidebar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress summary */}
        <div className="px-5 py-3 border-b border-[var(--border)]">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs text-[var(--text-muted)] font-medium">
              Overall Progress
            </span>
            <span className="text-xs font-bold text-[var(--accent)]">
              {completedLessons.length}/{levelGroups.flatMap((g) => g.lessons).length}
            </span>
          </div>
          <div className="h-2 rounded-full bg-[var(--border)] overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] transition-all duration-500"
              style={{
                width: `${
                  (completedLessons.length /
                    levelGroups.flatMap((g) => g.lessons).length) *
                  100
                }%`,
              }}
            />
          </div>
        </div>

        {/* Lesson list */}
        <nav className="flex-1 overflow-y-auto py-3 px-2">
          {levelGroups.map((group) => (
            <div key={group.id} className="mb-4">
              {/* Level header */}
              <div className="flex items-center gap-2 px-3 py-1.5 mb-1">
                <LevelBadge group={group} />
                <span className="text-xs text-[var(--text-muted)] font-medium">
                  {group.lessons.filter((l) =>
                    completedLessons.includes(l.id)
                  ).length}
                  /{group.lessons.length}
                </span>
              </div>

              {/* Lessons */}
              {group.lessons.map((lesson) => {
                const isActive = lesson.id === activeLessonId;
                const isDone = completedLessons.includes(lesson.id);

                return (
                  <button
                    key={lesson.id}
                    onClick={() => {
                      onSelectLesson(lesson);
                      onClose();
                    }}
                    className={`
                      w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left
                      transition-all duration-150 mb-0.5 group
                      ${
                        isActive
                          ? "bg-[var(--accent)] text-white shadow-md"
                          : "text-[var(--text)] hover:bg-[var(--hover-bg)]"
                      }
                    `}
                  >
                    {/* Icon */}
                    <span className="text-lg leading-none flex-shrink-0">
                      {lesson.icon}
                    </span>

                    {/* Title */}
                    <span
                      className={`flex-1 text-sm font-medium truncate ${
                        isActive ? "text-white" : ""
                      }`}
                    >
                      {lesson.title}
                    </span>

                    {/* Completion checkmark */}
                    {isDone && !isActive && (
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
