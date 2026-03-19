import './style.css';
import * as THREE from 'three';
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';

// Window size
const width = window.innerWidth;
const height = window.innerHeight;

// Initializing camera
const camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 10 );
camera.position.z = 1;

// Setting up the background I want
const scene = new THREE.Scene();
const loader = new THREE.SVGLoader();
const bgTexture = loader.load('./Public/images/darkened-clear-sky.svg');


const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( width, height );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

// Render Stage
function animate( time ) {
	renderer.render( bgTexture, camera );
}
