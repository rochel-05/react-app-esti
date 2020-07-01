import React, {Component} from 'react';
import contratImg from '../../img/contrat3b.jpg';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaGem, FaStar, FaSquare} from 'react-icons/fa';
import { Link } from 'react-router-dom';

toast.configure()

class EditContrats extends Component{
    constructor(props){
        super(props);
        this.state={
            idcontrat:0,
            cin:'',
            datecontrat:'',
            responsable:'',
            observation:'',
        }
    }
    goToContratPage=()=>{this.props.history.push('/contrats');}
    handleIdContratChange(event){
        this.setState({idcontrat:event.target.value});
    }
    handleCinChange(event){
        this.setState({cin:event.target.value});
    }
    handleDateContratChange(event){
        this.setState({datecontrat:event.target.value});
    }
    handleResponsableChange(event){
        this.setState({responsable:event.target.value});
    }
    handleObservationChange(event){
        this.setState({observation:event.target.value});
    }
    componentDidMount(){
        const id=parseInt(this.props.match.params.id);
        let currentComponent=this;
        let data={};
        axios.get(`/contratDisplayById?idcontrat=` + id)
        .then(res=> {
            data=res.data.ueEsti.contrats[0];
            //console.log(data);
            currentComponent.setState({
                idcontrat:id,
                cin:data.cin,
                datecontrat:data.datecontrat,
                responsable:data.responsable,
                observation:data.observation
            })
        });
    }
    handleSubmit=(event)=>{
        const id=parseInt(this.props.match.params.id);
        let currentComponent=this;
        const datos = {
            cin:currentComponent.state.cin,
            datecontrat:currentComponent.state.datecontrat,
            responsable:currentComponent.state.responsable,
            observation:currentComponent.state.observation,
            idcontrat:currentComponent.state.idcontrat
        }
        if(datos.cin===""){toast.warn("le champ cin est obligatoire", {autoClose:8000});}
        else if(datos.datecontrat===""){toast.info("le champ datecontrat est obligatoire", {autoClose:8000});}
        else if(datos.responsable===""){toast.info("le champ responsable est obligatoire", {autoClose:8000});} 
        else if(datos.observation===""){toast.info("le champ observation est obligatoire", {autoClose:8000});} 
        else if(datos.idcontrat===0){toast.info("le champ idcontrat est obligatoire", {autoClose:8000});} 
        else{ 
        axios.post(`/contratEdit`, {datos},
            {'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin' : '*'})
        .then(res=>{
            var result = res.statusText;
            //console.log(result);
            (result==="OK")?toast.info("Mise à jour reussie avec succés!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000}):toast.warn("Mise à jour d'un contrat echouée!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000});
        })
        .catch(error=>{
            toast.error("Uoops, on a trouvé une erreur pendant votre modification!!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000})
        })
        this.goToContratPage();
        event.preventDefault();}
    } 
    render(){
        const {idcontrat, cin, datecontrat, responsable, observation}=this.state;
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
                <h1 style={{color:"orange", textAlign:"center"}}>Renouvellement Contrat</h1>
                <form className="form form-vertical" onSubmit={this.handleSubmit}>
                <div className="form-group row">
                        <label htmlFor="idcontrat" className="col-md-2 col-form-label">Id</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="idcontrat" value={idcontrat}  onChange={this.handleIdContratChange}/> {/* onChange={this.handleIdContratChange} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="cin" className="col-md-2 col-form-label">Cin</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="cin" value={cin} onChange={this.handleCinChange}/> {/*  onChange={this.handleCinChange} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="datecontrat" className="col-md-2 col-form-label">Date</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="datecontrat" value={datecontrat} onChange={this.handleDateContratChange}/> {/* onChange={this.handleDateContratChange} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="responsable" className="col-md-2 col-form-label">Responsable</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="responsable" value={responsable} onChange={this.handleResponsableChange}/> {/* onChange={this.handleResponsableChange} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="observation" className="col-md-2 col-form-label">Observation</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="observation" value={observation} onChange={this.handleObservationChange}/> {/* onChange={this.handleObservationChange} */}
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

export default EditContrats;