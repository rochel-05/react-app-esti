import React, {Component} from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

class ModuleExportToExcel extends Component{
 render(){
     return (
         <div style={{marginRight: '25px'}}>
             <ReactHTMLTableToExcel
                id="test-table-xls-button"
                className="export"
                table="table-to-xls"
                filename="filtredData"
                sheet="tablexls"
                buttonText="Export"/>
            <table hidden="true" id="table-to-xls">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Code Module</th>
                        <th>Code Ue</th>
                        <th>Libellé</th>
                        <th>Credit</th>
                        <th>Volume Horaire</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.modules.map(module=>{
                            return (
                                <tr key={module.idModule}>
                                    <td>{module.idModule}</td>
                                    <td>{module.codeModule}</td>
                                    <td>{module.codeUe}</td>
                                    <td>{module.libelle}</td>
                                    <td>{module.credit}</td>
                                    <td>{module.volumeHoraire}</td>
                                </tr>
                            )
                            })
                    }
                </tbody>
            </table>
         </div>
     )
 }
}

export default ModuleExportToExcel;