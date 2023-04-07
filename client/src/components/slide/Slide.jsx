import React from "react"
import "./Slide.scss";
import Slider from 'infinite-react-carousel';
import CatLoc from "../catLoc/CatLoc";
import { cards } from "../../data";

const Slide = () => {
    return (
        <div className="slide">
            <div className="container">
                <Slider dots slidesToShow={4} arrowsScroll="4">
                   {cards.map(card=>(
                    <CatLoc item={card} key={cards.id}/>
                   ))}
                </Slider>
            </div>
        </div>
    )
}

export default Slide;