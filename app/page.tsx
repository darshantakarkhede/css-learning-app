"use client";

// ============================================================
// page.tsx — App shell
// Orchestrates: TopBar, Sidebar, WelcomeScreen / ContentArea
// ============================================================

import React, { useState, useCallback, useEffect } from "react";
import { Lesson } from "@/types";
import { allLessons, lessonMap } from "@/data";
import { useProgress } from "@/hooks/useProgress";
import { useTheme } from "@/hooks/useTheme";
import { useEditor } from "@/hooks/useEditor";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import ContentArea from "@/components/ContentArea";
import WelcomeScreen from "@/components/WelcomeScreen";

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();
  const {
    progress,
    hydrated,
    completeLesson,
    completeChallenge,
    visitLesson,
    isLessonComplete,
  } = useProgress();

  const { getCSS, updateCSS, resetCSS, setActiveLesson } = useEditor();

  const [activeLesson, setActiveLessonState] = useState<Lesson | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // On hydration, restore last visited lesson
  useEffect(() => {
    if (hydrated && progress.lastVisitedLesson) {
      const lesson = lessonMap[progress.lastVisitedLesson];
      if (lesson) {
        setActiveLessonState(lesson);
        setActiveLesson(lesson.id, lesson.defaultCSS);
      }
    }
  // Only run once on hydration
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated]);

  const handleSelectLesson = useCallback(
    (lesson: Lesson) => {
      setActiveLessonState(lesson);
      setActiveLesson(lesson.id, lesson.defaultCSS);
      visitLesson(lesson.id);
    },
    [setActiveLesson, visitLesson]
  );

  const handleCSSChange = useCallback(
    (css: string) => {
      if (activeLesson) updateCSS(activeLesson.id, css);
    },
    [activeLesson, updateCSS]
  );

  const handleReset = useCallback(() => {
    if (activeLesson) resetCSS(activeLesson.id, activeLesson.defaultCSS);
  }, [activeLesson, resetCSS]);

  const handleComplete = useCallback(() => {
    if (activeLesson) completeLesson(activeLesson.id);
  }, [activeLesson, completeLesson]);

  const handleChallengeComplete = useCallback(
    (challengeId: string) => {
      completeChallenge(challengeId);
    },
    [completeChallenge]
  );

  const currentCSS = activeLesson
    ? getCSS(activeLesson.id, activeLesson.defaultCSS)
    : "";

  const lastLesson = progress.lastVisitedLesson
    ? lessonMap[progress.lastVisitedLesson] ?? null
    : null;

  return (
    <div className="flex flex-col h-full bg-[var(--bg)]">
      <TopBar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenSidebar={() => setSidebarOpen(true)}
      />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          activeLessonId={activeLesson?.id ?? null}
          completedLessons={progress.completedLessons}
          onSelectLesson={handleSelectLesson}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="flex-1 flex flex-col overflow-hidden">
          {activeLesson ? (
            <ContentArea
              lesson={activeLesson}
              css={currentCSS}
              isCompleted={isLessonComplete(activeLesson.id)}
              completedChallenges={progress.completedChallenges}
              onCSSChange={handleCSSChange}
              onReset={handleReset}
              onComplete={handleComplete}
              onChallengeComplete={handleChallengeComplete}
            />
          ) : (
            <WelcomeScreen
              completedCount={progress.completedLessons.length}
              totalCount={allLessons.length}
              lastLesson={lastLesson}
              onSelectLesson={handleSelectLesson}
            />
          )}
        </main>
      </div>
    </div>
  );
}
