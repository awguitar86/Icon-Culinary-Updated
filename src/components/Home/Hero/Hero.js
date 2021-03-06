import React, { Component } from 'react';
import AquariumLogo from '../../../images/AquariumLogo-white.png';
import IconLogo from '../../../images/IconCulinary-KnifeLogoWhite.png';

import './hero.css';

export default class Hero extends Component {
    render () {
        return(
            <div className='hero-wrap'>
                <div className='hero-logo'><img src={IconLogo} alt='icon culinary logo'/></div>
                <div className='hero-aquarium-wrap'>
                    <div className='hero-aquarium'>
                        <p>EXCLUSIVE CATERING AND EVENT PARTNER</p>
                        <img src={AquariumLogo} alt='aquarium logo'/>
                    </div>
                </div>
            </div>
        )
    }
}