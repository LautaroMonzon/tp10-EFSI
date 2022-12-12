import Form from "../componentes/formulario"
import ListadoCitas from "../componentes/listadoCitas"

import react, {useState} from "react"

const Home = ()=>
{
    const [citas, setCitas] = useState([]);   
    console.log("citas :",citas);

    return(
        <react.Fragment>
        <Form setCitas={setCitas} citas={citas}/>
        <ListadoCitas citas={citas}/>
        </react.Fragment>
    )
}
export default Home;

