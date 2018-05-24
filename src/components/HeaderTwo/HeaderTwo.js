import React, { Component } from 'react';
import './headerTwo.css';
import icon from '../../images/IconCulinary-KnifeLogoWhite.png';
import { Link } from 'react-router-dom';
import { getUid } from '../../utilities/uid';

import hamburgerMenu from '../../images/hamburgerMenu.png';
import HamDropdown from '../HamDropDown/HamDropdown';
import facebook from '../../images/FacebookLogo.svg';
import instagram from '../../images/InstagramLogo.svg';


export default class HeaderTwo extends Component {
    constructor() {
        super()
    }

    render () {
        return(
            <div className='h2-wrap'>
                <div className="h2-container">
                    <div className='h2-social'>
                        <a href='https://www.facebook.com/pages/Icon-culinary/126071754717158' target='_blank'><img src={facebook} alt='facebook logo'/></a>
                        <a href='https://www.instagram.com/iconculinary/' target='_blank'><img src={instagram} alt='instagram logo'/></a>
                    </div>
                    <div className="h2-logo-container">
                        <Link to='/' ><img src={icon} alt='icon culinary logo'/></Link>
                    </div>
                    <nav className="h2-nav">
                        <Link to='/' className="h2-home">HOME</Link>
                        <Link to='/gallery' className="h2-home">GALLERY</Link>
                        <Link to='/contact' className="h2-contact">CONTACT</Link>
                    </nav>
                    <HamDropdown />
                </div>
            </div>
        )
    }
}