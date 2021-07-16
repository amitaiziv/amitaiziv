input.onButtonPressed(Button.A, function () {
    basic.showNumber(1)
    basic.showLeds(`
        . . . # .
        . . # . .
        . # . . .
        . . # . .
        . . . # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(3)
    basic.showLeds(`
        . . . . .
        . # # . #
        # . # # .
        . # # . #
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(2)
    basic.showLeds(`
        # . . # .
        # . # . .
        # # . . .
        # . # . .
        # . . # .
        `)
})
basic.showLeds(`
    . . . . .
    # . . . #
    . # . # .
    . # # # .
    . . . . .
    `)
basic.showString("Hello!")
music.playMelody("E B C5 A B G A F ", 120)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        # . . . #
        . # . # .
        . . # . .
        . . . . .
        `)
})
