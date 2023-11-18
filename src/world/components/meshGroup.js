import { 
  SphereGeometry, 
  Mesh, 
  MeshStandardMaterial, 
  MeshBasicMaterial, 
  MathUtils,
  Group,
 } from 'three';

function createMeshGroup() {
  const group = new Group();

  const geometry = new SphereGeometry(0.25, 16, 16);

  const material = new MeshStandardMaterial({
    color: 'indigo',
  });

  const protoSphere = new Mesh(geometry, material);
  group.add(protoSphere);

    for (let i = 0; i < 1; i += 0.001) {
    const clone = protoSphere.clone()

    clone.position.x = Math.cos(2 * Math.PI * i ); 
    clone.position.y = Math.sin(2 * Math.PI * i ); 
    clone.position.z = -i  * 5;

    clone.scale.multiplyScalar(0.01 + i );
    
    group.add(clone);
  }

  group.scale.multiplyScalar(2);

  const radiansPerSecond = MathUtils.degToRad(30);
  
  group.tick = (delta) => {
    group.rotation.z += delta * radiansPerSecond;
  }

  return group;
}

export { createMeshGroup };
