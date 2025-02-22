import { getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


export default function getMyDatabase(){

    let db = null;

    if(!db){
        db = getFirestore( getApp())
    }

    return db;

}