import React, {Component} from 'react';
import avenantImg from '../../img/avenant3.jpg';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaGem, FaStar, FaSquare} from 'react-icons/fa';
import { Link } from 'react-router-dom';

toast.configure()

class EditAvenants extends Component{
    constructor(props){
        super(props);
        this.state={
            idAvenant:0,
            cin:'',
            codeModule:'',
            dateAvenant:'',
            anneeUniv:'',
            responsable:''
        };
    }
    goToAvenantPage=()=>{this.props.history.push('/avenants');}
    handleIdAvenant(event){
        this.setState({idAvenant:event.target.value});
    }
    handleCinAvenant(event){
        this.setState({cin:event.target.value});
    }
    handleCodeModule(event){
        this.setState({codeModule:event.target.value});
    }
    handleDateAvenant(event){
        this.setState({dateAvenant:event.target.value});
    }
    handleAnneeUniv(event){
        this.setState({anneeUniv:event.target.value});
    }
    handleResponsable(event){
        this.setState({responsable:event.target.value});
    }
    componentDidMount(){
        const id=parseInt(this.props.match.params.id);
        let currentComponent=this;
        let data={};
        axios.get(`/avenantDisplayById?idAvenant=` + id)
        .then(res=> {
            data=res.data.ueEsti.avenants[0];
            //console.log(data);
            currentComponent.setState({
                idAvenant:id,
                cin:data.cin,
                codeModule:data.codeModule,
                dateAvenant:data.dateAvenant,
                anneeUniv:data.anneeUniv,
                responsable:data.responsable
            })
        });
    }
    handleSubmit=(event)=>{
        let currentComponent=this;
        const datos = {
            cin:currentComponent.state.cin,
            codeModule:currentComponent.state.codeModule,
            dateAvenant:currentComponent.state.dateAvenant,
            anneeUniv:currentComponent.state.anneeUniv,
            responsable:currentComponent.state.responsable,
            idAvenant:currentComponent.state.idAvenant
        }
        if(datos.cin===""){toast.warn("le champ cin est obligatoire", {autoClose:8000});}
        else if(datos.codeModule===""){toast.info("le champ codemodule est obligatoire", {autoClose:8000});}
        else if(datos.dateAvenant===""){toast.info("le champ date avenant est obligatoire", {autoClose:8000});} 
        else if(datos.anneeUniv===""){toast.info("le champ annee universitaire est obligatoire", {autoClose:8000});} 
        else if(datos.responsable===""){toast.info("le champ responsable est obligatoire", {autoClose:8000});} 
        else if(datos.idAvenant===0){toast.info("le champ idAvenant est obligatoire", {autoClose:8000});} 
        else{ 
        axios.post(`/avenantEdit`, {datos},
            {'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin' : '*'})
        .then(res=>{
                var result = res.statusText;
                //console.log(result);
                (result==="OK")?toast.info("Mise à jour reussie avec succés!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000}):toast.warn("Mise à jour echouée!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000});
        })
        .catch(error=>{
                toast.error("Uoops, on a trouvé une erreur pendant votre modification!!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000})
        })
        this.goToAvenantPage();
        event.preventDefault();}
    } 
    render(){
        const {idAvenant, cin, codeModule, dateAvenant, anneeUniv, responsable}=this.state;
        return(
            <div className="row col-md-12">
            <div className="col-md-2 my-5">
                <ul>
                    <li className="list-unstyled">
                        <Link to="/avenants"><FaGem/> Liste</Link>
                    </li>
                    <li className="list-unstyled">
                        <Link to="/addAvenants"><FaStar/> Nouveau</Link>
                    </li>
                    <li className="list-unstyled">
                        <Link to="/estiLinkedIn"><FaSquare/> Import/Export</Link>
                    </li>
                </ul>
            </div>
            <div className="col-md-10 mt-4">
            <div className="row col-md-10 ml-5 mt-5 rounded img-thumbnail" style={{backgroundColor:"silver"}}>
            <div className="col-md-3">
                <img src={avenantImg} alt="module logo" className="rounded-circle border border-primary"/>
                </div>
            <div className="col-md-9">
                <h1 style={{color:"orange", textAlign:"center"}}>Mise à jour un Avenant</h1>
                <form className="form form-vertical" onSubmit={this.handleSubmit}>
                <div className="form-group row">
                        <label htmlFor="idAvenant" className="col-md-2 col-form-label">Id</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="idAvenant" value={idAvenant} onChange={this.handleIdAvenant}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="cin" className="col-md-2 col-form-label">Cin</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="cin" value={cin} onChange={this.handleCinAvenant}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="codeModule" className="col-md-3 col-form-label">Code Module</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" id="codeModule" value={codeModule} onChange={this.handleCodeModule}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="dateAvenant" className="col-md-2 col-form-label">Date</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="dateAvenant" value={dateAvenant} onChange={this.handleDateAvenant}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="anneeUniv" className="col-md-4 col-form-label">Annee Universitaire</label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" id="anneeUniv" value={anneeUniv} onChange={this.handleAnneeUniv}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="responsable" className="col-md-2 col-form-label">Responsable</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="responsable" value={responsable} onChange={this.handleResponsable}/>
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
    </div>
    </div>)
    }
}

export default EditAvenants;