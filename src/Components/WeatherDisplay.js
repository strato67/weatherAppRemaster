import React from "react";
import WeatherInfo from "./WeatherInfo";

const WeatherDisplay = () =>{


    return(<>
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
                <div className="flex-col">
                <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
                <div className="divider"></div> 
                <h2 className="text-5xl font-bold text-center px-3">20 C</h2>
                </div>
                
                <div className="bg-neutral text-center p-4 rounded-lg">
                    <h1 className="text-5xl font-bold">Location</h1>
                    <div className="divider"></div> 
                    <WeatherInfo />
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                </div>
            </div>
        </div>
    
    </>);

};

export default WeatherDisplay;