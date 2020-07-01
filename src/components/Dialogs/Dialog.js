import React, {Component} from 'react';

let dialogStyles={
    width:'500px',
    maxWidth:'100%',
    margin:'0 auto',
    position:'fixed',
    left:'50%',
    top:'50%',
    transform:'translate(-50%, -50%)',
    zIndex:'999',
    backgroundColor:'#ccc',
    padding:'10px 20px 40px',
    borderRadius:'8px',
    display:'flex',
    flexDirection:'column'
};

let dialogCloseButtonStyles={
    marginBottom:'15px',
    padding:'3px 8px',
    cursor:'pointer',
    borderRadius:'50%',
    border:'none',
    width:'30px',
    height:'30px',
    fontWeight:'bold',
    alignSelf:'flex-end'
};

class Dialog extends Component{
render(){
    return(
        <div style={dialogStyles}>
            <button className="btn btn-sm btn-warning" style={dialogCloseButtonStyles}>x</button>
            <div>{this.props.children}</div>
        </div>
    )
}
}

export default Dialog;