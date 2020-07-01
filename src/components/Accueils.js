import React,{Component} from 'react';
import img11 from '../img/esti11.jpg';
import img22 from '../img/esti22.jpg';
import img33 from '../img/esti33.jpg';
import wada1 from '../img/wada1.jpg';
import wada2 from '../img/wada2.png';
import wada3 from '../img/wada3.jpg';
import { Link } from 'react-router-dom';

class Accueils extends Component{
    render(){
        return(
            <div isLoggedIn={true}>
                <div>
                    <div style={{borderBottom:"2px solid black"}}>
                        <h2>e-stiAdmin</h2>
                        <span>Administration Web Site</span>
                    </div>
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={img11} className="d-block w-100 img-polaroid" alt="esti slide1"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>ESTI et L'innovation Téchnologique</h5>
                            <p>ESTI vous propose un avenir meilleur et innové.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src={img22} className="d-block w-100" alt="esti slide2"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src={img33} className="d-block w-100" alt="esti slide3"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    </div>
                </div>
                <div className="row" style={{marginTop:2+"em"}}>
                    <div className="col-lg-3" style={{marginLeft:2+"em"}}>
                        <h2 style={{color:"orange",textAlign:"center"}}>Enseignants</h2>
                        <img src={wada1} alt="logo1"/>
                        <span>
                            Avez vous deja cherché un site pour administrer dans un departement d'etude?<br/>
                            e-stiAdmin vous offre un rubrique pour gerer les informations de vos enseignants : <br/>
                            Consulation des enseignants, ajout des nouveaux enseignants, mise à jour de ces informations<br/>
                            et suppression des informations des enseignants. Pour gerer vos enseignants, rediriger vers : <Link to="/enseignants">Enseignants</Link><br/>
                        </span>
                    </div>
                    <div className="col-lg-3 offset-1">
                        <h2 style={{color:"orange",textAlign:"center"}}>modules</h2>
                        <img src={wada2} alt="logo2"/>
                        <span>
                            e-stiAdmin est un site fait pour la gestion des flux d'informations dans un departement d'etude.<br/>
                            e-stiAdmin inclue dans son module des templates pour la gestion des modules et des unités d'enseignements : <br/>
                            Consulation des modules, ajout des nouveaux modules, suppression d'un module, ajout d'un unité d'enseignement,<br/>
                            et suppression des unités d'enseignement. Pour gerer vos modules, rediriger vers : <Link to="/modules">modules</Link><br/>
                        </span>
                    </div>
                    <div className="col-lg-3 offset-1">
                        <h2 style={{color:"orange",textAlign:"center"}}>Contrats</h2>
                        <img src={wada3} alt="logo3"/>
                        <span>
                            Est-ce que tu cherche un moyen rapide et efficace pour gerer les contrats, et les syllabus de vos enseignants? - e-stiAdmin avait deja tous preparé pour le contrat.
                            Nous avons incluons dans la rubrique <Link to="/contrats">Contrats</Link> tous les taches liés aux contrats: 
                            Creation d'un nouveau contrat, rectification d'un contrat, annulation d'un contrat, et consultation des contrats effectués.
                            Nous avons egalements incluons la rubrique pour deposer <Link to="/syllabuss">les syllabus des enseignants</Link>.
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Accueils;