

export default async function getJsonFile(url){

    
    try{
        const resp = await fetch(url);
        if(resp.ok){
            const unZipData = await resp.json();
    
            return unZipData
        }
        else{
            throw new Error('Betöltés hiba')
        }
    }
    catch(e){
        console.error(e.message)
        return []
    }

}