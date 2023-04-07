import React from "react";
import "./hotelCard.scss";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const hotelCard = ({ item }) => {

  const { isLoading, error, data } = useQuery({
    queryKey: ["item.userId"],
    queryFn: () =>
      newRequest
        .get(`/users//${item.userId}`)
        .then((res) => {
          return res.data;
        })
  })

  return (
    <Link to={`/room/${item._id}`} className="link">
      <div className="hotelCard">
        <img src={item.cover} alt="" />
        <div className="info">
          {isLoading ? (
            "loading..."
          ) : error ? (
            error.message
          ) : (
            <div className="user">
              <img src={data.profile || "./img/profile.png"} alt="" />
              <span>{data.username}</span>
            </div>
          )}
          <h3>{item.title}</h3>
          {/* <p>{item.description}</p> */}
        </div>
        <hr />
        <div className="detail">
          <div className="left">
            <div className="left_corner">
              <span>Price :</span>
              <h2>₹{item.cheapestPrice}</h2>
            </div>
            <div className="left_corner">
              <span>Type :</span>
              {/* <h2>{item.rooms}</h2> */}
              <h2>{item.pgType}</h2>
            </div>
          </div>

          <div className="right">
            <div className="right_corner">
              <span>Location :</span>
              <h2>{item.city}</h2>
            </div>
            <div className="right_corner">
              <button>Click Here</button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default hotelCard;
