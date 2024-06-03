import SceneRenderer from "../scene/Renderer.js";

export default class {
  static cellSize = 32;
  static columns = 20;
  static rows = 10;

  stage;

  constructor(stage) {
    this.stage = stage;
  }

  async loadTileSets() {
    const promises = [];

    this.stage.scene.layers.forEach(layer => {
      layer.tileAssets.forEach(tileAsset =>
        promises.push(tileAsset.tileSet.load())
      )
    });

    await Promise.all(promises);
  }

  async render(canvas) {
    await this.loadTileSets();

    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

    await new SceneRenderer(this.stage.scene).render(canvas);
  }
}