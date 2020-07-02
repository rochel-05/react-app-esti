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
                    <tr>
                        <th scope="row">1</th>
                        <td>201010007</td>
                        <td>INFO-140</td>
                        <td>2020-10-04</td>
                        <td>2019-2020</td>
                        <td>DG</td>
                        <td><Link to={`/editAvenants/` + 1}><FaPencilAlt/></Link></td>
                        <td><Link to={`/deleteAvenants/` + 1}><FaTrash/></Link></td>
                    </tr>
					<tr>
                        <th scope="row">2</th>
                        <td>201010008</td>
                        <td>INFO-160</td>
                        <td>2020-10-05</td>
                        <td>2019-2020</td>
                        <td>DG</td>
                        <td><Link to={`/editAvenants/` + 2}><FaPencilAlt/></Link></td>
                        <td><Link to={`/deleteAvenants/` + 2}><FaTrash/></Link></td>
                    </tr>
					<tr>
                        <th scope="row">3</th>
                        <td>201010009</td>
                        <td>INFO-120</td>
                        <td>2020-10-06</td>
                        <td>2019-2020</td>
                        <td>DG</td>
                        <td><Link to={`/editAvenants/` + 3}><FaPencilAlt/></Link></td>
                        <td><Link to={`/deleteAvenants/` + 3}><FaTrash/></Link></td>
                    </tr>
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