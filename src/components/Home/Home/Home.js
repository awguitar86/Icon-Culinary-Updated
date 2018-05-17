import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './home.scss';

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Welcome from '../Welcome/Welcome';
import About from '../About/About';
import Sustain from '../Sustainability/Sustain';

export default class Home extends Component {
    render () {
        return(
            <div className='home-body'>
                <Header />
                <Hero />
                <Welcome />
                <About />
                <Sustain />
            </div>
        )
    }
}