export async function getWeather() {

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=whitby,ca&appid=70bc3735ae7a79f8356f4e2143976e25`, {mode: 'cors'});
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

