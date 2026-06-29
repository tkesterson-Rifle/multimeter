input.onPinPressed(TouchPin.P0, function () {
    strip.setBrightness(input.lightLevel() / 15)
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
let strip: neopixel.Strip = null
let sensor = ""
sensor = "sound"
basic.showString("s")
strip = neopixel.create(DigitalPin.P2, 30, NeoPixelMode.RGB)
basic.forever(function () {
    if (sensor == "sound") {
        strip.showBarGraph(input.soundLevel(), 255)
    } else if (sensor == "light") {
        strip.showBarGraph(input.lightLevel(), 255)
    } else if (sensor == "Magnets") {
        strip.showBarGraph(input.magneticForce(Dimension.X), 255)
    } else {
        strip.showBarGraph(input.temperature(), 40)
    }
    strip.setBrightness(input.lightLevel() / 10 + 3)
})
