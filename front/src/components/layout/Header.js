import React from 'react';

import Nav from '../layout/Nav';

import '../../styles/components/layout/Header.css';

const Header = (props) => {
    return (
        <div data-aos='fade-down' data-aos-easing='linear' data-aos-duration='1500' className='container-nav-logo'>
            <header data-aos='zoom-in' data-aos-delay='1500' data-aos-duration='1000' className='container-lg container-nav'>
                <Nav />
            </header>
        </div>
    );
}

export default Header;