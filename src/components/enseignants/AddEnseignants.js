import React, {Component} from 'react';
import profileImg from '../../img/profile3.png';
import axios from 'axios';
import { toast } from 'react-toastify';
import {FaGem, FaStar, FaSquare} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

class AddEnseignants extends Component{
    state={
        cinens:'',
        nomens:'',
        prenomens:'',
        diplomeens:'',
        contact:'',
        mail:'',
        status:'Celibataire non engage'
}
goToEnseignantPage=()=>{this.props.history.push('/enseignants');}
goToEditEnseignantPage=()=>{this.props.history.push('/editEnseignants');}
handleCinEnsChange=(event)=>{
    this.setState({cinens:event.target.value});
}
handleNomEnsChange=(event)=>{
    this.setState({nomens:event.target.value});
}
handlePrenomEnsChange=(event)=>{
    this.setState({prenomens:event.target.value});
}
handleDiplomensChange=(event)=>{
    this.setState({diplomeens:event.target.value});
}
handleContactChange=(event)=>{
    this.setState({contact:event.target.value});
}
handleMailChange=(event)=>{
    this.setState({mail:event.target.value});
}
handleStatusChange=(event)=>{
    this.setState({status:event.target.value});
}
handleSubmit=(event)=>{
    let data={
        cinens:this.state.cinens,
        nomens:this.state.nomens,
        prenomens:this.state.prenomens,
        diplomeens:this.state.diplomeens,
        contact:this.state.contact,
        mail:this.state.mail,
        status:this.state.status
    }
    //console.log({data});
    if(data.cinens===""){toast.warn("le champ cin est obligatoire", {autoClose:8000});}
    else if(data.nomens===""){toast.info("le champ nom est obligatoire", {autoClose:8000});}
    else if(data.prenomens===""){toast.info("le champ prenom est obligatoire", {autoClose:8000});}
    else if(data.mail===""){toast.info("le champ mail est obligatoire", {autoClose:8000});}
    else if(data.status===""){toast.info("le champ status est obligatoire", {autoClose:8000});}
    else{
    axios.post(`/enseignantAdd`, {data}, {'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin' : '*'})
    .then(res=>{
        var result = res.statusText;
        (result==="Accepted")?toast.info("Ajout reussi avec succés!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000}):toast.warn("Ajout d'un enseignant echoué!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000});
    })
    .catch(error=>{
        toast.error("Uoops, on a trouvé une erreur pendant votre ajout!!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000})
    })
    this.goToEnseignantPage();
    event.preventDefault();}
}
render(){
    const {cinens, nomens, prenomens, diplomeens, contact, mail, status}=this.state;
    return(
        <div className="row col-md-12">
        <div className="col-md-2 my-5">
            <ul>
                <li className="list-unstyled">
                    <Link to="/enseignants"><FaGem/> Liste</Link>
                </li>
                <li className="list-unstyled">
                    <Link to="/addEnseignants"><FaStar/> Nouveau</Link>
                </li>
                <li className="list-unstyled">
                    <Link to="/estiLinkedIn"><FaSquare/> Import/Export</Link>
                </li>
            </ul>
        </div>
        <div className="col-md-10 mt-4">
        <div className="row col-md-9 ml-4 mt-5 rounded img-thumbnail" style={{backgroundColor:"silver"}}>
        <div className="col-md-3">
            <img src={profileImg} alt="module logo" className="rounded-circle border border-primary"/>
        </div>
        <div className="col-md-9">
            <h1 style={{color:"orange", textAlign:"center"}}>Nouveau Enseignant</h1>
            <form className="form form-vertical" onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="cinens" className="col-md-2 col-form-label">Cin</label>
                    <div className="col-md-10">
                        <input type="text" className="form-control" id="cinens" value={cinens} onChange={this.handleCinEnsChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="nomens" className="col-md-2 col-form-label">Nom</label>
                    <div className="col-md-10">
                        <input type="text" className="form-control" id="nomens" value={nomens} onChange={this.handleNomEnsChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="prenomens" className="col-md-2 col-form-label">Prenom</label>
                    <div className="col-md-10">
                        <input type="text" className="form-control" id="prenomens" value={prenomens} onChange={this.handlePrenomEnsChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="diplomens" className="col-md-2 col-form-label">Diplome</label>
                    <div className="col-md-10">
                        <input type="text" className="form-control" id="diplomens" value={diplomeens} onChange={this.handleDiplomensChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="contact" className="col-md-2 col-form-label">Contact</label>
                    <div className="col-md-10">
                        <input type="text" className="form-control" id="contact" value={contact} onChange={this.handleContactChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="mail" className="col-md-2 col-form-label">Mail</label>
                    <div className="col-md-10">
                        <input type="email" className="form-control" id="mail" value={mail} onChange={this.handleMailChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="status" className="col-md-2 col-form-label">Status</label>
                    <select className="form-control col-md-10" id="status" value={status} onChange={this.handleStatusChange} >
                        <option>Celibataire non engage</option>
                        <option>Celibataire engage</option>
                        <option>Veuve(fe)</option>
                        <option>Divorce</option>
                        <option>Marie</option>
                    </select>
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
    </div>
    )
}
}

export default AddEnseignants;