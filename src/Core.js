import StageRenderer from './stage/Renderer.js';
import Stage from './stage/Stage.js';
import Scene from './scene/Scene.js';
import Canvas from './Canvas.js';
import TileSet from './tile/TileSet.js';
import TileMap from './tile/TileMap.js';
import TileAsset from './tile/TileAsset.js';
import Layer from './layer/Layer.js';
import TileAssetFactory from '../app/tileassets/TileAssetFactory.js';

export default class {
    static StageRenderer = StageRenderer;
    static Stage = Stage;
    static Scene = Scene;
    static Canvas = Canvas;
    static TileSet = TileSet;
    static TileMap = TileMap;
    static TileAsset = TileAsset;
    static Layer = Layer;
    static TileAssetFactory = TileAssetFactory;

    static init(selector, layers) {
        const scene = new Scene(layers);
        const stage = new this.Stage(scene);
        const canvas = this.Canvas.create(selector);

        new this.StageRenderer(stage).render(canvas);
    }
}
