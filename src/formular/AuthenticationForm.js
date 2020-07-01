import React, {Component} from 'react';
import profileImg from '../img/profile.png';
import { Link } from 'react-router-dom';

class Authentication extends Component{
    constructor(props){
        console.log(props)
        super(props)
        this.state={
            email : ''
        }
    }

    render(){
        return(
        <div className="row">
            <div className="col-lg-1 mt-5 offset-2">
                <img src={profileImg} alt="avatar image"/>
            </div>
            <div className="col-lg-4 offset-1 mt-5">
                <h1 style={{color:"orange"}} className="font-weight-bold">Authentification</h1>
                <form className="form form-vertical">
                    <div className="form-group row">
                        <label htmlFor="email" className="col-md-2 col-form-label">Email</label>
                        <div className="col-md-10">
                            <input type="email" className="form-control" id="email" placeholder="rakoto@gmail.com" value={this.state.email}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-md-2 col-form-label">Password</label>
                        <div className="col-md-10">
                            <input type="password" className="form-control" id="password" placeholder="your password" value={this.state.password}/>
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
                           <Link to="/signUp">Sign Up</Link>
                           <span className="p-2">|</span>
                           <Link to="/forgotPassword">Forgot Password</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}

export default Authentication;