import StageRenderer from "./stage/Renderer.js";

export default class {
  static create(selector) {
    const element = document.createElement('canvas');

    element.width = StageRenderer.cellSize * StageRenderer.columns;
    element.height = StageRenderer.cellSize * StageRenderer.rows;

    document.querySelector(selector).appendChild(element);

    return element;
  }
}