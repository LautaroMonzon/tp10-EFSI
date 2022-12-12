const Form = ({setCitas, citas})=>
{
    function handleSubmit(e) {
        e.preventDefault();
        console.log("nombre Mascota", e.target[0].value);
        console.log("Fecha", e.target[1].value);
        setCitas([...citas, {nombreMascota : e.target[0].value, fecha : e.target[1].value}])
    }
    
    return(
    <form onSubmit={handleSubmit}> 
        <div className="form-group">
            <label htmlFor="nombreMascota">Nombre Mascota </label>
            <input type="text" className="form-control" id="nombreMascota" placeholder="Nombre mascota"/>
        </div>
        <div className="form-group">
            <label htmlFor="fecha">Fecha</label>
            <input type="date" className="form-control" id="fecha"/>
        </div>
        <div>
            <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
        </div>
    </form>
    )
}
export default Form;

