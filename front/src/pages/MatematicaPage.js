import React from 'react';

import Ficha from '../components/layout/Ficha';

import '../styles/components/pages/MatematicaPage.css';

const MatematicaPage = (props) => {
    return (
        <div className='section-maths'>
            <div id='matematica' className='container-lg total-container'>
                <Ficha
                    clase='container-file'
                    titulo='Matematica'
                    imagen='1'
                    texto='Si bien sé que son muy pocas las personas que estudian esta materia por gusto o deseo personal, y que la gran mayoría lo hace por objetivos a corto plazo que van de la mano de una obligación académica, lo cual está perfecto, de todos modos es importante saber que el estudio y la ejercitación de la matemática genera una enorme apertura y desarrollo mental, y brinda herramientas al corto, mediano y largo plazo para la vida; como suelo decir yo: "Matemática te abre la mente".
                    Existen muchas formas diferentes de enseñar la materia, y seguramente, en menor o mayor medida, todas sean válidas. A mí me gusta enseñarla fundamentalmente desde la ejercitación, y si bien por supuesto que brindo herramientas teóricas/conceptuales en todos los procesos, desde mi punto de vista la materia se aprende 100% desde la práctica.'
                /> 
            </div>
        </div>
    );
}

export default MatematicaPage;