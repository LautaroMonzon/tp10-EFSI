import Cita from "./cita";

const ListadoCitas = ({citas})=>
{

    return(
        <div>
            <h2>Administra tus citas</h2>
            {citas.map(function(cita) {
                return <Cita key={cita.nombreMascota} cita={cita}/>
            })}
        </div>
        
    )
}
export default ListadoCitas;

