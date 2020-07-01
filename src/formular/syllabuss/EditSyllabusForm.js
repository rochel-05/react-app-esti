import React, {Component} from 'react';
import syllabusImg from '../../img/syllabus2.jpg';

class EditSyllabusForm extends Component{
    render(){
        return(
            <div className="row col-md-10 offset-1 mr-5 mt-5 rounded img-thumbnail" style={{backgroundColor:"silver"}}>
            <div className="col-lg-1 mt-4 offset-1">
                <img src={syllabusImg} alt="module image" className="rounded-circle border border-primary"/>
            </div>
            <div className="col-lg-7 offset-2 mt-4 pl-5">
                <h1 style={{color:"orange", textAlign:"center"}}>Mettre à jour un Syllabus</h1>
                <form className="form form-vertical">
                    <div className="form-group row">
                        <label for="idSyl" className="col-md-2 col-form-label">Id</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="idSyl"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="cinSyl" className="col-md-2 col-form-label">Cin</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="cinSyl"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="codeMod" class="col-md-3 col-form-label">Code Module</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" id="codeMod"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="objectifSyl" class="col-md-3 col-form-label">Objectif visé</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" id="objectifSyl"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="prerequSyl" class="col-md-2 col-form-label">Prérequis</label>
                        <div className="col-md-10">
                            <input type="tel" className="form-control" id="prerequSyl"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="contenuSyl" class="col-md-2 col-form-label">Contenu</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="contenuSyl"/>
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

export default EditSyllabusForm;