import THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const Helpers = (
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer
) => {
    // 💫 Sets orbit control to move the camera around
    const orbit = new OrbitControls(camera, renderer.domElement);
    orbit.update();

    // 📏 Adds a camera helper to the scene for debugging
    const cameraHelper = new THREE.CameraHelper(camera);
    scene.add(cameraHelper);

    // 📏 Sets a 12 by 12 gird helper
    const gridHelper = new THREE.GridHelper(12, 12);
    scene.add(gridHelper);

    // Sets the x, y, and z axes with each having a length of 4
    const axesHelper = new THREE.AxesHelper(4);
    scene.add(axesHelper);

    // 💡 Adds a directional light to the scene
    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(-1, 2, 4);
    scene.add(light);
};
