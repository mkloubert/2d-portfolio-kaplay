import type { KAPLAYCtx } from "kaplay";
import { dialogueData, getCurrentBrowserLanguage } from "./constants";

/**
 * Displays a dialogue on the screen one character at a time and allows the user to close it.
 *
 * @param text - The text content to display in the dialogue box.
 * @param onDisplayEnd - Callback function triggered when the dialogue display ends.
 */
export function displayDialogue(
  text: string,
  onDisplayEnd: (...args: unknown[]) => unknown
) {
  // Get references to the dialogue UI container and the dialogue text element
  const dialogueUI = document.getElementById("textbox-container")!;
  const dialogue = document.getElementById("dialogue")!;

  // Make the dialogue UI visible
  dialogueUI.style.display = "block";

  // Initialize variables to control the text animation
  let index = 0; // Current character index in the text
  let currentText = ""; // Text content displayed so far

  // Interval for updating the text one character at a time
  const intervalRef = setInterval(() => {
    if (index < text.length) {
      currentText += text[index];
      dialogue.innerHTML = currentText; // Update the dialogue text element
      index++;
    } else {
      // Clear the interval when all characters are displayed
      clearInterval(intervalRef);
    }
  }, 1); // Interval duration in milliseconds

  // Get reference to the close button
  const closeBtn = document.getElementById("close")!;

  // Event handler for the close button click
  const onCloseBtnClick = () => {
    clearInterval(intervalRef); // Clear the interval
    onDisplayEnd(); // Trigger the callback function

    dialogueUI.style.display = "none"; // Hide the dialogue UI
    dialogue.innerHTML = ""; // Clear the dialogue content

    closeBtn.removeEventListener("click", onCloseBtnClick); // Remove the event listener
  };

  // Add a click event listener to the close button
  closeBtn.addEventListener("click", onCloseBtnClick);

  // Allow closing the dialogue with the Enter key
  addEventListener("keypress", (key) => {
    if (key.code === "Enter") {
      closeBtn.click(); // Simulate a close button click
    }
  });
}

/**
 * Returns a key of the current language
 *
 * @returns The language
 */
export function getCurrentLang(): string {
  return getCurrentBrowserLanguage();
}

/**
 * Returns a translation of a dialog text by the current language
 *
 * @param key - The key of the dialog text
 *
 * @returns The translation
 */
export function getDialogueData(key: string): string {
  return String(dialogueData[key]?.[getCurrentLang()] ?? key ?? "");
}

/**
 * Sets the camera scale dynamically based on the aspect ratio of the screen.
 *
 * @param k - The KAPLAY context, which provides utility functions and settings.
 */
export function setCamScale(k: KAPLAYCtx) {
  // Calculate the screen's aspect ratio (width divided by height)
  const resizeFactor = k.width() / k.height();

  // Adjust the camera scale based on the aspect ratio
  if (resizeFactor < 1) {
    // Narrow screens (portrait): use a scale factor of 1
    k.camScale(k.vec2(1));
  } else {
    // Wide screens (landscape): use a larger scale factor
    k.camScale(k.vec2(1.5));
  }
}
