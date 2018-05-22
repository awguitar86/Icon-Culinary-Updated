import React, { Component } from 'react';
import './homeheaderTwo.css';
import icon from '../../../images/IconCulinary-KnifeLogoWhite.png';
import { Link } from 'react-router-dom';
import { getUid } from '../../../utilities/uid';
import HamDropdown from '../../HamDropDown/HamDropdown';
import facebook from '../../../images/FacebookLogo.svg';
import instagram from '../../../images/InstagramLogo.svg';


export default class HeaderTwo extends Component {
    constructor() {
        super()
    }

    render () {
        let {className, state} = this.props;
        return(
            <div className={className}>
                <div className="home-h2-container">
                    <div className='home-h2-social'>
                        <a href='https://www.facebook.com/pages/Icon-culinary/126071754717158' target='_blank'><img src={facebook} alt='facebook logo'/></a>
                        <a href='https://www.instagram.com/iconculinary/' target='_blank'><img src={instagram} alt='instagram logo'/></a>
                    </div>
                    <div className="home-h2-logo-container">
                        <Link to='/' ><img src={icon} alt='icon culinary logo'/></Link>
                    </div>
                    <nav className="home-h2-nav">
                        <Link to='/' className="home-h2-home">HOME</Link>
                        <Link to='/gallery' className="home-h2-home">GALLERY</Link>
                        <Link to='/contact' className="home-h2-contact">CONTACT</Link>
                    </nav>
                    <HamDropdown />
                </div>
            </div>
        )
    }
}