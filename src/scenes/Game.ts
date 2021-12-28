import Phaser from 'phaser'
import {enableDebugGraphics} from '../utils/EnableDebugGraphics'
import '../Knight'
import {createPlayerAnims} from '../anims/PlayerAnims'
export default class GameScene extends Phaser.Scene
{
    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
    private knight!: Phaser.Physics.Arcade.Sprite;

	constructor()
	{
		super('game')
	}

    init() 
    {
        console.log("GameScene init");
    }

	preload()
    {
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    create()
    {
        createPlayerAnims(this.anims);

        const map = this.make.tilemap ({key: 'dungeon'});
        

        const tileset = map.addTilesetImage('dungeon', 'tiles');
        
        
        const floor = map.createLayer("floor", tileset);
        const walls = map.createLayer("walls", tileset);
        
        walls.setCollisionByProperty({ collides: true });

        // show debug graphics on collision layers
        //enableDebugGraphics(this, walls)
       

        // randomize green/gray/blue knight

        this.knight = this.add.knight(64, 128, "knight1", "knight_0")
        
        this.physics.add.collider(this.knight, walls);

        this.cameras.main.startFollow(this.knight, true);
        
        // puts us in the 'start area' for map given size
        //
        this.knight.x = 495;
        this.knight.y = 978;    
        
    }

    update(time: number, delta: number): void 
    {
        if ( this.knight) {
            this.knight.update(this.cursors)
        }        
    }
}
