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
function Corgi_go_to_red_block () {
    for (let value of tiles.getTilesByType(assets.tile`tile5`)) {
        tiles.placeOnTile(myCorg.sprite, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    nextLevel += 1
    Clearcoins()
    BuildLevel()
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
        tiles.setTilemap(tilemap`level1`)
        Corgi_go_to_red_block()
        x = myCorg.sprite.x
        y = myCorg.sprite.y
    } else if (nextLevel == 4) {
        effects.blizzard.endScreenEffect()
        effects.starField.startScreenEffect()
        Clearcoins()
        tiles.setTilemap(tilemap`level2`)
        CallCoins()
    } else {
    	
    }
    CallCoins()
    x = myCorg.sprite.x
    y = myCorg.sprite.y
}
scene.onOverlapTile(SpriteKind.Player, sprites.castle.rock0, function (sprite, location) {
    myCorg.sprite.setPosition(x, y)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile8`, function (sprite, location) {
    myCorg.sprite.setPosition(x, y)
    music.wawawawaa.play()
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    myCorg.sprite.setPosition(x, y)
    info.changeLifeBy(-1)
})
function Clearcoins () {
    sprite_list = sprites.allOfKind(SpriteKind.Coin)
    for (let value2 of sprite_list) {
        value2.destroy()
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    nextLevel += 1
    BuildLevel()
    Clearcoins()
})
function CallCoins () {
    for (let value3 of tiles.getTilesByType(assets.tile`tile6`)) {
        console.logValue("coinLocation", value3)
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
        tiles.placeOnTile(CION123, value3)
        tiles.setTileAt(value3, assets.tile`transparency16`)
    }
}
let CION123: Sprite = null
let sprite_list: Sprite[] = []
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
forever(function () {
    music.playMelody("C F G D G C5 A C ", 120)
    music.playMelody("D A A E A C5 B D ", 120)
    music.playMelody("C5 G B A F A C5 B ", 120)
})
