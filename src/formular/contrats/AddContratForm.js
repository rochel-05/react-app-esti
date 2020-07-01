import React, {Component} from 'react';
import contratImg from '../../img/contrat2.jpg';

class AddContratForm extends Component{
    render(){
        return(
            <div className="row col-md-10 offset-1 mr-5 mt-5 rounded img-thumbnail" style={{backgroundColor:"silver"}}>
            <div className="col-lg-1 mt-4 offset-1">
                <img src={contratImg} alt="module logo" className="rounded-circle border border-primary"/>
            </div>
            <div className="col-lg-7 offset-2 mt-4 pl-5">
                <h1 style={{color:"orange", textAlign:"center"}}>Ajout d'un Contrat</h1>
                <form className="form form-vertical">
                    <div className="form-group row">
                        <label for="cinContrat" className="col-md-2 col-form-label">Cin</label>
                        <div className="col-md-10">
                            <input type="email" className="form-control" id="cinContrat"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="dateContrat" class="col-md-2 col-form-label">Date</label>
                        <div className="col-md-10">
                            <input type="date" className="form-control" id="dateContrat"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="observationContrat" class="col-md-2 col-form-label">Observation</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="observationContrat"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="responsableContrat" class="col-md-2 col-form-label">Responsable</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="responsableContrat"/>
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
        )
    }
}

export default AddContratForm;