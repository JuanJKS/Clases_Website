import { React, Fragment } from 'react';
import { HiOutlineCalculator } from 'react-icons/hi';
import { SiAtom } from 'react-icons/si';
import { SiGooglemaps } from 'react-icons/si';
import { MdOutlineMonitor } from 'react-icons/md';

import ColumnaHome from '../components/layout/ColumnaHome';

import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <div className='section-home'>
            <div id='home' className='container-lg text-center total-container'>
                <div data-aos='zoom-in' data-aos-delay='500' data-aos-duration='500' id='carouselExampleIndicators' className='carousel slide carrousel-home' data-bs-ride='carousel'>
                    <div className='carousel-indicators'>
                        <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1'></button>
                        <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2'></button>
                        <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3'></button>
                    </div>
                    <div className='carousel-inner'>
                        <div className='carousel-item active'>
                            <img src='img/CarrouselHome-1.jpg' className='d-block img-carrousel' alt='Foto1'/>
                        </div>
                        <div className='carousel-item'>
                            <img src='img/CarrouselHome-2.jpg' className='d-block img-carrousel' alt='Foto2'/>
                        </div>
                        <div className='carousel-item'>
                            <img src='img/CarrouselHome-3.jpg' className='d-block img-carrousel' alt='Foto3'/>
                        </div>
                    </div>
                    <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev'>
                        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                        <span className='visually-hidden'>Previous</span>
                    </button>
                    <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next'>
                        <span className='carousel-control-next-icon' aria-hidden='true'></span>
                        <span className='visually-hidden'>Next</span>
                    </button>
                </div>
                <div data-aos='zoom-in' data-aos-delay='500' data-aos-duration='500' className='container-lg'>
                    <h2>Experiencia, compromiso y responsabilidad en clases de matemática y física</h2>
                    <h6>Clases con profesor formado en <span>Ingeniería Industrial</span> en la <span>Universidad Tecnológica Nacional (U.T.N)</span>.<br></br>Método de enseñanza claro, práctico y personalizado para cada persona. ¡Aclaremos todas las dudas!</h6>
                    <div className='row row-grid-home'>
                        <ColumnaHome
                            icono={<HiOutlineCalculator />}
                            titulo={<Fragment><h5>Clases de Matemática</h5></Fragment>}
                            texto={<Fragment>Nivel primario, secundario, terciario y nivel universitario.<br></br>CBC - Ingreso UTN - Otros ingresos.</Fragment>} />
                        <ColumnaHome
                            icono={<SiAtom />}
                            titulo={<Fragment><h5>Clases de Física</h5></Fragment>}
                            texto={<Fragment>Nivel secundario, terciario y nivel universitario.<br></br>CBC - Ingreso UTN - Otros ingresos.</Fragment>} />
                    </div>
                    <div className='row row-grid-home'>
                        <ColumnaHome
                            icono={<MdOutlineMonitor />}
                            titulo={<Fragment><h5>Clases presenciales y virtuales</h5></Fragment>}
                            texto={<Fragment>Amplia disponibilidad y flexibilidad. Tomá las clases como mas te guste y mejor se adapte a tus necesidades y tus tiempos. Ambas modalidades igualmente efectivas, no dudes en probar la modalidad que mas te convenga, <strong>te sorprenderás con los resultados!</strong></Fragment>} />   
                        <ColumnaHome
                            icono={<SiGooglemaps />}
                            titulo={<Fragment><h5>Zona Colegiales</h5></Fragment>}
                            texto={<Fragment>Subtes línea B y D.<br></br>Colectivos: 19 – 39 – 42 – 44 – 63 – 65 – 76 – 93 – 108 – 112 – 140.<br></br>Tren Urquiza (Estación F. Lacroze).<br></br>Tren Mitre (Estación Colegiales).</Fragment>} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;