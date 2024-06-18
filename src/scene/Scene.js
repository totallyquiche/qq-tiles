export default class {
    layers = [];

    constructor(layers) {
        this.addLayers(layers);
    }

    addLayers(layers) {
        this.layers.push(...layers);
    }
}
