function convertLength() {
  const value = parseFloat(document.getElementById("value").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
  // Conversion factors
  const cmToFeet = 0.0328084;
  const feetToCm = 30.48;
  const cmToInch = 0.393701;
  const inchToCm = 2.54;
  const cmToM = 0.01;
  const mToCm = 100;
  let result;
  // Convert based on units
  if(fromUnit == "cm" && toUnit == "feet")
  {
    result = value * cmToFeet;
  }
  else if(fromUnit == "cm" && toUnit == "inch")
  {
    result = cmToInch*value;
  }
  else if(fromUnit == "cm" && toUnit == "m")
  {
    result = cmToM*value;
  }
  else if(fromUnit == "m" && toUnit == "cm")
  {
    result = mToCm*value;
  }
  else if(fromUnit == "m" && toUnit == "feet")
  {
    result = mToCm*value *cmToFeet;
  }
  else if(fromUnit == "m" && toUnit == "inch")
  {
    result = mToCm*value *cmToInch;
  }

  else if(fromUnit == "feet" && toUnit == "cm")
  {
    result = feetToCm*value;
  }
  else if(fromUnit == "feet" && toUnit == "m")
  {
    result = feetToCm*value*cmToM;
  }
  else if(fromUnit == "feet" && toUnit == "inch")
  {
    result = value*12.0;
  }
  
  else if(fromUnit == "inch" && toUnit == "cm")
  {
    result = inchToCm * value;
  }
  else if(fromUnit == "inch" && toUnit == "m")
  {
    result = inchToCm * value *cmToM;
  }
  else if(fromUnit == "inch" && toUnit == "feet")
  {
    result = value / 12.0;
  }
  else{
    result =value;
  }

  document.getElementById("Lxyz").style.display = "block";
    document.getElementById("Lres").textContent = result.toFixed(2) + " " + toUnit;
}