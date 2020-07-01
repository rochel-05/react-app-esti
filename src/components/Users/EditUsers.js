import React, {Component} from 'react';
import profileImg from '../../img/profile.png';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

class EditUsers extends Component{
    constructor(props){
        super(props);
        this.state={
            idUser:0,
            nomUser:'',
            prenomUser:'',
            mailUser:'',
            passwordUser:''
        }
    }
    goToUserPage=()=>{this.props.history.push('/users');}
    handleIdUserChange=(event)=>{
        this.setState({idUser:event.target.value});
    }    
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
    componentDidMount(){
        const id=parseInt(this.props.match.params.id);
        let currentComponent=this;
        let data={};
        axios.get(`/utilisateurDisplayById?idUser=` + id)
        .then(res=> {
            data=res.data.ueEsti.utilisateurs[0];
            //console.log(data);
            currentComponent.setState({
                idUser:id,
                nomUser:data.nomUser,
                prenomUser:data.prenomUser,
                mailUser:data.mailUser,
                passwordUser:data.passwordUser
            })
        });
    }
    handleSubmit=(event)=>{
        const id=parseInt(this.props.match.params.id);
        let currentComponent=this;
        const datos = {
            nomUser:currentComponent.state.nomUser,
            prenomUser:currentComponent.state.prenomUser,
            mailUser:currentComponent.state.mailUser,
            passwordUser:currentComponent.state.passwordUser,
            idUser:currentComponent.state.idUser
        }
        axios.post(`/utilisateurEdit`, {datos},
            {'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin' : '*'})
        .then(res=>{
                var result = res.statusText;
                //console.log(result);
                (result==="OK")?toast.info("Mise à jour reussie avec succés!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000}):toast.warn("Mise à jour echouée!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000});
        })
        .catch(error=>{
                toast.error("Uoops, on a trouvé une erreur pendant votre modification!!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000})
        })
        this.goToUserPage();
        event.preventDefault();
    } 
    render(){
        const {idUser, nomUser, prenomUser, mailUser, passwordUser}=this.state;
        return(
            <div className="row col-md-10 offset-1 mr-5 mt-5 rounded img-thumbnail" style={{backgroundColor:"silver"}}>
            <div className="col-lg-1 mt-4 offset-1">
                <img src={profileImg} alt="module logo" className="rounded-circle border border-primary"/>
            </div>
            <div className="col-lg-7 offset-2 mt-4 pl-5">
                <h1 style={{color:"orange", textAlign:"center"}}>Mise à jour d'un Utilisateur</h1>
                <form className="form form-vertical" onSubmit={this.handleSubmit}>
                <div className="form-group row">
                        <label htmlFor="idUser" className="col-md-2 col-form-label">Id</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="idUser" value={idUser}  onChange={this.handleIdUserChange}/> {/* onChange={this.handleIdContratChange} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="nomUser" className="col-md-2 col-form-label">Nom</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="nomUser" value={nomUser} onChange={this.handleNomUserChange}/> {/*  onChange={this.handleCinChange} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="prenomUser" className="col-md-2 col-form-label">Prenom</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="prenomUser" value={prenomUser} onChange={this.handlePrenomUserChange}/> {/* onChange={this.handleDateContratChange} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="mailUser" className="col-md-2 col-form-label">Mail</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="mailUser" value={mailUser} onChange={this.handleMailUserChange}/> {/* onChange={this.handleResponsableChange} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="passwordUser" className="col-md-2 col-form-label">Password</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="passwordUser" value={passwordUser} onChange={this.handlePasswordUserChange}/> {/* onChange={this.handleObservationChange} */}
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
        )
    }
}

export default EditUsers;