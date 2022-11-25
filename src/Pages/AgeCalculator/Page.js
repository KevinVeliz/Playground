import '../../Styles/Age.css'
import Header from "./Header";
import Fechas from "./Funciones";
import NavbarPage from '../../Components/Nabvar';
import FooterPage from '../Footer';

const Page = () => {


    const { handleValue, value, handleButon, anio, dia, mes } = Fechas()

    return (
        <div>
            <NavbarPage/>
            <div className='box'>
                <div className='input-edad'>
                    <input className="InputEdad" type='date' value={value} onChange={handleValue} />
                </div>
                <div className='button-edad'>
                    <button className='button1' onClick={handleButon}>Calculate</button>
                </div>
            </div>
            <div className='boxes'>
                <div className="Years">
                    <div className="number">

                        {anio ? anio : '-'}
                    </div>
                    <div className="text-age">
                        Years
                    </div>
                </div>
                <div className="Months">
                    <div className="number">

                        {mes ? mes : '-'}
                    </div>
                    <div className="text-age">Months</div>
                </div>
                <div className="Days">
                    <div className="number">

                        {dia ? dia : '-'}
                    </div>
                    <div className="text-age">
                        Days
                    </div>
                </div>
            </div>
            <FooterPage/>
        </div>
    );
}

export default Page;
