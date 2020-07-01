import React, {Component} from 'react';
import avenantImg from '../../img/avenant3.jpg';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaGem, FaStar, FaSquare} from 'react-icons/fa';
import { Link } from 'react-router-dom';

class DeleteAvenants extends Component{
    state={
        idAvenant:'',
        cin:'',
        codeModule:'',
        dateAvenant:'',
        anneeUniv:'',
        responsable:''
    }
    goToAvenant=()=>{this.props.history.push('/avenants');}
    handleIdAvenant(event){
        this.setState({idAvenant:event.target.value});
    }
    handleCinAvenant(event){
        this.setState({cin:event.target.value});
    }
    handleCodeModule(event){
        this.setState({codeModule:event.target.value});
    }
    handleDateAvenant(event){
        this.setState({dateAvenant:event.target.value});
    }
    handleAnneeUniv(event){
        this.setState({anneeUniv:event.target.value});
    }
    handleResponsable(event){
        this.setState({responsable:event.target.value});
    }
    componentDidMount(){
        const idAvenant=this.props.match.params.id;
        let data=[];
        let datax=[];
        var index=0;
        axios.get(`/avenantDisplay`)
        .then(res=>{
            data=res.data.ueEsti.avenants;
            //console.log(data);
            while(data[index]){
                if(data[index].idAvenant===idAvenant){
                    datax={
                        idAvenant:idAvenant,
                        cin:data[index].cin,
                        codeModule:data[index].codeModule,
                        dateAvenant:data[index].dateAvenant,
                        anneeUniv:data[index].anneeUniv,
                        responsable:data[index].responsable
                    }
                }
                index++;
            }
            this.setState({
                idAvenant:datax.idAvenant,
                cin:datax.cin,
                codeModule:datax.codeModule,
                dateAvenant:datax.dateAvenant,
                anneeUniv:datax.anneeUniv,
                responsable:datax.responsable
            });
        })
    }
    handleSubmit=(event)=>{
        const id=parseInt(this.props.match.params.id);
        //console.log("id : " + id);
        if(id===0){toast.warn("le champ id est obligatoire", {autoClose:8000});}
        else{
        axios({
            method: 'post',
            url: `/avenantDelete?idAvenant=${id}`,
            data: null,
            headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin' : '*'}
            })
        .then(res=>{
                var result = res.statusText;
                //console.log(result);
                (result==="Accepted")?toast.info("Suppression reussi avec succés!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000}):toast.warn("Suppression d'un avenant echoué!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000});
        })
        .catch(error=>{
                toast.error("Uoops, on a trouvé une erreur pendant votre suppression!!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000})
        })
        this.goToAvenant();
        event.preventDefault();}
    }
    render(){
        return(
            <div className="row col-md-12">
            <div className="col-md-2 my-5">
                <ul>
                <li className="list-unstyled">
                        <Link to="/avenants"><FaGem/> Liste</Link>
                    </li>
                    <li className="list-unstyled">
                        <Link to="/addAvenants"><FaStar/> Nouveau</Link>
                    </li>
                    <li className="list-unstyled">
                        <Link to="/estiLinkedIn"><FaSquare/> Import/Export</Link>
                    </li>
                </ul>
            </div>
            <div className="col-md-10 mt-4">
            <div className="row col-md-10 ml-5 mt-5 rounded img-thumbnail" style={{backgroundColor:"silver"}}>
            <div className="col-md-3">
                <img src={avenantImg} alt="module logo" className="rounded-circle border border-primary"/>
            </div>
            <div className="col-md-9">
                <h1 style={{color:"orange", textAlign:"center"}}>Supprimer un Avenant</h1>
                <form className="form form-vertical" onSubmit={this.handleSubmit}>
                <div className="form-group row">
                        <label htmlFor="idAvenant" className="col-md-2 col-form-label">Id</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="idAvenant" value={this.state.idAvenant}/> {/*onChange={this.handleIdAvenant}*/}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="cin" className="col-md-2 col-form-label">Cin</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="cin" value={this.state.cin}/> {/* onChange={this.handleCinAvenant} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="codeModule" className="col-md-3 col-form-label">Code Module</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" id="codeModule" value={this.state.codeModule}/> {/* onChange={this.handleCodeModule} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="dateAvenant" className="col-md-2 col-form-label">Date</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="dateAvenant" value={this.state.dateAvenant}/> {/* onChange={this.handleDateAvenant} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="anneeAvenant" className="col-md-4 col-form-label">Annee Universitaire</label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" id="anneeAvenant" value={this.state.anneeUniv}/> {/* onChange={this.handleAnneeUniv} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="responsable" className="col-md-2 col-form-label">Responsable</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="responsable" value={this.state.responsable}/> {/* onChange={this.handleResponsable} */}
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

export default DeleteAvenants;