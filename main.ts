while (true) {
    if (input.soundLevel() > 250) {
        light.setAll(light.rgb(50, 0, 50))
    }
    
    if (input.temperature(TemperatureUnit.Fahrenheit) > 150) {
        light.setAll(light.rgb(50, 0, 50))
    }
    
}
