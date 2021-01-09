scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    game.showLongText("Dark corgi: Under water", DialogLayout.Full)
    tiles.setTilemap(tilemap`level_2`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    myCorg.sprite.setPosition(x, y)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
    tiles.setTilemap(tilemap`level`)
    game.setDialogTextColor(15)
    game.showLongText("Dark corgi: I see you have completed this fist world. but I challenge you to do a few more levels. I also have captured king corgi. defat my levels to save him ", DialogLayout.Full)
    game.showLongText("I see its not much of a question ", DialogLayout.Full)
    game.showLongText("now for the first level, ice jumpers  ", DialogLayout.Full)
    tiles.setTilemap(tilemap`level_0`)
    x = myCorg.sprite.x
    y = myCorg.sprite.y
    scene.setBackgroundColor(0)
    effects.blizzard.startScreenEffect()
})
let y = 0
let x = 0
let myCorg: Corgio = null
let levels = [img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 4 4 4 4 4 . . . . . . . 
    . . . . 4 . . . 4 4 . . . . . . 
    . . . . 4 4 4 4 . . . . . . . . 
    . . . . 4 4 . 4 4 4 4 4 . . . . 
    . . . . 4 4 . 4 4 4 4 4 . . . . 
    . . . . 4 4 . . 4 4 . . . . . . 
    . . . . . 4 4 4 4 . . . . . . . 
    . . . . . 4 4 . 4 4 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `]
info.setLife(10)
game.showLongText("use the arrow keys to move and press b to get a hint, do not touch lava or it is game over  ", DialogLayout.Full)
myCorg = corgio.create(SpriteKind.Player)
scene.setBackgroundColor(9)
myCorg.updateSprite()
myCorg.horizontalMovement()
myCorg.follow()
myCorg.addToScript("bark")
myCorg.verticalMovement()
tiles.setTilemap(tilemap`level`)
effects.clouds.startScreenEffect()
