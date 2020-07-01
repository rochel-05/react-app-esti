import React, {Component} from 'react';
import contratImg from '../../img/contrat3b.jpg';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaGem, FaStar, FaSquare} from 'react-icons/fa';
import { Link } from 'react-router-dom';

toast.configure()

class AddContrats extends Component{
    state={
        cin:'',
        datecontrat:'',
        responsable:'',
        observation:''
    }
    goToContratPage=()=>{this.props.history.push('/contrats');}
    goToAddContratPage=()=>{this.props.history.push('/addContrats');}
    handleCinContrat=(event)=>{this.setState({cin:event.target.value});}
    handleDateContratContrat=(event)=>{this.setState({datecontrat:event.target.value});}
    handleResponsableContrat=(event)=>{this.setState({responsable:event.target.value});}
    handleObservationContrat=(event)=>{this.setState({observation:event.target.value});}
    handleSubmit=(event)=>{
        let data={
            cin:this.state.cin,
            datecontrat:new Date(this.state.datecontrat),
            responsable:this.state.responsable,
            observation:this.state.observation
        }
        //console.log({data});
        if(data.cin===""){toast.warn("le champ cin est obligatoire", {autoClose:8000});this.goToAddContratPage();}
        else if(data.datecontrat===""){toast.info("le champ datecontrat est obligatoire", {autoClose:8000});this.goToAddContratPage();}
        else if(data.responsable===""){toast.info("le champ responsable est obligatoire", {autoClose:8000});this.goToAddContratPage();} 
        else if(data.observation===""){toast.info("le champ observation est obligatoire", {autoClose:8000});this.goToAddContratPage();} 
        else{   
        axios.post(`/contratAdd`, {data})
        .then(res=>{
            var result = res.statusText;
            console.log(result);
            (result==="OK")?toast.info("Ajout reussi avec succés!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000}):toast.warn("Ajout d'un contrat echoué!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000});
        })
        .catch(error=>{
            toast.error("Uoops, on a trouvé une erreur pendant votre ajout!!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000})
        })
        this.goToContratPage();
        event.preventDefault();}
    }
    render(){
        const {cin, datecontrat, responsable, observation}=this.state;
        return(
            <div className="row col-md-12">
            <div className="col-md-2 my-5">
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
            <div className="row col-md-10 ml-5 mt-5 rounded img-thumbnail" style={{backgroundColor:"silver"}}>
            <div className="col-md-3">
                <img src={contratImg} alt="module logo" className="rounded-circle border border-primary"/>
            </div>
            <div className="col-md-9">
                <h1 style={{color:"orange", textAlign:"center"}}>Nouveau Contrat</h1>
                <form className="form form-vertical" onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="cin" className="col-md-2 col-form-label">Cin</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="cin" value={cin} onChange={this.handleCinContrat}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="datecontrat" className="col-md-2 col-form-label">Date</label>
                        <div className="col-md-10">
                            <input type="date" className="form-control" id="datecontrat" value={datecontrat} onChange={this.handleDateContratContrat}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="responsable" className="col-md-2 col-form-label">Responsable</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="responsable" value={responsable} onChange={this.handleResponsableContrat}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="observation" className="col-md-2 col-form-label">Observation</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="observation" value={observation} onChange={this.handleObservationContrat}/>
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

export default AddContrats;