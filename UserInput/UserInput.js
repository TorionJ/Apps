import React from "react";
import "./UserInput.css"

const CharComponent = (props) => {
    return(
    <div id="char" onClick={props.clicked}>
        {props.character}
    </div>    
    )
};


export default CharComponent;