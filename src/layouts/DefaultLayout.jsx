import { Outlet } from "react-router-dom";
import Header from "./Header";



const DefaultLayout = () =>{
    return(
        <div className="default-layout">
        <Header/>
        <div className="container">
        <Outlet/>  


        </div>
        <footer className="container-xl">Láblécc</footer>
        </div>
    )
}

export default DefaultLayout;