import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import WeatherDisplay from "./Components/WeatherDisplay";
import { getWeather } from "./api";

import './index.css'

const App = () =>{

    const [weatherInfo, setWeatherInfo] = useState({name:'Search for Location'});

    async function getResult (result) {
        const weatherData = await getWeather(result);
        setWeatherInfo(weatherData);
        
    }



    return(<>
    <Navbar setResult={getResult}/>
    <WeatherDisplay weatherData={weatherInfo}/>
    
    </>)
}
export default App;