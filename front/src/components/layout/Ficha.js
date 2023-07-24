import React from 'react';

import '../../styles/components/layout/Ficha.css';

const Ficha = ({ clase, titulo, imagen, texto }) => {
    return (
        <div className='container-lg'>
            <div className='col-12'>
                <h2 className='important-title'>{titulo}</h2>
            </div>
            <div className={clase}>
                <div data-aos='fade-right' data-aos-offset='300' data-aos-easing='ease-in-sine' className='col-xs-12 col-xl-8 container-file-img'>
                    <img
                        src={require(`../../../public/img/Ficha-${imagen}.jpg`)}
                        alt='Foto de ficha'/>
                </div>
                <div data-aos='fade-left' data-aos-delay='500' data-aos-offset='300' data-aos-easing='ease-in-sine' className='col-xs-12 col-xl-4 container-file-text'>
                    <p>{texto}</p>
                </div>
            </div>
        </div>
    );
}

export default Ficha;