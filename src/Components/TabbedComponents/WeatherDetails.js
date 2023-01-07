import React from "react";
import { windCalculation, precipCalculation} from './../../unitConvert'

const WeatherDetails = ({weatherData, unitConversion}) =>{

    return(<>
    
    {weatherData.sys.country == ''?  <div className='py-5 text-xl'>Not Available </div> :
        <div className="overflow-x-auto py-5">
            <div className="grid grid-cols-2 ">
                
                <div className="bg-base-100 rounded-tl-lg rounded-tr-lg py-2">Rain</div>
                <div className="...">{ typeof weatherData.rain !== "undefined" ? `${precipCalculation(weatherData.rain['1h'],unitConversion)}` : precipCalculation(0,unitConversion) }</div>
                <div className="bg-base-100 py-2">Snow</div>
                <div className="...">{ typeof weatherData.snow !== "undefined" ? `${precipCalculation(weatherData.snow['1h'],unitConversion)}` : precipCalculation(0,unitConversion) }</div>
                <div className="bg-base-100 py-2">Wind</div>
                <div className="...">{`${windCalculation(weatherData.wind.speed,unitConversion)} ${weatherData.wind.deg}°`}</div>
                <div className="bg-base-100 py-2">Humidity</div>
                <div className="...">{`${weatherData.main.humidity}%`}</div>
                <div className="bg-base-100 py-2 rounded-bl-lg rounded-br-lg ">Pressure</div>
                <div className="...">{`${weatherData.main.pressure}hPa`}</div>
              
            </div>
        </div>
        
    }
        
    </>);
}

export default WeatherDetails;