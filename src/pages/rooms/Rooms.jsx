import { useLoaderData } from "react-router-dom";
import Galery from "../../shared/Galery";
import Table from "../../shared/Table";


const Rooms =  () =>{
    /**
     * @type {Array}
     */
    const getRoomsSpecifi = useLoaderData();

   

    const roomsNamePriceService = getRoomsSpecifi?.rooms.reduce( (acc,item)=>{

      const {type, name, price, features} = item

      const { description } = getRoomsSpecifi?.roomTypes.find(it=>it.type === type)

      const newObj = { ...item , description  }
      
      acc.push(newObj)
      return acc;  
    },[])

    const TheadRooms = () =>{
        return(
            <thead>
                <tr>
                    <th>Szoba tipus (name)</th>
                    <th>Ár</th>
                    <th>Szolgáltatás</th>
                    <th>Tudnivalók</th>
                </tr>
            </thead>
        )
    }



    return(
        <main>
            <h1>Szobáink, Szolgáltatásain</h1>

            <div className="row">

            <div className="row">
                <div className="col-12">
                    <Table tbodyData={roomsNamePriceService}>
                        <TheadRooms/>
                    </Table>
                </div>


                <div className="col-12">
                    <Galery />
                </div>
            </div>
            </div>
        </main>
    )

}

export default Rooms;