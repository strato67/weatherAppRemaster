import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import WeatherDisplay from "./Components/WeatherDisplay";
import { getWeather, getFiveDay } from "./api";

import './index.css'

const App = () =>{

    const [weatherInfo, setWeatherInfo] = useState({name:'Search for Location', sys:{country:''}, main:{temp:'-'}, coord:{lon:'',lat:''}});
    const [fiveForecast, setFiveForecast] = useState({list:['Not Available']});

    async function getResult (result) {
        const weatherData = await getWeather(result);
        setWeatherInfo(weatherData);
        weatherData.coord == undefined? setFiveForecast({list:['Not Available']}):getForecast(weatherData.coord)
    }


    async function getForecast (coordinates){
        const forecast = await getFiveDay(coordinates);
        setFiveForecast(forecast);
    
    }

    useEffect(()=>{console.log(fiveForecast)})

    const [isCelsius, changeUnit] = useState(true);

    const searchHandler = () => {
        changeUnit(unit => !unit);

    }

    return(<>
    <Navbar setResult={getResult} unitSelect={searchHandler}/>
    <WeatherDisplay weatherData={weatherInfo} unitConversion={isCelsius} fiveForecast={fiveForecast.list}/>
    
    </>)
}
export default App;



