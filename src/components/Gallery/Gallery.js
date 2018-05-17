import React, { Component } from 'react';
import HeaderTwo from '../HeaderTwo/HeaderTwo';
import './gallery.css';

import blueCupcakes from './GalleryPics/blueCupcakes.jpg';
import food1 from './GalleryPics/tableOfFood1.jpg';
import food2 from './GalleryPics/tableOfFood2.jpg';
import food3 from './GalleryPics/tableOfFood3.jpg';

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
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery;