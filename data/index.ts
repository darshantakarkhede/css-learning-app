import { LevelGroup } from "@/types";
import { beginnerLessons } from "./lessons/beginner";
import { intermediateLessons } from "./lessons/intermediate";
import { advancedLessons } from "./lessons/advanced";

// ============================================================
// All level groups — consumed by Sidebar & routing
// ============================================================
export const levelGroups: LevelGroup[] = [
  {
    id: "beginner",
    label: "Beginner",
    color: "bg-emerald-100",
    textColor: "text-emerald-800",
    borderColor: "border-emerald-400",
    lessons: beginnerLessons,
  },
  {
    id: "intermediate",
    label: "Intermediate",
    color: "bg-blue-100",
    textColor: "text-blue-800",
    borderColor: "border-blue-400",
    lessons: intermediateLessons,
  },
  {
    id: "advanced",
    label: "Advanced",
    color: "bg-purple-100",
    textColor: "text-purple-800",
    borderColor: "border-purple-400",
    lessons: advancedLessons,
  },
];

/** Flat map of all lessons by id — handy for lookups */
export const lessonMap: Record<string, import("@/types").Lesson> =
  Object.fromEntries(
    levelGroups.flatMap((g) => g.lessons).map((l) => [l.id, l])
  );

/** Ordered flat array of all lessons */
export const allLessons = levelGroups.flatMap((g) => g.lessons);
