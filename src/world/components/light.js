import { 
    DirectionalLight, 
    AmbientLight,
    HemisphereLight
 } from 'three';

function createLight() {
    // const ambientLight = new AmbientLight('white', 2);
    const ambientLight = new HemisphereLight(
        'white', // bright sky color
        'darkslategray', // dim ground color
        5, // intensity
    );
    
    const light = new DirectionalLight('white', 5);
    light.position.set(10, 10, 10);
    
    return {light, ambientLight};
}

export { createLight };