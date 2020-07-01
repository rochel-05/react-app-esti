import React, {Component} from 'react';
import syllabusImg from '../../img/syllabus3.jpg';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaGem, FaStar, FaSquare} from 'react-icons/fa';
import { Link } from 'react-router-dom';

class AddSyllabuss extends Component{
    state={
        cin:'',
        codemodule:'',
        objectifvise:'',
        prerequis:'',
        contenu:''
    }
    goToSyllabusPage=()=>{this.props.history.push('/syllabuss');}
    goToAddSyllabusPage=()=>{this.props.history.push('/addSyllabuss')};
    handleCinChange=(event)=>{
        this.setState({cin:event.target.value});
    }
    handleCodeModuleChange=(event)=>{
        this.setState({codemodule:event.target.value});
    }
    handleObjectifViseChange=(event)=>{
        this.setState({objectifvise:event.target.value});
    }
    handlePrerequisChange=(event)=>{
        this.setState({prerequis:event.target.value});
    }
    handleContenuChange=(event)=>{
        this.setState({contenu:event.target.value});
    }
    handleSubmit=(event)=>{
        let data={
            cin:this.state.cin,
            codemodule:this.state.codemodule,
            objectifvise:this.state.objectifvise,
            prerequis:this.state.prerequis,
            contenu:this.state.contenu
        }
        //console.log({data});
        if(data.cin===""){toast.warn("le champ cin est obligatoire", {autoClose:8000});this.goToAddSyllabusPage();}
        else if(data.codemodule===""){toast.info("le champ code module est obligatoire", {autoClose:8000});this.goToAddSyllabusPage();}
        else if(data.objectifvise===""){toast.info("le champ objectif visé est obligatoire", {autoClose:8000});this.goToAddSyllabusPage();}
        else if(data.prerequis===""){toast.info("le champ prerequis est obligatoire", {autoClose:8000});this.goToAddSyllabusPage();}
        else if(data.contenu===""){toast.info("le champ contenu est obligatoire", {autoClose:8000});this.goToAddSyllabusPage();}
        else{
        axios.post(`/syllabusAdd`, {data})
        .then(res=>{
            var result = res.statusText;
            console.log(result);
            (result==="OK")?toast.info("Ajout reussi avec succés!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000}):toast.warn("Ajout d'un syllabus echoué!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000});
        })
        .catch(error=>{
            toast.error("Uoops, on a trouvé une erreur pendant votre ajout!!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000})
        })
        this.goToSyllabusPage();
        event.preventDefault();}
    }
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
        const {cin, codemodule, objectifvise, prerequis, contenu} = this.state;
        return(
            <div className="row col-md-12">
            <div className="col-md-2 my-5">
                <ul>
                    <li className="list-unstyled">
                        <Link to="/syllabuss"><FaGem/> Liste</Link>
                    </li>
                    <li className="list-unstyled">
                        <Link to="/addSyllabuss"><FaStar/> Nouveau</Link>
                    </li>
                    <li className="list-unstyled">
                        <Link to="/estiLinkedIn"><FaSquare/> Import/Export</Link>
                    </li>
                </ul>
            </div>
            <div className="col-md-10 mt-4">
            <div className="row col-md-10 ml-4 mt-5 rounded img-thumbnail" style={{backgroundColor:"silver"}}>
            <div className="col-md-3">
                <img src={syllabusImg} alt="module logo" className="rounded-circle border border-primary"/>
            </div>
            <div className="col-md-8">
                <h1 style={{color:"orange", textAlign:"center"}}>Nouveau Syllabus</h1>
                <form className="form form-vertical" onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="cin" className="col-md-2 col-form-label">Cin</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="cin" value={cin} onChange={this.handleCinChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="codeModule" className="col-md-3 col-form-label">Code Module</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" id="codeModule" value={codemodule} onChange={this.handleCodeModuleChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="objectifSyl" className="col-md-3 col-form-label">Objectif visé</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" id="objectifSyl" value={objectifvise} onChange={this.handleObjectifViseChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="prerequis" className="col-md-2 col-form-label">Prérequis</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="prerequis" value={prerequis} onChange={this.handlePrerequisChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="contenu" className="col-md-2 col-form-label">Contenu</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="contenu" value={contenu} onChange={this.handleContenuChange}/>
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
    </div>
</div>)
    }
}

export default AddSyllabuss