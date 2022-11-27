import React from "react";
import WeatherInfo from "./WeatherInfo";
import unitConvert from "../unitConvert";

const WeatherDisplay = ({weatherData, unitConversion}) =>{
    
    return(<>
        <div className="hero min-h-screen bg-base-100">
            
            <div className="hero-content flex-col lg:flex-row">
                <div className="flex-col">
                <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
                <div className="divider"></div> 
                <h2 className="text-5xl font-bold text-center px-3">{weatherData.main.temp !== '-'? `${unitConvert(weatherData.main.temp, unitConversion)}` : weatherData.main.temp}</h2>
                </div>
                
                <div className="bg-neutral text-center p-4 rounded-lg lg:w-[196rem] lg:h-96">
                    
                    <h1 className="text-5xl font-bold">{weatherData.sys.country == ''?  weatherData.name :  `${weatherData.name}, ${weatherData.sys.country}`}</h1>
                    <div className="divider"></div> 
                    <WeatherInfo />
                  

                </div>
            </div>
        </div>
    
    </>);

};

export default WeatherDisplay;