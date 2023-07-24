import React from 'react';

import Ficha from '../components/layout/Ficha';

import '../styles/components/pages/FisicaPage.css';

const FisicaPage = (props) => {
    return (
        <div className='section-physical'>
            <div id='fisica' className='container-lg total-container'>
                <Ficha
                    clase='container-file file-reverse'
                    titulo='Física'
                    imagen='2'
                    texto='En física también considero a la ejercitación como elemento clave para el aprendizaje. En los procesos también brindo herramientas conceptuales y teóricas, así como las fórmulas correspondientes a cada tema, y más allá de eso, al igual que con matemática, enfoco los procesos de aprendizaje bajo la premisa de la práctica como factor fundamental. Física como materia tiene una particularidad y es que en cierto punto depende mucho del manejo de la matemática (lo cual a la inversa no sucede), ya sea desde la capacidad de interpretación hasta la aplicación abstracta de la matemática en sí. Muchas veces la persona que me contacta piensa que le cuesta la física, por temas de la materia en sí, y a lo largo del proceso se descubre que los errores son en su mayoría matemáticos. Para esta materia debe existir una buena base de matemática!'
                /> 
            </div>
        </div>
    );
}

export default FisicaPage;