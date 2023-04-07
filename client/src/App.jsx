import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/home";
import Login from "./pages/login/Login"
import Register from "./pages/register/Register";
import Hotel from "./pages/hotel/hotel";
import Room from "./pages/rooms/rooms";
import AddHotel from "./pages/addHotels/addHotel";
import "./App.scss";

import {
    createBrowserRouter,
    RouterProvider,
    Route, Link, Outlet
} from "react-router-dom";

import {
    QueryClient,
    QueryClientProvider
} from "@tanstack/react-query";

const App = () => {

    const queryClient = new QueryClient();

    const Layout = () => {
        return (
            <div className="app">
                <QueryClientProvider client={queryClient}>
                    <Navbar />
                    <Outlet />
                    {/* <Footer /> */}
                </QueryClientProvider>
            </div>
        )
    }

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/login',
                    element: <Login />,
                },
                {
                    path: '/register',
                    element: <Register />,
                },
                {
                    path: '/hotel',
                    element: <Hotel />,
                },
                {
                    path: '/addhotel',
                    element:<AddHotel/>,
                },
                {
                    path: '/room/:id',
                    element: <Room />,
                }
            ]
        }
    ])

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}
export default App;