# Q.Q Tiles

## Usage Example

```js
import Core from "./src/Core.js";

const tileAsset = Core.TileAssetFactory.create(
  Core,
  32,
  './app/tileassets/tilesets/land/land.png',
  { grass: [[5, 5], [0, 0]] }
);

class CustomLayer extends Core.Layer {
  getMap() {
    const T = [
      this.tileAssets[0].tileSet,
      this.tileAssets[0].tileMap.objects.grass
    ]

    return [
      [T, T, T, T, T,],
      [T, 0, 0, 0, T,],
      [T, 0, 0, 0, T,],
      [T, T, T, T, T,],
    ];
  }
}

const layer = new CustomLayer([tileAsset]);

Core.init('body', [layer]);
```

Resulting image:

![A border of green tiles form a rectangle surrounding empty space](preview.png)
