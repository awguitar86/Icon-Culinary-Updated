import React, { Component } from 'react';
import './welcome.css';
import foodPlatter from '../../../images/food-platters.jpg';
import burger from '../../../images/burger.jpg';
import pizza from '../../../images/pizza.jpg';
import steakPotatoes from '../../../images/steak-potatoes.jpg';
import strawberries from '../../../images/strawberries.jpg';

export default class Welcome extends Component {
    render () {
        return(
            <div className="welcome-wrap">
                <div className='welcome-container'>
                    <div className="welcome">
                        <h1>WELCOME TO ICON CULINARY!</h1>
                        <h2>WELCOME TO<br/>ICON CULINARY!</h2>
                    </div>

                    <div className="images">
                        <div className="food"> <img src={foodPlatter} alt="food platter"/> </div>
                        <div className="burger"> <img src={burger} alt="burger"/> </div>
                        <div className="pizza"> <img src={pizza} alt="pizza"/> </div>
                        <div className="steak"> <img src={steakPotatoes} alt="steak and potatoes"/> </div>
                        <div className="strawberries"> <img src={strawberries} alt="strawberries"/> </div>
                    </div>

                    <div className="welcome-para">
                        <p>
                            At Icon Culinary, we are dedicated to make your special occasion everything you could want and more.
                            We offer a full service experience that will leave you and your guests more than satisfied.
                            We provide a menu that is custom to you and your wants and needs, created at the hands of our Executive Chef,
                            Dave Prows. We pride ourselves in quality  and outstanding customer service. Contact us today to plan your
                            next event!
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}