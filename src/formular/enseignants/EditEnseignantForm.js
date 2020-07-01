import React, {Component} from 'react';

class EditEnseignantForm extends Component{
    render(){
        return(
            <div className="row col-md-10 offset-1 mr-5 mt-5 rounded img-thumbnail" style={{backgroundColor:"silver"}}>
            <div className="col-lg-1 mt-4 offset-1">
                <img src={profileImg} alt="module image" className="rounded-circle border border-primary"/>
            </div>
            <div className="col-lg-6 offset-2 mt-4 pl-5">
                <h1 style={{color:"orange", textAlign:"center"}}>Mise à jour Info Enseignant</h1>
                <form className="form form-vertical">
                <div className="form-group row">
                        <label htmlFor="idEns" className="col-md-2 col-form-label">Id</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="idEns"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="cinEns" className="col-md-2 col-form-label">Cin</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="cinEns"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="nomEns" className="col-md-2 col-form-label">Nom</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="nomEns"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="prenomEns" className="col-md-2 col-form-label">Prenom</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="prenomEns"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="contactEns" className="col-md-2 col-form-label">Contact</label>
                        <div className="col-md-10">
                            <input type="tel" className="form-control" id="contactEns"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="mailEns" className="col-md-2 col-form-label">Mail</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="mailEns"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="statusEns" className="col-md-2 col-form-label">Status</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="statusEns"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-10">
                            <button type="submit" className="btn btn-primary">Mettre à jour</button>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}

export default EditEnseignantForm;