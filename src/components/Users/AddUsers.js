import React, {Component} from 'react';
import profileImg from '../../img/profile.png';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

class AddUsers extends Component{
    state={
        nomUser:'',
        prenomUser:'',
        mailUser:'',
        passwordUser:''
    }
    goToUserPage=()=>{this.props.history.push('/users');}
    handleNomUserChange=(event)=>{
        this.setState({nomUser:event.target.value});
    }
    handlePrenomUserChange=(event)=>{
        this.setState({prenomUser:event.target.value});
    }
    handleMailUserChange=(event)=>{
        this.setState({mailUser:event.target.value});
    }
    handlePasswordUserChange=(event)=>{
        this.setState({passwordUser:event.target.value});
    }
    handleSubmit=(event)=>{
        let data={
            nomUser:this.state.nomUser,
            prenomUser:this.state.prenomUser,
            mailUser:this.state.mailUser,
            passwordUser:this.state.passwordUser
        }
        //console.log({data});
        axios.post(`/utilisateurAdd`, {data}, {'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin' : '*'})
        .then(res=>{
            var result = res.statusText;
            //console.log(result);
            (result==="Accepted")?toast.info("Ajout reussi avec succés!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000}):toast.warn("Ajout d'un utilisateur echoué!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000});
        })
        .catch(error=>{
            toast.error("Uoops, on a trouvé une erreur pendant votre ajout!!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000})
        })
        this.goToUserPage();
        event.preventDefault();
    }
    render(){
        const {nomUser, prenomUser, mailUser, passwordUser}=this.state;
        return(
            <div className="row col-md-10 offset-1 mr-5 mt-5 rounded img-thumbnail" style={{backgroundColor:"silver"}}>
            <div className="col-lg-1 mt-4 offset-1">
                <img src={profileImg} alt="module logo" className="rounded-circle border border-primary"/>
            </div>
            <div className="col-lg-6 offset-2 mt-4 pl-5">
                <h1 style={{color:"orange", textAlign:"center"}}>Nouveau Utilisateur</h1>
                <form className="form form-vertical" onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="nomUser" className="col-md-2 col-form-label">Nom</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="nomUser" value={nomUser} onChange={this.handleNomUserChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="prenomUser" className="col-md-2 col-form-label">Prenom</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="prenomUser" value={prenomUser} onChange={this.handlePrenomUserChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="mailUser" className="col-md-2 col-form-label">Mail</label>
                        <div className="col-md-10">
                            <input type="mail" className="form-control" id="mailUser" value={mailUser} onChange={this.handleMailUserChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="passwordUser" className="col-md-3 col-form-label">Password</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" id="passwordUser" value={passwordUser} onChange={this.handlePasswordUserChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-10">
                            <button type="submit" className="btn btn-primary">Ajouter</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}

export default AddUsers;