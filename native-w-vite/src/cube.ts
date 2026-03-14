import * as THREE from "three";

export function animatedCube(element: HTMLCanvasElement) {
  console.log("Hello, World!");
  console.log(THREE);

  // scene
  const scene = new THREE.Scene();

  // mesh
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: "purple" });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // size
  const sizes = {
    width: element.clientWidth || 400,
    height: element.clientHeight || 400,
  };

  // camera
  const camera = new THREE.PerspectiveCamera(
    45,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.z = 3;
  scene.add(camera);

  // renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: element,
    antialias: true,
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(sizes.width, sizes.height, false);

  // animate
  const clock = new THREE.Clock();

  const animate = () => {
    const elapsedTime = clock.getElapsedTime();

    mesh.rotation.y = elapsedTime * Math.PI * 2;
    mesh.rotation.x = elapsedTime * 0.5;

    renderer.render(scene, camera);

    window.requestAnimationFrame(animate);
  };

  animate();

  // resize
  window.addEventListener("resize", () => {
    const width = element.clientWidth || 400;
    const height = element.clientHeight || 400;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height, false);
  });
}
