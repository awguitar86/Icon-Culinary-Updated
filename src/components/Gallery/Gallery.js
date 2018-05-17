import React, { Component } from 'react';
import HeaderTwo from '../HeaderTwo/HeaderTwo';
import './gallery.css';

import blueCupcakes from './GalleryPics/blueCupcakes.jpg';
import food1 from './GalleryPics/tableOfFood1.jpg';
import food2 from './GalleryPics/tableOfFood2.jpg';
import food3 from './GalleryPics/tableOfFood3.jpg';
import cookies from './GalleryPics/cookies1.jpg';
import event1 from './GalleryPics/eventPic1.jpg';
import fruit1 from './GalleryPics/fruit1.jpg';
import salad1 from './GalleryPics/saladPic1.jpg';
import plate1 from './GalleryPics/plateOfFood1.jpg';
import soda1 from './GalleryPics/sodaPic1.jpg';
import event2 from './GalleryPics/eventPic2.jpg';
import plate2 from './GalleryPics/plateOfFood2.jpg';
import food4 from './GalleryPics/tableOfFood4.jpg';
import fruit2 from './GalleryPics/fruit2.jpg';
import plate3 from './GalleryPics/plateOfFood3.jpg';
import food5 from './GalleryPics/tableOfFood5.jpg';

class Gallery extends Component {

    render(){
        return (
            <div className='gallery-wrap'>
                <HeaderTwo />
                <div className='gallery-container'>
                    <h1>Gallery</h1>
                    <div className='gallery'>
                        <img src={blueCupcakes} alt='pic1'/>
                        <img src={food1} alt='pic1'/>
                        <img src={food2} alt='pic1'/>
                        <img src={food3} alt='pic1'/>
                        <img src={event1} alt='pic1'/>
                        <img src={fruit1} alt='pic1'/>
                        <img src={cookies} alt='pic1'/>
                        <img src={salad1} alt='pic1'/>
                        <img src={plate1} alt='pic1'/>
                        <img src={soda1} alt='pic1'/>
                        <img src={event2} alt='pic1'/>
                        <img src={plate2} alt='pic1'/>
                        <img src={food4} alt='pic1'/>
                        <img src={fruit2} alt='pic1'/>
                        <img src={plate3} alt='pic1'/>
                        <img src={food5} alt='pic1'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery;