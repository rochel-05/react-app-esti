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
                        {this.state.syllabuss.map(syllabus=>
                        <tr key={syllabus.idsyllabus}>
                            <th scope="row">{syllabus.idsyllabus}</th>
                            <td>{syllabus.cin}</td>
                            <td>{syllabus.codemodule}</td>
                            <td>{syllabus.objectifvise}</td>
                            <td>{syllabus.prerequis}</td>
                            <td>{syllabus.contenu}</td>
                            <td><Link to='/syllabusPdfReader'><FaEye/></Link></td>
                            <td><Link to={`/editSyllabuss/` + syllabus.idsyllabus}><FaPencilAlt/></Link></td>
                            <td><Link to={`/deleteSyllabuss/` + syllabus.idsyllabus}><FaTrash/></Link></td>
                        </tr>)}
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