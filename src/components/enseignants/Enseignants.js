import React, { Component, useState, useEffect } from 'react';
import {FaTrash, FaPencilAlt, FaPlus} from 'react-icons/fa';
import {FaGem, FaStar, FaSquare} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SideBarBurger from '../sidebars/SideBarBurger';
import axios from 'axios';
import profImg from '../../img/logo/prof.jpg';
import profileImg from '../../img/profile.png';
import PdfEnseignantsGenerator from '../generateDocuments/PdfEnseignantsGenerator';

class Enseignants extends Component{
    constructor(props){
        super(props);
        this.state={
            enseignants: []
        };
    }
    componentDidMount(){
        axios.get(`/enseignantDisplay`)
        .then(res=>{
            //console.log(res.data.ueEsti.enseignants)
            this.setState({enseignants:res.data.ueEsti.enseignants});
        })
    }
    render(){
        return (
            <div className="container">
                <SideBarBurger/>
                <div className="row col-md-30">
                <div className="col-md-2 mt-5">
                    <ul>
                        <li className="list-unstyled">
                            <Link to="/enseignants"><FaGem/> Liste</Link>
                        </li>
                        <li className="list-unstyled">
                            <Link to="/addEnseignants"><FaStar/> Nouveau</Link>
                        </li>
                        <li className="list-unstyled">
                            <Link to="/estiLinkedIn"><FaSquare/> Export Data</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-10 mt-4">
                <h1 style={{color:"orange"}}><img src={profImg} alt="module logo" className="rounded-circle border border-primary"/> Liste des Enseignants</h1>
                <table className="table table-bordered table-sm table-stripped table-hover" id="ensTable">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Cin</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prenom</th>
                        <th scope="col">Diplome</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Mail</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.enseignants.map(enseignant=>
                        <tr key={enseignant.idens}>
                            <th scope="row">{enseignant.idens}</th>
                            <td>{enseignant.cinens}</td>
                            <td>{enseignant.nomens}</td>
                            <td>{enseignant.prenomens}</td>
                            <td>{enseignant.diplomeens}</td>
                            <td>{enseignant.contact}</td>
                            <td>{enseignant.mail}</td>
                            <td>{enseignant.status}</td>
                            <td><Link to={"/editEnseignants/" + enseignant.idens}><FaPencilAlt/></Link></td>
                            <td><Link to={"/deleteEnseignants/" + enseignant.idens}><FaTrash/></Link></td>
                        </tr>)}
                    </tbody>
                </table>
                <div className="row">
                    <span><Link to='/addEnseignants' className="btn btn-sm btn-primary ml-3"><FaPlus/> Ajouter</Link></span>
                    <span><PdfEnseignantsGenerator/></span>
                    <nav aria-label="Page navigation example" className="col-md-9 float-right">
                        <ul className="pagination justify-content-end">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Enseignants;