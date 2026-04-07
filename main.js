import './style.css';
import * as THREE from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'



// Window size
const width = window.innerWidth;
const height = window.innerHeight;

// Initializing camera
const camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 10 );
camera.position.z = 1;

const scene = new THREE.Scene();
scene.background = new THREE.Color('#000000');

const loader = new THREE.TextureLoader();
loader.load('./Public/images/darkened-clear-sky.webp', (texture) => { scene.background = texture; });


const geometry = new THREE.TextGeometry('habai.mk', {
  font: font,
  size: 3,
  height: 0.5,
  curveSegments: 4
});
geometry.center();

const material = new THREE.MeshPhongMaterial({color: '#ffffff', specular: '#ffffff' });

const mesh = new THREE.Mesh(geometry, material);
mesh.name = "habai.mk";

scene.add(mesh);
