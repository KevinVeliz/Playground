import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import '../Styles/Nav.css'
import image from '../IMG/image1.png'
import FooterPage from '../Pages/Footer';

const NavbarPage = () => {
    let activeClass = 'active';
    return (
        <>
            <div>
                <div className='logo'>
                    <img src={image} alt='logo'/>
                    <div className='text'><p>KrugerStar</p></div>
                </div>
                <nav className='nav-links'>
                    
                    <ul>

                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? activeClass : undefined
                            } id="Navbar-css" to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? activeClass : undefined} id="Navbar-css" to='/imc'>IMC Calculator</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? activeClass : undefined} id="Navbar-css" to='/age'>Age Calculator</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? activeClass : undefined} id="Navbar-css" to='/reloj'>My Clock</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? activeClass : undefined} id="Navbar-css" to='/about'>About me</NavLink>

                        </li>
                        <li>
                            <NavLink className={({ isActive }) =>
                                isActive ? activeClass : undefined} id="Navbar-css" to='/contact'>Contact</NavLink>

                        </li>
                    </ul>
                </nav>
                <div className='line'></div>

            </div>
             

        </>
    );
}

export default NavbarPage;