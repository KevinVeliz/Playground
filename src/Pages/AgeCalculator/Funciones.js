import { useState } from "react"
import Dates from "./Date"

const Funciones = () => {

    const [value, setValue] = useState('')
    const [dia, setDia] = useState()
    const [mes, setMes] = useState()
    const [anio, setAnio] = useState()
    
    const {anioActual,mesActual,diaActual} = Dates()

    let years = [];
    let totaldiap, totaldia, NumberMes, NumberAnio, NumberDia, totalAnio, totalMes;


    const handleValue = (event) => {
        setValue(event.target.value)
    }

    const fechas = () => {
        totalAnio = anioActual - NumberAnio
        totalMes = mesActual - NumberMes
        totaldiap = diaActual - NumberDia
        totaldia = Math.abs(totaldiap)
        setMes(totalMes)
        setAnio(totalAnio)
        setDia(totaldia)
    }

    const alertComponent = () => {
       alert('La fecha seleccionada es mayor a la fecha actual')
        setAnio('')
        setMes('')
        setDia('')
        setValue('')
    }


    const handleButon = () => {
        years = value.split('-')
        NumberMes = parseInt(years[1])
        NumberAnio = parseInt(years[0])
        NumberDia = parseInt(years[2])
        if (NumberAnio > anioActual || NumberMes > mesActual) {
            alertComponent()
        }
        else {
            if (NumberAnio === anioActual && NumberMes === mesActual) {
                if (NumberDia > diaActual) {
                    alertComponent()
                }
                else {
                    fechas()
                }
            }
            else {
                fechas()
            }
        }
    }

    
    return {
        dia,mes,anio,handleValue,fechas,handleButon,value
    }
}
 
export default Funciones;