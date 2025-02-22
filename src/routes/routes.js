import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/home/Home";
import Rooms from "../pages/rooms/Rooms";
import getJsonFile from "../functions/getJsonFile.js";
import Services from "../pages/szolgáltatások/Services.jsx";
import DateRooms from "../pages/foglalasok/DateRooms.jsx";

const route = createBrowserRouter([
 
    {
        path: '/',
        element : <DefaultLayout/>,
        children : [

            {
                path : '/',
                element: <Home/>
            },
            {
                path: '/szobak',
                element: <Rooms/>,
                loader: ()=> getJsonFile('/assets/hotelData.json'),
                hydrateFallbackElement: <h1>Töltés...</h1>,
            },
            {
                path: '/szolgaltatasok',
                element: <Services/>,
                loader: ()=> getJsonFile('/assets/hotelData.json'),
                hydrateFallbackElement: <h1>Töltés...</h1>,
            },
            {
                path: '/foglalas',
                element: <DateRooms/>,
                loader: ()=> getJsonFile('/assets/hotelData.json'),
                hydrateFallbackElement: <h1>Töltés...</h1>,
            }
            
        ]
    }
])

export default route