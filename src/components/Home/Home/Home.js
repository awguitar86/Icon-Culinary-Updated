import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './home.css';

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Welcome from '../Welcome/Welcome';
import About from '../About/About';
import Sustain from '../Sustainability/Sustain';
import HeaderTwo from '../../HeaderTwo/HeaderTwo';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            fixHeader: false
        }

    }

    componentDidMount(){
        window.addEventListener('scroll', () => {
            console.log(window.pageYOffset);
            if(window.pageYOffset > 100){
                this.setState({fixHeader: true});
            }else {
                this.setState({fixHeader: false});
            }
        })
    }


    render () {
        return(
            <div className='home-body'>
                {!this.state.fixHeader ? <Header className='home-header'/> : <HeaderTwo className='home-header-two'/>}
                <Hero />
                <Welcome />
                <About />
                <Sustain />
            </div>
        )
    }
}