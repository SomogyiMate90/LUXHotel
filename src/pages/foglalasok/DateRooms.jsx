import DefaultInput from "../../shared/DefaultInput";
import DefaultChecBox from "../../shared/DefaultChecBox";
import { useLoaderData } from "react-router-dom";
import getFormObj from "../../functions/getFormObj";


const DateRooms = () =>{
    const now = new Date();
    const todayIso = now.toISOString();
    const chartAtT = todayIso.indexOf('T');

    // idő beállítása
    const twoPlusDayToday = now.setDate(now.getDate() + 2);
    const twiPlusIso = new Date(twoPlusDayToday).toISOString();
    const today = todayIso.slice(0,chartAtT)
    const twoPlus2 = twiPlusIso.slice(0,chartAtT)

    const getRoomsSpecifi = useLoaderData();

    /**
     * 
     * @param {Event} event 
     */
    const postDataToFireBase =  async (event) =>{
        event.preventDefault()

        const formObj = getFormObj(event)

        await postDataToFireBase(formObj)


    }


    return(
        <main>
            <h1>Foglaljon még ma szállás</h1>
            <form onSubmit={(event)=>postDataToFireBase(event)}>
                <fieldset className="my-2 border border-1 p-2">
                    <DefaultInput props={{type:'text', nameAndId: 'nev',text: 'Név'}} />
                    <DefaultInput props={{type:'number', nameAndId: 'szobafo',text: 'Hány ágyas szoba', min : 1 , max : 5}} />
                    <DefaultInput props={{type:'date', nameAndId: 'erkezes',text: 'Érkezés napja', defaultValue : today}} />
                    <DefaultInput props={{type:'date', nameAndId: 'tavozas',text: 'Távozás napja', defaultValue : twoPlus2 }} />
                </fieldset>
                    
                <fieldset className="my-2 border border-1 p-2">
                    {
                        getRoomsSpecifi.services.map((item,index)=>{
                            return(
                                <DefaultChecBox key={index} props={{ nameAndId: item.name.toLowerCase(),text: item.description }}/>
                            )
                        })
                    }
                </fieldset>

                <div className="d-flex justify-content-center"><button className=" my-2 btn btn-primary" type="submit">Foglalás</button> </div>   
            </form>
        </main>
    )
}

export default DateRooms;