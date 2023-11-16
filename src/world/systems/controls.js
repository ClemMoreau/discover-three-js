import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function createControls(camera, canvas) {
    const controls = new OrbitControls(camera, canvas);

    controls.enableDamping = true;
    controls.listenToKeyEvents(window);
    // controls.autoRotate = true;
    controls.autoRotateSpeed = 1;

    controls.tick = () => controls.update();

    controls.moveTo = () => {
        camera.position.set(1, 2, 3);

        camera.rotation.set(0.5, 0, 0);

        controls.update();
    }


    return controls;
}

export { createControls };