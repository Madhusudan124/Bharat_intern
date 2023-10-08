function convertTemperatures() {
    let celsius = parseFloat(document.getElementById("celsius").value);
    let fahrenheit = (celsius * 9 / 5) + 32;
    let kelvin = celsius + 273.15;
  
    document.getElementById("fahrenheit").innerHTML = fahrenheit.toFixed(2) + " °F";
    document.getElementById("kelvin").innerHTML = kelvin.toFixed(2) + " K";
  }