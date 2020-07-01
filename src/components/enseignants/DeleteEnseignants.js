import React, {Component} from 'react';
import profileImg from '../../img/profile3.png';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaGem, FaStar, FaSquare} from 'react-icons/fa';
import { Link } from 'react-router-dom';

toast.configure();

class DeleteEnseignants extends Component{
    state={
        id:0,
        data:{},
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
        const id = this.props.match.params.id;
        axios.get(`/enseignantDisplayById?idens=` + id)
        .then(res=> {
            //console.log(res.data.ueEsti.enseignants[0]);
            this.setState({
                id:id,
                data:res.data.ueEsti.enseignants[0]
            })
        });
    }
    handleSubmit=(event)=>{
        const id=parseInt(this.props.match.params.id);
        if(id===0){toast.warn("le champ id est obligatoire", {autoClose:8000});}
        else{
        //console.log("id : " + id);
        axios({
            method: 'post',
            url: `/enseignantDelete?idens=${id}`,
            data: null,
            headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin' : '*'}
        }).then(res=>{
                var result = res.statusText;
                (result==="Accepted")?toast.info("Suppression reussi avec succés!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000}):toast.warn("Suppression d'un enseignant echoué!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000});
        })
        .catch(error=>{
                toast.error("Uoops, on a trouvé une erreur pendant votre suppression!!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000})
        })
        this.goToEnseignantPage();
        event.preventDefault();}
    }
    render(){
        const {cinens, nomens, prenomens, diplomeens, contact, mail, status}=this.state.data;
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
                <h1 style={{color:"orange", textAlign:"center"}}>Suppression d'un enseignant</h1>
                <form className="form form-vertical" onSubmit={this.handleSubmit}>
                <div className="form-group row">
                        <label htmlFor="idens" className="col-md-2 col-form-label">Id</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="idens" value={this.state.id}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="cinens" className="col-md-2 col-form-label">Cin</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="cinens" value={cinens}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="nomens" className="col-md-2 col-form-label">Nom</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="nomens" value={nomens}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="prenomens" className="col-md-2 col-form-label">Prenom</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="prenomens" value={prenomens}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="diplomeens" className="col-md-2 col-form-label">Diplome</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="diplomeens" value={diplomeens}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="contact" className="col-md-2 col-form-label">Contact</label>
                        <div className="col-md-10">
                            <input type="tel" className="form-control" id="contact" value={contact}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="mail" className="col-md-2 col-form-label">Mail</label>
                        <div className="col-md-10">
                            <input type="email" className="form-control" id="mail" value={mail}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="status" className="col-md-2 col-form-label">Status</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="status" value={status}/>
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

export default DeleteEnseignants;