export default class {
  layers;

  constructor(layers) {
    this.layers = layers;
  }

  addLayers(layers) {
    this.layers.push(...layers);
  }
}