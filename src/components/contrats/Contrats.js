import React, {Component} from 'react';
import {FaTrash, FaPencilAlt, FaPlus} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SideBarBurger from '../sidebars/SideBarBurger';
import axios from 'axios';
import PdfContratsGenerator from '../generateDocuments/PdfContratsGenerator';
import contratImg from '../../img/logo/contraf.jpg';
import {FaGem, FaStar, FaSquare} from 'react-icons/fa';

class Contrats extends Component{
    state={
        contrats: []
    }
    componentDidMount(){
        axios.get(`/contratDisplay`)
        .then(res=>{
            //console.log(res.data.ueEsti.contrats);
            this.setState({contrats: res.data.ueEsti.contrats});
        })
    }
    render(){
        return(
            <div  className="container">
                <SideBarBurger/>
                <div className="row col-md-30">
                <div className="col-md-2 mt-5">
                    <ul>
                        <li className="list-unstyled">
                            <Link to="/contrats"><FaGem/> Liste</Link>
                        </li>
                        <li className="list-unstyled">
                            <Link to="/addContrats"><FaStar/> Nouveau</Link>
                        </li>
                        <li className="list-unstyled">
                            <Link to="/estiLinkedIn"><FaSquare/> Import/Export</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-10 mt-4">
                <h1 style={{color:"orange"}}><img src={contratImg} alt="module logo" className="rounded-circle border border-primary"/> Liste des contrats</h1>
                <table className="table table-bordered table-sm table-stripped table-hover" id="contratsTable">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Cin</th>
                            <th scope="col">Date</th>
                            <th scope="col">Responsable</th>
                            <th scope="col">Observation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contrats.map(contrat=>
                        <tr key={contrat.idcontrat}>
                            <th scope="row">{contrat.idcontrat}</th>
                            <td>{contrat.cin}</td>
                            <td>{contrat.datecontrat}</td>
                            <td>{contrat.responsable}</td>
                            <td>{contrat.observation}</td>
                            <td><Link to={`/editContrats/` + contrat.idcontrat}><FaPencilAlt/></Link></td>
                            <td><Link to={`/deleteContrats/` + contrat.idcontrat}><FaTrash/></Link></td>
                        </tr>)}
                    </tbody>
                </table>
                <div className="row">
                    <span><Link to='/addContrats' className="btn btn-sm btn-primary ml-3"><FaPlus/> Ajouter</Link></span>
                    <span><PdfContratsGenerator/></span>
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
    </div>)
    }
}

export default Contrats;