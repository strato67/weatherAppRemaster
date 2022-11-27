import React, { useState } from "react";
import FiveDay from "./TabbedComponents/FiveDay";
import WeatherDetails from "./TabbedComponents/WeatherDetails";

const WeatherInfo = () =>{

    const [activeTab, setActiveTab] = useState(0);

    return(<>
    <div className="flex flex-col justify-center">
    <div className="flex justify-center">
        <div className="tabs tabs-boxed">
            <a className={`tab ${activeTab ===0 ? 'tab-active' : ''}`}>Details</a> 
            <a className={`tab ${activeTab ===1 ? 'tab-active' : ''}`}>5 Day Forecast</a> 
            <a className={`tab ${activeTab ===2 ? 'tab-active' : ''}`}>Map</a>
        </div>

    </div>
        <div>
            <FiveDay/>
            <WeatherDetails/>
        </div>
        
    </div>

        
    </>);
}

export default WeatherInfo;