import React, {Component} from 'react';
import ueImg from '../../img/ue1.jpg';

class DeleteUeForm extends Component{
    render(){
        return(
            <div className="row col-md-9 offset-1 mr-5 mt-5 rounded img-thumbnail" style={{backgroundColor:"silver"}}>
            <div className="col-lg-1 mt-4 offset-1">
                <img src={ueImg} alt="module image" className="rounded-circle border border-primary"/>
            </div>
            <div className="col-lg-6 offset-2 mt-4 pl-5">
                <h1 style={{color:"orange", textAlign:"center"}}>Suppression d'un Ue</h1>
                <form className="form form-vertical">
                <div className="form-group row">
                        <label for="idUe" className="col-md-2 col-form-label">Id</label>
                        <div className="col-md-10">
                            <input type="email" className="form-control" id="idUe"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="codeUe" className="col-md-2 col-form-label">Code</label>
                        <div className="col-md-10">
                            <input type="email" className="form-control" id="codeUe"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="libelleUe" class="col-md-2 col-form-label">libellé</label>
                        <div className="col-md-10">
                            <input type="password" className="form-control" id="libelleUe"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="semestreUe" class="col-md-2 col-form-label">Semestre</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="semestreUe"/>
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

export default DeleteUeForm;