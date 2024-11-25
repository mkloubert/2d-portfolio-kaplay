import kaboom from "kaboom";

// Initialize a Kaboom instance with specific configuration options
export const k = kaboom({
  global: false, // Disable global access to Kaboom functions to avoid polluting the global namespace
  touchToMouse: true, // Enable touch inputs to simulate mouse inputs for touch devices
  canvas: document.getElementById("game") as HTMLCanvasElement, // Specify the HTML canvas element to render the game
  debug: false, // Enable debug mode for development; set to false for production to improve performance and security
});
