import THREE from "three";

export const loadCube = (
    scene: THREE.Scene,
    scale: { x: number; y: number; z: number },
    position: { x: number; y: number; z: number },
    modelName: string
) => {
    const cubeGeo = new THREE.BoxGeometry(1, 1, 1);
    const cubeMat = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(cubeGeo, cubeMat);

    // set scale, position, name
    cube.scale.set(scale.x, scale.y, scale.z);
    cube.position.set(position.x, position.y, position.z);
    cube.name = modelName;

    scene.add(cube);
};
