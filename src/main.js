import { World } from './world/World.js';

let isLooping = false;
async function main() {
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // 1. Create an instance of the World app
  const world = new World(container);
  
  await world.init();

  // 2. Render the scene
  world.start();
}

main().catch((err) => {
  console.error(err);
});
