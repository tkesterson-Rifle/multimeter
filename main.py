def on_button_pressed_a():
    global sensor
    sensor = "sound"
    basic.show_string("s")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global sensor
    sensor = "light"
    basic.show_string("l")
input.on_button_pressed(Button.B, on_button_pressed_b)

sensor = ""
sensor = "sound"
basic.show_string("s")
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)

def on_forever():
    if sensor == "sound":
        strip.show_bar_graph(input.sound_level(), 255)
    else:
        strip.show_bar_graph(input.light_level(), 255)
basic.forever(on_forever)
