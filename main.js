import './style.css';
import * as THREE from 'three';
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';
import { FontLoader } from 'three/addons/loader/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';


// Window size
const width = window.innerWidth;
const height = window.innerHeight;

// Initializing camera
const camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 10 );
camera.position.z = 1;

// Initializing scene, fonts, and other three.js functions
const scene = new THREE.Scene();
const loader = new FontLoader();


const font = await loader.loadAsync('./Public/fonts/helvetiker_regular.typeface.json');
const geometry = new TextGeometry( "habai", {
  font: font,
  size: 80,
  depth: 5,
  curveSegments: 12
});
