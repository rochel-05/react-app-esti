import React, {Component} from 'react';
import avenantImg from '../../img/avenant3.jpg';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaGem, FaStar, FaSquare} from 'react-icons/fa';
import { Link } from 'react-router-dom';

toast.configure()

class AddAvenants extends Component{
    state={
        cin:'',
        codeModule:'',
        dateAvenant:'',
        anneeUniv:'2019-2020',
        responsable:''
    }
    goToAvenantPage=()=>{this.props.history.push('/avenants');}
    goToAddAvenantPage=()=>{this.props.history.push('/addAvenants');}
    handleCinChange=(event)=>{this.setState({cin:event.target.value});}
    handleCodeModuleChange=(event)=>{this.setState({codeModule:event.target.value});}
    handleDateAvenantChange=(event)=>{this.setState({dateAvenant:event.target.value});}
    handleAnneeUnivChange=(event)=>{this.setState({anneeUniv:event.target.value});}
    handleResponsableChange=(event)=>{this.setState({responsable:event.target.value});}
    handleSubmitChange=(event)=>{
        let data={
            cin:this.state.cin,
            codeModule:this.state.codeModule,
            dateAvenant:new Date(this.state.dateAvenant),
            anneeUniv:this.state.anneeUniv,
            responsable:this.state.responsable
        }
        //console.log({data});
        if(data.cin===""){toast.warn("le champ cin est obligatoire", {autoClose:8000});this.goToAddAvenantPage();}
        else if(data.codeModule===""){toast.info("le champ codemodule est obligatoire", {autoClose:8000});this.goToAddAvenantPage();}
        else if(data.dateAvenant===""){toast.info("le champ date avenant est obligatoire", {autoClose:8000});this.goToAddAvenantPage();} 
        else if(data.anneeUniv===""){toast.info("le champ annee universitaire est obligatoire", {autoClose:8000});this.goToAddAvenantPage();} 
        else if(data.responsable===""){toast.info("le champ responsable est obligatoire", {autoClose:8000});this.goToAddAvenantPage();} 
        else{ 
        axios.post(`/avenantAdd`, {data})
        .then(res=>{
            var result = res.statusText;
            //console.log(result);
            (result==="Accepted")?toast.info("Ajout reussi avec succés!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000}):toast.warn("Ajout d'un avenant echoué!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000});
        })
        .catch(error=>{
            toast.error("Uoops, on a trouvé une erreur pendant votre ajout!!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000})
        })
        this.goToAvenantPage();
        event.preventDefault();}
    }
    render(){
        const {cin, codeModule, dateAvenant, anneeUniv, responsable} = this.state;
        return(
            <div className="row col-md-12">
            <div className="col-md-2 my-5">
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
            <div className="row col-md-10 ml-5 mt-5 rounded img-thumbnail" style={{backgroundColor:"silver"}}>
            <div className="col-md-3">
                <img src={avenantImg} alt="module logo" className="rounded-circle border border-primary"/>
            </div>
            <div className="col-md-9">
                <h1 style={{color:"orange", textAlign:"center"}}>Nouveau Avenant</h1>
                <form className="form form-vertical" onSubmit={this.handleSubmitChange}>
                    <div className="form-group row">
                        <label htmlFor="cin" className="col-md-2 col-form-label">Cin</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="cin" value={cin} onChange={this.handleCinChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="codeModule" className="col-md-3 col-form-label">Code Module</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" id="codeModule" value={codeModule} onChange={this.handleCodeModuleChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="dateAvenant" className="col-md-2 col-form-label">Date</label>
                        <div className="col-md-10">
                            <input type="date" className="form-control" id="dateAvenant" value={dateAvenant} onChange={this.handleDateAvenantChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                    <label htmlFor="anneeUniv" className="col-md-4 col-form-label">Année Universitaire</label>
                    <select className="form-control col-md-8" id="anneeUniv" value={anneeUniv} onChange={this.handleAnneeUnivChange} >
                        <option>2019-2020</option>
                        <option>2020-2021</option>
                        <option>2021-2022</option>
                        <option>2022-2023</option>
                        <option>2023-2024</option>
                        <option>2024-2025</option>
                        <option>2025-2026</option>
                        <option>2026-2027</option>
                        <option>2027-2028</option>
                        <option>2028-2029</option>
                        <option>2029-2030</option>
                    </select>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="responsable" className="col-md-4 col-form-label">Responsable</label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" id="responsable" value={responsable} onChange={this.handleResponsableChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-10">
                            <button type="submit" className="btn btn-primary">Ajouter</button>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
    </div>)
    }
}

export default AddAvenants;