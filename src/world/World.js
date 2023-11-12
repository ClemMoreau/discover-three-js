import { createCamera } from './components/camera.js';
import { createBasicCube, createCube } from './components/cube.js';
import { createLight } from './components/light.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    const cube = createCube();
    cube.position.set(-2, 0, 0);
    const alphacube = createBasicCube();
    alphacube.position.set(2, 0, 0);
    const light = createLight();

    scene.add(cube, light, alphacube);

    const resizer = new Resizer(container, camera, renderer);
    resizer.onResize = () => {
      this.render();
    };
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }
}

export { World };
