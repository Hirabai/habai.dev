import './style.css';
import * as THREE from 'three';
import { SkyMesh } from 'three/examples/jsm/objects/SkyMesh.js';

// Window size
const width = window.innerWidth;
const height = window.innerHeight;

// Initializing camera
const camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 10 );
camera.position.z = 1;

// Scene
const scene = new THREE.Scene();
// Loader


const sky = new SkyMesh();
sky.scale.setScalar( 1000 );

/*
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
*/
scene.add(sky);
