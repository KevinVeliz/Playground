const Dates = () => {
    let anioActual, mesActual, diaActual;
    let fechaActual = new Date()
    anioActual = fechaActual.getFullYear()
    mesActual = fechaActual.getMonth() + 1
    diaActual = fechaActual.getDate()

    return {anioActual, mesActual, diaActual}
}
 
export default Dates;