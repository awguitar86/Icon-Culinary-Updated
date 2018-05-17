import React, { Component } from 'react';
import './header.css';
import icon from '../../../images/IconCulinary-KnifeLogoWhite.png';
import { Link } from 'react-router-dom';
import { getUid } from '../../../utilities/uid';

import aquarium from '../../../images/AquariumLogo-white.png'
import reef from '../../../images/ReefCafe.png';
import bistro from '../../../images/Bistro72Logo.png';
import hamburgerMenu from '../../../images/hamburgerMenu.png';
import HamDropdown from '../../HamDropdown';
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
                    <div className="logo-container">
                        <Link to='/' className="icon-logo"><img src={icon} alt='icon culinary logo'/></Link>
                    </div>
                    <nav className="nav">
                        <Link to='/home' className="home">HOME</Link>
                        <Link to='/gallery' className="home">GALLERY</Link>
                        <Link to='/contact' className="contact">CONTACT</Link>
                    </nav>
                </div>
            </div>
        )
    }
}