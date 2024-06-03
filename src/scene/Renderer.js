import SceneLayerRenderer from "../layer/Renderer.js";

export default class {
  scene;

  constructor(scene) {
    this.scene = scene;
  }

  render(canvas) {
    this.scene.layers.sort((a, b) => a.zIndex - b.zIndex);

    this.scene.layers.forEach(
      sceneLayer => new SceneLayerRenderer(sceneLayer).render(canvas)
    );
  }
}