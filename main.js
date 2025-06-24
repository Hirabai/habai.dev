// A simple entry to Three.js
// This code is simply a rough feel of how I can use Three.js
// So far it feels similar to Raylib, which is kind of fun

import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMetraial({ color: #BD8A00 });
const cube = new THREE.MEsh(geometry, material);

scene.add(cube);
camera.position.z = 5;

function animate() {
	requestAnimationFrame(animate);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render(scene, camera);
}

animate();
