import { getFirestore } from "firebase/firestore";
import getFireBaseApp from "./getApp";



let appDb = null;

export default function getApp(){

    if(!appDb){
        appDb = getFirestore(getFireBaseApp());
    }

    return appDb;
}