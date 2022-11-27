const unitCalculation = (temperature, unitConversion) =>{
    let result;
    unitConversion == true ? result = `${Math.round(temperature-273.15)}°C`: result = `${Math.round((temperature-273.15)*1.8+32)}°F`
    return result;
}

export default unitCalculation;