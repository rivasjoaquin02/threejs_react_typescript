import THREE from "three";

interface LightProps {
    color: number;
    intensity: number;
    distance: number;
    position: THREE.Vector3;
}

export const addLights = (scene: THREE.Scene, lights: Array<LightProps>) => {
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
