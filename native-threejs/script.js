import * as THREE from "./three.module.min.js";

console.log("Hello, World!");
console.log(THREE);

//scene
const scene = new THREE.Scene();

//mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "purple" });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

//camera
const aspectRation = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(
  45,
  aspectRation.width / aspectRation.height,
  1,
  100
);
camera.position.z = 3;
scene.add(camera);

//renderer
const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(aspectRation.width, aspectRation.height);

//animate

const clock = new THREE.Clock();

const animate = () => {
  console.log("animate");

  const elapsedTime = clock.getElapsedTime();
  mesh.rotation.y = elapsedTime * Math.PI * 2;
  //   mesh.rotation.x = elapsedTime * Math.PI;

  renderer.render(scene, camera);

  window.requestAnimationFrame(animate);
};

animate();
