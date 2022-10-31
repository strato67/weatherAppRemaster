export async function getWeather(location) {

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=70bc3735ae7a79f8356f4e2143976e25`, {mode: 'cors'});
    
    if(!response.ok){
        return 'Location not Found';
    }
    
    const locationData = await response.json();
    return locationData;

    
    
    
}

