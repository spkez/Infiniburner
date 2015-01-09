// define the bounds of the game
const GAME_WIDTH	= 256
const GAME_HEIGHT	= 240

// Define the bounds of a sprite
const SPRITE_WIDTH	= 8
const SPRITE_HEIGHT	= 16

// Create the game.
var infiniburner = new Phaser.Game(
		GAME_WIDTH,
		GAME_HEIGHT,
		Phaser.AUTO,
		'infinburner',
		{
			preload:	preload,
			create:		create,
			update:		update
		}
	)

// The following three functions are required by phaser
// They perform specific duties.
function preload(){
	// Load the player sprite.
	infiniburner.load.spritesheet(
			'skipper', 
			'sprites/skipper.png', 
			SPRITE_WIDTH,
			SPRITE_HEIGHT
		)
	
	// Load the flame sprite
	// Sprite width and height must be reversed for this one.
	infiniburner.load.spritesheet(
			'fire',
			'sprites/fire.png',
			SPRITE_HEIGHT,
			SPRITE_WIDTH
		)
		
	// Load the tiles. Learn how to do a tile map later.
	infiniburner.load.image(
			'burnerset',
			'tiles/burnerset.png'
		)
	
	// Load the tilemap.
}

function create(){
	
}

function update(){
	
}