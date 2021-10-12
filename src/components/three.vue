<script setup lang="ts">
import { ref, onMounted } from "vue";
const {
  Scene,
  PointLight,
  AmbientLight,
  OrthographicCamera,
  PerspectiveCamera,
  TextureLoader,
  AxesHelper,
  TextGeometry,
  MeshLambertMaterial,
  Vector2,
  SphereGeometry,
  Mesh,
  WebGLRenderer,
  OrbitControls,
} = THREE;
const canvas = ref(0);
onMounted(() => {
  let div = canvas.value;

  /**
   * 1. 创建场景对象Scene
   */
  var scene = new Scene();
  /**
   * 2. 光源设置
   */
  var ambient = new AmbientLight("#ffffff");
  scene.add(ambient);

  /**
   * 3. 相机设置
   */
  var width = window.innerWidth;
  var height = window.innerHeight;
  var k = width / height;
  var s = 200;

  var camera = new PerspectiveCamera(30, width / height, 1, 100000);
  camera.position.set(1000, 1000, 1000);
  camera.lookAt(scene.position);
  /**
   * 4. 创建网格模型
   */
  var mesh;
  var textureLoader = new TextureLoader();
  var axisHelper = new AxesHelper(2500);
  scene.add(axisHelper);
  /**
   * 4.1 贴图
   */
  var texture = new TextureLoader().load("../assets/a.jpg", function (texture) {
    const material = new MeshLambertMaterial({
      map: texture,
    });

    var geometry = new SphereGeometry(150, 99, 99);
    mesh = new Mesh(geometry, material);
    scene.add(mesh);
    /**
     * 5.创建渲染器对象
     */
    var renderer = new WebGLRenderer();
    renderer.setSize(width - 0, height - 4);
    renderer.setClearColor("lightblue", 1);
    div.appendChild(renderer.domElement);

    function anime() {
      requestAnimationFrame(anime);
      scene.rotation.x += 0.01;
      scene.rotation.y += 0.01;
      render();
    }
    function render() {
      renderer.render(scene, camera);
    }
    anime();
    var controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener("change", render);
  });
});

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <div ref="canvas"></div>
</template>

<style scoped>
div {
  height: 100vh;
  background: pink;
}
</style>
