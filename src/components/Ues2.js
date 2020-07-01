import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {FaTrash, FaPencilAlt} from 'react-icons/fa';
import {FaGem,FaHeart, FaTachometerAlt, FaList, FaUserLock } from 'react-icons/fa';

class Ues extends Component{
    render(){
        return(
            <div>
                <h1>Liste des unités d'enseignement</h1>  
                <ProSidebar>
                    <Menu iconShape="square">
                        <MenuItem icon={<FaGem />}><Link to="/">Dashboard</Link></MenuItem>
                        <SubMenu title="Enseignant"  icon={<FaHeart />}>
                            <MenuItem>Add</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Update</MenuItem>
                        </SubMenu>
                        <MenuItem icon={<FaTachometerAlt />}><Link to="/users">Users</Link></MenuItem>
                        <SubMenu title="Settings" icon={<FaList/>}>
                            <MenuItem>Languages</MenuItem>
                            <MenuItem>Acount</MenuItem>
                            <MenuItem>Date Time</MenuItem>
                        </SubMenu>
                        <MenuItem icon={<FaUserLock />}><Link to="/logout">Logout</Link></MenuItem>
                    </Menu>
                </ProSidebar> 
                <nav className="col-md-3 col-md-offset-5">
                    <table class="table table-bordered table-stripped table-sm table-hover">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Code</th>
                            <th scope="col">Libellé</th>
                            <th scope="col">Semestre</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>LANG-110</td>
                                <td>Anglais</td>
                                <td>S1</td>
                                <td><Link><FaPencilAlt/></Link></td>
                                <td><Link><FaTrash/></Link></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>LANG-120</td>
                                <td>Francais</td>
                                <td>S1</td>
                                <td><Link><FaPencilAlt/></Link></td>
                                <td><Link><FaTrash/></Link></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>LANG-140</td>
                                <td>Technique de Communication</td>
                                <td>S1</td>
                                <td><Link><FaPencilAlt/></Link></td>
                                <td><Link><FaTrash/></Link></td>
                            </tr>
                        </tbody>
                    </table>
                </nav>
            </div>
        )
    }
}

export default Ues;