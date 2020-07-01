import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Enseignants from './components/enseignants/Enseignants';
import AddEnseignants from './components/enseignants/AddEnseignants';
import EditEnseignants from './components/enseignants/EditEnseignants';
import DeleteEnseignants from './components/enseignants/DeleteEnseignants';
import Modules from './components/modules/Modules';
import AddModules from './components/modules/AddModules';
import EditModules from './components/modules/EditModules';
import DeleteModules from './components/modules/DeleteModules';
import Syllabuss from './components/syllabuss/Syllabuss';
import AddSyllabuss from './components/syllabuss/AddSyllabuss';
import EditSyllabuss from './components/syllabuss/EditSyllabuss';
import DeleteSyllabuss from './components/syllabuss/DeleteSyllabuss';
import Ues from './components/ues/Ues';
import AddUes from './components/ues/AddUes';
import EditUes from './components/ues/EditUes';
import DeleteUes from './components/ues/DeleteUes';
import Contrats from './components/contrats/Contrats';
import AddContrats from './components/contrats/AddContrats';
import EditContrats from './components/contrats/EditContrats';
import DeleteContrats from './components/contrats/DeleteContrats';
import Avenants from './components/avenants/Avenants';
import AddAvenants from './components/avenants/AddAvenants';
import EditAvenants from './components/avenants/EditAvenants';
import DeleteAvenants from './components/avenants/DeleteAvenants';
import Users from './components/Users/Users';
import AddUsers from './components/Users/AddUsers';
import EditUsers from './components/Users/EditUsers';
import DeleteUsers from './components/Users/DeleteUsers';
import Menu from './components/Menu';
import MenuOth from './components/MenuOth';
import ErrorPage from './components/ErrorPage';
import Accueils from './components/Accueils';
import Authentication from './components/Authentifications/Authentication';
import SignUp from './components/Authentifications/Signup';
import './App.css';
import FooterPage from './components/FooterPage';
import SyllabusPdfReader from './components/pdfReader/syllabusPdfReader';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loggedIn:this.props.isLoggedIn
    }
  }
  render(){
    //console.log(this.state.loggedIn);
    //if(this.state.loggedIn){
      return (
        <BrowserRouter>
          <Menu/>
          <Switch>
            <Route path="/accueils" component={Accueils} isLoggedIn={true}/>
            <Route path="/authentification" component={Authentication} isLoggedIn={false}/>
            <Route path="/signup" component={SignUp} isLoggedIn={false}/>
            <Route path="/syllabusPdfReader" component={SyllabusPdfReader} isLoggedIn={true}/>
            <Route path="/enseignants" component={Enseignants} isLoggedIn={true}/>
            <Route path="/addEnseignants" component={AddEnseignants} isLoggedIn={true}/>
            <Route path="/editEnseignants/:id" component={EditEnseignants} isLoggedIn={true}/>
            <Route path="/deleteEnseignants/:id" component={DeleteEnseignants} isLoggedIn={true}/>
            <Route path="/modules" component={Modules}/>
            <Route path="/addModules" component={AddModules}/>
            <Route path="/editModules/:id" component={EditModules}/>
            <Route path="/deleteModules/:id" component={DeleteModules}/>
            <Route path="/syllabuss" component={Syllabuss}/>
            <Route path="/addSyllabuss" component={AddSyllabuss}/>
            <Route path="/editSyllabuss/:id" component={EditSyllabuss}/>
            <Route path="/deleteSyllabuss/:id" component={DeleteSyllabuss}/>
            <Route path="/ues" component={Ues}/>
            <Route path="/addUes" component={AddUes}/>
            <Route path="/editUes/:id" component={EditUes}/>
            <Route path="/deleteUes/:id" component={DeleteUes}/>
            <Route path="/contrats" component={Contrats}/>
            <Route path="/addContrats" component={AddContrats}/>
            <Route path="/editContrats/:id" component={EditContrats}/>
            <Route path="/deleteContrats/:id" component={DeleteContrats}/>
            <Route path="/avenants" component={Avenants}/>
            <Route path="/addAvenants" component={AddAvenants}/>
            <Route path="/editAvenants/:id" component={EditAvenants}/>
            <Route path="/deleteAvenants/:id" component={DeleteAvenants}/>
            <Route path="/users" component={Users}/>
            <Route path="/addUsers" component={AddUsers}/>
            <Route path="/editUsers/:id" component={EditUsers}/>
            <Route path="/deleteUsers/:id" component={DeleteUsers}/>
            <Route component={ErrorPage}/>
          </Switch>
          <FooterPage/>
        </BrowserRouter>
      );}
/*
    return(
          <BrowserRouter>
          <MenuOth/>
          <Switch>
            <Route path="/accueils" component={Accueils} isLoggedIn={false}/>
            <Route path="/authentification" component={Authentication} isLoggedIn={false}/>
            <Route path="/signup" component={SignUp} isLoggedIn={false}/>
            <Route path="/syllabusPdfReader" component={SyllabusPdfReader} isLoggedIn={false}/>
            <Route path="/enseignants" component={Enseignants} isLoggedIn={false}/>
            <Route path="/addEnseignants" component={AddEnseignants} isLoggedIn={false}/>
            <Route path="/editEnseignants/:id" component={EditEnseignants} isLoggedIn={false}/>
            <Route path="/deleteEnseignants/:id" component={DeleteEnseignants} isLoggedIn={false}/>
            <Route path="/modules" component={Modules}/>
            <Route path="/addModules" component={AddModules}/>
            <Route path="/editModules/:id" component={EditModules}/>
            <Route path="/deleteModules/:id" component={DeleteModules}/>
            <Route path="/syllabuss" component={Syllabuss}/>
            <Route path="/addSyllabuss" component={AddSyllabuss}/>
            <Route path="/editSyllabuss/:id" component={EditSyllabuss}/>
            <Route path="/deleteSyllabuss/:id" component={DeleteSyllabuss}/>
            <Route path="/ues" component={Ues}/>
            <Route path="/addUes" component={AddUes}/>
            <Route path="/editUes/:id" component={EditUes}/>
            <Route path="/deleteUes/:id" component={DeleteUes}/>
            <Route path="/contrats" component={Contrats}/>
            <Route path="/addContrats" component={AddContrats}/>
            <Route path="/editContrats/:id" component={EditContrats}/>
            <Route path="/deleteContrats/:id" component={DeleteContrats}/>
            <Route path="/avenants" component={Avenants}/>
            <Route path="/addAvenants" component={AddAvenants}/>
            <Route path="/editAvenants/:id" component={EditAvenants}/>
            <Route path="/deleteAvenants/:id" component={DeleteAvenants}/>
            <Route path="/users" component={Users}/>
            <Route path="/addUsers" component={AddUsers}/>
            <Route path="/editUsers/:id" component={EditUsers}/>
            <Route path="/deleteUsers/:id" component={DeleteUsers}/>
            <Route component={ErrorPage}/>
          </Switch>
          <FooterPage/>
        </BrowserRouter>);} */
}

export default App;
