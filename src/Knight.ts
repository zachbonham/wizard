import Phaser, { GameObjects } from "phaser";

declare global 
{
    namespace Phaser.GameObjects
    {
        interface GameObjectFactory
        {
            knight(x: number, y:number, texture: string, frame?: string | number) : Knight
        }
    }

}
export default class Knight extends Phaser.Physics.Arcade.Sprite {

    constructor(scene: Phaser.Scene, x: number, y:number, texture: string, frame?: string | number) {

        super(scene, x, y, texture, frame)

        console.log('using texture ' + texture)
        console.log("using frame: " + frame)


        
        this.anims.play('knight-idle-down');
    }

    update(cursors:Phaser.Types.Input.Keyboard.CursorKeys)
    {
        if (!cursors) return;

        const speed = 100;

        if ( cursors.left?.isDown) {
            this.setVelocity(-speed, 0);
            this.anims.play('knight-walk-left', true);
            
        }
        else if (cursors.right?.isDown) {
            this.setVelocity(speed, 0);
            this.anims.play('knight-walk-right', true);            
        }
        else if (cursors.down?.isDown) {
            this.setVelocity(0, speed);
            this.anims.play('knight-walk-down', true);
        }
        else if (cursors.up?.isDown) {
            this.setVelocity(0, -speed);
            this.anims.play('knight-walk-up', true);
        }        
        else
        {
            this.anims.play('knight-idle-down');
            this.setVelocity(0,0);
        }

        console.debug('knight at (x,y):', this.x, this.y);

    }

}

Phaser.GameObjects.GameObjectFactory.register('knight', 
    function(this:Phaser.GameObjects.GameObjectFactory, x:number, y:number, texture:string, frame?: string|number) {

    console.log('registering knight GameObjectFactory')

    var sprite = new Knight(this.scene, x, y, texture, frame)
    
    this.displayList.add(sprite)
    this.updateList.add(sprite)



    
    this.scene.physics.world.enableBody(sprite, Phaser.Physics.Arcade.DYNAMIC_BODY)
    
    sprite.body.setSize(sprite.width * .50, sprite.height * .50);

    return sprite

})