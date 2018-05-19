import React, { Component } from 'react';
import './footer.css';
import ReefCafeLogo from '../../images/ReefCafe-SharkLeft-White.svg';

export default class Footer extends Component {
    render () {
        return(
            <div className="footer-container">
                <div className='footer-wrap'>
                    <div className="footer-left">
                        <p>Please visit our daughter companies!</p>
                        <div className='footer-image-wrap'>
                            <a href=''><img src={ReefCafeLogo} alt='reef cafe logo'/></a>
                            <a href=''><img /></a>
                        </div>
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