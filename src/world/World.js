import { loadBirds } from './components/birds/birds.js';
import { createCamera } from './components/camera.js';
import { createControls } from './systems/controls.js';
import { createLight } from './components/light.js';
import { createScene } from './components/scene.js';
import { Train } from './components/Train/Train.js';
import { Loop } from './systems/Loop.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { createAxesHelper, createGridHelper } from './components/helpers.js';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let controls;
let renderer;
let scene;
let loop; 

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer);

    container.append(renderer.domElement);

    controls = createControls(camera, renderer.domElement);
    const {light, ambientLight} = createLight();
    const train = new Train();

    loop.updatables.push(controls, train);
    scene.add(light, ambientLight);

    const resizer = new Resizer(container, camera, renderer);
  }

  async init () {
    const { parrot, flamingo, stork } = await loadBirds();

    controls.target.copy(parrot.position);

    scene.add(parrot, flamingo, stork);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
