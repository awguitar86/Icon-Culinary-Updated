import React, { Component } from 'react';

import HeaderTwo from '../HeaderTwo/HeaderTwo';
import FruitDessert from '../../images/fruit-dessert.jpg';
import SteakAndPotatoes from '../../images/steak-potatoes.jpg';
import AquariumLogo from '../../images/AquariumLogo-white.png';

import './contact.css';

class Contact extends Component {
    render () {
        return(
            <div className="contact-container">
                <HeaderTwo />
                <div className="contact-wrap">
                    <h1>Contact Us</h1>
                    <p className='contact-description-address'>
                        If you would like to schedule an event at the Loveland Living Planet Aquarium
                        or have any other questions, please contact us. We are more than happy to help
                        you with your catering needs.
                    </p>
                    <img src={AquariumLogo} alt='aquarium logo' className='contact-aqua-logo'/>
                    <p className='contact-description-address'>
                        12033 South Lone Peak Parkway Draper, UT 84020
                    </p>
                    <div className='contact-info'>
                        <div className='keith-info'>
                            <p>Keith Prows PMP</p>
                            <p>General Manager</p>
                            <p>Office: (801) 355-3474 x449</p>
                            <p>Mobile: (801) 633-6991</p>
                            <p>keith@iconculinary.com</p>
                        </div>
                        <div className='chelsea-info'>
                            <p>Chelsea</p>
                            <p>Event Coordinator</p>
                            <p>Office: (801) 444-4444 x444</p>
                            <p>Mobile: (801) 444-4444</p>
                            <p>chelsea@iconculinary.com</p>
                        </div>
                    </div>
                    <div className='contact-images'>
                        <img src={SteakAndPotatoes} alt='steak and potatoes'/>
                        <img src={FruitDessert} alt='fruite dessert'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;