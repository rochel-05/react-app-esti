import React, {Component} from 'react';
import contratImg from '../../img/contrat3b.jpg';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaGem, FaStar, FaSquare} from 'react-icons/fa';
import { Link } from 'react-router-dom';

class DeleteContrats extends Component{
    state={
        id:0,
        data:{}
    }
    goToContratPage=()=>{this.props.history.push('/contrats');}
    handleIdContratChange(event){
        this.setState({idContrat:event.target.value});
    }
    handleCinChange(event){
        this.setState({cin:event.target.value});
    }
    handleDateContratChange(event){
        this.setState({dateContrat:event.target.value});
    }
    handleObservationChange(event){
        this.setState({observation:event.target.value});
    }
    handleResponsableChange(event){
        this.setState({responsable:event.target.value});
    }
    componentDidMount(){
        const id=this.props.match.params.id;
        axios.get(`/contratDisplayById?idcontrat=` + id)
        .then(res=> {
            //console.log(res.data.ueEsti.contrats[0]);
            this.setState({
                id:id,
                data:res.data.ueEsti.contrats[0]
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
            url: `/contratDelete?idcontrat=${id}`,
            data: null,
            headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin' : '*'}
            })
        .then(res=>{
                var result = res.statusText;
                //console.log(result);
                (result==="Accepted")?toast.info("Suppression reussi avec succés!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000}):toast.warn("Suppression d'un contrat echoué!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000});
        })
        .catch(error=>{
                toast.error("Uoops, on a trouvé une erreur pendant votre suppression!!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000})
        })
        this.goToContratPage();
        event.preventDefault();}
    }
    render(){
        const {cin, datecontrat, observation, responsable}=this.state.data;
        return(
            <div className="row col-md-12">
            <div className="col-md-2 my-5">
                <ul>
                    <li className="list-unstyled">
                        <Link to="/contrats"><FaGem/> Liste</Link>
                    </li>
                    <li className="list-unstyled">
                        <Link to="/addContrats"><FaStar/> Nouveau</Link>
                    </li>
                    <li className="list-unstyled">
                        <Link to="/estiLinkedIn"><FaSquare/> Import/Export</Link>
                    </li>
                </ul>
            </div>
            <div className="col-md-10 mt-4">
            <div className="row col-md-10 ml-5 mt-5 rounded img-thumbnail" style={{backgroundColor:"silver"}}>
            <div className="col-md-3">
                <img src={contratImg} alt="module logo" className="rounded-circle border border-primary"/>
                </div>
            <div className="col-md-9">
                <h1 style={{color:"orange", textAlign:"center"}}>Rejection d'un Contrat</h1>
                <form className="form form-vertical" onSubmit={this.handleSubmit}>
                <div className="form-group row">
                        <label for="idContrat" className="col-md-2 col-form-label">Id</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="idContrat" value={this.state.id}/> {/* onChange={this.handleIdContratChange} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="cin" className="col-md-2 col-form-label">Cin</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="cin" value={cin}/> {/* onChange={this.handleCinChange} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="dateContrat" class="col-md-2 col-form-label">Date</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="dateContrat" value={datecontrat}/> {/* onChange={this.handleDateContratChange} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="observation" class="col-md-2 col-form-label">Observation</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="observation" value={observation}/> {/* onChange={this.handleObservationChange} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="responsable" class="col-md-2 col-form-label">Responsable</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="responsable" value={responsable}/> {/* onChange={this.handleResponsableChange} */}
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

export default DeleteContrats;