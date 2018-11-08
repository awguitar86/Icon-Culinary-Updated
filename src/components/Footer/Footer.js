import React, { Component } from 'react';
import './footer.css';
import ReefCafeLogo from '../../images/ReefCafe-SharkLeft-White.svg';
// import MeatPieLogo from '../../images/MeatPieWagon-Logo.png';

export default class Footer extends Component {
    render () {
        return(
            <div className="footer-container">
                <div className='footer-wrap'>
                    <div className="footer-left">
                        <p>Please visit our daughter company!</p>
                        <div className='footer-image-wrap'>
                            <a href='https://thereefcafe.net/'><img src={ReefCafeLogo} alt='reef cafe logo'/></a>
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