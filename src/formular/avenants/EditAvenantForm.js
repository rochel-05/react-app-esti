import React, {Component} from 'react';
import avenantImg from '../../img/avenant1.jpg';

class EditAvenantForm extends Component{
    render(){
        return(
            <div className="row col-md-10 offset-1 mr-5 mt-5 rounded img-thumbnail" style={{backgroundColor:"silver"}}>
            <div className="col-lg-1 mt-4 offset-1">
                <img src={avenantImg} alt="module image" className="rounded-circle border border-primary"/>
            </div>
            <div className="col-lg-7 offset-2 mt-4 pl-5">
                <h1 style={{color:"orange", textAlign:"center"}}>Mise à jour un Avenant</h1>
                <form className="form form-vertical">
                <div className="form-group row">
                        <label for="idAvenant" className="col-md-2 col-form-label">Id</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="idAvenant"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="cinAvenant" className="col-md-2 col-form-label">Cin</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="cinAvenant"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="codeModule" class="col-md-3 col-form-label">Code Module</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" id="codeModule"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="dateAvenant" class="col-md-2 col-form-label">Date</label>
                        <div className="col-md-10">
                            <input type="date" className="form-control" id="dateAvenant"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="anneeAvenant" class="col-md-4 col-form-label">Annee Universitaire</label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" id="anneeAvenant"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="respAvenant" class="col-md-2 col-form-label">Responsable</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="respAvenant"/>
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

export default EditAvenantForm;