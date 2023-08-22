import { React, useState, useEffect } from 'react';
import axios from 'axios';

import TarjetaModalidades from '../components/layout/TarjetaModalidades';
import EspecialidadesColegios from '../components/layout/EspecialidadesColegios';
import Testimonios from '../components/layout/Testimonios';

import '../styles/components/pages/MisClasesPage.css';

const MisClasesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [opiniones, setOpiniones] = useState([]);

    useEffect(() => {
        const cargarOpiniones = async () => {
            setLoading(true);
            const response = await axios.get(process.env.REACT_APP_URL_API || 'https://adminprofejuan.tech/api/opiniones');
            setOpiniones(response.data);
            setLoading(false);
        };

        cargarOpiniones();
    }, []);


    return (
        <div className='section-myclasses'>
            <div id='misclases' className='container-lg text-center total-container'>
                <div className='col-12'>
                    <h2 className='important-title'>Modalidades</h2>
                </div>
                <div className='row'>
                    <div data-aos='zoom-out' data-aos-delay='500' data-aos-duration='1000' className='row row-cols-1 row-cols-md-2 g-4 container-cards'>
                        <TarjetaModalidades
                            imagen='1'
                            titulo='Clases presenciales'
                            texto='Es importante remarcar que ambas modalidades son igual de efectivas, y en ambos casos dicha efectividad está muy atada al compromiso por parte del alumno/a para con el proceso (suelo decir que mi aporte es apenas el 30% del proceso, y que el otro 70% es el compromiso que asume la persona y/o grupo familiar que me contacta). Dicho esto, la modalidad presencial está enfocada en aquellas personas que sientan que de forma virtual no podrán asumir el mismo compromiso o tienen tendencia a la distracción. Te ofrezco mi espacio, que durante el proceso se transformará en tu espacio, para que te puedas desenvolver con total comodidad y puedas liberar toda tu capacidad. Dicho espacio cuenta con ambiente climatizado, pizarrón, mesa de estudio y elementos varios propios de la materia (de todos modos la persona debe concurrir a las clases con sus propios elementos de trabajo). No va a faltar el buen clima y la buena onda. No dejes de consultar!'
                        />
                        <TarjetaModalidades
                            imagen='2'
                            titulo='Clases virtuales'
                            texto='En mis clases virtuales también se le sacará provecho al poder que brinda el pizarrón a la hora de dar una clase, y fundamentalmente en esta modalidad disfrutarás de la comodidad que significa poder tomar una clase desde tu casa o en el lugar que mas te guste, a su vez que se evitarán los tiempos y molestias que conllevan los traslados, y así sacarle mas provecho a tu tiempo. En cuanto a la dinámica de la clase, propongo una metodología fuera de lo convencional, que hoy por hoy está muy asociada a plataformas como Zoom, Meet o distintos estilos de videollamadas, y de las cuales yo personalmente considero que no ofrecen el escenario necesario para una clase de matemática o física. Mi metodología es mucho mas fluida de lo que te puedas imaginar, y a su vez conserva ese "espacio personal" de trabajo sin que la persona se sienta invadida/observada, y de ese modo puedas liberar toda tu capacidad sin miedo al error ni vergüenza. No dejes de consultar!'
                        />
                    </div>
                </div>
                <div className='col-12 secondary-title'>
                    <h2 className='important-title'>Especialidades</h2>
                </div>
                <EspecialidadesColegios />
                <div className='col-12 secondary-title'>
                    <h2 className='important-title'>Experiencias</h2>
                </div>
                {
                    loading ? <p className='loading-message'>Cargando...</p> :

                        <div data-aos='zoom-in' data-aos-delay='500' data-aos-duration='1000' id='carouselExampleIndicators' className='carousel slide' data-bs-ride='carousel'>
                            <div className='carousel-indicators'>
                                {
                                    (() => {
                                        var buttonSlideArr = [];

                                        opiniones.forEach(function (item, i) {
                                            let classSlide = i === 0 ? 'active' : '';
                                            let ariaCurrentSlide = i === 0 ? 'true' : '';
                                            let slide = <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to={i} className={`visually-hidden ${classSlide}`} aria-current={ariaCurrentSlide} aria-label={`Slide ${i + 1}`} key={i}></button>;

                                            buttonSlideArr.push(slide);
                                        });

                                        return buttonSlideArr;
                                    })()
                                }
                            </div>
                            <div className='carousel-inner'>
                                {
                                    (() => {
                                        var testimonialsArr = [];

                                        opiniones.forEach(function (item, i) {
                                            let classCarrouselItem = i === 0 ? 'carousel-item active' : 'carousel-item';
                                            let testimonyContainer = <div className={classCarrouselItem} key={item.id_op}>
                                                <Testimonios
                                                    key={item.id_op}
                                                    opinion={item.opinion}
                                                    autor={item.autor}
                                                    zona={item.zona}
                                                />
                                            </div>;

                                            testimonialsArr.push(testimonyContainer);
                                        });

                                        return testimonialsArr;
                                    })()
                                }
                            </div>
                            <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev'>
                                <span className='carousel-control-prev-icon visually-hidden' aria-hidden='true'></span>
                                <span className='visually-hidden'>Previous</span>
                            </button>
                            <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next'>
                                <span className='carousel-control-next-icon visually-hidden' aria-hidden='true'></span>
                                <span className='visually-hidden'>Next</span>
                            </button>
                        </div>
                }
            </div>
        </div>
    );
}

export default MisClasesPage;