import './style.css';
import * as THREE from 'three';
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';



// Window size
const width = window.innerWidth;
const height = window.innerHeight;

// Initializing camera
const camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 10 );
camera.position.z = 1;

const scene = new THREE.Scene();
