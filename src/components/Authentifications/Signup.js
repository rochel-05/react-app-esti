import React, {Component} from 'react';
import profileImg from '../../img/profile.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class SignUp extends Component{
    constructor(props){
        super(props)
        this.state={ 
            nomUser:"",
            prenomUser:"",
            mailUser:"",
            passwordUser:""
        }
        this.goToSignUpPage=()=>{props.history.push('/signup');}
        this.goToAuthentificationPage=()=>{ props.history.push('/authentification');}
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
    handleSubmit=(event)=>{
        let data={
            nomUser:this.state.nomUser,
            prenomUser:this.state.prenomUser,
            mailUser:this.state.mailUser,
            passwordUser:this.state.passwordUser,
        }
        //console.log({data});
        axios.post(`/utilisateurAdd`, {data}, {'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin' : '*'})
        .then(res=>{
            var result = res.statusText;
            (result==="Accepted")?toast.info("signup reussi avec succés!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000}):toast.warn("signup echoué!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000});
        })
        .catch(error=>{
            toast.error("Uoops, on a trouvé une erreur pendant cette operation!!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000})
        })
        this.goToAuthentificationPage();
        event.preventDefault();
}
    render(){
        const {nomUser, prenomUser, mailUser, passwordUser}=this.state;
        return(
            <div className="row">
            <div className="col-lg-1 mt-5 offset-2">
                <img src={profileImg} alt="avatar logo"/>
            </div>
            <div className="col-lg-4 offset-1 mt-5">
                <h1 style={{color:"orange"}} className="font-weight-bold offset-3">Sign Up</h1>
                <form className="form form-vertical" onSubmit={this.handleSubmit}>
                <div className="form-group row">
                        <label htmlFor="nomUser" className="col-md-2 col-form-label">Nom</label>
                        <div className="col-md-10">
                            <input type="mail" className="form-control" id="nomUser" value={nomUser} onChange={this.handleNomUserChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="prenomUser" className="col-md-2 col-form-label">Prenom</label>
                        <div className="col-md-10">
                            <input type="mail" className="form-control" id="prenomUser" value={prenomUser} onChange={this.handlePrenomUserChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="mailUser" className="col-md-2 col-form-label">Email</label>
                        <div className="col-md-10">
                            <input type="mail" className="form-control" id="mailUser" placeholder="rakoto@esti.mg" value={mailUser} onChange={this.handleMailUserChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="passwordUser" className="col-md-2 col-form-label">Password</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="passwordUser" placeholder="your password" value={passwordUser} onChange={this.handlePasswordUserChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-12 ml-2">
                            <button type="submit" className="btn btn-block btn-sm btn-primary">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}
export default SignUp;