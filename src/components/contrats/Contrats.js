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
                        <tr>
                            <th scope="row">1</th>
                            <td>201010007</td>
                            <td>2020-10-04</td>
                            <td>DG</td>
                            <td>Accepté</td>
                            <td><Link to={`/editContrats/` + 1}><FaPencilAlt/></Link></td>
                            <td><Link to={`/deleteContrats/` + 1}><FaTrash/></Link></td>
                        </tr>
						<tr>
                            <th scope="row">2</th>
                            <td>201010008</td>
                            <td>2020-10-05</td>
                            <td>DG</td>
                            <td>Accepté</td>
                            <td><Link to={`/editContrats/` + 2}><FaPencilAlt/></Link></td>
                            <td><Link to={`/deleteContrats/` + 2}><FaTrash/></Link></td>
                        </tr>
				        <tr>
                            <th scope="row">3</th>
                            <td>201010009</td>
                            <td>2020-10-06</td>
                            <td>DG</td>
                            <td>Refusé</td>
                            <td><Link to={`/editContrats/` + 3}><FaPencilAlt/></Link></td>
                            <td><Link to={`/deleteContrats/` + 3}><FaTrash/></Link></td>
                        </tr>
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