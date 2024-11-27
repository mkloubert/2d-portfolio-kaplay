import translations from "./translations.json";

let currentBrowserLanguage = "en";

// Offset value used to adjust character animations or sprites
export const characterOffset = 16;

// Global scale factor applied to entities and the map for consistent rendering
export const scaleFactor = 4;

// Dialogue data mapping in-game objects to their respective dialogue content
// Each key represents the name of a game object, and its value contains the text to display when interacting with that object
export const dialogueData: Record<string, { [language: string]: string }> =
  translations.dialogueData;

/**
 * Getter for internal `currentBrowserLanguage`
 *
 * @returns Value of `currentBrowserLanguage`
 */
export function getCurrentBrowserLanguage(): string {
  return currentBrowserLanguage;
}

/**
 * Setter for internal `currentBrowserLanguage`
 *
 * @param newValue - New value for `currentBrowserLanguage`
 */
export function setCurrentBrowserLanguage(newValue: string) {
  const newCurrentBrowserLanguage = (currentBrowserLanguage = newValue || "en");

  const { close: closeLabel, moveNote, title: documentTitle } = translations;

  if (newCurrentBrowserLanguage === "de") {
    document.getElementById("close")!.innerHTML = closeLabel["de"];
    document.getElementById("move-note")!.innerHTML = moveNote["de"];

    document.title = documentTitle["de"];
  } else {
    document.getElementById("close")!.innerHTML = closeLabel["en"];
    document.getElementById("move-note")!.innerHTML = moveNote["en"];

    document.title = documentTitle["en"];
  }
}
