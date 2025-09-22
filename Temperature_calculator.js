let isHot, isCold, celsiusTemp, fahrenheitTemp, kelvinTemp, isLukewarm;

celsiusTemp = 30;//edit this value to calculate a new temperature

kelvinTemp = celsiusTemp + 273.15;

fahrenheitTemp = (celsiusTemp * 1.8) + 32;

isCold = celsiusTemp < 15;

isHot = celsiusTemp >= 30;

isLukewarm = celsiusTemp >= 15 && celsiusTemp <= 29;

console.table({"Temperature":{"Celsius":celsiusTemp, "Kelvin":kelvinTemp, "Fahrenheit":fahrenheitTemp}});

console.log(`This temperature is considerate:\nHot: ${isHot}\nCold: ${isCold}\nLukewarm: ${isLukewarm}`);