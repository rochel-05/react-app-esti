import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import estiLogo from '../img/estiLogo.png';
import {FaHome, FaSchool, FaBook, FaFileContract, FaTools, FaAdjust} from 'react-icons/fa';
import {FaLock} from 'react-icons/fa';
import {FcDocument, FcSignature} from 'react-icons/fc'

class Menu extends Component{
    render(){
        return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" isLoggedIn={true}>
            <ul className="navbar-nav">
                    <li  className="nav-item"><Link className="navbar-brand" to="/"><img src={estiLogo} alt="logo esti"/></Link></li>
                    <li  className="nav-item active"><Link className="nav-link" to="/accueils"><FaHome/> Home <span className="sr-only">(current)</span></Link></li>
                    <li  className="nav-item"><Link className="nav-link" to="/enseignants"><FaSchool/> Enseignant</Link></li>
                    <li  className="nav-item"><Link className="nav-link" to="/modules"><FaFileContract/> Module</Link></li>
                    <li  className="nav-item"><Link className="nav-link" to="/syllabuss"><FcDocument/> Syllabus</Link></li>
                    <li  className="nav-item"><Link className="nav-link" to="/ues"><FaAdjust/> Ue</Link></li>
                    <li  className="nav-item"><Link className="nav-link" to="/contrats"><FcSignature/> Contrat</Link></li>
                    <li  className="nav-item"><Link className="nav-link" to="/avenants"><FaBook/> Avenant</Link></li>
            </ul>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><Link className="nav-link" to="/contrats"><FaTools/> Setting</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/authentification"><FaLock/> Logout</Link></li>
                </ul>
            </div>
        </nav>)
    }
}

export default Menu;