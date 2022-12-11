async function getWeather(location) {

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=70bc3735ae7a79f8356f4e2143976e25`, {mode: 'cors'});
    
    if(!response.ok){
        return {name:'Location not found',
        sys:{country:''},
        main:{temp:'-'}
    };
    }
    
    const locationData = await response.json();
    return locationData; 
        
}

async function getFiveDay(coordinates) {

    const {lon, lat} = coordinates;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=70bc3735ae7a79f8356f4e2143976e25`, {mode: 'cors'});
    
    if(!response.ok){
        return {list:['Not Available']};
    }
    
    const forecast = await response.json();
    return forecast; 
        
}





export {getWeather, getFiveDay};