import * as THREE from 'three';
import { useEffect } from 'react';

function Canva() {
    useEffect(() => {
        const options = {
            targetSelector: "#scene",
            width: 800,
            height: 600,
        };

        // Configuração do renderer
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(options.width, options.height);

        // Seleciona o elemento DOM alvo
        const target = document.querySelector(options.targetSelector);
        if (target) {
            target.appendChild(renderer.domElement);
        } else {
            console.error("Target element not found");
            return;
        }

        // Configuração da cena, câmera e cubo
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, options.width / options.height, 0.1, 1000);
        camera.position.z = 5;

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Função de animação
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotação do cubo
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            // Renderiza a cena e a câmera
            renderer.render(scene, camera);
        };
        animate();

        // Cleanup: Remove o canvas e libera recursos
        return () => {
            if (target) {
                target.removeChild(renderer.domElement);
            }
        };
    }, []);

    return null; // Este componente não renderiza nada diretamente
}

function Scene() {
    return (
        <div id="scene" className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
            <Canva />
        </div>
    );
}

export default Scene;