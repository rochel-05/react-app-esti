import React, {Component} from 'react';
import ueImg from '../../img/ue1.jpg';
import axios from 'axios';

class AddUeForm extends Component{
    state={
        codeUe: '',
        libelleUe:'',
        semestreUe:'s1'
    }
    handleCodeUeChange=(event)=>{
        this.setState({codeUe:event.target.value})
    }
    handleLibelleUeChange=(event)=>{
        this.setState({libelleUe:event.target.value})
    }
    handleSemestreUeChange=(event)=>{
        this.setState({semestreUe:event.target.value})
    }
    handleSubmit=(event)=>{
        const ue={
            codeue:this.state.codeUe,
            libelleue:this.state.libelleUe,
            semestreUe:this.state.semestreUe
        }
        let config = {
            headers: {
                'mode':'no-cors',
                'Accept': 'application/json',
                'Content-Type':' application/json',
            }
        }
        axios.post(`/ueAdd`,ue, config)
        .then(res=>{
            console.log(res.data);
        })
        console.log("ue : " + this.state.ue);
        event.preventDefault();
    }
    render(){
        const {codeUe, libelleUe, semestreUe}=this.state;
        //console.log("code : "+codeUe + " ,libelle : "+libelleUe+" ,semestre : " + semestreUe);
        return(
            <div className="row col-md-9 offset-2 mr-5 mt-5 rounded img-thumbnail" style={{backgroundColor:"silver"}}>
            <div className="col-lg-1 mt-4 offset-1">
                <img src={ueImg} alt="module image" className="rounded-circle border border-primary"/>
            </div>
            <div className="col-lg-6 offset-2 mt-4 pl-5">
                <h1 style={{color:"orange", textAlign:"center"}}>Ajout d'un Ue</h1>
                <form className="form form-vertical" onSubmit={this.handleSubmit}> {/*onSubmit={this.handleSubmit}*/}
                    <div className="form-group row">
                        <label htmlFor="codeUe" className="col-md-2 col-form-label">Code</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="codeUe" value={codeUe} onChange={this.handleCodeUeChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="libelleUe" className="col-md-2 col-form-label">libellé</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="libelleUe" value={libelleUe} onChange={this.handleLibelleUeChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="semestreUe">Semestre : </label>
                        <select className="form-control col-md-8 offset-1" id="semestreUe" onChange={this.handleSemestreUeChange}>
                            <option value="S1">S1</option>
                            <option value="S2">S2</option>
                            <option value="S3">S3</option>
                            <option value="S4">S4</option>
                            <option value="S5">S5</option>
                            <option value="S6">S6</option>
                        </select>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-10">
                            <button type="submit" className="btn btn-primary">Ajouter</button> {/* onClick={this.postData} */}
                        </div>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}

export default AddUeForm;