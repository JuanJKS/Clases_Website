import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';

import '../../styles/components/layout/BotonWhats.css';

const BotonWhats = (props) => {
    return (
        <div className='whatsapp-button'>
            <li><a href='https://api.whatsapp.com/send?phone=5491150629428&text=Hola,%20quisiera%20realizar%20una%20consulta!' target='_blank' rel='noreferrer'><AiOutlineWhatsApp /></a></li>
        </div>         
    );
}

export default BotonWhats;