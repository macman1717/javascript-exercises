function convertToFahrenheit(tempInCelc){
  let tempToFahren = 0;
  tempToFahren = (tempInCelc * 9/5) + 32;
  
  return Number(tempToFahren.toFixed(1));
}

function convertToCelsius(tempInFahr){
  let tempToCelcius = 0;
  tempToCelcius = (tempInFahr - 32) * (5/9);
  
  return Number(tempToCelcius.toFixed(1));
}


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
