import React from 'react';

import '../../styles/components/layout/EspecialidadesColegios.css';

const EspecialidadesColegios = (props) => {
    return (
        <div className='container-lg container-specialties'>
            <div data-aos='fade-down-right' data-aos-delay='500' data-aos-duration='1000' className='col-12 col-xxl-3 specialties-text'>
                <h3>Clases particulares para personas de diversos colegios, institutos y universidades</h3>
                <p>Preparación para nivel primario, secundario, terciario y universitario.<br></br>CBC e ingresos de variadas carreras.</p>
            </div>
            <div data-aos='fade-up-left' data-aos-delay='500' data-aos-duration='1000' className='col-12 col-xxl-9 all-logos'>
                <div className='col-12 col-md-6 col-logo'>
                    <div className='container-logo'>
                        <img src='img/Logo-1.png' alt='Logo1'/>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-logo'>
                    <div className='container-logo'> 
                        <img src='img/Logo-2.jpg' alt='Logo2'/>
                    </div>
                </div>
                <div className='col-12 col-sm-6 col-md-3 col-logo'>
                    <div className='container-logo'>
                        <img src='img/Logo-3.jpg' alt='Logo3'/>
                    </div>
                </div>
                <div className='col-12 col-sm-6 col-md-3 col-logo'>
                    <div className='container-logo'>
                        <img src='img/Logo-4.jpg' alt='Logo4'/> 
                    </div>
                </div>
                <div className='col-12 col-sm-6 col-md-3 col-logo'>
                    <div className='container-logo'>
                        <img src='img/Logo-5.png' alt='Logo5'/>
                    </div>
                </div>
                <div className='col-12 col-sm-6 col-md-3 col-logo'>
                    <div className='container-logo'>
                        <img src='img/Logo-6.jpg' alt='Logo6'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EspecialidadesColegios;