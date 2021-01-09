scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    game.showLongText("Dark corgi: Under water", DialogLayout.Full)
    tiles.setTilemap(tilemap`level_2`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    nextLevel += 1
    BuildLevel()
})
function BuildLevel () {
    x = myCorg.sprite.x
    y = myCorg.sprite.y
    if (nextLevel == 0) {
        tiles.setTilemap(tilemap`level`)
        Corgi_go_to_red_block()
        effects.clouds.startScreenEffect()
    } else {
        effects.clouds.endScreenEffect()
        effects.blizzard.startScreenEffect()
        scene.setBackgroundColor(0)
        tiles.setTilemap(tilemap`level_0`)
        Corgi_go_to_red_block()
    }
    nextLevel += 1
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    myCorg.sprite.setPosition(x, y)
    info.changeLifeBy(-1)
})
function Corgi_go_to_red_block () {
    for (let value of tiles.getTilesByType(myTiles.tile5)) {
        tiles.placeOnTile(myCorg.sprite, value)
        tiles.setTileAt(value, myTiles.transparency16)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
    tiles.setTilemap(tilemap`level`)
    game.setDialogTextColor(15)
    game.showLongText("Dark corgi: I see you have completed this fist world. but I challenge you to do a few more levels. I also have captured king corgi. defat my levels to save him ", DialogLayout.Full)
    game.showLongText("I see its not much of a question ", DialogLayout.Full)
    game.showLongText("now for the first level, ice jumpers  ", DialogLayout.Full)
    BuildLevel()
})
let y = 0
let x = 0
let myCorg: Corgio = null
let nextLevel = 0
info.setLife(10)
nextLevel = 0
game.showLongText("use the arrow keys to move and press b to get a hint, do not touch lava or it is game over  ", DialogLayout.Full)
myCorg = corgio.create(SpriteKind.Player)
scene.setBackgroundColor(9)
myCorg.updateSprite()
myCorg.horizontalMovement()
myCorg.follow()
myCorg.addToScript("bark")
myCorg.verticalMovement()
BuildLevel()
