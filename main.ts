input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 10; index++) {
        basic.showString("hi")
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(2)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showNumber(2)
    basic.showLeds(`
        # # . # #
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showNumber(2)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        music.playTone(131, music.beat(BeatFraction.Whole))
        music.playTone(988, music.beat(BeatFraction.Whole))
        music.playTone(131, music.beat(BeatFraction.Whole))
        music.playTone(988, music.beat(BeatFraction.Whole))
    }
})
basic.showLeds(`
    . . . . .
    # . . . #
    . # . # .
    . # # # .
    . . . . .
    `)
basic.showString("LIKE YOU")
music.playMelody("G B A G C5 B A B ", 120)
basic.showLeds(`
    . . . . .
    # . . . #
    . # . # .
    . . # . .
    . . . . .
    `)
basic.forever(function () {
    basic.showString("dadi")
    basic.showLeds(`
        . . . . .
        . # . # .
        # . # . #
        . # . # .
        . . # . .
        `)
    basic.showString("mumi")
})
