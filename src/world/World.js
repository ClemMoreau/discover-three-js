import { createCamera } from './components/camera.js';
import { createBasicCube, createCube } from './components/cube.js';
import { createControls } from './systems/controls.js';
import { createLight } from './components/light.js';
import { createScene } from './components/scene.js';
import { Loop } from './systems/Loop.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
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

    const controls = createControls(camera, renderer.domElement);

    const cube = createCube();
    const light = createLight();

    loop.updatables.push(controls);

    scene.add(cube, light);

    controls.addEventListener('change', () => {
      this.render();
    });

    const resizer = new Resizer(container, camera, renderer);
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
