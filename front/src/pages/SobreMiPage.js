import React from 'react';

import '../styles/components/pages/SobreMiPage.css';

const SobreMiPage = (props) => {
    return (
        <div className='section-aboutme'>
            <div id='sobremi' className='container-lg total-container'>
                <div className='col-12'>
                    <h2 className='important-title'>Sobre mí</h2>
                </div>
                <div data-aos='zoom-out-down' data-aos-delay='200' data-aos-duration='1000' className='col-12 container-img'>
                    <img src='img/Ficha-3.jpg' alt='Foto de ficha 3'/>
                </div>
                <div data-aos='zoom-out-up' data-aos-delay='300' data-aos-duration='1000' className='container-span'>
                    <span>
                        Me especializo desde hace años dictando clases de apoyo de matemática y física a niños y niñas, adolescentes y adultos de todos los niveles.
                        Mi modalidad de trabajo es especial para aprender y comprender de manera práctica y fácil los temas y procedimientos que la materia requiera.
                        <br></br>Con mas de 10 años de experiencia en el mundo de las clases particulares, descubrí que me apasiona la enseñanza personalizada, y que soy un total convencido de que aprobar no es lo mas importante, sino aprender, lo cual traerá como consecuencia todo lo demás.
                        <hr></hr>Me formé académicamente durante años estudiando la carrera de Ingeniería Industrial en la UTN, para luego desarrollarme laboralmente en dicho ámbito en distintas empresas. De todas las experiencias vividas he aprendido, todo me ha dejado algo, pero a lo largo
                        de los años me di cuenta que mi verdadera vocación estaba en lograr ayudar a los demás a cumplir sus objetivos académicos, los cuales los tomo como propios a lo largo de cada proceso, aportando mi granito de arena. Esto lo hago buscando transmitir y compartir mis conocimientos no solo
                        de las materias en sí sino también didácticos.
                        Creo en los procesos y creo que con tiempo y dedicación todos los objetivos se pueden cumplir.
                    </span>    
                </div>
            </div>
        </div>
    );
}

export default SobreMiPage;