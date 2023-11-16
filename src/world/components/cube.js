import { 
  BoxGeometry, 
  Mesh, 
  MeshStandardMaterial, 
  MeshBasicMaterial, 
  MathUtils,
  TextureLoader,
 } from 'three';

function createMaterial() {
  const textureLoader = new TextureLoader();

  const texture = textureLoader.load("/assets/textures/uv-test-bw.png");

  const material = new MeshStandardMaterial({ map: texture });
  // material.color.set("blue");

  return material;
}

function createCube() {
  // create a geometry
  const geometry = new BoxGeometry(2, 2, 2);

  // create a default (white) Basic material
  const material = createMaterial();

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);
  
  cube.rotation.set(-0.5, -0.1, 0.8);

  const radiansPerSecond = MathUtils.degToRad(30);
  let up = true;
  
  cube.tick = (delta) => {
    // cube.rotation.z += radiansPerSecond * delta;
    // cube.rotation.x += radiansPerSecond * delta;
    // cube.rotation.y += radiansPerSecond * delta;
  }

  return cube;
}

function createBasicCube() {

  const geometry = new BoxGeometry(2, 2, 2);

  const material = new MeshBasicMaterial({ color: 'purple' });

  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);

  return cube;
}

export { createCube, createBasicCube };
