"use client";

import { useState, useCallback } from "react";

// ============================================================
// useEditor — manages per-lesson editor CSS state
// Keeps a map of lessonId → current CSS so switching lessons
// preserves each lesson's edits.
// ============================================================

interface EditorStore {
  /** Map of lessonId → current CSS text */
  cssMap: Record<string, string>;
  /** The currently active lesson id */
  activeId: string | null;
}

export function useEditor(defaultCSSMap: Record<string, string> = {}) {
  const [store, setStore] = useState<EditorStore>({
    cssMap: { ...defaultCSSMap },
    activeId: null,
  });

  /**
   * Update CSS for a specific lesson.
   * Call this whenever the user types in the editor.
   */
  const updateCSS = useCallback((lessonId: string, css: string) => {
    setStore((prev) => ({
      ...prev,
      cssMap: { ...prev.cssMap, [lessonId]: css },
    }));
  }, []);

  /**
   * Reset CSS for a lesson back to the provided default.
   */
  const resetCSS = useCallback(
    (lessonId: string, defaultCSS: string) => {
      setStore((prev) => ({
        ...prev,
        cssMap: { ...prev.cssMap, [lessonId]: defaultCSS },
      }));
    },
    []
  );

  /**
   * Set the active lesson id (used for tracking current lesson).
   */
  const setActiveLesson = useCallback((lessonId: string, defaultCSS: string) => {
    setStore((prev) => ({
      ...prev,
      activeId: lessonId,
      // Pre-populate default CSS if we haven't seen this lesson yet
      cssMap:
        lessonId in prev.cssMap
          ? prev.cssMap
          : { ...prev.cssMap, [lessonId]: defaultCSS },
    }));
  }, []);

  /**
   * Get the current CSS for a lesson (falls back to the default if not edited).
   */
  const getCSS = useCallback(
    (lessonId: string, defaultCSS: string) =>
      lessonId in store.cssMap ? store.cssMap[lessonId] : defaultCSS,
    [store.cssMap]
  );

  return { updateCSS, resetCSS, setActiveLesson, getCSS, store };
}
