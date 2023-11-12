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
    const alphacube = createBasicCube();
    
    alphacube.scale.set(0.75, 0.75, 0.75);
    alphacube.position.set(2.5, 0, 2);

    cube.rotation.set(Math.PI * 2, Math.PI * 0.25, 0);
    
    const light = createLight();

    cube.add(alphacube);
    scene.add(cube, light);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }
}

export { World };
