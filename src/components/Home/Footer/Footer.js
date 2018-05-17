import React, { Component } from 'react';
import './footer.css';
import ReefCafeLogo from '../../../images/ReefCafe-SharkLeft-White.svg';

export default class Footer extends Component {
    render () {
        return(
            <div className="footer-container">
                <div className='footer-wrap'>
                    <div className="footer-left">
                        <p>Subsidary companies of Icon Culinary include</p>
                        <a href=''><img src={ReefCafeLogo} alt='reef cafe logo'/></a>
                    </div>

                    <div className="footer-right">
                        <p>Website by Austin Wright</p>
                        <p>Copyright © 2018 Icon Culinary. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        )
    }
}