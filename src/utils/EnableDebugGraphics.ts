import Phaser from "phaser";

function enableDebugGraphics(scene:Phaser.Scene, tileMapLayer:Phaser.Tilemaps.TilemapLayer) 
{

    const debugGraphics = scene.add.graphics().setAlpha(0.7);
        
    tileMapLayer.renderDebug(debugGraphics, {
        tileColor: null,
        collidingTileColor: new Phaser.Display.Color(243, 234, 48),
        faceColor: new Phaser.Display.Color(40,39,37,255)
    });        
}

export {
    enableDebugGraphics
}