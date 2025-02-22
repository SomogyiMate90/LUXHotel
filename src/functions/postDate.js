import { addDoc } from "firebase/firestore";
import getMyDatabase from "../firebase/getDataBase"

async function postDate(obj) {

    const db = getMyDatabase();

    const collection = await collection(db , 'foglalas')
    await addDoc(collection,obj)
    
    
}