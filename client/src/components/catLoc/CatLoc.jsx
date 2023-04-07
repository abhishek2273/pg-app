//CatLoc - category(Location)
import React from "react";
import { Link } from "react-router-dom";
import "./CatLoc.scss";

const CatLoc = ({item}) => {
    return (
        <Link to="/hotel?city=kharghar">
            <div className="CatLoc">
                <img src={item.img} alt="" />
                <span className="title">{item.title}</span>
            </div>
        </Link>
    )
}

export default CatLoc;