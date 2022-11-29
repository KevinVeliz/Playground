import { NavLink } from 'react-router-dom';
import '../Styles/Nav.css'
import image from '../IMG/image1.png'
import { useState } from 'react';

const NavbarPage = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    let activeClass = 'active';
    return (
        <>
            <div>
                <div className='logo'>
                    <img src={image} alt='logo' className='logo-img'/>
                    <div className='text'><p>KrugerStar</p></div>
                </div>
                <nav className='nav-links'>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
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
                <div className="nav-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <div className='line'></div>
            </div>


        </>
    );
}

export default NavbarPage;