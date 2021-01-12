namespace SpriteKind {
    export const Coin = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.baDing.play()
    otherSprite.destroy()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    nextLevel += -1
    Corgi_go_to_red_block()
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    nextLevel += 1
    BuildLevel()
    Clearcoins()
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile8, function (sprite, location) {
    myCorg.sprite.setPosition(x, y)
    music.wawawawaa.play()
    info.changeLifeBy(-1)
})
function BuildLevel () {
    if (nextLevel == 0) {
        tiles.setTilemap(tilemap`level`)
        Corgi_go_to_red_block()
        effects.clouds.startScreenEffect()
    } else if (nextLevel == 1) {
        game.showLongText("Dark corgi: I see you have completed this fist world. but I challenge you to do a few more levels. I also have captured king corgi. defat my levels to save him ", DialogLayout.Full)
        game.showLongText("I see its not much of a question ", DialogLayout.Full)
        game.showLongText("now for the first level, ice jumpers  ", DialogLayout.Full)
        effects.clouds.endScreenEffect()
        effects.blizzard.startScreenEffect()
        scene.setBackgroundColor(0)
        tiles.setTilemap(tilemap`level_0`)
        Corgi_go_to_red_block()
    } else if (nextLevel == 2) {
        effects.clouds.endScreenEffect()
        effects.blizzard.endScreenEffect()
        effects.bubbles.startScreenEffect()
        scene.setBackgroundColor(6)
        game.showLongText("Dark corgi: Under water", DialogLayout.Full)
        tiles.setTilemap(tilemap`level_2`)
        Corgi_go_to_red_block()
    } else if (nextLevel == 3) {
        effects.bubbles.endScreenEffect()
        effects.blizzard.startScreenEffect()
        game.showLongText("Now for the icy mountain of doom!!!", DialogLayout.Full)
        tiles.setTilemap(tiles.createTilemap(hex`5000500004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005000000000000000000000000000000000000000000000000000500000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000005000000050000000000000000000000000505000000000000000000020000000000000000050000000000000000000000000000000000000000000200000000000000000000000002000000000005000000000000000005000000000000000002020200000000000000000000000000000000000002000000000000000000000000000000020000000000000000000000000202020202020200000000000200000000000000000200000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000303000303030303030303030303030303000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000020000000002020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000200000002000000000202000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000200000000020000000200000000020200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000200000000020000000002000000020000000002020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010000000000020000000002000000000200000002000000000202000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010100000000000002000000000202000000020000000200000000020200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100010003030303030203030303030203030303030303030303030303020303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`, img`
            ................................................................................
            .......................................................2........................
            ....................................2..............................2............
            2.......................222..................2...............22...........222222
            2.....2........2........2.......................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ......2.........................................................................
            ................................................................................
            2...............................................................................
            ................................................................................
            ................................................................................
            ......2.........................................................................
            ................................................................................
            ................................................................................
            2...............................................................................
            ................................................................................
            ................................................................................
            .....2..........................................................................
            ................................................................................
            22..............................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ....2...........................................................................
            ................................................................................
            ................................................................................
            .2..............................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ..2.............................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            .......2........................................................................
            ................................................................................
            ...............2................................................................
            ................................................................................
            .......................2........................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ...............................2................................................
            ................................................................................
            ......................2.........................................................
            ..............22................................................................
            ................................................................................
            ................................................................................
            ....2...........................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ..........2.....................................................................
            ................................................................................
            ................................................................................
            ................2...............................................................
            ................................................................................
            ......................2.........................................................
            ................................................................................
            ................................................................................
            .............................2..................................................
            ................................................................................
            ..........................2.....................................................
            ................................................................................
            .......................2........................................................
            .......................2........................................................
            ................................................................................
            ...................2............................................................
            ..............2.................................................................
            .........2....2.................................................................
            ....2....2......................................................................
            ..22.....2......................................................................
            .22......2......................................................................
            22..............................................................................
            `, [myTiles.transparency16,myTiles.tile3,myTiles.tile4,myTiles.tile8,myTiles.tile5,myTiles.tile6], TileScale.Sixteen))
        Corgi_go_to_red_block()
        x = myCorg.sprite.x
        y = myCorg.sprite.y
    } else {
    	
    }
    x = myCorg.sprite.x
    y = myCorg.sprite.y
}
scene.onOverlapTile(SpriteKind.Player, sprites.castle.rock0, function (sprite, location) {
    myCorg.sprite.setPosition(x, y)
    info.changeLifeBy(-1)
})
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
function Clearcoins () {
    sprite_list = sprites.allOfKind(SpriteKind.Coin)
    for (let value of sprite_list) {
        value.destroy()
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    nextLevel += 1
    BuildLevel()
    Clearcoins()
})
let sprite_list: Sprite[] = []
let y = 0
let x = 0
let CION123: Sprite = null
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
for (let value of tiles.getTilesByType(myTiles.tile6)) {
    CION123 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 4 4 4 4 4 5 5 f . . . 
        . . f 4 5 5 5 5 5 5 5 5 f . . . 
        . . f 4 5 5 5 5 5 5 5 5 f . . . 
        . . f 4 4 5 5 5 5 5 5 5 f . . . 
        . . f 5 5 4 5 5 5 5 5 5 f . . . 
        . . f 5 5 5 4 5 5 4 5 5 f . . . 
        . . f 5 5 5 5 5 5 4 5 5 f . . . 
        . . . f 5 5 5 5 5 4 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Coin)
    animation.runImageAnimation(
    CION123,
    [img`
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 4 4 4 4 4 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 4 4 4 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 4 4 5 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . f 4 5 4 4 4 4 4 5 5 f . . . 
        . . f 4 5 5 5 5 5 5 5 5 f . . . 
        . . f 4 5 5 5 5 5 5 5 5 f . . . 
        . . f 4 4 4 5 5 5 5 5 5 f . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . f 5 5 5 5 4 4 5 5 5 f . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 4 4 4 4 4 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 4 4 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 4 4 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . f f f f f f f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 4 4 4 4 4 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 4 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 4 4 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 4 4 4 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 4 4 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . f f f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 4 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 4 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f 5 f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 4 4 4 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 4 4 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . f f f f f f f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 4 4 4 4 4 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 4 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 4 4 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 4 4 4 4 4 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 4 4 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 4 4 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . f f f f f f f . . . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . f 4 5 4 4 4 4 4 5 5 f . . . 
        . . f 4 5 5 5 5 5 5 5 5 f . . . 
        . . f 4 5 5 5 5 5 5 5 5 f . . . 
        . . f 4 4 4 5 5 5 5 5 5 f . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . f 5 5 5 5 4 4 5 5 5 f . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    80,
    true
    )
    tiles.placeOnTile(CION123, value)
    tiles.setTileAt(value, myTiles.transparency16)
}
