// Offset value used to adjust character animations or sprites
export const characterOffset = 16;

// Global scale factor applied to entities and the map for consistent rendering
export const scaleFactor = 4;

// Dialogue data mapping in-game objects to their respective dialogue content
// Each key represents the name of a game object, and its value contains the text to display when interacting with that object
export const dialogueData: Record<string, any> = {
  pc: `This is my PC. I work mostly in JavaScript/TypeScript these days.
    I've made a couple of games in that language. I also like Golang and Python. Anyway regardless of the language, I just like programming.
    Here is my <a href="https://github.com/jslegenddev" target="_blank">Github</a>!`, // Dialogue for interacting with the PC
  "cs-degree": `This is my CS degree. I hung it on the wall because I'm proud of it. It was a very theoretical degree but I think it gave me a good foundation.`, // Dialogue for interacting with the CS degree
  "sofa-table": `That's my sofa. I like to relax here and watch YouTube. 
  I also make game programming tutorials on YouTube. Go sub to <a href="https://youtube.com/@jslegenddev" target="_blank">my channel</a>! (If you like the content)
  You'll learn how I built this portfolio you're currently playing through!`, // Dialogue for interacting with the sofa
  tv: `That's my TV. I've been watching tech youtubers a lot recently like :
   <a href="https://www.youtube.com/@ThePrimeTimeagen" target="_blank">Theprimeagen</a>, <a href="https://www.youtube.com/@t3dotgg" target="_blank">Theo - t3.gg</a>,
  <a href="https://www.youtube.com/@PirateSoftware" target="_blank">PirateSoftware</a> (sometimes) and <a href="https://www.youtube.com/@MelkeyDev" target="_blank">Melkey</a>!`, // Dialogue for interacting with the TV
  bed: `This where I sleep. Great ideas come when I'm lying on my bed. When an idea strikes, I often have to write it down or else I won't be able to sleep because my mental energy is consumed by it.`, // Dialogue for interacting with the bed
  resume: `This is my desk and on it is my resume. <a href="https://github.com/JSLegendDev/Resume/blob/main/JSLegend%20Resume-1.pdf" target="_blank">Check it out?</a>
  Contact me at jslegend@protonmail.com if you have any interesting job opportunities!`, // Dialogue for interacting with the desk and resume
  projects: `Info about this portfolio: It's made with the Kaboom.js library, which is a library for making games in JavaScript.
  Text is rendered with HTML/CSS. So the textbox you're currently reading is not rendered within canvas. Learn more about how to use
  Kaboom.js by watching some of my tutorials <a href="https://youtube.com/@jslegenddev" target="_blank">here</a>.`, // Dialogue for interacting with the project section
  library: `There are a lot of programming books on my shelves. There is even one in French (I also speak French btw).
  I probably only read one of them. Who else compulsively buys technical books without ever finishing them?`, // Dialogue for interacting with the library
  exit: `If you want to exit JSLegendDev's portfolio, just close the tab.`, // Dialogue for the exit point
};
