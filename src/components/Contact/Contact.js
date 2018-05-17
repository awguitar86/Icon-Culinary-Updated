import React, { Component } from 'react';

import HeaderTwo from '../HeaderTwo/HeaderTwo';

import './contact.css';

class Contact extends Component {
    render () {
        return(
            <div className="contact-container">
                <HeaderTwo />
                <div className="contact-wrap">
                    <h1>CONTACT US</h1>
                    <p>
                        If you would like to schedule an event at the Loveland Living Planet Aquarium
                        or have any other questions, please contact us. We are more than happy to help
                        you with your catering needs.
                    </p>
                    <p>
                        The Loveland Living Planet Aquarium
                        <br/>
                        12033 South Lone Peak Parkway Draper, UT 84020
                    </p>
                    <div className='contact-info'>
                        <div className='keith-info'></div>
                        <div className='chelsea-info'></div>
                    </div>
                    <div clasName='contact-images'>
                        <img />
                        <img />
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;