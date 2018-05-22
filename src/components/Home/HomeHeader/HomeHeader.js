import React, { Component } from 'react';
import './homeHeader.css';
import { Link } from 'react-router-dom';
import HamDropdown from '../../HamDropDown/HamDropdown';
import facebook from '../../../images/FacebookLogo.svg';
import instagram from '../../../images/InstagramLogo.svg';


export default class Header extends Component {
    constructor() {
        super()
    }

    render () {
        let {state} = this.props;
        return(
            <div className='header-wrap'>
                <div className="header-container">
                    <div className='header-social'>
                        <a href='https://www.facebook.com/pages/Icon-culinary/126071754717158' target='_blank'><img src={facebook} alt='facebook logo'/></a>
                        <a href='https://www.instagram.com/iconculinary/' target='_blank'><img src={instagram} alt='instagram logo'/></a>
                    </div>
                    <nav className="nav">
                        <Link to='/' className="home">HOME</Link>
                        <Link to='/gallery' className="home">GALLERY</Link>
                        <Link to='/contact' className="contact">CONTACT</Link>
                    </nav>
                    <HamDropdown />
                </div>
            </div>
        )
    }
}