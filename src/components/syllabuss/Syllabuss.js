import React, {Component} from 'react';
import {FaTrash, FaPencilAlt, FaPlus, FaEye} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SideBarBurger from '../sidebars/SideBarBurger';
import axios from 'axios';
import PdfSyllabussGenerator from '../generateDocuments/PdfSyllabussGenerator';
import syllabusfImg from '../../img/logo/syllabusf.jpg';
import {FaGem, FaStar, FaSquare} from 'react-icons/fa';

class Syllabuss extends Component{
    state={
        syllabuss: []
    }
    componentDidMount(){
        axios.get(`/syllabusDisplay`)
        .then(res=>{
            //console.log(res.data.ueEsti.syllabuss);
            this.setState({syllabuss: res.data.ueEsti.syllabuss});
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
                            <Link to="/syllabuss"><FaGem/> Liste</Link>
                        </li>
                        <li className="list-unstyled">
                            <Link to="/addSyllabuss"><FaStar/> Nouveau</Link>
                        </li>
                        <li className="list-unstyled">
                            <Link to="/estiLinkedIn"><FaSquare/> Import/Export</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-10 mt-4">
                <h1 style={{color:"orange"}}><img src={syllabusfImg} alt="module logo" className="rounded-circle border border-primary"/> Liste des syllabus</h1>
                <table className="table table-bordered table-sm table-stripped table-hover" id="syllabusTable">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Cin</th>
                        <th scope="col">Code Module</th>
                        <th scope="col">Objectif visé</th>
                        <th scope="col">Prerequis</th>
                        <th scope="col">Contenu</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>201010007</td>
                            <td>INFO-140</td>
                            <td>Maitriser le langage C</td>
                            <td>Algorithme</td>
                            <td>Boucle, condition, pointeur</td>
                            <td><Link to='/syllabusPdfReader'><FaEye/></Link></td>
                            <td><Link to={`/editSyllabuss/` + 1}><FaPencilAlt/></Link></td>
                            <td><Link to={`/deleteSyllabuss/` + 1}><FaTrash/></Link></td>
                        </tr>
						<tr>
                            <th scope="row">2</th>
                            <td>201010008</td>
                            <td>INFO-160</td>
                            <td>Maitriser l'algorithme</td>
                            <td>Néant</td>
                            <td>Boucle, condition, pointeur</td>
                            <td><Link to='/syllabusPdfReader'><FaEye/></Link></td>
                            <td><Link to={`/editSyllabuss/` + 2}><FaPencilAlt/></Link></td>
                            <td><Link to={`/deleteSyllabuss/` + 2}><FaTrash/></Link></td>
                        </tr>
					    <tr>
                            <th scope="row">3</th>
                            <td>201010009</td>
                            <td>LANG-120</td>
                            <td>Maitriser l'anglais</td>
                            <td>Néant</td>
                            <td>Grammar, Expression, Writing</td>
                            <td><Link to='/syllabusPdfReader'><FaEye/></Link></td>
                            <td><Link to={`/editSyllabuss/` + 3}><FaPencilAlt/></Link></td>
                            <td><Link to={`/deleteSyllabuss/` + 3}><FaTrash/></Link></td>
                        </tr>
                    </tbody>
                </table>
                <div className="row">
                    <span><Link to='/addSyllabuss' className="btn btn-sm btn-primary ml-3"><FaPlus/> Ajouter</Link></span>
                    <span><PdfSyllabussGenerator/></span>
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

export default Syllabuss;