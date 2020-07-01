import React, {Component} from 'react';
import ueImg from '../../img/ue3.jpg';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaGem, FaStar, FaSquare} from 'react-icons/fa';
import { Link } from 'react-router-dom';

class DeleteUes extends Component{
    state={
        id:0,
        data:{}
    }
    goToUePage=()=>{this.props.history.push('/ues');}
    goToDeleteUesPage=()=>{this.props.history.push('/deleteUes');}
    handleCodeUeChange(event){
        this.setState({codeue:event.target.value});
    }
    handleLibelleUeChange(event){
        this.setState({libelleue:event.target.value});
    }
    handleSemestreChange(event){
        this.setState({semestre:event.target.value});
    }
    componentDidMount(){
        const id=this.props.match.params.id;
        axios.get(`/ueDisplayById?codeue=` + id)
        .then(res=> {
            //console.log(res.data.ueEsti.ues[0]);
            this.setState({
                id:id,
                data:res.data.ueEsti.ues[0]
            })
        });
    }
    handleSubmit=(event)=>{
        //console.log(this.state.codeue);
        let codeue=this.state.id;
        axios.delete(`/ueDelete?codeue=` + codeue)
        .then(res=>{
            console.log(res.data);
        })
        this.goToUePage();
        event.preventDefault();
    }
    handleSubmit=(event)=>{
        const id=this.props.match.params.id;
        //console.log("id : " + id);
        if(id===""){toast.warn("le champ codeue est obligatoire", {autoClose:8000});}
        else{    
        axios({
            method: 'post',
            url: `/ueDelete?codeue=${id}`,
            data: null,
            headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin' : '*'}
            })
        .then(res=>{
            var result = res.statusText;
            //console.log(result);
            (result==="Accepted")?toast.info("Suppression reussi avec succés!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000}):toast.warn("Suppression d'un UE echoué!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000});
        })
        .catch(error=>{
                toast.error("Uoops, on a trouvé une erreur pendant votre suppression!!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000})
        })
        this.goToUePage();
        event.preventDefault();}
    }
    render(){
        const {libelleue, semestre} = this.state.data;
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
            <div className="row col-md-9 ml-5 mt-5 rounded img-thumbnail" style={{backgroundColor:"silver"}}>
            <div className="col-md-3">
                <img src={ueImg} alt="module logo" className="rounded-circle border border-primary"/>
            </div>
            <div className="col-md-7">
                <h1 style={{color:"orange", textAlign:"center"}}>Suppression d'un Ue</h1>
                <form className="form form-vertical" onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="codeue" className="col-md-2 col-form-label">Code</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="codeue" value={this.state.id}/> {/* onChange={this.handleCodeUeChange} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="libelleue" className="col-md-2 col-form-label">libellé</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="libelleue" value={libelleue}/> {/* onChange={this.handleLibelleUeChange} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="semestre" className="col-md-2 col-form-label">Semestre</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="semestre" value={semestre}/> {/* onChange={this.handleSemestreChange} */}
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
    </div>
</div>)
    }
}

export default DeleteUes