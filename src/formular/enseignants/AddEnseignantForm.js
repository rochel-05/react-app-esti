import React, {Component} from 'react';
import profileImg from '../../img/profile.png';
import axios from 'axios';

class AddEnseignantForm extends Component{
    state={
            cinens:'',
            nomens:'',
            prenomens:'',
            diplomeens:'',
            contact:'',
            mail:'',
            status:''
    }
    goToEnseignantPage=()=>{this.props.push('/enseignant');}
    handleCinEnsChange(event){
        this.setState({cinens:event.target.value});
    }
    handleNomEnsChange(event){
        this.setState({nomens:event.target.value});
    }
    handlePrenomEnsChange(event){
        this.setState({prenomens:event.target.value});
    }
    handleDiplomensChange(event){
        this.setState({diplomeens:event.target.value});
    }
    handleContactChange(event){
        this.setState({contact:event.target.value});
    }
    handleMailChange(event){
        this.setState({mail:event.target.value});
    }
    handleStatusChange(event){
        this.setState({status:event.target.value});
    }
    handleSubmit(event){
        let data={
            cinens:this.state.cinens,
            nomens: this.state.nomens,
            prenomens:this.state.prenomens,
            diplomeens:this.state.diplomeens,
            contact:this.state.contact,
            mail:this.state.mail,
            status:this.state.status
        }
        axios.post(`/enseignantAdd`, data)
        .then(res=>{
            console.log(res.data);
        })  
        this.goToEnseignantPage();
        event.preventDefault();
    }
    render(){
        const {cinens, nomens, prenomens, diplomeens, contact, mail, status}=this.state;
        return(
            <div className="row col-md-10 offset-1 mr-5 mt-5 rounded img-thumbnail" style={{backgroundColor:"silver"}}>
            <div className="col-lg-1 mt-4 offset-1">
                <img src={profileImg} alt="module image" className="rounded-circle border border-primary"/>
            </div>
            <div className="col-lg-6 offset-2 mt-4 pl-5">
                <h1 style={{color:"orange", textAlign:"center"}}>Ajout d'Enseignant</h1>
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
                            <input type="mail" className="form-control" id="mail" value={mail} onChange={this.handleMailChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="status" className="col-md-2 col-form-label">Status</label>
                        <select class="form-control col-md-10" id="status" value={status} onChange={this.handleStatusChange} >
                            <option>Celibataire non engagé</option>
                            <option>Celibataire engagé</option>
                            <option>Veuve(fe)</option>
                            <option>Divorcé</option>
                            <option>Marié</option>
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
        )
    }
}

export default AddEnseignantForm;