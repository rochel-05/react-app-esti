import React, {Component} from 'react';
import ueImg from '../../img/ue3.jpg';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaGem, FaStar, FaSquare} from 'react-icons/fa';
import { Link } from 'react-router-dom';

toast.configure()

class EditUes extends Component{
    constructor(props){
        super(props);
        this.state={
            codeue:'',
            libelleue:'',
            semestre:''
        };
    }
    goToUePage=()=>{this.props.history.push('/ues');}
    handleCodeUeChange(event){
        this.setState({codeue:event.target.value});
    }
    handleLibelleChange(event){
        this.setState({libelleue:event.target.value});
    }
    handleSemestreChange(event){
        this.setState({semestre:event.target.value});
    }
    componentDidMount(){
        let currentComponent=this;
        let data={};
        const id=this.props.match.params.id;
        axios.get(`/ueDisplayById?codeue=` + id)
        .then(res=> {
            data=res.data.ueEsti.ues[0];
            //console.log(data);
            currentComponent.setState({
                codeue:id,
                libelleue:data.libelleue,
                semestre:data.semestre
            })
        });
    }
    handleSubmit=(event)=>{
        const id=this.props.match.params.id;
        let currentComponent=this;
        const datos = {
            libelleue:currentComponent.state.libelleue,
            semestre:currentComponent.state.semestre,
            codeue:currentComponent.state.codeue
        }
        if(datos.codeue===""){toast.warn("le champ codeue est obligatoire", {autoClose:8000});}
        else{       
        axios.post(`/ueEdit`, {datos},
            {'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin' : '*'})
            .then(res=>{
                var result = res.statusText;
                //console.log(result);
                (result==="OK")?toast.info("Mise à jour reussie avec succés!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000}):toast.warn("Mise à jour d'un UE echouée!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000});
            })
            .catch(error=>{
                toast.error("Uoops, on a trouvé une erreur pendant votre modification!!!", {position:toast.POSITION.TOP_RIGHT, autoClose:5000})
            })
        this.goToUePage();
        event.preventDefault();}
    } 
    render(){
        const {codeue, libelleue, semestre} = this.state;
        return(
            <div className="row col-md-12">
            <div className="col-md-2 my-5">
                <ul>
                    <li className="list-unstyled">
                        <Link to="/ues"><FaGem/> Liste</Link>
                    </li>
                    <li className="list-unstyled">
                        <Link to="/addUes"><FaStar/> Nouveau</Link>
                    </li>
                    <li className="list-unstyled">
                        <Link to="/estiLinkedIn"><FaSquare/> Import/Export</Link>
                    </li>
                </ul>
            </div>
            <div className="col-md-10 mt-4">
            <div className="row col-md-9 ml-5 mt-5 rounded img-thumbnail" style={{backgroundColor:"silver"}}>
            <div className="col-md-3">
                <img src={ueImg} alt="module logo" className="rounded-circle border border-primary"/>
            </div>
            <div className="col-md-7">
                <h1 style={{color:"orange", textAlign:"center"}}>Mise à jour d'un Ue</h1>
                <form className="form form-vertical" onSubmit={this.handleSubmit}>
                <div className="form-group row">
                        <label htmlFor="codeue" className="col-md-2 col-form-label">Code Ue</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="codeue" value={codeue} onChange={()=>this.handleCodeUeChange}/> {/*onChange={this.handleCodeUeChange} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="libelleue" className="col-md-2 col-form-label">libellé</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="libelleue" value={libelleue} onChange={()=>this.handleLibelleChange}/> {/*onChange={this.handleLibelleChange} */}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="semestre" className="col-md-2 col-form-label">Semestre</label>
                        <div className="col-md-10">
                            <input type="text" className="form-control" id="semestre" value={semestre} onChange={()=>this.handleSemestreChange}/> {/* onChange={this.handleSemestreChange} */}
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

export default EditUes