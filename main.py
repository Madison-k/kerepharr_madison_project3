while True:
    if input.sound_level()>250:
        light.set_all(light.rgb(50, 0, 50))
    if input.temperature(TemperatureUnit.FAHRENHEIT) > 150:
        light.set_all(light.rgb(50, 0, 50))
