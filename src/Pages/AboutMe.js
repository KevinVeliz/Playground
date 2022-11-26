import NavbarPage from "../Components/Nabvar";
import '..//Styles/About.css'
import profile from '..//IMG/Profile.jpeg'
import FooterPage from "./Footer";

const AboutMePage = () => {
    return (
        <div>
            <NavbarPage />
            <div className="About-css">
                <div>
                    <img className="img-about" src={profile} alt="img"/>
                </div>
                <div className="text-box">
                   <h1 className="text-title-box">Kevin Orlando Veliz</h1>
                   <p className="text-title-box-p"> Hola, Soy desarrollador Front-end, graduado de la Escuela Politécnica Nacional como Desarrollador de Software. Actualmente me encuentro en un curso de KrugerStart, para poder aumentar mis conocimientos y lograr entrar a trabajar. Me considero una persona creativa, proactiva y que le interesa el mundo de la programación y un gran videojugador. </p>
                </div>
            </div>
            <FooterPage/>
        </div>
    );
}

export default AboutMePage