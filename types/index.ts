// ============================================================
// TYPES — CSS Learning App
// ============================================================

/** Difficulty levels for organizing content */
export type Level = "beginner" | "intermediate" | "advanced";

/** A single challenge the user must solve */
export interface Challenge {
  id: string;
  title: string;
  description: string;
  /** The CSS the user should write (or approximate) */
  hint: string;
  /** Pre-written HTML structure for the challenge sandbox */
  htmlTemplate: string;
  /** The starting CSS given to the user */
  starterCSS: string;
  /** CSS applied to render the "expected" output */
  solutionCSS: string;
}

/** A single lesson/topic inside a level */
export interface Lesson {
  id: string;
  /** Short title shown in the sidebar */
  title: string;
  /** Level this lesson belongs to */
  level: Level;
  /** Emoji or icon shorthand */
  icon: string;
  /** Full explanation in plain text (supports \n for paragraphs) */
  explanation: string;
  /** Key points bullet list */
  keyPoints: string[];
  /** HTML shown in the live preview sandbox */
  previewHTML: string;
  /** Default CSS loaded into the editor for this lesson */
  defaultCSS: string;
  /** Optional challenges attached to the lesson */
  challenges: Challenge[];
}

/** A level grouping with metadata */
export interface LevelGroup {
  id: Level;
  label: string;
  color: string;          // Tailwind bg colour class for badge
  textColor: string;      // Tailwind text colour class
  borderColor: string;    // Tailwind border colour class
  lessons: Lesson[];
}

/** Per-lesson editor state */
export interface EditorState {
  css: string;
  isDirty: boolean;       // user has edited from the default
}

/** Overall user progress saved to localStorage */
export interface UserProgress {
  completedLessons: string[];        // lesson ids
  completedChallenges: string[];     // challenge ids
  lastVisitedLesson: string | null;
}
