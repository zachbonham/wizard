import Phaser from "phaser";
import {KnightType} from '../types/KnightType'
export default class Preloader extends Phaser.Scene
{
    constructor()
    {
        super("preloader");
    }

    init() 
    {
        console.log("PreloaderScene init");
    }

    preload()
    {
        this.load.image("tiles", "./tiles/dungeon-03.png");
        this.load.image("combat_tiles", "./tiles/dungeon-01.png")

        this.load.tilemapTiledJSON("dungeon", "./tiles/dungeon-03.json");

        let numberOfKnights = Object.keys(KnightType).length / 2;

        let knightSelection = Phaser.Math.Between(0,numberOfKnights-1)
        let knightType = KnightType[knightSelection].toLowerCase()

        console.log(`selected ${knightType} knight`)

        this.load.tilemapTiledJSON("combat", "./tiles/combat-01.json");
        
        this.load.atlas("knight1", `./characters/knight-${knightType}.png`, "./characters/knight_atlas.json");

    }

    create()
    {
        this.scene.start("game");
    }
}