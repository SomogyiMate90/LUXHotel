import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebasConfig";

export default function getApp(){
    let app = null;

    if(!app){
        app = initializeApp(firebaseConfig)
    }

    return app;
}