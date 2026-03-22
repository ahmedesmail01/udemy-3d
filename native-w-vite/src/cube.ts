import * as THREE from "three";

export function animatedCube(element: HTMLCanvasElement) {
  console.log("Hello, World!");
  console.log(THREE);

  // scene
  const scene = new THREE.Scene();

  //loading manager
  const loadingManager = new THREE.LoadingManager();
  loadingManager.onStart = () => {
    console.log("Loading started");
  };

  loadingManager.onLoad = () => {
    console.log("Loading completed");
  };

  loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
    console.log(`Loading file: ${url} (${itemsLoaded} of ${itemsTotal})`);
  };

  loadingManager.onError = (url) => {
    console.error(`Error loading ${url}`);
  };

  const texture = new THREE.TextureLoader(loadingManager);
  const colorTexture = texture.load("/texture/color.jpg");

  // mesh
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  //   const geometry = new THREE.BufferGeometry();
  //   const vertices = new Float32Array([
  //     -1.0,
  //     -1.0,
  //     1.0, // v0
  //     1.0,
  //     -1.0,
  //     1.0, // v1
  //     1.0,
  //     1.0,
  //     1.0, // v2
  //     1.0,
  //     1.0,
  //     1.0, // v3
  //     -1.0,
  //     1.0,
  //     1.0, // v4
  //     -1.0,
  //     -1.0,
  //     1.0, // v5
  //   ]);

  //   geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));

  const material = new THREE.MeshBasicMaterial({
    map: colorTexture,
    // color: "purple",
    // wireframe: true,
  });
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

    mesh.rotation.y = (elapsedTime * Math.PI) / 2;
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
