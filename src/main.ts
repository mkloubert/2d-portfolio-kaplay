import { characterOffset, dialogueData, scaleFactor } from "./constants";
import { k } from "./kaplayCtx";
import { displayDialogue, setCamScale } from "./utils";

k.loadRoot("./");

// Load the sprite sheet for the player and define animations
k.loadSprite("spritesheet", "spritesheet.png", {
  sliceX: 39, // Number of horizontal slices in the sprite sheet
  sliceY: 31, // Number of vertical slices in the sprite sheet
  anims: {
    "idle-down": 936 + characterOffset, // Idle animation facing down
    "walk-down": { from: 936 + characterOffset, to: 939 + characterOffset, loop: true, speed: 8 }, // Walking animation facing down
    "idle-side": 975 + characterOffset, // Idle animation facing sideways
    "walk-side": { from: 975 + characterOffset, to: 978 + characterOffset, loop: true, speed: 8 }, // Walking animation facing sideways
    "idle-up": 1014 + characterOffset, // Idle animation facing up
    "walk-up": { from: 1014 + characterOffset, to: 1017 + characterOffset, loop: true, speed: 8 }, // Walking animation facing up
  },
});

// Load the map sprite
k.loadSprite("map", "map.png");

// Set the background color of the game
k.setBackground(k.Color.fromHex("#311047"));

// Define the main game scene
k.scene("main", async () => {
  // Load map data from a JSON file
  const mapData = await (await fetch("map.json")).json();
  const layers = mapData.layers;

  // Add the map sprite to the scene
  const map = k.add([k.sprite("map"), k.pos(0), k.scale(scaleFactor)]);

  // Create the player entity with animations, collision, and movement properties
  const player = k.make([
    k.sprite("spritesheet", { anim: "idle-down" }), // Initial animation
    k.area({
      shape: new k.Rect(k.vec2(0, 3), 10, 10), // Collision shape
    }),
    k.body(), // Physics body
    k.anchor("center"), // Anchor to the center
    k.pos(), // Initial position
    k.scale(scaleFactor), // Scale based on the global scale factor
    {
      speed: 250, // Player movement speed
      direction: "down", // Initial direction
      isInDialogue: false, // Tracks if the player is in a dialogue
    },
    "player", // Tag for the player entity
  ]);

  // Loop through map layers to configure game boundaries and spawn points
  for (const layer of layers) {
    if (layer.name === "boundaries") {
      // Add boundary objects as static bodies
      for (const boundary of layer.objects) {
        map.add([
          k.area({
            shape: new k.Rect(k.vec2(0), boundary.width, boundary.height), // Define boundary shape
          }),
          k.body({ isStatic: true }), // Make boundary static
          k.pos(boundary.x, boundary.y), // Boundary position
          boundary.name, // Tag boundary by name
        ]);

        // Set up collision detection for dialogue triggers
        if (boundary.name) {
          player.onCollide(boundary.name, () => {
            player.isInDialogue = true;
            displayDialogue(
              dialogueData[boundary.name], // Display dialogue for this boundary
              () => (player.isInDialogue = false) // Reset dialogue state when finished
            );
          });
        }
      }
      continue;
    }

    if (layer.name === "spawnpoints") {
      // Set up spawn points for entities
      for (const entity of layer.objects) {
        if (entity.name === "player") {
          // Place the player at the spawn point
          player.pos = k.vec2(
            (map.pos.x + entity.x) * scaleFactor,
            (map.pos.y + entity.y) * scaleFactor
          );
          k.add(player); // Add the player to the scene
          continue;
        }
      }
    }
  }

  // Set the camera scale dynamically
  setCamScale(k);

  // Adjust camera scaling on window resize
  k.onResize(() => {
    setCamScale(k);
  });

  // Center the camera on the player with an offset
  k.onUpdate(() => {
    k.camPos(player.worldPos()!.x, player.worldPos()!.y - 100);
  });

  // Handle mouse clicks for player movement
  k.onMouseDown((mouseBtn) => {
    if (mouseBtn !== "left" || player.isInDialogue) return;

    const worldMousePos = k.toWorld(k.mousePos()); // Convert screen to world position
    player.moveTo(worldMousePos, player.speed); // Move player to the clicked position

    const mouseAngle = player.pos.angle(worldMousePos); // Calculate angle to mouse position

    // Define angle thresholds for directional animations
    const lowerBound = 50;
    const upperBound = 125;

    // Determine the direction based on the angle and play the corresponding animation
    if (mouseAngle > lowerBound && mouseAngle < upperBound && player.curAnim() !== "walk-up") {
      player.play("walk-up");
      player.direction = "up";
      return;
    }

    if (mouseAngle < -lowerBound && mouseAngle > -upperBound && player.curAnim() !== "walk-down") {
      player.play("walk-down");
      player.direction = "down";
      return;
    }

    if (Math.abs(mouseAngle) > upperBound) {
      player.flipX = false;
      if (player.curAnim() !== "walk-side") player.play("walk-side");
      player.direction = "right";
      return;
    }

    if (Math.abs(mouseAngle) < lowerBound) {
      player.flipX = true;
      if (player.curAnim() !== "walk-side") player.play("walk-side");
      player.direction = "left";
      return;
    }
  });

  // Stop animations when movement stops
  function stopAnims() {
    if (player.direction === "down") {
      player.play("idle-down");
      return;
    }
    if (player.direction === "up") {
      player.play("idle-up");
      return;
    }

    player.play("idle-side");
  }

  k.onMouseRelease(stopAnims); // Stop animations on mouse release
  k.onKeyRelease(stopAnims); // Stop animations on key release

  // Handle keyboard input for movement
  k.onKeyDown((/** key */) => {
    const keyMap = [
      k.isKeyDown("right"), // Right key pressed
      k.isKeyDown("left"), // Left key pressed
      k.isKeyDown("up"), // Up key pressed
      k.isKeyDown("down"), // Down key pressed
    ];

    let nbOfKeyPressed = 0; // Count of active keys
    for (const key of keyMap) {
      if (key) {
        nbOfKeyPressed++;
      }
    }

    if (nbOfKeyPressed > 1) return; // Prevent diagonal movement

    if (player.isInDialogue) return; // Skip movement if in dialogue

    if (keyMap[0]) {
      player.flipX = false;
      if (player.curAnim() !== "walk-side") player.play("walk-side");
      player.direction = "right";
      player.move(player.speed, 0); // Move right
      return;
    }

    if (keyMap[1]) {
      player.flipX = true;
      if (player.curAnim() !== "walk-side") player.play("walk-side");
      player.direction = "left";
      player.move(-player.speed, 0); // Move left
      return;
    }

    if (keyMap[2]) {
      if (player.curAnim() !== "walk-up") player.play("walk-up");
      player.direction = "up";
      player.move(0, -player.speed); // Move up
      return;
    }

    if (keyMap[3]) {
      if (player.curAnim() !== "walk-down") player.play("walk-down");
      player.direction = "down";
      player.move(0, player.speed); // Move down
    }
  });
});

// Start the main scene
k.go("main");
