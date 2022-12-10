import React from "react";
import WeatherInfo from "./WeatherInfo";
import { unitCalculation } from "../unitConvert";

const WeatherDisplay = ({weatherData, unitConversion}) =>{
    
    return(<>
        <div className="hero min-h-screen bg-base-100">
            
            <div className="hero-content flex-col lg:flex-row">
                <div className="flex-col">
                <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
       
                <p className=" text-center capitalize">{weatherData.main.temp !== '-'? weatherData.weather[0].main : ''}</p>

                <div className="divider"></div> 
                <div>
                    <label className="swap swap-flip hover:scale-105 w-full">
                        <input type="checkbox" />

                        <div className="swap-on ">
                            <div className="flex flex-col justify-items-center text-center gap-1">
                                <div>{weatherData.main.temp !== '-'? `High: ${unitCalculation(weatherData.main.temp_max, unitConversion)}` : ''}</div>
                                <div>{weatherData.main.temp !== '-'? `Low: ${unitCalculation(weatherData.main.temp_min, unitConversion)}` : ''}</div>
                            </div>
                        </div>
                        <div className="swap-off"> 
                        <div className="flex flex-row">
                            <div className="basis-2/3">
                                <h2 className="text-5xl font-bold text-center px-3">{weatherData.main.temp !== '-'? `${unitCalculation(weatherData.main.temp, unitConversion)}` : weatherData.main.temp}</h2>
                            </div>
                        <div className="basis-1/3">

                        <p>{weatherData.main.temp !== '-'? `Feels like ${unitCalculation(weatherData.main.feels_like, unitConversion)}` : ''}</p>

                        </div>

                        </div>
                        </div>
                    </label>

                </div>
                
                
                </div>
                
                <div className="bg-neutral text-center p-4 rounded-lg lg:w-[196rem] lg:h-96">
                    
                    <h1 className="text-5xl font-bold">{weatherData.sys.country == ''?  weatherData.name :  `${weatherData.name}, ${weatherData.sys.country}`}</h1>
                    <div className="divider"></div> 
                    <WeatherInfo weatherData={weatherData} unitConversion={unitConversion}/>
                  

                </div>
            </div>
        </div>
    
    </>);

};

export default WeatherDisplay;



