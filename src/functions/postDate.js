import { addDoc, collection } from "firebase/firestore";
import getAppdb from "../firebase/getDataBase";

async function postDate(obj) {
    console.log(obj)
    const db = getAppdb();
    console.log(db)
    const collref = collection(db , 'foglalas')
    await addDoc(collref,obj)
    
    
}

export default postDate;