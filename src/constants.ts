// Offset value used to adjust character animations or sprites
export const characterOffset = 16;

// Global scale factor applied to entities and the map for consistent rendering
export const scaleFactor = 4;

// Dialogue data mapping in-game objects to their respective dialogue content
// Each key represents the name of a game object, and its value contains the text to display when interacting with that object
export const dialogueData: Record<string, { [language: string]: string }> = {
  pc: {
    en: `This is my MacBook Pro. I work mostly in <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> these days.
I've made a lot of cool web and native apps in that language. I also love <a href="https://go.dev/" target="_blank">Golang</a> and <a href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" target="_blank">C#</a>. Anyway regardless of the language, I just love programming and want to learn <a href="https://www.rust-lang.org/" target="_blank">Rust</a> and <a href="https://www.python.org/" target="_blank">Python</a> later.
Here is my <a href="https://github.com/mkloubert" target="_blank">GitHub</a>!
Fun Fact: I use my mouse on the left, but I'm right-handed because I like to use both sides of my brain.`,
    de: `Das ist mein MacBook Pro. Heutzutage arbeite ich meistens mit <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>.
Ich habe viele coole Web- und native Apps in dieser Sprache entwickelt. Ich liebe auch <a href="https://go.dev/" target="_blank">Golang</a> und <a href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" target="_blank">C#</a>. Unabhaengig von der Sprache liebe ich es einfach zu programmieren und moechte spaeter <a href="https://www.rust-lang.org/" target="_blank">Rust</a> und <a href="https://www.python.org/" target="_blank">Python</a> lernen.
Hier ist mein <a href="https://github.com/mkloubert" target="_blank">GitHub</a>!
Fun Fact: Ich benutze meine Maus mit der linken Hand, bin aber Rechtshaender, weil ich gerne beide Gehirnhaelften benutze.`,
  },
  "gitfather-avatar": {
    en: `This is my avatar. I made it with <a href="https://www.midjourney.com/" target="_blank">Midjouney</a> from a photo of mine. It looks like <a href="https://en.wikipedia.org/wiki/Vito_Corleone" target="_blank">Don Vito Corleone</a> from <a href="https://en.wikipedia.org/wiki/The_Godfather" target="_blank">The Godfather</a> because my nick nowadays is <a href="https://kloubert.blog/" target="_blank">GitFather</a>. Btw: I love AI!`,
    de: `Das ist mein Avatar. Ich habe ihn mit <a href="https://www.midjourney.com/" target="_blank">Midjourney</a> aus einem Foto von mir erstellt. Er sieht aus wie <a href="https://en.wikipedia.org/wiki/Vito_Corleone" target="_blank">Don Vito Corleone</a> aus <a href="https://en.wikipedia.org/wiki/The_Godfather" target="_blank">Der Pate</a>, weil mein Spitzname heutzutage <a href="https://kloubert.blog/" target="_blank">GitFather</a> ist. Uebrigens: Ich liebe KI!`,
  },
  "sofa-table": {
    en: `That's my sofa. I like to relax here and watch YouTube, Disney+ & Co. 
I very like the german <a href="https://www.youtube.com/@ct3003" target="_blank">c't 3003 channel</a>!
The portfolio project was originally made by the great <a href="https://youtube.com/@jslegenddev" target="_blank">JSLegendDev</a>! I migrated the project to <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> and <a href="https://kaplayjs.com/" target="_blank">KAPLAY</a>.`,
    de: `Das ist mein Sofa. Ich entspanne mich gerne hier und schaue YouTube, Disney+ & Co. 
Ich mag besonders den deutschen <a href="https://www.youtube.com/@ct3003" target="_blank">c't 3003 Kanal</a>!
Das Portfolio-Projekt wurde urspruenglich vom grossartigen <a href="https://youtube.com/@jslegenddev" target="_blank">JSLegendDev</a> erstellt! Ich habe das Projekt auf <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> und <a href="https://kaplayjs.com/" target="_blank">KAPLAY</a> migriert.`,
  },
  tv: {
    en: `That's my TV! I very like the german <a href="https://www.youtube.com/@ct3003" target="_blank">c't 3003 channel</a> and the cool projects by <a href="https://www.freecodecamp.org/news/create-a-developer-portfolio-as-a-2d-game/" target="_blank">freeCodeCamp</a>! I am also a very big <a href="https://en.wikipedia.org/wiki/The_Matrix/" target="_blank">The Matrix</a> fan!`,
    de: `Das ist mein Fernseher! Ich mag den deutschen <a href="https://www.youtube.com/@ct3003" target="_blank">c't 3003 Kanal</a> und die coolen Projekte von <a href="https://www.freecodecamp.org/news/create-a-developer-portfolio-as-a-2d-game/" target="_blank">freeCodeCamp</a>! Ausserdem bin ich ein grosser Fan von <a href="https://en.wikipedia.org/wiki/The_Matrix/" target="_blank">The Matrix</a>!`,
  },
  bed: {
    en: `This where I sleep. Great ideas come when I'm lying on my bed. When an idea strikes, I often have to write it down or else I won't be able to sleep because my mental energy is consumed by it.`,
    de: `Hier schlafe ich. Grossartige Ideen kommen, wenn ich im Bett liege. Wenn mir eine Idee kommt, muss ich sie oft aufschreiben, sonst kann ich nicht schlafen, weil sie meinen Geist beschaeftigt.`,
  },
  resume: {
    en: `This is my desk and on it is my resume. <a href="https://cv.kloubert.dev/" target="_blank">Check it out?</a>`,
    de: `Das ist mein Schreibtisch und darauf liegt mein Lebenslauf. <a href="https://cv.kloubert.dev/" target="_blank">Moechtest du ihn anschauen?</a>`,
  },
  projects: {
    en: `You find a lot about my projects in my <a href="https://cv.kloubert.dev/" target="_blank">CV</a> and on <a href="https://github.com/mkloubert/" target="_blank">GitHub</a>.`,
    de: `Du findest viel ueber meine Projekte in meinem <a href="https://cv.kloubert.dev/" target="_blank">Lebenslauf</a> und auf <a href="https://github.com/mkloubert/" target="_blank">GitHub</a>.`,
  },
  library: {
    en: `There are a lot of programming books on my shelves. Nowadays I mostly read articles in the web. When I was a teenager my favorite books were about <a href="https://en.wikipedia.org/wiki/X86_assembly_language" target="_blank">Assembler programming on x86</a>, <a href="https://en.wikipedia.org/wiki/BASIC" target="_blank">BASIC</a> and <a href="https://en.wikipedia.org/wiki/Turbo_Pascal" target="_blank">Turbo Pascal 3</a>.`,
    de: `Auf meinen Regalen stehen viele Programmierbuecher. Heutzutage lese ich meist Artikel im Web. Als Teenager waren meine Lieblingsbuecher ueber <a href="https://en.wikipedia.org/wiki/X86_assembly_language" target="_blank">Assembler-Programmierung auf x86</a>, <a href="https://en.wikipedia.org/wiki/BASIC" target="_blank">BASIC</a> und <a href="https://en.wikipedia.org/wiki/Turbo_Pascal" target="_blank">Turbo Pascal 3</a>.`,
  },
  exit: {
    en: `If you want to exit GitFather's portfolio, just close the tab. You are welcome to connect with me on <a href="https://www.linkedin.com/in/marcel-kloubert-410013282/" target="_blank">LinkedIn</a> or <a href="https://github.com/mkloubert/" target="_blank">GitHub</a> as well!`,
    de: `Wenn du das Portfolio von GitFather verlassen moechtest, schliesse einfach den Tab. Du kannst dich gerne mit mir auf <a href="https://www.linkedin.com/in/marcel-kloubert-410013282/" target="_blank">LinkedIn</a> oder <a href="https://github.com/mkloubert/" target="_blank">GitHub</a> verbinden!`,
  },
};

let currentBrowserLanguage = "en";

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

  if (newCurrentBrowserLanguage === "de") {
    document.getElementById("close")!.innerHTML = "Schliessen";
    document.getElementById("move-note")!.innerHTML = "Tippen/Klicken, um sich zu bewegen<br />('d' = 🇩🇪, 'e' = 🇬🇧)";

    document.title = "Marcel J. Kloubert's Dungeon";
  } else {
    document.getElementById("close")!.innerHTML = "Close";
    document.getElementById("move-note")!.innerHTML = "Tap/Click around to move<br />('d' = 🇩🇪, 'e' = 🇬🇧)";

    document.title = "Marcel J. Kloubert's Dungeon";
  }
}
