import Phaser from "phaser";

export default class Preloader extends Phaser.Scene
{
    constructor()
    {
        super("preloader");
    }

    preload()
    {
        //this.load.image("tiles", "./tiles/dungeon-01.png");
        //this.load.image("tiles", "./tiles/dungeon-02.png");
        this.load.image("tiles", "./tiles/dungeon-03.png");

     //   this.load.tilemapTiledJSON("dungeon", "./tiles/dungeon-01.json");
        //this.load.tilemapTiledJSON("dungeon", "./tiles/dungeon-02.json");
        this.load.tilemapTiledJSON("dungeon", "./tiles/dungeon-03.json");

        this.load.atlas("knight1", "./characters/knight.png", "./characters/knight_atlas.json");

    }

    create()
    {
        this.scene.start("game");
    }
}