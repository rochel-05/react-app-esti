import React, {Component} from 'react';
import moduleImg from '../../img/module3.png';
import axios from 'axios';
import { toast } from 'react-toastify';
import {FaGem, FaStar, FaSquare} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

class AddModules extends Component{
    state={
        codeModule:'',
        codeUe:'',
        credit:'',
        libelleModule:'',
        volumeHoraire:''
    }
    goToModulePage=()=>{this.props.history.push('/modules');}
    goToAddModulePage=()=>{this.props.history.push('/addModules')};
    handleCodeModuleChange=(event)=>{
        this.setState({codeModule:event.target.value});
    }
    handleCodeUeChange=(event)=>{
        this.setState({codeUe:event.target.value});
    }
    handleCreditChange=(event)=>{
        this.setState({credit:event.target.value});
    }
    handleLibelleModuleChange=(event)=>{
        this.setState({libelleModule:event.target.value});
    }
    handleVolumeHoraireChange=(event)=>{
        this.setState({volumeHoraire:event.target.value});
    }
    handleSubmit=(event)=>{
        let data={
            codeModule:this.state.codeModule,
            codeUe:this.state.codeUe,
            credit:this.state.credit,
            libelleModule:this.state.libelleModule,
            volumeHoraire:parseInt(this.state.volumeHoraire)
        }
        //console.log({data});
        if(data.codeModule===""){toast.warn("le champ code module est obligatoire", {autoClose:8000});this.goToAddModulePage();}
        else if(data.codeUe===""){toast.info("le champ code ue est obligatoire", {autoClose:8000});this.goToAddModulePage();}
        else if(data.credit===""){toast.info("le champ credit est obligatoire", {autoClose:8000});this.goToAddModulePage();}
        else if(data.libelleModule===""){toast.info("le champ libelle module est obligatoire", {autoClose:8000});this.goToAddModulePage();}
        else if(data.volumeHoraire===""){toast.info("le champ volume horaire est obligatoire", {autoClose:8000});this.goToAddModulePage();}
        else{
        axios.post(`/moduleAdd`, {data})
        .then(res=>{
            var result = res.statusText;
            //console.log(result);
            (result==="OK")?toast.info("Ajout reussi avec succés!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000}):toast.warn("Ajout d'un module echoué!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000});
        })
        .catch(error=>{
            toast.error("Uoops, on a trouvé une erreur pendant votre ajout!!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000})
        })
        this.goToModulePage();
        event.preventDefault();}
    }
    render(){
        const {codeModule, codeUe, credit, libelleModule, volumeHoraire}=this.state;
        return(
            <div className="row col-md-12">
            <div className="col-md-2 my-5">
                <ul>
                    <li className="list-unstyled">
                        <Link to="/modules"><FaGem/> Liste</Link>
                    </li>
                    <li className="list-unstyled">
                        <Link to="/addModules"><FaStar/> Nouveau</Link>
                    </li>
                    <li className="list-unstyled">
                        <Link to="/estiLinkedIn"><FaSquare/> Import/Export</Link>
                    </li>
                </ul>
            </div>
            <div className="col-md-10 mt-4">
            <div className="row col-md-10 ml-4 mt-5 rounded img-thumbnail" style={{backgroundColor:"silver"}}>
            <div className="col-md-3">
                <img src={moduleImg} alt="module logo" className="rounded-circle border border-primary"/>
                </div>
            <div className="col-md-9">
                <h1 style={{color:"orange", textAlign:"center"}}>Nouveau Module</h1>
                <form className="form form-vertical" onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="codeModule" className="col-md-3 col-form-label">Code Module</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" id="codeModule" value={codeModule} onChange={this.handleCodeModuleChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="codeUe" className="col-md-2 col-form-label">Code Ue</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="codeUe" value={codeUe} onChange={this.handleCodeUeChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="credit" className="col-md-2 col-form-label">Credit</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="credit" value={credit} onChange={this.handleCreditChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="libelleModule" className="col-md-2 col-form-label">Libellé</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="libelleModule" value={libelleModule} onChange={this.handleLibelleModuleChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="volumeHoraire" className="col-md-3 col-form-label">Volume Horaire</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" id="volumeHoraire" value={volumeHoraire} onChange={this.handleVolumeHoraireChange}/>
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
        </div>
    </div>)
    }
}

export default AddModules;