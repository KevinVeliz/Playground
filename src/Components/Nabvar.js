import { NavLink } from 'react-router-dom';
import '../Styles/Nav.css'
import image from '../IMG/image1.png'
import { useState } from 'react';

const NavbarPage = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className="navbar">
            <div className='logo'>
                        <img src={image} alt='logo' className='logo-img' />
                        <div className='text'><p>KrugerStar</p></div>
                    </div>
                <div className="nav-container">
                   
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to='/imc'
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                IMC Calculator
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/age"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Age Calculator
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to='/reloj'
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                My Clock
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to='/about'
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                About me
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to='/contact'
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Conctact
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
                <div className='line'></div>
            </nav>
        </>
    );
}

export default NavbarPage;