import { BoxGeometry, Mesh, MeshStandardMaterial, MeshBasicMaterial, MathUtils } from 'three';


function createCube() {
  // create a geometry
  const geometry = new BoxGeometry(2, 2, 2);
  
  // create a default (white) Basic material
  const material = new MeshStandardMaterial({ color: 'purple' });
  
  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);
  
  cube.rotation.set(-0.5, -0.1, 0.8);

  const radiansPerSecond = MathUtils.degToRad(30);
  let up = true;
  
  cube.tick = (delta) => {
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;

    // cube.position.y += 2 * delta * (up ? 1 : -1);
    // cube.position.x += 2 * delta * (up ? 1 : -1);

    // up = cube.position.y >= 2 ? false : cube.position.y <= -2 ? true : up;
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
