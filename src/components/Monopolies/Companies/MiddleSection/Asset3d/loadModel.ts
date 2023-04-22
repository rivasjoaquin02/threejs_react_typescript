import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const loadModel = (
    scene: THREE.Scene,
    path: string,
    scale: { x: number; y: number; z: number },
    position: { x: number; y: number; z: number },
    modelName: string,
    onProgress?: (event: ProgressEvent<EventTarget>) => void
) => {
    const loader = new GLTFLoader();
    loader.load(
        path,
        (gltf) => {
            const loadedScene = gltf.scene;
            loadedScene.scale.set(scale.x, scale.y, scale.z);
            loadedScene.position.set(position.x, position.y, position.z);
            loadedScene.name = modelName;
            scene.add(loadedScene);
        },
        onProgress, // progress callback
        (error) => {
            console.error(`Error loading model ${modelName}`, error);
        }
    );
};
