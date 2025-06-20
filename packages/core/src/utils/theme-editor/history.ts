import type { ThemeChange } from "../../types/theme";
import { getCSSVariable, setCSSVariable } from "../theme/css-vars";

let changeHistory: ThemeChange[] = [];
let currentChangeIndex = -1;

const MAX_HISTORY_LENGTH = 50;

/**
 * Generates a unique ID for a theme change.
 */
function generateChangeId(): string {
  return `change_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
}

/**
 * Records a theme variable change in history and trims excess entries.
 */
export function recordThemeChange(
  variable: string,
  oldValue: string,
  newValue: string,
  category: string,
): void {
  // Remove any forward history when a new change occurs
  changeHistory = changeHistory.slice(0, currentChangeIndex + 1);

  changeHistory.push({
    id: generateChangeId(),
    timestamp: Date.now(),
    variable,
    oldValue,
    newValue,
    category,
  });

  currentChangeIndex = changeHistory.length - 1;

  // Limit history size
  if (changeHistory.length > MAX_HISTORY_LENGTH) {
    const offset = changeHistory.length - MAX_HISTORY_LENGTH;
    changeHistory = changeHistory.slice(offset);
    currentChangeIndex = Math.max(0, currentChangeIndex - offset);
  }
}

/**
 * Applies a new value to a theme variable and records the change if it's different.
 */
export function applyThemeVariable(
  name: string,
  value: string,
  category: string,
): void {
  const oldValue = getCSSVariable(name);
  if (oldValue !== value) {
    setCSSVariable(name, value);
    recordThemeChange(name, oldValue, value, category);
  }
}

/**
 * Undoes the last theme change.
 */
export function undoLastChange(): boolean {
  if (currentChangeIndex < 0) return false;

  const change = changeHistory[currentChangeIndex];
  setCSSVariable(change.variable, change.oldValue);
  currentChangeIndex--;

  return true;
}

/**
 * Redoes the next theme change.
 */
export function redoNextChange(): boolean {
  if (currentChangeIndex >= changeHistory.length - 1) return false;

  currentChangeIndex++;
  const change = changeHistory[currentChangeIndex];
  setCSSVariable(change.variable, change.newValue);

  return true;
}

/**
 * Returns the full change history along with current state.
 */
export function getChangeHistory() {
  return {
    changes: [...changeHistory],
    currentIndex: currentChangeIndex,
    canUndo: currentChangeIndex >= 0,
    canRedo: currentChangeIndex < changeHistory.length - 1,
  };
}

/**
 * Clears all theme change history.
 */
export function clearChangeHistory(): void {
  changeHistory = [];
  currentChangeIndex = -1;
}
