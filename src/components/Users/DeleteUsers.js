import React, {Component} from 'react';
import profileImg from '../../img/profile.png';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class DeleteUsers extends Component{
    state={
        id:0,
        data:{}
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
        const id=this.props.match.params.id;
        axios.get(`/utilisateurDisplayById?idUser=` + id)
        .then(res=> {
            //console.log(res.data.ueEsti.utilisateurs[0]);
            this.setState({
                id:id,
                data:res.data.ueEsti.utilisateurs[0]
            })
        });
    }
    handleSubmit=(event)=>{
        const id=parseInt(this.props.match.params.id);
        console.log("id : " + id);
        axios({
            method: 'post',
            url: `/utilisateurDelete?idUser=${id}`,
            data: null,
            headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin' : '*'}
            }).then(res=>{
                var result = res.statusText;
                //console.log(result);
                (result==="Accepted")?toast.info("Suppression reussi avec succés!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000}):toast.warn("Suppression d'un utilisateur echoué!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000});
        })
        .catch(error=>{
                toast.error("Uoops, on a trouvé une erreur pendant votre suppression!!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000})
        })
        this.goToUserPage();
        event.preventDefault();
    }
    render(){
        const {nomUser, prenomUser, mailUser, passwordUser}=this.state.data;
        return(
            <div className="row col-md-10 offset-1 mr-5 mt-5 rounded img-thumbnail" style={{backgroundColor:"silver"}}>
            <div className="col-lg-1 mt-4 offset-1">
                <img src={profileImg} alt="module logo" className="rounded-circle border border-primary"/>
            </div>
            <div className="col-lg-7 offset-2 mt-4 pl-5">
                <h1 style={{color:"orange", textAlign:"center"}}>Suppression d'un Utilisateur</h1>
                <form className="form form-vertical" onSubmit={this.handleSubmit}>
                <div className="form-group row">
                        <label for="idUser" className="col-md-2 col-form-label">Id</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="idUser" value={this.state.id} onChange={this.handleIdUserChange}/> {/* onChange={this.handleIdContratChange} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="nomUser" className="col-md-2 col-form-label">Nom</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="nomUser" value={nomUser} onChange={this.handleNomUserChange}/> {/* onChange={this.handleCinChange} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="prenomUser" class="col-md-2 col-form-label">Prenom</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="prenomUser" value={prenomUser} onChange={this.handlePrenomUserChange}/> {/* onChange={this.handleDateContratChange} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="mailUser" class="col-md-2 col-form-label">Mail</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="mailUser" value={mailUser} onChange={this.handleMailUserChange}/> {/* onChange={this.handleObservationChange} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="passwordUser" class="col-md-2 col-form-label">Password</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="passwordUser" value={passwordUser} onChange={this.handlePasswordUserChange}/> {/* onChange={this.handleResponsableChange} */}
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
        )
    }
}

export default DeleteUsers;