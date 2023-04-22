import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useEffect, useRef } from "react";
import { SceneType } from "../../../../types";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { createScene } from "./createScene";

const createScene = (
    sizes: { width: number; height: number },
    cameraPosition: { x?: number; y?: number; z?: number } = {}
) => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75,
        sizes.width / sizes.height,
        0.1,
        1000
    );
    const defaultCameraPosition = { x: 0, y: 0, z: 10 };
    camera.position.set(
        cameraPosition?.x ?? defaultCameraPosition.x,
        cameraPosition?.y ?? defaultCameraPosition.y,
        cameraPosition?.z ?? defaultCameraPosition.z
    );
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
    });
    renderer.setSize(sizes.width, sizes.height);

    return { scene, camera, renderer };
};

const loadModel = (
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

const loadCube = (
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

interface LightProps {
    color: number;
    intensity: number;
    distance: number;
    position: THREE.Vector3;
}

const addLights = (scene: THREE.Scene, lights: Array<LightProps>) => {
    lights.forEach((light) => {
        const pointLight = new THREE.PointLight(
            light.color,
            light.intensity,
            100
        );
        pointLight.position.copy(light.position);
        scene.add(pointLight);
    });
};

const Helpers = (
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

const Asset3d_old = ({ scenes }: { scenes: Array<SceneType> }) => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentRef = mountRef.current;
        let { clientWidth: width, clientHeight: height } = currentRef;

        /* 🌆 scene, 📷 camera, ✒️ renderer */
        const { scene, camera, renderer } = createScene(
            { width, height },
            { x: 0, y: 0, z: 5 }
        );

        /* mount renderer */
        currentRef?.appendChild(renderer.domElement);

        /* Load Models */
        loadModel(
            scene,
            scenes[0].path,
            { x: 0.1, y: 0.1, z: 0.1 },
            { x: 0, y: -5, z: 0 },
            "apple"
        );
        loadCube(scene, { x: 1, y: 1, z: 1 }, { x: 0, y: 0, z: 0 }, "cube");
        const matilda = scene.getObjectByName("apple");
        const cube = scene.getObjectByName("cube");

        /* light */
        addLights(scene, [
            {
                color: 0xffffff,
                intensity: 1.25,
                distance: 100,
                position: new THREE.Vector3(0, 10, 10),
            },
        ]);

        /* Helpers */
        Helpers(scene, camera, renderer);

        /* loop */
        const animate = () => {
            renderer.render(scene, camera);
            requestAnimationFrame(animate);

            matilda?.rotateY(0.01);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
        };

        animate();

        /* onWindowResize */
        const onWindowResize = () => {
            width = currentRef?.clientWidth;
            height = currentRef?.clientHeight;

            renderer.setSize(updatedWidht, updatedHeight);
            camera.aspect = updatedWidht / updatedHeight;
            camera.updateProjectionMatrix();
        };
        window.addEventListener("resize", onWindowResize);

        return () => {
            currentRef?.removeChild(renderer.domElement);
            window.removeEventListener("resize", onWindowResize);
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} className=" h-full w-full" />;
};

export default Asset3d_old;
