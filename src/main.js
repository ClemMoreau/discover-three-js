import { World } from './world/World.js';

let isLooping = false;
function main() {
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // 1. Create an instance of the World app
  const world = new World(container);

  // 2. Render the scene
  // world.start();

  const button = document.querySelector('#start-button');
  button.addEventListener('click', () => {
    isLooping ? world.stop() : world.start();
    isLooping ? button.textContent = 'Start' : button.textContent = 'Stop';
    isLooping = !isLooping;
  });

}

main();
