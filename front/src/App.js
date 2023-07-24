import React from 'react';

import Header from './components/layout/Header';
import BienvenidaPage from './pages/BienvenidaPage';
import HomePage from './pages/HomePage';
import MatematicaPage from './pages/MatematicaPage';
import FisicaPage from './pages/FisicaPage';
import MisClasesPage from './pages/MisClasesPage';
import SobreMiPage from './pages/SobreMiPage';
import ContactoPage from './pages/ContactoPage';
import BotonWhats from './components/layout/BotonWhats';
import Footer from './components/layout/Footer';

import './App.css';

function App() {
  window.addEventListener('load', function() {
    const welcomePageEl = document.getElementById('welcome');
    const homePageEl = document.getElementById('home');
    const mathsPageEl = document.getElementById('matematica');
    const physicalPageEl = document.getElementById('fisica');
    const myClassesPageEl = document.getElementById('misclases');
    const aboutMePageEl = document.getElementById('sobremi');
    const contactPageEl = document.getElementById('contacto');

    const navSections = document.querySelectorAll('.nav-link');

    const addActive = (entries, observer) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              for (let i = 0; i < navSections.length; i++) {
                  if (entry.target.id === navSections[i].name) {
                      navSections[i].classList.add('nav-active');
                  } else {
                      navSections[i].classList.remove('nav-active');
                  }
              }
          }
      });
  };

    const observer = new IntersectionObserver(addActive, {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.55
  });

    observer.observe(welcomePageEl); 
    observer.observe(homePageEl);
    observer.observe(mathsPageEl);
    observer.observe(physicalPageEl);
    observer.observe(myClassesPageEl);
    observer.observe(aboutMePageEl);
    observer.observe(contactPageEl);
  });

  return (
    <div className='App'>
      <Header />
      <BienvenidaPage />
      <HomePage />
      <MatematicaPage />
      <FisicaPage />
      <MisClasesPage />
      <SobreMiPage />
      <ContactoPage />
      <BotonWhats />
      <Footer /> 
    </div>
  );
}

export default App;
