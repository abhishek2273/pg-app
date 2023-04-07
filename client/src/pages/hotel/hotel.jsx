import React, { useRef, useState } from "react";
import "./hotel.scss";
// import { roomCard } from "../../data";
import HotelCard from "../../components/hotelCard/hotelCard";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useLocation } from "react-router-dom";

const Hotel = () => {

  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['hotels'],
    queryFn: () =>
      newRequest
        .get(`/hotels`)
        .then((res) => {
          return res.data;
        }),
  });
// ${search}&min=${minRef.current.value}&max=${maxRef.current.value}
  console.log(data);

  const apply = () => {
    refetch();
  }

  return (
    <div className="hotels">
      <div className="container">
        <span className="url">Pgscout {'>'} kharghar {'>'} admin</span>
        <h1>Kharghar</h1>
        <div className="menu">
          <span>Price</span>
          <input type="number" placeholder="min" />
          <input type="number" placeholder="max" />
          <button onClick={apply}>Apply</button>
        </div>

        <div className="cards">
          {isLoading ? "loading..." : error ? "Error : " + error.message : data.map((item) => (
            <HotelCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hotel;


// .get(`/hotels${search}&min=${minRef.current.value}&max=${maxRef.current.value}`)