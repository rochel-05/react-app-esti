import React, {Component} from 'react';
import moduleImg from '../../img/module3.png';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaGem, FaStar, FaSquare} from 'react-icons/fa';
import { Link } from 'react-router-dom';

class DeleteModules extends Component{
    state={
        id:0,
        data:{}
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
    handleLibelleModuleChange(event){
        this.setState({libelleModule:event.target.value});
    }
    handleCreditChange(event){
        this.setState({credit:event.target.value});
    }
    handleVolumeHoraireChange(event){
        this.setState({volumeHoraire:event.target.volumeHoraire});
    }
    componentDidMount(){
        const id=this.props.match.params.id;
        axios.get(`/moduleDisplayById?idModule=` + id)
        .then(res=> {
            //console.log(res.data.ueEsti.modules[0]);
            this.setState({
                id:id,
                data:res.data.ueEsti.modules[0]
            })
        });
    }
    handleSubmit=(event)=>{
        const id=parseInt(this.props.match.params.id);
        //console.log("id : " + id);
        if(id===0){toast.warn("le champ id est obligatoire", {autoClose:8000});}
        else{
        axios({
            method: 'post',
            url: `/moduleDelete?idModule=${id}`,
            data: null,
            headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin' : '*'}
        }).then(res=>{
            var result = res.statusText;
            console.log(result);
            (result==="Accepted")?toast.info("Suppression reussi avec succés!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000}):toast.warn("Suppression d'un module echoué!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000});
        })
        .catch(error=>{
            toast.error("Uoops, on a trouvé une erreur pendant votre suppression!!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000})
        })
        this.goToModulePage();
        event.preventDefault();}
    }
    render(){
        const {codeModule, codeUe, libelleModule, credit, volumeHoraire}=this.state.data;
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
                <h1 style={{color:"orange", textAlign:"center"}}>Suppression d'un Module</h1>
                <form className="form form-vertical" onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label for="idModule" className="col-md-2 col-form-label">Id</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="idModule" value={this.state.id}/> {/* onChange={this.handleIdModuleChange} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="codeModule" className="col-md-3 col-form-label">Code Module</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" id="codeModule" value={codeModule} /> {/* onChange={this.handleCodeModuleChange} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="codeUe" class="col-md-2 col-form-label">Code Ue</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="codeUe" value={codeUe}/> {/*onChange={this.handleCodeUeChange}*/}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="libelleModule" class="col-md-2 col-form-label">Libellé</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="libelleModule" value={libelleModule}/> {/* onChange={this.handleLibelleModuleChange} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="credit" class="col-md-2 col-form-label">Credit</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="credit" value={credit}/> {/* onChange={this.handleCreditChange} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="volumeHoraire" class="col-md-3 col-form-label">Volume Horaire</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" id="volumeHoraire" value={volumeHoraire}/> {/* onChange={this.handleVolumeHoraireChange} */}
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

export default DeleteModules;