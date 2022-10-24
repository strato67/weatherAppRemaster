import React from "react";
import Navbar from "./Components/Navbar";
import WeatherDisplay from "./Components/WeatherDisplay";

import './index.css'

const App = () =>{

    const result = (result) =>{
        console.log(result)
    }



    return(<>
    <Navbar setResult={result}/>
    <WeatherDisplay />
    
    </>)
}
export default App;