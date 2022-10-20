import React, { useState } from "react";

const SearchBar = () => {

    const [searchLocation, setsearchLocation] = useState({
        location: ''
    });

    const handleSubmit= (e) =>{
        e.preventDefault();
        console.log(searchLocation);
        setsearchLocation({
            location: ''
        })
        
    }

    const searchHandler = (e) =>{
        setsearchLocation((values) => ({
            ...values,
            location: e.target.value,
        }));
        
    }

    return(<>
        <form onSubmit={handleSubmit}>
        <div className="form-control">
            <input type="text" placeholder="Search for location" className="input input-bordered  " value={searchLocation.location} onChange={searchHandler}/>
        </div>
        </form>
    </>);
}

export default SearchBar;