import React from 'react';

const Avenant = (props)=>{
    const codeModuleInfo=props.codeModule?(<p>code Module: {props.codeModule}</p>):(<p>code Module : Néant</p>);
    if(props.children){
    return (
        <div className='Avenant' style={{backgroundColor : 'pink', width:'400px',padding:'10px', margin:'5px auto'}}>
            <p>Cin : {props.children}</p>
            {codeModuleInfo}
        </div>
    )}else{
        return (
            <div className='Avenant' style={{backgroundColor : 'pink', width:'400px',padding:'10px', margin:'5px auto'}}>
                <p>Pas de data</p>
            </div> )  
    }
}

export default Avenant;