const Cita = ({cita})=>
{
    console.log(cita)
    return(
        <div className="cita">
            <p>Mascota: <span>{cita.nombreMascota}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
        </div>
    )
}
export default Cita;

