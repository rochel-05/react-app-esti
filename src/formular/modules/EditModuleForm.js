import React, {Component} from 'react';
import moduleImg from '../../img/module1.png';

class EditModuleForm extends Component{
    render(){
        return(
            <div className="row col-md-10 offset-1 mr-5 mt-5 rounded img-thumbnail" style={{backgroundColor:"silver"}}>
            <div className="col-lg-1 mt-4 offset-1">
                <img src={moduleImg} alt="module image" className="rounded-circle border border-primary"/>
            </div>
            <div className="col-lg-7 offset-2 mt-4 pl-5">
                <h1 style={{color:"orange", textAlign:"center"}}>Modification d'un Module</h1>
                <form className="form form-vertical">
                    <div className="form-group row">
                        <label for="idMod" className="col-md-2 col-form-label">Id</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="idMod"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="codeMod" className="col-md-3 col-form-label">Code Module</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" id="codeMod"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="codeUe" class="col-md-2 col-form-label">Code Ue</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="codeUe"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="libelleMod" class="col-md-2 col-form-label">Libellé</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="libelleMod"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="creditMod" class="col-md-2 col-form-label">Credit</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="creditMod"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="horaireMod" class="col-md-3 col-form-label">Volume Horaire</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" id="horaireMods"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-10">
                            <button type="submit" className="btn btn-primary">Modifier</button>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}

export default EditModuleForm;