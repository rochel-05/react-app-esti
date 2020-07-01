import React from 'react';
import jsPDF from 'jspdf';
import {FaFilePdf} from 'react-icons/fa';

class PdfSyllabussGenerator extends React.PureComponent{
    constructor(props){
        super(props)
        this.state={

        }
    }
    jsPdfGenerator=()=>{
        const doc = new jsPDF('p', 'pt', 'a4', true);
        const logoEsti="data:image/png;base64,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";
        doc.addImage(logoEsti, 'JPEG', 0, 0, 40, 40);
        doc.setFont('courier');
        doc.setFontType('bold');//bold normal
        doc.text(160, 30, "liste des syllabus");
        doc.autoTable({ html:'#syllabusTable' });
        doc.save("liste_des_syllabus.pdf");
    }
    render(){
        return(
            <button className="btn btn-sm btn-info ml-2" onClick={this.jsPdfGenerator}><FaFilePdf/>Generate Pdf</button>
        )
    }
}

export default PdfSyllabussGenerator;