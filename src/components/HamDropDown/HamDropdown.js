import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUid } from '../../utilities/uid';
import './hamDropDown.css';
import hamburgerMenu from '../../images/hamburgerMenu.png';
import facebook from '../../images/FacebookLogo.svg';
import instagram from '../../images/InstagramLogo.svg';
import icon from '../../images/IconCulinary-KnifeLogoWhite.png';


export default class HamDropdown extends Component {
    constructor(){
        super()
        this.state = {
            open: false,
            currentTimeout: null,
        }
    }

    toggle(){
        // debugger;

        if (this.state.currentTimeout !== null) {
            return;
        }

        this.setState({
            // open: true
            open: !this.state.open,
            // currentTimeout: setTimeout(() => this.setState({ currentTimeout: null }), 50),
        });
    }

    handleClick(e) {
        console.log('clicked on ', e.target);
        console.log(this.state);
        this.toggle();
    }

    render () {
        return (
            <div className='ham-wrap'>
                <div onClick={this.handleClick.bind(this)} className='hamburger-menu'>
                    <img src={hamburgerMenu} alt='hamburger menu'/>
                </div>
                <div className={'backdrop ' + (this.state.open ? 'open' : '')} onClick={this.handleClick.bind(this)}/>
                {this.state.open &&
                <div className='ham-dropdown-menu' >
                    <div onClick={this.handleClick.bind(this)} className='ham-header'>
                        <div className='ham-social'>
                            <a href=''><img src={facebook} alt='facebook logo'/></a>
                            <a href=''><img src={instagram} alt='instagram logo'/></a>
                        </div>
                        <div className='ham-logo'>
                            <img src={icon} alt='icon culinary logo'/>
                        </div>
                        <div className='ham-close'>&times;</div>
                    </div>
                    <div onClick={this.handleClick.bind(this)} className='ham-menu-items'><Link to='/'>Home</Link></div>
                    <div onClick={this.handleClick.bind(this)} className='ham-menu-items'><Link to='/gallery'>Gallery</Link></div>
                    <div onClick={this.handleClick.bind(this)} className='ham-menu-items'><Link to='/contact'>Contact</Link></div>
                </div>}
            </div>
        )
    }
}