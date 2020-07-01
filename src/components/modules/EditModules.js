import React, {Component} from 'react';
import moduleImg from '../../img/module3.png';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaGem, FaStar, FaSquare} from 'react-icons/fa';
import { Link } from 'react-router-dom';

class EditModules extends Component{
    constructor(props){
        super(props);
        this.state={
            idModule:0,
            codeModule:'',
            codeUe:'',
            credit:'',
            libelleModule:'',
            volumeHoraire:''
        };
    }
    goToModulePage=()=>{this.props.history.push('/modules');}
    handleIdModuleChange(event){
        this.setState({idModule:event.target.value});
    }
    handleCodeModuleChange(event){
        this.setState({codeModule:event.target.value});
    }
    handleCodeUeChange(event){
        this.setState({codeUe:event.target.value});
    }
    handleCreditChange(event){
        this.setState({credit:event.target.value});
    }
    handleLibelleModuleChange(event){
        this.setState({libelleModule:event.target.value});
    }
    handleVolumeHoraireChange(event){
        this.setState({volumeHoraire:event.target.volumeHoraire});
    }
    componentDidMount(){
        let currentComponent=this;
        let data={};
        const id=parseInt(this.props.match.params.id);
        axios.get(`/moduleDisplayById?idModule=` + id)
        .then(res=> {
            data=res.data.ueEsti.modules[0];
            currentComponent.setState({
                idModule:id,
                codeModule:data.codeModule,
                codeUe:data.codeUe,
                credit:data.credit,
                libelleModule:data.libelleModule,
                volumeHoraire:data.volumeHoraire
            })
        });
    }
    handleSubmit=(event)=>{
        const id=parseInt(this.props.match.params.id);
        let currentComponent=this;
        const datos = {
            codeModule:currentComponent.state.codeModule, 
            codeUe:currentComponent.state.codeUe,
            credit:currentComponent.state.credit, 
            libelleModule:currentComponent.state.libelleModule, 
            volumeHoraire:parseInt(currentComponent.state.volumeHoraire),
            idModule:parseInt(currentComponent.state.idModule)
        }
        if(datos.codeModule===""){toast.warn("le champ code module est obligatoire", {autoClose:8000});}
        else if(datos.codeUe===""){toast.info("le champ code ue est obligatoire", {autoClose:8000});}
        else if(datos.credit===""){toast.info("le champ credit est obligatoire", {autoClose:8000});}
        else if(datos.libelleModule===""){toast.info("le champ libelle module est obligatoire", {autoClose:8000});}
        else if(datos.volumeHoraire===""){toast.info("le champ volume horaire est obligatoire", {autoClose:8000});}
        else if(datos.idModule===""){toast.info("le champ idModule est obligatoire", {autoClose:8000});}
        else{
        axios.post(`/moduleEdit`, {datos},
            {'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin' : '*'})
        .then(res=>{
                var result = res.statusText;
                (result==="OK")?toast.info("Mise à jour reussie avec succés!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000}):toast.warn("Mise à jour d'un module echouée!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000});
        })
        .catch(error=>{
                toast.error("Uoops, on a trouvé une erreur pendant votre modification!!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000})
        })
        this.goToModulePage();
        event.preventDefault();}
    }
    render(){
        const {idModule, codeModule, codeUe, credit, libelleModule, volumeHoraire}=this.state;
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
                <h1 style={{color:"orange", textAlign:"center"}}>Modification d'un Module</h1>
                <form className="form form-vertical" onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="idModule" className="col-md-2 col-form-label">Id</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="idModule" value={idModule}  onChange={this.handleIdModuleChange}/> {/* onChange={this.handleIdModuleChange} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="codeModule" className="col-md-3 col-form-label">Code Module</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" id="codeModule" value={codeModule} onChange={this.handleCodeModuleChange}/>  {/* onChange={this.handleCodeModuleChange} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="codeUe" className="col-md-2 col-form-label">Code Ue</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="codeUe" value={codeUe} onChange={this.handleCodeUeChange}/> {/* onChange={this.handleCodeUeChange} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="libelleModule" className="col-md-2 col-form-label">Libellé</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="libelleModule" value={libelleModule} onChange={this.handleLibelleModuleChange}/> {/* onChange={this.handleLibelleModuleChange} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="credit" className="col-md-2 col-form-label">Credit</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="credit" value={credit} onChange={this.handleCreditChange}/>  {/* onChange={this.handleCreditChange} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="volumeHoraire" className="col-md-3 col-form-label">Volume Horaire</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" id="volumeHoraire" value={volumeHoraire} onChange={this.handleVolumeHoraireChange}/> {/* onChange={this.handleVolumeHoraireChange} */}
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
        </div>
    </div>)
    }
}

export default EditModules;