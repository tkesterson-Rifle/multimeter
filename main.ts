input.onPinPressed(TouchPin.P0, function () {
    sensor = "White"
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
input.onButtonPressed(Button.A, function () {
    sensor = "sound"
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        . . . . #
        # # # # #
        `)
})
input.onButtonPressed(Button.AB, function () {
    sensor = "temp"
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    sensor = "light"
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # # #
        `)
})
input.onPinPressed(TouchPin.P1, function () {
    sensor = "Red"
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    sensor = "Magnets"
    basic.showLeds(`
        # . . . #
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        `)
})
let sensor = ""
let strip = neopixel.create(DigitalPin.P2, 30, NeoPixelMode.RGB)
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
basic.forever(function () {
    if (sensor == "sound") {
        strip.showBarGraph(input.soundLevel(), 255)
    } else if (sensor == "light") {
        strip.showBarGraph(input.lightLevel(), 255)
    } else if (sensor == "Magnets") {
        strip.showBarGraph(input.magneticForce(Dimension.X), 255)
    } else if (sensor == "temp") {
        strip.showBarGraph(input.temperature(), 40)
    } else if (sensor == "White") {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    } else if (sensor == "Red") {
        strip.showRainbow(1, 360)
        while (sensor == "Red") {
            basic.showString("You Win")
            basic.pause(2000)
        }
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    strip.setBrightness(input.lightLevel() / 10 + 3)
})
