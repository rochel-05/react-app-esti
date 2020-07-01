import React, {Component} from 'react';
import profileImg from '../../img/profile.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class Authentication extends Component{
    constructor(props){
        super(props)
        this.state={ 
            mailUser:"",
            passwordUser:"",
            isLoggedInWithSuccess:false,
        }
        this.goToHomePage=()=>{props.history.push('/accueils');}
        this.goToAuthentificationPage=()=>{ props.history.push('/authentification');}
    }
    handleMailUserChange=(event)=>{
        this.setState({mailUser:event.target.value});
    }
    handlePasswordUserChange=(event)=>{
        this.setState({passwordUser:event.target.value});
    }
    handleSubmit=(event)=>{
        if(this.state.passwordUser===""){
            this.goToAuthentificationPage();
            toast.warn("le champ password est obligatoire!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000})  
        }else{
        let data={};
        axios.get(`/utilisateurDisplayByMail?mailUser=` + this.state.mailUser)
        .then(res=> {
            data=res.data.ueEsti.users[0];
            if(_.isEqual(data.passwordUser, this.state.passwordUser)){
                this.goToHomePage();
                toast.info("Authentification reussi avec succés!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000})
            }else{
                this.goToAuthentificationPage();
                toast.warn("Authentification echoué!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000})  
            }
        });event.preventDefault();}
    }
    render(){
        const {mailUser, passwordUser}=this.state;
        return(
            <div className="row" isLoggedIn={false}>
            <div className="col-lg-1 mt-5 offset-2">
                <img src={profileImg} alt="avatar logo"/>
            </div>
            <div className="col-lg-4 offset-1 mt-5">
                <h1 style={{color:"orange"}} className="font-weight-bold">Authentification</h1>
                <form className="form form-vertical" onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="mailUser" className="col-md-2 col-form-label">Email</label>
                        <div className="col-md-10">
                            <input type="mail" className="form-control" id="mailUser" placeholder="rakoto@gmail.com" value={mailUser} onChange={this.handleMailUserChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="passwordUser" className="col-md-2 col-form-label">Password</label>
                        <div className="col-md-10">
                            <input type="password" className="form-control" id="passwordUser" placeholder="your password" value={passwordUser} onChange={this.handlePasswordUserChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-10">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="rememberMe"/>
                                <label className="form-check-label" htmlFor="rememberMe">Remember Password</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-12 ml-2">
                            <button type="submit" className="btn btn-block btn-sm btn-primary">Sign in</button>
                        </div>
                    </div>
                    {/*<FacebookLoginButton className="btn btn-sm"/>*/}
                    <div className="form-group row">
                        <div className="col-md-12 ml-2 text-center">
                           <Link to="/signup">Sign Up</Link>
                           <span className="p-2">|</span>
                           <Link to="/forgotPassword">Forgot Password</Link>
                        </div>
                    </div>
                </form>
                {/*
                <Dialog isLoggedInWithSuccess={this.state.isLoggedInWithSuccess}>
                    Authentification with errors
                </Dialog>
                */}
            </div>
        </div>
        )
    }
}
export default Authentication;