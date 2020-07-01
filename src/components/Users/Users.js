import React, {Component} from 'react';
import {FaTrash, FaPencilAlt, FaPlus} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SideBarBurger from '../sidebars/SideBarBurger';
import axios from 'axios';
import PdfModulesGenerator from '../generateDocuments/PdfModulesGenerator';

class Users extends Component{
    state={
        users:[]
    }
    componentDidMount(){
        axios.get(`/utilisateurDisplay`)
        .then(res=>{
            //console.log(res.data.ueEsti.users);
            this.setState({users:res.data.ueEsti.users});
        })
    }
    render(){
        return(
            <div  className="container">
                <SideBarBurger/>
                <div id="page-wrap">
                <h1 style={{color:"orange"}}>Liste des Utilisateurs</h1>
                <table className="table table-bordered table-sm table-stripped table-hover" id="modulesTable">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Prenom</th>
                            <th scope="col">Mail</th>
                            <th scope="col">Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user=>
                        <tr key={user.idUser}>
                            <th scope="row">{user.idUser}</th>
                            <td>{user.nomUser}</td>
                            <td>{user.prenomUser}</td>
                            <td>{user.mailUser}</td>
                            <td>{user.passwordUser}</td>
                            <td><Link to={`/editUsers/` + user.idUser}><FaPencilAlt/></Link></td>
                            <td><Link to={`/deleteUsers/` + user.idUser}><FaTrash/></Link></td>
                        </tr>)}
                    </tbody>
                </table>
                <div className="row">
                <span><Link to='/addUsers' className="btn btn-sm btn-primary ml-3"><FaPlus/> Ajouter</Link></span>
                <span><PdfModulesGenerator/></span>
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
        )
    }
}

export default Users;