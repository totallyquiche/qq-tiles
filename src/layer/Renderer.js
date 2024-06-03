export default class {
  layer;

  constructor(layer) {
    this.layer = layer;
  }

  render(canvas) {
    const map = this.layer.getMap();

    map.forEach((row, rowIndex) => {
      row.forEach((column, columnIndex) => {
        if (column !== 0) {
          column[0].renderTileMap(
            canvas,
            column[1],
            columnIndex,
            rowIndex
          );
        }
      });
    })
  }
}