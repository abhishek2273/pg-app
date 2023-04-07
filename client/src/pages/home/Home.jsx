import React from "react";
import SearchBar from "../../components/searchbar/Search";
import Slide from "../../components/slide/Slide"; 


const Home = () => {
    return (
        <div className="home">
            <SearchBar />
            <Slide />
        </div>
    )
}
export default Home;