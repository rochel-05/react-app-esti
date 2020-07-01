import React, {Component} from 'react';
import profileImg from '../../img/profile.png';

class DeleteEnseignantForm extends Component{
    render(){
        return(
            <div className="row col-md-10 offset-1 mr-5 mt-5 rounded img-thumbnail" style={{backgroundColor:"silver"}}>
            <div className="col-lg-1 mt-4 offset-1">
                <img src={profileImg} alt="module image" className="rounded-circle border border-primary"/>
            </div>
            <div className="col-lg-7 offset-2 mt-4 pl-5">
                <h1 style={{color:"orange", textAlign:"center"}}>Suppression d'un enseignant</h1>
                <form className="form form-vertical">
                <div className="form-group row">
                        <label for="idEns" className="col-md-2 col-form-label">Id</label>
                        <div className="col-md-10">
                            <input type="email" className="form-control" id="idEns"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="cinEns" className="col-md-2 col-form-label">Cin</label>
                        <div className="col-md-10">
                            <input type="email" className="form-control" id="cinEns"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="nomEns" class="col-md-2 col-form-label">Nom</label>
                        <div className="col-md-10">
                            <input type="password" className="form-control" id="nomEns"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="prenomEns" class="col-md-2 col-form-label">Prenom</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="prenomEns"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="contactEns" class="col-md-2 col-form-label">Contact</label>
                        <div className="col-md-10">
                            <input type="tel" className="form-control" id="contactEns"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="mailEns" class="col-md-2 col-form-label">Mail</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="mailEns"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="statusEns" class="col-md-2 col-form-label">Status</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="statusEns"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-10">
                            <button type="submit" className="btn btn-primary">Supprimer</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}

export default DeleteEnseignantForm;