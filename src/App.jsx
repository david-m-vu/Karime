import { useEffect } from "react";
import * as THREE from "three";
import SceneInit from "./lib/SceneInit";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import "./App.css";

function App() {
    useEffect(() => {
        const test = new SceneInit("myThreeJsCanvas");
        test.initialize();
        test.animate();

        // const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
        // const boxMaterial = new THREE.MeshNormalMaterial();
        // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

        // test.scene.add(boxMesh);

        //ground

        // const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
        // groundGeometry.rotateX(-Math.PI / 2);
        // const groundMaterial = new THREE.MeshStandardMaterial({
        //     color: 0x555555,
        //     side: THREE.DoubleSide,
        // });
        // const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
        // groundMesh.castShadow = false;
        // groundMesh.receiveShadow = true;

        // test.scene.add(groundMesh);
        // const spotLight = new THREE.SpotLight(0xffffff, 3000, 100, 0.22, 1);
        // spotLight.position.set(0, 25, 0);
        // spotLight.castShadow = true;
        // spotLight.shadow.bias = -0.0001;
        // test.scene.add(spotLight);

        // miku

        const loader = new GLTFLoader();
        loader.load('/miku/scene.gltf', (gltf) => {
                const mesh = gltf.scene;
                test.scene.add(mesh);
             },
            (xhr) => {
                console.log(`loading ${(xhr.loaded / xhr.total) * 100}%`);
            },
            (error) => {
                console.error(error);
            }
        );
    }, []);

    return (
        <div>
            <canvas id="myThreeJsCanvas" />
            {/* <div className="magic">
              <div className="playground">
                
              </div>
            </div> */}
        </div>
    );
}

export default App;
