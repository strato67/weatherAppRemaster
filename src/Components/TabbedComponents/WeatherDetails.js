import React from "react";
import { pressureCalculation, windCalculation, precipCalculation} from './../../unitConvert'

const WeatherDetails = ({weatherData, unitConversion}) =>{


    return(<>
    
    {weatherData.sys.country == ''?  <div className='py-5 text-xl'>No data</div> :
        <div className="overflow-x-auto">
            <div className="grid grid-cols-2 ">
                
                <div className="bg-base-100 rounded-tl-lg rounded-tr-lg py-2">Rain</div>
                <div className="...">{ typeof weatherData.rain !== "undefined" ? `${precipCalculation(weatherData.rain['1h'],unitConversion)}` : precipCalculation(0,unitConversion) }</div>
                <div className="bg-base-100 py-2">Pressure</div>
                <div className="...">{pressureCalculation(weatherData.main.pressure,unitConversion)}</div>
                <div className="bg-base-100 py-2">Humidity</div>
                <div className="...">{`${weatherData.main.humidity}%`}</div>
                <div className="bg-base-100 py-2">Wind Speed</div>
                <div className="...">{windCalculation(weatherData.wind.speed,unitConversion)}</div>
            </div>
        </div>
    
    
    }
    
    
    </>);
}

export default WeatherDetails;