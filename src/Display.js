import React from 'react';
import './Display.css';
 
function Display(props) {
    return(
        <span className={`value ${(props.displayValue <= 10) ? 'blue' : 'red'}`}>
            {props.displayValue}
        </span>
    );
}
 
export default Display;