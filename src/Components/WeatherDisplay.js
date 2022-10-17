import React from "react";

const WeatherDisplay = () =>{


    return(<>
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
                <div className="flex-col">
                <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
                <h2 className="text-5xl font-bold text-center pt-7">20 C</h2>
                </div>
                
                <div className="bg-neutral text-center p-4 rounded-lg">
                    <h1 className="text-5xl font-bold">Location</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                </div>
            </div>
        </div>
    
    </>);

};

export default WeatherDisplay;