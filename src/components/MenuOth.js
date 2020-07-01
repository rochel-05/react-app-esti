import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import estiLogo from '../img/estiLogo.png';

class Menu extends Component{
    render(){
        return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" isLoggedIn={false}>
            <ul className="navbar-nav">
                    <li  className="nav-item"><img src={estiLogo} alt="logo esti"/></li>
                    <li  className="nav-item active"><span className="sr-only">(current)</span></li>
                    <li  className="nav-item"></li>
                    <li  className="nav-item"></li>
                    <li  className="nav-item"></li>
                    <li  className="nav-item"></li>
                    <li  className="nav-item"></li>
                    <li  className="nav-item"></li>
            </ul>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"></li>
                    <li className="nav-item"></li>
                </ul>
            </div>
        </nav>)
    }
}

export default Menu;