import Phaser from 'phaser';

const createPlayerAnims = (anims: Phaser.Animations.AnimationManager) => {

    anims.create({
        key: 'knight-idle-down',
        frames: [{ key: 'knight1', frame: "knight_40" }]
        
         });
    

    anims.create({
        key: 'knight-walk-down',
        frames: anims.generateFrameNames('knight1', { start: 40, end: 47, prefix: 'knight_'}),
        repeat: -1,
        frameRate: 15
    });

    anims.create({
        key: 'knight-walk-up',
        frames: anims.generateFrameNames('knight1', { start: 20, end: 27, prefix: 'knight_'}),
        repeat: -1,
        frameRate: 15
    });

    anims.create({
        key: 'knight-walk-right',
        frames: anims.generateFrameNames('knight1', { start: 10, end: 17, prefix: 'knight_'}),
        repeat: -1,
        frameRate: 15
    });

    anims.create({
        key: 'knight-walk-left',
        frames: anims.generateFrameNames('knight1', { start: 30, end: 37, prefix: 'knight_'}),
        repeat: -1,
        frameRate: 15
    });

}

export {
    createPlayerAnims,
}