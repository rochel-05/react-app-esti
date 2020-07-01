import React, {Component} from 'react';
import {FaTrash, FaPencilAlt, FaPlus} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SideBarBurger from '../sidebars/SideBarBurger';
import axios from 'axios';
import PdfModulesGenerator from '../generateDocuments/PdfModulesGenerator';
import modulfImg from '../../img/logo/modulf.png';
import {FaGem, FaStar, FaSquare} from 'react-icons/fa';
import { Button } from 'reactstrap';
import ReactTable from "react-table";
import ModuleExportToExcel from "../Exports/ModuleExportToExcel";

class Modules extends Component{
    constructor(props){
        super(props);
        this.state={
            modules:[]
        }
    }
    componentDidMount(){
        axios.get(`/moduleDisplay`)
        .then(res=>{
            //console.log(res.data.ueEsti.modules);
            this.setState({modules:res.data.ueEsti.modules});
        })
    }
    updateRow(id){
        const index=this.state.modules.findIndex(module=>{
            return module.idModule=id
        });
        console.log("index : " + index);
    }
    deleteRow(id){
        const index=this.state.modules.findIndex(module=>{
            return module.idModule=id
        });
        console.log("index : " + index);
    }
    render(){
        const columns = [
            {
                Header:"ID Module",
                accessor:"idModule",
                sortable:false,
                filterable:false,
                style:{textAlign:"center"},
                width:100,
                maxWidth:100,
                minWidth:100
            },
            {
                Header:"Code Module",
                accessor:"codeModule",
                sortable:false,
                filterable:false,
                style:{textAlign:"center"}
            },
            {
                Header:"Code Ue",
                accessor:"code Ue",
                sortable:false,
                filterable:false,
                style:{textAlign:"center"}
            },
            {
                Header:"Libellé",
                accessor:"libelle",
                sortable:false,
                filterable:false,
                style:{textAlign:"center"}
            },            
            {
                Header:"Credit",
                accessor:"credit",
                sortable:false,
                filterable:false,
                style:{textAlign:"center"}
            },
            {
                Header:"volume Horaire",
                accessor:"volumeHoraire",
                sortable:false,
                filterable:false,
                style:{textAlign:"center"}
            },
            {
                Header:"Actions",
                Cell:props=>{
                    return (<Button className="btn btn-sm btn-danger"
                    onClick={()=>{console.log("props", props);this.updateRow(props.original.id);}}
                    >Update</Button>)
                },
                sortable:false,
                filterable:false,
                width:100,
                maxWidth:100,
                minWidth:100
            },
            {
                Header:"Actions",
                Cell:props=>{
                    return (<Button className="btn btn-sm btn-info"
                    onClick={()=>{console.log("props", props);this.deleteRow(props.original.id);}}
                    >Delete</Button>)
                },
                sortable:false,
                filterable:false,
                width:100,
                maxWidth:100,
                minWidth:100
            }
        ]
        return(
            <div  className="container">
                <SideBarBurger/>
                <div className="row col-md-30">
                <div className="col-md-2 mt-5">
                    <ul>
                        <li className="list-unstyled">
                            <Link to="/modules"><FaGem/> Liste</Link>
                        </li>
                        <li className="list-unstyled">
                            <Link to="/addModules"><FaStar/> Nouveau</Link>
                        </li>
                        <li className="list-unstyled">
                            <Link to="/estiLinkedIn"><FaSquare/> Import/Export</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-10 mt-4">
                <h1 style={{color:"orange"}}><img src={modulfImg} alt="module logo" className="rounded-circle border border-primary"/> Liste des Modules</h1>
                
                <table className="table table-bordered table-sm table-stripped table-hover" id="modulesTable">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Code Module</th>
                            <th scope="col">Code Ue</th>
                            <th scope="col">Libellé</th>
                            <th scope="col">Credit</th>
                            <th scope="col">Volume Horaire</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.modules.map(module=>
                        <tr key={module.idModule}>
                            <th scope="row">{module.idModule}</th>
                            <td>{module.codeModule}</td>
                            <td>{module.codeUe}</td>
                            <td>{module.libelleModule}</td>
                            <td>{module.credit}</td>
                            <td>{module.volumeHoraire}</td>
                            <td><Link to={`/editModules/` + module.idModule}><FaPencilAlt/></Link></td>
                            <td><Link to={`/deleteModules/` + module.idModule}><FaTrash/></Link></td>
                        </tr>)}
                    </tbody>
                </table>
                <div className="row">
                    <span><Link to='/addModules' className="btn btn-sm btn-primary ml-3"><FaPlus/> Ajouter</Link></span>
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
                {/*
                <ReactTable
                columns={columns}
                data={this.state.modules}
                defaultPageSize={5}
                noDataText={"Veuillez patienter SVP!!!..."}>
                {(state, filtredData, instance) =>{
                    this.reactTable = state.pageRows.map(module=>{ return module._original });
                    return (
                        <div>
                            {(filtredData())}
                            <ModuleExportToExcel modules={this.reactTable}/>
                        </div>
                    )
                }}
                </ReactTable>*/}
            </div>
        </div>
    </div>)
    }
}

export default Modules;