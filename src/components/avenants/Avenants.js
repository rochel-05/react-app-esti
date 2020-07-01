import React, {Component} from 'react';
import {FaTrash, FaPencilAlt, FaPlus} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SideBarBurger from '../sidebars/SideBarBurger';
import axios from 'axios';
import PdfAvenantsGenerator from '../generateDocuments/PdfAvenantsGenerator';
import avenantImg from '../../img/logo/avenantf.jpg';
import {FaGem, FaStar, FaSquare} from 'react-icons/fa';

class Avenants extends Component{
    state={
        avenants: []
    }
    componentDidMount(){

        axios.get(`/avenantDisplay`)
        .then(res=>{
            //console.log(res.data.ueEsti.avenants);
            this.setState({avenants: res.data.ueEsti.avenants});
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
                            <Link to="/avenants"><FaGem/> Liste</Link>
                        </li>
                        <li className="list-unstyled">
                            <Link to="/addAvenants"><FaStar/> Nouveau</Link>
                        </li>
                        <li className="list-unstyled">
                            <Link to="/estiLinkedIn"><FaSquare/> Import/Export</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-10 mt-4">
            <h1 style={{color:"orange"}}>Liste des Avenants</h1>
            <table className="table table-bordered table-sm table-stripped table-hover" id="avenantsTable">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Cin</th>
                        <th scope="col">Code Module</th>
                        <th scope="col">Date Avenant</th>
                        <th scope="col">Annee Universitaire</th>
                        <th scope="col">Responsable</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.avenants.map(avenant=>
                    <tr key={avenant.idAvenant}>
                        <th scope="row">{avenant.idAvenant}</th>
                        <td>{avenant.cin}</td>
                        <td>{avenant.codeModule}</td>
                        <td>{avenant.dateAvenant}</td>
                        <td>{avenant.anneeUniv}</td>
                        <td>{avenant.responsable}</td>
                        <td><Link to={`/editAvenants/` + avenant.idAvenant}><FaPencilAlt/></Link></td>
                        <td><Link to={`/deleteAvenants/` + avenant.idAvenant}><FaTrash/></Link></td>
                    </tr>)}
                </tbody>
            </table>
            <div className="row">
            <span><Link to='/addAvenants' className="btn btn-sm btn-primary ml-3"><FaPlus/> Ajouter</Link></span>
            <span><PdfAvenantsGenerator/></span>           
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

export default Avenants;