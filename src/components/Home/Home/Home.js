import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './home.css';

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Welcome from '../Welcome/Welcome';
import About from '../About/About';
import Sustain from '../Sustainability/Sustain';
import HomeHeaderTwo from '../HomeHeaderTwo/HomeHeaderTwo';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            fixHeader: false
        }
        this.changeHeader = this.changeHeader.bind(this);
    }

    changeHeader(){
        if(window.pageYOffset > 80){
            this.setState({fixHeader: true});

        }else {
            this.setState({fixHeader: false});
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.changeHeader)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.changeHeader)
    }


    render () {
        return(
            <div className='home-body'>
                <HomeHeaderTwo className={this.state.fixHeader ? 'home-header-two' : 'home-header-two-false'} state={this.state.fixHeader}/>
                <Header />
                <Hero />
                <Welcome />
                <About />
                <Sustain />
            </div>
        )
    }
}