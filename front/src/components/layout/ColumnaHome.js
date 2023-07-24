import React from 'react';

import '../../styles/components/layout/ColumnaHome.css';

const ColumnaHome = ({ icono, titulo, texto }) => {
    return (
        <div className='col quadrants-home'>
            <div className='col-2 div-quadrants-icons'>
                {icono}
            </div>
            <div className='col-10 div-quadrants-text'>
                {titulo}
                <p>{texto}</p>
            </div>
        </div>
    );
}

export default ColumnaHome;