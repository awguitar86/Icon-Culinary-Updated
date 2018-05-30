import React, { Component } from 'react';
import './sustain.css';
import GrowTowers from '../../../images/growTowers.jpg';
import growTowerGreens from '../../../images/growTowerGreens.jpg';

export default class Sustain extends Component {
    render () {
        return(
            <div className="sustain-container">
                <div className='sustain-wrap'>
                    <img src={GrowTowers} alt="grow-towers" className='grow-towers'/>

                    <div className="sustain">
                        <h1>SUSTAINABILITY</h1>
                        <p>
                            Icon Culinary is dedicated to provide eco friendly sustainable food. We have the equiptment and technology
                            to grow our own greens in house with our hydroponic grow towers. Our hydroponic  grow towers provide us
                            with the most flavorful organic greens you’ve ever tasted. We are able to offer a menu that is guarenteed
                            to wow every mouth that we cater to while being ecologically responsible.
                        </p>
                    </div>
                    <div className='grow-tower-greens'>
                        <img src={growTowerGreens} alt='leafs from grow tower'/>
                    </div>
                </div>
            </div>
        )
    }
}