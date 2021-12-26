import Phaser from 'phaser'

export default class GameScene extends Phaser.Scene
{
    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
    private knight!: Phaser.Physics.Arcade.Sprite;

	constructor()
	{
		super('game')
	}

	preload()
    {
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    create()
    {
        const map = this.make.tilemap ({key: 'dungeon'});
        const tileset = map.addTilesetImage('dungeon', 'tiles');
        
        const floor = map.createLayer("floor", tileset);
        const walls = map.createLayer("walls", tileset);

        walls.setCollisionByProperty({ collides: true });
/*
        const debugGraphics = this.add.graphics().setAlpha(0.7);
        
        walls.renderDebug(debugGraphics, {
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243, 234, 48),
            faceColor: new Phaser.Display.Color(40,39,37,255)
        });
*/
        this.knight = this.physics.add.sprite(64,128, "knight1", "knight_0");
        this.knight.body.setSize(this.knight.width * .50, this.knight.height * .50);

        this.anims.create({
            key: 'knight-idle-down',
            frames: [{ key: 'knight1', frame: "knight_40" }]
            
             });
        

        this.anims.create({
            key: 'knight-walk-down',
            frames: this.anims.generateFrameNames('knight1', { start: 40, end: 47, prefix: 'knight_'}),
            repeat: -1,
            frameRate: 15
        });

        this.anims.create({
            key: 'knight-walk-up',
            frames: this.anims.generateFrameNames('knight1', { start: 20, end: 27, prefix: 'knight_'}),
            repeat: -1,
            frameRate: 15
        });

        this.anims.create({
            key: 'knight-walk-right',
            frames: this.anims.generateFrameNames('knight1', { start: 10, end: 17, prefix: 'knight_'}),
            repeat: -1,
            frameRate: 15
        });

        this.anims.create({
            key: 'knight-walk-left',
            frames: this.anims.generateFrameNames('knight1', { start: 30, end: 37, prefix: 'knight_'}),
            repeat: -1,
            frameRate: 15
        });



        this.knight.anims.play('knight-idle-down');
        this.physics.add.collider(this.knight, walls);

        this.cameras.main.startFollow(this.knight, true);

        // wierd starting point, but OK
        //.
        //this.knight.x = 647;
        //this.knight.y = 1911;

        this.knight.x = 495;
        this.knight.y = 978;
        
    }

    update(time: number, delta: number): void 
    {
        if (!this.cursors || !this.knight) return;

        const speed = 100;

        if ( this.cursors.left?.isDown) {
            this.knight.setVelocity(-speed, 0);
            this.knight.anims.play('knight-walk-left', true);
            
        }
        else if (this.cursors.right?.isDown) {
            this.knight.setVelocity(speed, 0);
            this.knight.anims.play('knight-walk-right', true);            
        }
        else if (this.cursors.down?.isDown) {
            this.knight.setVelocity(0, speed);
            this.knight.anims.play('knight-walk-down', true);
        }
        else if (this.cursors.up?.isDown) {
            this.knight.setVelocity(0, -speed);
            this.knight.anims.play('knight-walk-up', true);
        }
        else
        {
            this.knight.anims.play('knight-idle-down');
            this.knight.setVelocity(0,0);
        }

        console.debug('knight at (x,y):', this.knight.x, this.knight.y);

        

        
    }
}
