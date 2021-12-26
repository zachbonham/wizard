import Phaser, { Scale } from 'phaser'

import Preloader from './scenes/Preloader'
import Game from './scenes/Game'

const config : Phaser.Types.Core.GameConfig= {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
			//debug: true,
		},
	
	},
	scene: [Preloader, Game],
	scale: {
		zoom: 2
	},
	
}

export default new Phaser.Game(config)
