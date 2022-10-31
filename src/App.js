import React from "react";
import Navbar from "./Components/Navbar";
import WeatherDisplay from "./Components/WeatherDisplay";
import { getWeather } from "./api";

import './index.css'

const App = () =>{

    async function getResult (result) {
        const weatherData = await getWeather(result);

        console.log(weatherData);
        
    }



    return(<>
    <Navbar setResult={getResult}/>
    <WeatherDisplay />
    
    </>)
}
export default App;