import React, {Component} from 'react';
import ueImg from '../../img/ue3.jpg';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaGem, FaStar, FaSquare} from 'react-icons/fa';
import { Link } from 'react-router-dom';

class AddUes extends Component{
    state={
        codeue: '',
        libelleue:'',
        semestre:'S1'
    }
    goToUePage=()=>{this.props.history.push('/ues');}
    goToAddUePage=()=>{this.props.history.push('/addUes');}
    handleCodeUeChange=(event)=>{
        this.setState({codeue:event.target.value})
    }
    handleLibelleUeChange=(event)=>{
        this.setState({libelleue:event.target.value})
    }
    handleSemestreUeChange=(event)=>{
        this.setState({semestre:event.target.value})
    }
    handleSubmit=(event)=>{
        let ue={
            codeue:this.state.codeue,
            libelleue:this.state.libelleue,
            semestre:this.state.semestre
        }
        if(ue.codeue===""){toast.warn("le champ codeue est obligatoire", {autoClose:8000});this.goToAddUePage();}
        else if(ue.libelleue===""){toast.info("le champ libelleue est obligatoire", {autoClose:8000});this.goToAddUePage();}
        else if(ue.semestre===""){toast.info("le champ semestre est obligatoire", {autoClose:8000});this.goToAddUePage();} 
        else{        
        axios.post(`/ueAdd`, {ue})
        .then(res=>{
            var result = res.statusText;
            //console.log(result);
            (result==="Accepted")?toast.info("Ajout reussi avec succés!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000}):toast.warn("Ajout d'un UE echoué!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000});
        })
        .catch(error=>{
            toast.error("Uoops, on a trouvé une erreur pendant votre ajout!!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000})
        })
        this.goToUePage();
        event.preventDefault();}
    }
    render(){
        const {codeue, libelleue, semestre}=this.state;
        return(
            <div className="row col-md-12">
            <div className="col-md-2 my-5">
                <ul>
                    <li className="list-unstyled">
                        <Link to="/ues"><FaGem/> Liste</Link>
                    </li>
                    <li className="list-unstyled">
                        <Link to="/addUes"><FaStar/> Nouveau</Link>
                    </li>
                    <li className="list-unstyled">
                        <Link to="/estiLinkedIn"><FaSquare/> Import/Export</Link>
                    </li>
                </ul>
            </div>
            <div className="col-md-10 mt-4">
            <div className="row col-md-8 ml-5 mt-5 rounded img-thumbnail" style={{backgroundColor:"silver"}}>
            <div className="col-md-3">
                <img src={ueImg} alt="module logo" className="rounded-circle border border-primary"/>
            </div>
            <div className="col-md-7">
                <h1 style={{color:"orange", textAlign:"center"}}>Nouveau Ue</h1>
                <form className="form form-vertical" onSubmit={this.handleSubmit}> {/*onSubmit={this.handleSubmit}*/}
                    <div className="form-group row">
                        <label htmlFor="codeue" className="col-md-2 col-form-label">Code</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="codeue" value={codeue} onChange={this.handleCodeUeChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="libelleue" className="col-md-2 col-form-label">libellé</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="libelleue" value={libelleue} onChange={this.handleLibelleUeChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="semestre">Semestre : </label>
                        <select className="form-control col-md-8 offset-1" id="semestre" value={semestre} onChange={this.handleSemestreUeChange}>
                            <option>S1</option>
                            <option>S2</option>
                            <option>S3</option>
                            <option>S4</option>
                            <option>S5</option>
                            <option>S6</option>
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
            </div>
        </div>)
    }
}

export default AddUes