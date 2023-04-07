import React, { useState } from 'react';
import "./addHotel.scss";
import upload from '../../utils/upload';
import newRequest from '../../utils/newRequest';
import { useNavigate } from 'react-router-dom';
export const addHotel = () => {
    const [file, setFile] = useState(null);
    const [hotel, setHotel] = useState({
        pgname: "",
        city: "",
        address: "",
        price: "",
        desc: "",
        cover: "",
        photo: ""
    })

    const navigate = useNavigate();
    const handleChange = async (e) => {
        setHotel((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = await upload(file);
        try {
            await newRequest.post('/hotels', {
                ...hotel,
                cover: url,
                photo: url,
            });
            navigate('/hotels')
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="addHotels">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h2>Register Your PG/House</h2>
                    <div className="list">
                        <label>PG Name : </label>
                        <input type="text" />
                    </div>
                    <div className="list">
                        <label>City : </label>
                        <input
                            type="text"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="list">
                        <label>Address : </label>
                        <input type="text"  onChange={handleChange}/>
                    </div>
                    <div className="list">
                        <label>Price : </label>
                        <input type="number"  onChange={handleChange}/>
                    </div>
                    <div className="list">
                        <label>Description : </label>
                        <input type="text"  onChange={handleChange}/>
                    </div>
                    <div className="list">
                        <label>Cover Image : </label>
                        <input type="file"  onChange={(e) => setFile(e.target.files[0])}/>
                    </div>
                    <div className="list">
                        <label>Photos : </label>
                        <input type="file"  onChange={(e) => setFile(e.target.files[0])}/>
                    </div>
                    <button type='submit'>SUBMIT</button>
                </form>
            </div>
        </div>
    )
}
export default addHotel;
