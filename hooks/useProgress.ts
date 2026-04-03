"use client";

import { useState, useEffect, useCallback } from "react";
import { UserProgress } from "@/types";

// ============================================================
// useProgress — manages lesson/challenge completion state
// persisted to localStorage
// ============================================================

const STORAGE_KEY = "css-learner-progress";

const defaultProgress: UserProgress = {
  completedLessons: [],
  completedChallenges: [],
  lastVisitedLesson: null,
};

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(defaultProgress);
  const [hydrated, setHydrated] = useState(false);

  // Load from localStorage on mount (client-only)
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        setProgress(JSON.parse(raw) as UserProgress);
      }
    } catch {
      // ignore parse errors
    }
    setHydrated(true);
  }, []);

  // Persist to localStorage whenever progress changes
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // ignore storage errors (e.g. private mode)
    }
  }, [progress, hydrated]);

  /** Mark a lesson as complete */
  const completeLesson = useCallback((lessonId: string) => {
    setProgress((prev) => ({
      ...prev,
      completedLessons: prev.completedLessons.includes(lessonId)
        ? prev.completedLessons
        : [...prev.completedLessons, lessonId],
      lastVisitedLesson: lessonId,
    }));
  }, []);

  /** Mark a challenge as complete */
  const completeChallenge = useCallback((challengeId: string) => {
    setProgress((prev) => ({
      ...prev,
      completedChallenges: prev.completedChallenges.includes(challengeId)
        ? prev.completedChallenges
        : [...prev.completedChallenges, challengeId],
    }));
  }, []);

  /** Record the last visited lesson (without marking complete) */
  const visitLesson = useCallback((lessonId: string) => {
    setProgress((prev) => ({ ...prev, lastVisitedLesson: lessonId }));
  }, []);

  /** Reset all progress */
  const resetProgress = useCallback(() => {
    setProgress(defaultProgress);
  }, []);

  const isLessonComplete = (id: string) =>
    progress.completedLessons.includes(id);
  const isChallengeComplete = (id: string) =>
    progress.completedChallenges.includes(id);

  return {
    progress,
    hydrated,
    completeLesson,
    completeChallenge,
    visitLesson,
    resetProgress,
    isLessonComplete,
    isChallengeComplete,
  };
}
