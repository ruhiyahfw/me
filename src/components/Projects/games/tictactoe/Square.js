import React from "react";
import './tictactoe.css'

function Square(props){
    return(
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default Square