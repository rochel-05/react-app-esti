import React, {Component} from 'react';
import syllabusImg from '../../img/syllabus3.jpg';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaGem, FaStar, FaSquare} from 'react-icons/fa';
import { Link } from 'react-router-dom';

class EditSyllabuss extends Component{
    constructor(props){
        super(props);
        this.state={
            idsyllabus:0,
            cin:'',
            codemodule:'',
            objectifvise:'',
            prerequis:'',
            contenu:''
        };
    }
    goToSyllabusPage=()=>{this.props.history.push('/syllabuss');}
    handleIdSyllabusChange(event){
        this.setState({idsyllabus:event.target.value});
    }
    handleCinChange(event){
        this.setState({cin:event.target.value});
    }
    handleCodeModule(event){
        this.setState({codemodule:event.target.value});
    }
    handleObjectifVise(event){
        this.setState({objectifvise:event.target.value});
    }
    handlePrerequisChange(event){
        this.setState({prerequis:event.target.value});
    }
    handleContenuChange(event){
        this.setState({contenu:event.target.value});
    }
    componentDidMount(){
        let currentComponent=this;
        let data={};
        const id=parseInt(this.props.match.params.id);
        axios.get(`/syllabusDisplayById?idsyllabus=` + id)
        .then(res=> {
            data=res.data.ueEsti.syllabus[0];
            //console.log(data);
            currentComponent.setState({
                idsyllabus:id,
                cin:data.cin,
                codemodule:data.codemodule,
                objectifvise:data.objectifvise,
                prerequis:data.prerequis,
                contenu:data.contenu
            })
        });
    } 
    handleSubmit=(event)=>{
        const id=parseInt(this.props.match.params.id);
        let currentComponent=this;
        const datos = {
            cin:currentComponent.state.cin, 
            codemodule:currentComponent.state.codemodule,
            objectifvise:currentComponent.state.objectifvise, 
            prerequis:currentComponent.state.prerequis, 
            contenu:currentComponent.state.contenu,
            idsyllabus:parseInt(currentComponent.state.idsyllabus)
        }
        if(datos.cin===""){toast.warn("le champ cin est obligatoire", {autoClose:8000});}
        else if(datos.codemodule===""){toast.info("le champ code module est obligatoire", {autoClose:8000});}
        else if(datos.objectifvise===""){toast.info("le champ objectif visé est obligatoire", {autoClose:8000});}
        else if(datos.prerequis===""){toast.info("le champ prerequis est obligatoire", {autoClose:8000});}
        else if(datos.contenu===""){toast.info("le champ contenu est obligatoire", {autoClose:8000});}
        else if(datos.idsyllabus===""){toast.info("le champ idsyllabus est obligatoire", {autoClose:8000});}
        else{
        axios.post(`/syllabusEdit`, {datos},
            {'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin' : '*'})
        .then(res=>{
                var result = res.statusText;
                console.log(result);
                (result==="OK")?toast.info("Mise à jour reussie avec succés!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000}):toast.warn("Mise à jour echouée!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000});
        })
        .catch(error=>{
                toast.error("Uoops, on a trouvé une erreur pendant votre modification!!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000})
        })
        this.goToSyllabusPage();
        event.preventDefault();}
    }  
    render(){
        const {idsyllabus, cin, codemodule, objectifvise, prerequis, contenu} = this.state;
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
                <h1 style={{color:"orange", textAlign:"center"}}>Mis à jour d'un Syllabus</h1>
                <form className="form form-vertical" onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="idsyllabus" className="col-md-2 col-form-label">Id</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="idsyllabus" value={idsyllabus} onChange={()=>this.handleIdSyllabusChange}/> {/* onChange={this.handleIdSyllabusChange} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="cin" className="col-md-2 col-form-label">Cin</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="cin" value={cin} onChange={()=>this.handleCinChange}/> {/* onChange={this.handleCinChange} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="codemodule" className="col-md-3 col-form-label">Code Module</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" id="codemodule" value={codemodule} onChange={()=>this.handleCodeModule}/> {/*onChange={this.handleCodeModule} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="objectifvise" className="col-md-3 col-form-label">Objectif visé</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" id="objectifvise" value={objectifvise} onChange={()=>this.handleObjectifVise}/> {/*onChange={this.handleObjectifVise} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="prerequis" className="col-md-2 col-form-label">Prérequis</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="prerequis" value={prerequis} onChange={()=>this.handlePrerequisChange}/> {/*onChange={this.handlePrerequisChange} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="contenu" className="col-md-2 col-form-label">Contenu</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="contenu" value={contenu} onChange={()=>this.handleContenuChange}/> {/* onChange={this.handleContenuChange} */}
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

export default EditSyllabuss