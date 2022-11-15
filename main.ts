sensors.onTemperatureChange(Ports.P0, function (temperature) {
    console.logValue("temp", temperature)
})
sensors.onHumidityChange(Ports.P0, function (humidity) {
    console.logValue("hum", humidity)
})
