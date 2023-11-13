import { DirectionalLight, PointLight, SpotLight, RectAreaLight } from 'three';

function createLight() {
    const light = new DirectionalLight('white', 8);

    light.position.set(10, 10, 10);

    light.tick = (delta) => {
        // light.position.z -= delta * 2;
    }
    
    return light;
}

export { createLight };