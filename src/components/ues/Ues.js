import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';
import {FaTrash, FaPencilAlt, FaPlus} from 'react-icons/fa';
import SideBarBurger from '../sidebars/SideBarBurger';
import axios from 'axios';
import PdfUesGenerator from '../generateDocuments/PdfUesGenerator';
import uefImg from '../../img/logo/uef.jpg';
import {FaGem, FaStar, FaSquare} from 'react-icons/fa';

class Ues extends Component{
    state={
        ues : []
    }
    componentDidMount(){
        axios.get(`/ueDisplay`)
        .then(res=>{
            //console.log(res.data.ueEsti.ue);
            this.setState({ues:res.data.ueEsti.ue});
        })
    }
    render(){
        return(
            <div className="container">
                <SideBarBurger/>
                <div className="row col-md-30">
                <div className="col-md-2 mt-5">
                    <ul>
                        <li className="list-unstyled">
                            <Link to="/ues"><FaGem/> Liste</Link>
                        </li>
                        <li className="list-unstyled">
                            <Link to="/addUes"><FaStar/> Nouveau</Link>
                        </li>
                        <li className="list-unstyled">
                            <Link to="/estiLinkedIn"><FaSquare/> Import/Export</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-10 mt-4">
                <h1 style={{color:"orange"}}><img src={uefImg} alt="module logo" className="rounded-circle border border-primary"/> Liste des unités d'enseignement</h1>  
                    <table className="table table-bordered table-sm table-stripped table-hover" id="uesTable">
                        <thead>
                            <tr>
                            <th scope="col">Code</th>
                            <th scope="col">Libellé</th>
                            <th scope="col">Semestre</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.ues.map(ue=>
                            <tr key={ue.codeue}>
                                <th scope="row">{ue.codeue}</th>
                                <td>{ue.libelleue}</td>
                                <td>{ue.semestre}</td>
                                <td><Link to={"/editUes/" + ue.codeue}><FaPencilAlt/></Link></td>
                                <td><Link to={"/deleteUes/" + ue.codeue}><FaTrash/></Link></td>
                            </tr>)}
                        </tbody>
                    </table>
                    <div className="row">
                        <span><Link to='/addUes' className="btn btn-sm btn-primary ml-3"><FaPlus/> Ajouter</Link></span>
                        <span><PdfUesGenerator/></span>
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

export default Ues;