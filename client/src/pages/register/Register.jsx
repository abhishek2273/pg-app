import React, { useState } from "react";
import "./Register.scss";
import { useNavigate } from "react-router-dom";
import upload from "../../utils/upload";
import newRequest from "../../utils/newRequest";

const Register = () => {
    const imgs = "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=996&t=st=1680419694~exp=1680420294~hmac=f53030d6fde4840aae7cda4e9968e05f1c0d2b03bc1aad1208263bebcc617916"

    const [file, setFile] = useState(null);
    const [user, setUser] = useState({
        username: "",
        email: "",
        country: "",
        password: "",
        img: "",
        isAdmin: false,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleSeller = (e) => {
        setUser((prev) => {
            return { ...prev, isAdmin: e.target.checked };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = await upload(file);
        try {
            await newRequest.post('/auth/register', {
                ...user,
                img: url,
            });
            alert("Your Account is Created Successfully \nNow login with your Username Or Password...")
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="register">
            <div className="container">
                <div className="left">
                    <img src={imgs} alt="" />
                </div>
                <div className="right">
                    <form onSubmit={handleSubmit}>
                        <h1>Create a new Account</h1>
                        <p>Required filed <i>*</i> fill in Compulsary</p>
                        <label htmlFor="">Username <i>*</i></label>
                        <input
                            name="username"
                            type="text"
                            placeholder="admin"
                            required
                            onChange={handleChange}
                        />
                        <label htmlFor="email">Email <i>*</i></label>
                        <input
                            name="email"
                            type="email"
                            placeholder="admin123@gmail.com"
                            required
                            onChange={handleChange}
                        />
                        <label htmlFor="country">Country <i>*</i></label>
                        <input
                            name="country"
                            type="text"
                            placeholder="India"
                            required
                            onChange={handleChange}
                        />
                        <label htmlFor="Password">Password <i>*</i></label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder=""
                            required
                            onChange={handleChange}
                        />
                        <label htmlFor="">Profile Picture</label>
                        <input type="file" onChange={(e) => setFile(e.target.files[0])} />

                        <div className="toggle">
                            <label htmlFor="">Activate the seller account</label>
                            <label className="switch">
                                <input type="checkbox" onChange={handleSeller} />
                                <span className="slider round"></span>
                            </label>
                        </div>

                        <div className="btn">
                            <button type="submit">Register</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Register;