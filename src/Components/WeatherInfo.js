import React, { useState } from "react";
import FiveDay from "./TabbedComponents/FiveDay";
import WeatherDetails from "./TabbedComponents/WeatherDetails";
import Hourly from "./TabbedComponents/Hourly";

const WeatherInfo = ({weatherData, unitConversion, fiveForecast}) =>{

    const [activeTab, setActiveTab] = useState('Details');

    const tabContents = {
        'Details': <WeatherDetails key={0} weatherData={weatherData} unitConversion={unitConversion}/>,
        'Hourly': <Hourly key={1} hourlyForecast={fiveForecast} unitConversion={unitConversion}/>,
        '5-Day Forecast' : <FiveDay key={2} fiveForecast={fiveForecast} unitConversion={unitConversion}/>,
        

    };

    return(<>
    <div className="flex flex-col justify-center">
    <div className="flex justify-center">
        <div className="tabs tabs-boxed">
            {Object.keys(tabContents).map((key)=><a className={`tab ${activeTab ===key ? 'tab-active' : ''}`} onClick={()=>setActiveTab(key)} key={key}>{key}</a>
            )}

        </div>

    </div>
        <div>
            
            {Object.keys(tabContents).map((key)=>{if(key===activeTab)        
                return tabContents[key]})}

        </div>
        
    </div>

        
    </>);
}

export default WeatherInfo;