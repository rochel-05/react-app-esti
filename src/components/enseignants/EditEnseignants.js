import React, {Component} from 'react';
import profileImg from '../../img/profile3.png';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaGem, FaStar, FaSquare} from 'react-icons/fa';
import { Link } from 'react-router-dom';

toast.configure()

class EditEnseignants extends Component{
    constructor(props){
        super(props);
        this.state={
            idens:0,
            cinens:'',
            nomens:'',
            prenomens:'',
            diplomeens:'',
            contact:'',
            mail:'',
            status:''
        };
    }
    goToEnseignantPage=()=>{this.props.history.push('/enseignants');}
    handleIdensChange(event){
        this.setState({idens:event.target.value});
    }
    handleCinEnsChange(event){
        this.setState({cinens:event.target.value});
    }
    handleNomensChange(event){
        this.setState({nomens:event.target.value});
    }
    handlePrenomEnsChange(event){
        this.setState({prenomens:event.target.value});
    }
    handleDiplomeEnsChange(event){
        this.setState({diplomeens:event.target.value});
    }
    handleContactChange(event){
        this.setState({contact:event.target.value});
    }
    handleMailChange(event){
        this.setState({mail:event.target.value});
    }
    handleStatusChange(event){
        this.setState({status:event.target.value});
    }
    componentDidMount(){
        let currentComponent=this;
        const id = parseInt(this.props.match.params.id);
        let data={};
        axios.get(`/enseignantDisplayById?idens=` + id)
        .then(res=> {
            data=res.data.ueEsti.enseignants[0];
            //console.log(data);
            currentComponent.setState({
                idens:id,
                cinens:data.cinens,
                nomens:data.nomens,
                prenomens:data.prenomens,
                diplomeens:data.diplomeens,
                contact:data.contact,
                mail:data.mail,
                status:data.status
            })
        });
    }
    handleInputChange=(event)=>{this.setState({[event.target.name]:event.target.value});}
    handleSubmit=(event)=>{
        const id=parseInt(this.props.match.params.id);
        let currentComponent=this;
        const datos = {
            cinens:currentComponent.state.cinens, //this.state.cinens                //'201010007'
            nomens:currentComponent.state.nomens, //this.state.nomens                //'RAHANTARIMALALA'
            prenomens:currentComponent.state.prenomens, //this.state.prenomens       //'Felixia'
            diplomeens:currentComponent.state.diplomeens, //this.state.diplomeens    //'Master Recherche'
            contact:currentComponent.state.contact, //this.state.contact                   //'0343443443'
            mail:currentComponent.state.mail, //this.state.mail    //'felixia.rahantarimalala@esti.mg'
            status:currentComponent.state.status, //this.state.status                          ///this.state.status
            idens:id
        }
        if(datos.cinens===""){toast.warn("le champ cin est obligatoire", {autoClose:8000});}
        else if(datos.nomens===""){toast.info("le champ nom est obligatoire", {autoClose:8000});}
        else if(datos.prenomens===""){toast.info("le champ prenom est obligatoire", {autoClose:8000});}
        else if(datos.mail===""){toast.info("le champ mail est obligatoire", {autoClose:8000});}
        else if(datos.status===""){toast.info("le champ status est obligatoire", {autoClose:8000});}
        else{
        axios.post(`/enseignantEdit`, {datos},
            {'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin' : '*'})
        .then(res=>{
            var result = res.statusText;
            (result==="OK")?toast.info("Mise à jour reussie avec succés!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000}):toast.warn("Mise à jour echouée!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000});
        })
        .catch(error=>{
            toast.error("Uoops, on a trouvé une erreur pendant votre modification!!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000})
        })
        this.goToEnseignantPage();
        event.preventDefault();}
    }
    render(){
        const {idens, cinens, nomens, prenomens, diplomeens, contact, mail, status}=this.state;
        return(
            <div className="row col-md-12">
            <div className="col-md-2 my-5">
                <ul>
                    <li className="list-unstyled">
                        <Link to="/enseignants"><FaGem/> Liste</Link>
                    </li>
                    <li className="list-unstyled">
                        <Link to="/addEnseignants"><FaStar/> Nouveau</Link>
                    </li>
                    <li className="list-unstyled">
                        <Link to="/estiLinkedIn"><FaSquare/> Import/Export</Link>
                    </li>
                </ul>
            </div>
            <div className="col-md-10 mt-4">
            <div className="row col-md-9 ml-4 mt-5 rounded img-thumbnail" style={{backgroundColor:"silver"}}>
            <div className="col-md-3">
                <img src={profileImg} alt="module logo" className="rounded-circle border border-primary"/>
            </div>
            <div className="col-md-9">
                <h1 style={{color:"orange", textAlign:"center"}}>Mise à jour Info Enseignant</h1>
                <form className="form form-vertical" onSubmit={this.handleSubmit}>
                <div className="form-group row">
                        <label htmlFor="idens" className="col-md-2 col-form-label">Id</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="idens" value={idens} onChange={()=>this.handleIdensChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="cinens" className="col-md-2 col-form-label">Cin</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="cinens" value={cinens} onChange={()=>this.handleCinEnsChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="nomens" className="col-md-2 col-form-label">Nom</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="nomens" value={nomens} onChange={()=>this.handleNomensChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="prenomens" className="col-md-2 col-form-label">Prenom</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="prenomens" value={prenomens} onChange={()=>this.handlePrenomEnsChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="diplomemens" className="col-md-2 col-form-label">Diplome</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="diplomeens" value={diplomeens} onChange={()=>this.handleDiplomeEnsChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="contact" className="col-md-2 col-form-label">Contact</label>
                        <div className="col-md-10">
                            <input type="tel" className="form-control" id="contact" value={contact} onChange={()=>this.handleContactChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="mail" className="col-md-2 col-form-label">Mail</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="mail" value={mail} onChange={()=>this.handleMailChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="status" className="col-md-2 col-form-label">Status</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="status" value={status} onChange={()=>this.handleStatusChange}/>
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

export default EditEnseignants;