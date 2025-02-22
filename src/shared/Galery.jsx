import { useState } from "react";
import galerImgSrc from "./elements/galerImgSrc";

const rigthArrow = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>

const leffAttow = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
<path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>


const Galery = () =>{

    const [picIndex, setPicIndex] = useState(0)

    const maxIndexPicScr = galerImgSrc.length-1;

    const getOnePicSrx = galerImgSrc[picIndex]

    const switchPic = (muvelet)=>{
        if(picIndex+muvelet> maxIndexPicScr){
            setPicIndex(0)
        }
        else if(picIndex+muvelet < 0){
            setPicIndex(maxIndexPicScr)
        }
        else{
            setPicIndex(picIndex+muvelet)
        }
    }

    return(

        <section className="galery-item">
            <h2>Galériánk</h2>

            <div className="row justify-content-center align-items-center">
                <figure className="col-12" >
                    <img src={getOnePicSrx} alt="kép hotelunkről" />
                </figure>
                <button onClick={()=>switchPic(1)}  className="col-2 col-lg-3  btn rounded-start-pill btn-outline-success">{leffAttow}</button>
                <button  onClick={()=>switchPic(-1)} className="col-2 col-lg-3  btn rounded-end-pill btn-outline-success">{rigthArrow}</button>
            </div>

        </section>
    )
}

export default Galery;