import { useLoaderData } from "react-router-dom";
import Table from "../../shared/Table";
import Galery from "../../shared/Galery";

const Services = () =>{

    const getRoomsSpecifi = useLoaderData();

    const TheadServices = () =>{
        return(
            <thead>
                <tr>
                    <th>Közösségi tér</th>
                    <th colSpan={4}>Leírás</th>
                </tr>
            </thead>
        )
    }

    return(
        <main>
            <h1 className="mb-3">Szolgáltatások</h1>

            <div className="row justify-content-evenly align-items-center">
                <div className="col-10 col-xl-8">
                        <Table tbodyData={getRoomsSpecifi.services}>
                            <TheadServices/>
                        </Table>
                </div>
                <div className="col-8 col-xl-4">
                    <Galery/>
                </div>
            </div>

        </main>
    )
}

export default Services;