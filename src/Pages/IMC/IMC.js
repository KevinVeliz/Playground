import { useEffect, useState } from 'react'
import NavbarPage from '../../Components/Nabvar';
import '../../App.css'
import FooterPage from '../Footer';

const IMC = () => {

    const [value, setValue] = useState('20');
    const [valuecm, setValuecm] = useState('100');
    const [text, setText] = useState('');
    const [color, setColor] = useState();

    const handleChange = (event) => {
        setValue(event.target.value)
        Operaciones()
    }

    const handleChangecm = (event) => {
        setValuecm(event.target.value)
        Operaciones()
    }

    useEffect(()=>{
        Operaciones()
    })

    let total = 0;
    total = valuecm / 100
    let calculo = 0;
    calculo = value / Math.pow(total, 2)
    let resp = calculo.toFixed(1)

    const Operaciones = () => {
        if (resp >= 18.5 && resp <= 24.9) {
            setText('Peso Normal')
            setColor('#44B544')
        }
        if (resp >= 25 && resp <= 29.9) {
            setText('Sobrepeso')
            setColor('blue')
        }
        if (resp >= 30 && resp <= 34.9) {
            setText('Obesidad Normal I')
            setColor('#EAE71A')
        }
        if (resp >= 35 && resp <= 39.9) {
            setText('Obesidad Normal II')
            setColor('#EA921A')
        }
        if (resp >= 40) {
            setText('Obesidad Normal III')
            setColor('#EA621A')
        }
    }


    return (
        <div>
            <NavbarPage/>
            <div className='card-imc'>
                <div className='peso'>
                    <input type="range" min="20" max="200"  value={value} onChange={handleChange} />
                    <div className='text-peso'>
                        <p>{value} kg</p>
                    </div>
                </div>

                <div className='edad'>
                    <input type="range" min="100" max="200" value={valuecm} onChange={handleChangecm} />
                    <div className='text-edad'>
                        <p>{valuecm} cm</p>
                    </div>
                </div>


                <div className='result'>
                    <p className='Result'>{resp}</p>
                    <p className='result-text' style={{ color: color }}>{text} </p>
                </div>
            </div>
            <FooterPage/>
        </div>
    );
}

export default IMC;