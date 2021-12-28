import Phaser from "phaser";

export default class CombatScene extends Phaser.Scene {

    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super({ key: "combat", active: false} );
  }

  init()
  {
      console.log("CombatScene init");

   
  }

  preload(): void 
  {
    console.log("CombatScene preload");

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  create(): void 
  {
    this.load.image("combat_tiles", "./tiles/dungeon-03.png");
    this.load.tilemapTiledJSON("combat", "./tiles/combat-01.json");
    this.load.atlas("knight1", "./characters/knight.png", "./characters/knight_atlas.json");

    const combatMap = this.make.tilemap ({key: 'combat'});
    const combatTileset = combatMap.addTilesetImage('combat', 'combat_tiles');

    const combatFloor = combatMap.createLayer("floor", combatTileset);
    const combatWalls = combatMap.createLayer("walls", combatTileset);

    combatWalls.setCollisionByProperty({collides: true});



  }

  update(time: number, delta: number): void 
  {
    if (!this.cursors) return;

    console.log("Combat update");
    if ( this.cursors.left?.isDown) {
        console.log("bringing Game scene to top");
    
        this.time.addEvent({
            delay: 1000,
            loop: false,
            callback: () => {
                this.scene.bringToTop("game");
            }
        });    
        
    }
  }
}
