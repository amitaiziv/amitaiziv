input.onGesture(Gesture.Shake, function () {
    basic.showString("Hello!")
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
