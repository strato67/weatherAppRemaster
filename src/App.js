import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import WeatherDisplay from "./Components/WeatherDisplay";
import { getWeather } from "./api";

import './index.css'

const App = () =>{

    const [weatherInfo, setWeatherInfo] = useState({name:'Search for Location',
                                                    sys:{country:''},
                                                    main:{temp:'-'}
                                                
                                                    });

    async function getResult (result) {
        const weatherData = await getWeather(result);
        setWeatherInfo(weatherData);
        
    }

    const [isCelsius, changeUnit] = useState(true);

    const searchHandler = () => {
        changeUnit(unit => !unit);

    }

    useEffect(()=>console.log(isCelsius));

    return(<>
    <Navbar setResult={getResult} unitSelect={searchHandler}/>
    <WeatherDisplay weatherData={weatherInfo} unitConversion={isCelsius}/>
    
    </>)
}
export default App;