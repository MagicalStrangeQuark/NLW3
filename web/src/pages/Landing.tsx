import React from 'react';

import { Link } from 'react-router-dom';

import './../styles/pages/Landing.css';

import Location from './../components/Location';

import { FiArrowRight } from 'react-icons/fi';

import Logo from './../images/Logo.svg';

function Landing() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={Logo} alt="Logo" />

                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>

                <div className="location">
                    <Location />
                </div>

                <Link to="app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
                </Link>
            </div>
        </div>
    );
}

export default Landing;