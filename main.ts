input.onButtonPressed(Button.A, function () {
    basic.showNumber(1)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(1)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(2)
    basic.showLeds(`
        # # . # #
        # # # # #
        # # # # #
        . # # # .
        . . # . .
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
    basic.showLeds(`
        . . . . .
        . # . # .
        # . # . #
        . # . # .
        . . # . .
        `)
    basic.showIcon(IconNames.Duck)
})
