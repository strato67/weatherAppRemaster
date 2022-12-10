const unitCalculation = (temperature, unitConversion) =>{
    let result;
    unitConversion == true ? result = `${Math.round(temperature-273.15)}°C`: result = `${Math.round((temperature-273.15)*1.8+32)}°F`
    return result;
}



const windCalculation = (speed, unitConversion) =>{
    let result;
    unitConversion == true ? result = `${Math.round(speed*3.6)}km/h`: result = `${Math.round(speed*2.237)}mph`
    return result;

}

const precipCalculation = (precip, unitConversion) => {
    let result;
    unitConversion == false ? result = `${Math.round(precip/25.4)} inches`: result = `${precip}mm `
    return result;

}

export {unitCalculation, windCalculation ,precipCalculation};