import React, { useState } from "react";

const SearchBar = ({setResult}) => {

    const [searchLocation, setsearchLocation] = useState('');

    const handleSubmit= (e) =>{
        e.preventDefault();
        setResult(searchLocation);
        
    }

    const searchHandler = (e) => setsearchLocation(() => `${e.target.value}`);

    return(<>
        <form onSubmit={handleSubmit}>
        <div className="form-control">
            <input type="text" placeholder="Search for location" className="input input-bordered " value={searchLocation.location} onChange={searchHandler}/>
        </div>
        </form>
    </>);
}

export default SearchBar;