import THREE from "three";

export const createScene = (
    sizes: { width: number; height: number },
) => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75,
        sizes.width / sizes.height,
        0.1,
        1000
    );
    const cameraPosition = { x: 0, y: 0, z: 5 };
    const defaultCameraPosition = { x: 0, y: 0, z: 5 };
    camera.position.set(
        cameraPosition?.x ?? defaultCameraPosition.x,
        cameraPosition?.y ?? defaultCameraPosition.y,
        cameraPosition?.z ?? defaultCameraPosition.z
    );

    return { scene, camera };
};
