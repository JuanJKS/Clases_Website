import React from 'react';

import '../../styles/components/layout/TarjetaModalidades.css';

const TarjetaModalidades = ({ imagen, titulo, texto }) => {
    return (
        <div className='col'>
            <div className='card'>
                <img
                    className='card-img-top'
                    src={require(`../../../public/img/TarjetaModalidades-${imagen}.jpg`)}
                    alt={titulo}
                />
                <div className='card-body card-modalities'>
                    <h5 className='card-title'>{titulo}</h5>
                    <p className='card-text'>{texto}</p>
                </div>
            </div>
        </div>
    );
}

export default TarjetaModalidades;