import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUid } from '../utilities/uid';
import './Home/Header/header.css';


export default class MagicDropdown extends Component {
    constructor(){
        super()
        this.state = {
            open: false,
            currentTimeout: null,
        }
    }

    handleHover(e){
        console.log('hovered in ', e.target);

        if (window.navigator.userAgent.includes('Mobile')) {
            return;
        }

        this.toggle();
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
        this.toggle();
    }

    render () {
        return (
            <div>

                <div onMouseOver={this.handleHover.bind(this)} onClick={this.handleClick.bind(this)} className={this.props.className}>
                    {this.props.text}
                </div>
                    <div className={'backdrop ' + (this.state.open ? 'open' : '')} onMouseEnter={this.handleHover.bind(this)} onClick={this.handleClick.bind(this)}/>
                    {this.state.open && 
                    <div onMouseLeave={this.handleHover.bind(this)} className={`${this.props.className} magic-dropdown-menu`} >{
                        this.props.options.map(option => (
                            <div key={option.key || (option.key = getUid())} onClick={this.handleClick.bind(this)} className="magic-dropdown-menu-img-box">
                                <Link to={option.to} className="magic-dropdown-menu-img"><img src={option.img}/></Link>
                            </div>
                        ))}
                    </div>}
            </div>
        )
    }
}