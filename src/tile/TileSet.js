export default class {
  tileSize;
  imageSrc;
  image;
  imageLoaded;

  constructor(tileSize, imageSrc) {
    this.tileSize = tileSize;
    this.imageSrc = imageSrc;
    this.imageLoaded = false;
  }

  async load() {
    return new Promise((resolve, reject) => {
      this.image = new Image;

      this.image.src = this.imageSrc;
      this.image.onload = resolve;
      this.image.onerror = reject;
      this.imageLoaded = true;
    });
  }

  renderTile(canvas, tileSetX, tileSetY, canvasX, canvasY) {
    const tileSize = this.tileSize;

    canvas.getContext('2d')
      .drawImage(
        this.image,
        tileSetX * tileSize,
          tileSetY * tileSize,
        tileSize,
        tileSize,
        canvasX * tileSize,
        canvasY * tileSize,
        tileSize,
        tileSize
      );
  }

  renderTileMap(canvas, tileMap, x, y) {
    for (let i = 0; i < tileMap.length; i++) {
      this.renderTile(
        canvas,
        tileMap[i][0][0],
        tileMap[i][0][1],
        tileMap[i][1][0] + x,
        tileMap[i][1][1] + y
      );
    }
  }
}