import React, {Component} from 'react';
import { Document, Page, pdfjs } from "react-pdf"; //dist/entry.webpack
import {} from 'react-pdf/dist/Page/AnnotationLayer';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class SyllabusPdfReader extends Component{
    state = {
         numPages: null,
          pageNumber: 1 
    };
    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };
    goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));
    render(){
        const { pageNumber, numPages } = this.state;
        return(
            <div  style={{ width: 600 }}>
                <h1 className='col-ml-10 offset-4'>Display Syllabus</h1>
                <nav>
                    <button className='btn btn-sm btn-primary' onClick={this.goToPrevPage}>Prev</button>
                    <button className='btn btn-sm btn-info' onClick={this.goToNextPage}>Next</button>
                </nav>
                <div style={{ width: 600 }}>
                <Document file='' onLoadSuccess={this.onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} width={600} />
                    </Document>
                </div>
                <p>Page {pageNumber} of {numPages}</p>
            </div>
        );
    }
}

export default SyllabusPdfReader