import React from 'react';
import './UserOutput.css'

const ValidationComponent = (props) => {
    return(
    <div className = "UserOutput">
        <h1>{props.input}</h1>        
    </div>
        
    )
};


export default ValidationComponent;