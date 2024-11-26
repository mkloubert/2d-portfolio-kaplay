import kaplay from "kaplay";

// Initialize a KAPLAY instance with specific configuration options
export const k = kaplay({
  global: false, // Disable global access to KAPLAY functions to avoid polluting the global namespace
  touchToMouse: true, // Enable touch inputs to simulate mouse inputs for touch devices
  canvas: document.getElementById("game") as HTMLCanvasElement, // Specify the HTML canvas element to render the game
  debug: import.meta.env.MODE === 'development', // Enable debug mode for development; set to false for production to improve performance and security
});
