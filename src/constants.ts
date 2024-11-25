// Offset value used to adjust character animations or sprites
export const characterOffset = 16;

// Global scale factor applied to entities and the map for consistent rendering
export const scaleFactor = 4;

// Dialogue data mapping in-game objects to their respective dialogue content
// Each key represents the name of a game object, and its value contains the text to display when interacting with that object
export const dialogueData: Record<string, string> = {
  pc: `This is my MacBook Pro. I work mostly in TypeScript these days.
I've made a lot of cool web and native apps in that language. I also love Golang and C#. Anyway regardless of the language, I just love programming and want to learn Rust and Python later.
Here is my <a href="https://github.com/mkloubert" target="_blank">GitHub</a>!
Fun Fact: I use my mouse on the left, but I'm right-handed because I like to use both sides of my brain.`, // Dialogue for interacting with the sofa
  "gitfather-avatar": `This is my avatar. I made it with <a href="https://www.midjourney.com/" target="_blank">Midjouney</a> from a photo of mine. It looks like <a href="https://en.wikipedia.org/wiki/Vito_Corleone" target="_blank">Don Vito Corleone</a> from <a href="https://en.wikipedia.org/wiki/The_Godfather" target="_blank">The Godfather</a> because my nick nowadays is <a href="https://kloubert.blog/" target="_blank">GitFather</a>. Btw: I love AI!`, // Dialogue for interacting with the CS degree
  
  "sofa-table": `That's my sofa. I like to relax here and watch YouTube, Disney+ & Co. 
I very like the german <a href="https://www.youtube.com/@ct3003" target="_blank">c't 3003 channel</a>!
The portfolio project was originally made by the great <a href="https://youtube.com/@jslegenddev" target="_blank">JSLegendDev</a>! I migrated the project to <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> and <a href="https://kaplayjs.com/" target="_blank">KAPLAY</a>.`, // Dialogue for interacting with the sofa
  tv: `That's my TV! I very like the german <a href="https://www.youtube.com/@ct3003" target="_blank">c't 3003 channel</a> and the cool projects by <a href="https://www.freecodecamp.org/news/create-a-developer-portfolio-as-a-2d-game/" target="_blank">freeCodeCamp</a>!`, // Dialogue for interacting with the TV
  bed: `This where I sleep. Great ideas come when I'm lying on my bed. When an idea strikes, I often have to write it down or else I won't be able to sleep because my mental energy is consumed by it.`, // Dialogue for interacting with the bed
  resume: `This is my desk and on it is my resume. <a href="https://cv.kloubert.dev/" target="_blank">Check it out?</a>`, // Dialogue for interacting with the desk and resume
  projects: `You find a lot about my projects in my <a href="https://cv.kloubert.dev/" target="_blank">CV</a> and on <a href="https://github.com/mkloubert/" target="_blank">GitHub</a>.`, // Dialogue for interacting with the project section
  library: `There are a lot of programming books on my shelves. Nowadays I mostly read articles in the web. When I was a teenager my favorite books were about <a href="https://en.wikipedia.org/wiki/X86_assembly_language" target="_blank">Assembler programming on x86</a>, <a href="https://en.wikipedia.org/wiki/BASIC" target="_blank">BASIC</a> and <a href="https://en.wikipedia.org/wiki/Turbo_Pascal" target="_blank">Turbo Pascal 3</a>.`, // Dialogue for interacting with the library
  exit: `If you want to exit GitFather's portfolio, just close the tab. You are welcome to connect with me on <a href="https://www.linkedin.com/in/marcel-kloubert-410013282/" target="_blank">LinkedIn</a> or <a href="https://github.com/mkloubert/" target="_blank">GitHub</a> as well!`, // Dialogue for the exit point
};
