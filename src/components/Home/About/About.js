import React, { Component } from 'react';
import './about.css';
import salmon from '../../../images/salmon.jpg';
import steak from '../../../images/steak-slices.jpg';
import FoodWithSharks from '../../../images/FoodWithSharksInBack.jpg';

export default class About extends Component {
    render () {
        return(
            <div className="about-container">
                <div className='about-wrap'>
                    <div className="about">
                        <h1>ABOUT US</h1>
                        <p>
                            While Icon Culinary is a new catering service, its creators, owners, chefs and managers have been
                            in the catering and events business for many years. With over 40 years experience with multiple
                            corporations we bring all the knowlege and professionalism you won’t find anywhere else.
                            Icon Culinary is more than a food and event service, it is family. We view our employees
                            and customers as family and family always comes first.
                        </p>
                    </div>

                    <div className="about-img">
                        <img src={FoodWithSharks} alt="food with sharks"/>
                    </div>

                    <div className="about-img-two">
                        <img src={steak} alt="Food Platter" className="food-platter"/>
                    </div>
                    <div className='bottom-border'></div>
                </div>
            </div>
        )
    }
}