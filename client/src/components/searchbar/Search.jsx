import React, {useState} from "react";
import "./Search.scss";
import {useNavigate} from "react-router-dom";

const SearchBar = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = () => {
      navigate(`/hotels?search=${input}`);
    };
    return (
        <div className="search_bar">
            <div className="container">
                <h1>Find best renting house</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="./img/search.png" alt="" srcset="" />
                        <input type="text" 
                        placeholder='Flat near Khargar station' 
                        onChange={(e)=>setInput(e.target.value)}/>
                    </div>
                    <button onClick={handleSubmit}>Search</button>
                </div>
                <div className="find">
                    <span>Search :</span>
                    <button>Pg house</button>
                    <button>Rent House</button>
                    <button>Rent Flat</button>
                    <button>Hostels</button>
                </div>
            </div>
        </div>
    )
}
export default SearchBar;