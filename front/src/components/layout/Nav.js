import React from 'react';
import { SiReact } from 'react-icons/si';

import '../../styles/components/layout/Nav.css';

const Nav = (props) => {
    const navSections = document.querySelectorAll('.nav-link');

    const isClickOnSection = (e) => {
        for (let i = 0; i < navSections.length; i++) {
            navSections[i].classList.remove('nav-active');
        }

        e.target.classList.add('nav-active');

        let navButton = document.querySelector('#navbarNav');
        navButton.classList.remove('show');  
    };

    return (
        <nav className='navbar navbar-expand-lg bg-light'>
            <div className='container-fluid nav-site'>
                <div className='navbar-brand container-personal_logo'>
                    <h2><span className='span-1'>PROFE</span><span className='span-2'>JUAN</span></h2>
                    <div className='react-icon'>
                        <SiReact />
                    </div>
                </div>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'><span className='navbar-toggler-icon'></span></button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a className='nav-link' name='home' aria-current='page' href='#home' onClick={isClickOnSection}>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' name='matematica' href='#matematica' onClick={isClickOnSection}>Matemática</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' name='fisica' href='#fisica' onClick={isClickOnSection}>Física</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' name='misclases' href='#misclases' onClick={isClickOnSection}>Mis Clases</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' name='sobremi' href='#sobremi' onClick={isClickOnSection}>Sobre Mí</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' name='contacto' href='#contacto' onClick={isClickOnSection}>Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;