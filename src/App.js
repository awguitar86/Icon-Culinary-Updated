import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import router from './router.js';

import Home from './components/Home/Home/Home';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';


import './App.css';
// import Header from './components/Home/Header/Header';
import Footer from './components/Footer/Footer';


export default class App extends Component {
  render() {
    return (
      <div className="body">
        <Route exact path="/home" component={Home} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    );
  }
}

