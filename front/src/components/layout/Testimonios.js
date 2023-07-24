import React from 'react';

import '../../styles/components/layout/Testimonios.css';

const Testimonios = ({ opinion, autor, zona }) => {
    return (
        <div className='card testimony-carrousel'>
            <div className='card-header'>
                Lo que opinan de mis clases...
            </div>
            <div className='card-body'>
                <blockquote className='blockquote mb-0'>
                    <p>{opinion}</p>
                    <footer className='blockquote-footer'>{`${autor} de `}<cite title='Source Title'>{zona}</cite></footer>
                </blockquote>
            </div>
        </div>
    );
}

export default Testimonios;