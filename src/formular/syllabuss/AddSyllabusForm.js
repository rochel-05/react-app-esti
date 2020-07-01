import React, {Component} from 'react';
import syllabusImg from '../../img/syllabus2.jpg';

class AddSyllabusForm extends Component{
    syllabusPjChange=(event)=>{
        let files=event.target.files;
        let reader=new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload=(event)=>{
            console.warn("img data ", event.target.result);
        }
        console.warn("data files", files);
    }
    render(){
        return(
            <div className="row col-md-10 offset-1 mr-5 mt-5 rounded img-thumbnail" style={{backgroundColor:"silver"}}>
            <div className="col-lg-1 mt-4 offset-1">
                <img src={syllabusImg} alt="module logo" className="rounded-circle border border-primary"/>
            </div>
            <div className="col-lg-6 offset-2 mt-4 pl-5">
                <h1 style={{color:"orange", textAlign:"center"}}>Ajout d'un Syllabus</h1>
                <form className="form form-vertical">
                    <div className="form-group row">
                        <label htmlFor="cinSyl" className="col-md-2 col-form-label">Cin</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="cinSyl"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="codeMod" className="col-md-3 col-form-label">Code Module</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" id="codeMod"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="objectifSyl" className="col-md-3 col-form-label">Objectif visé</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" id="objectifSyl"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="prerequSyl" className="col-md-2 col-form-label">Prérequis</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="prerequSyl"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="contenuSyl" className="col-md-2 col-form-label">Contenu</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="contenuSyl"/>
                        </div>
                    </div>
                    {/*
                    <div className="form-group row">
                        <label htmlFor="syllabuspj" className="col-md-4 col-form-label">Piece Jointe (pdf)</label>
                        <div className="col-md-8">
                            <input type="file" className="form-control" id="syllabuspj" name="syllabuspj" onChange={this.syllabusPjChange}/>
                        </div>
                    </div>
                    */}
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

export default AddSyllabusForm;