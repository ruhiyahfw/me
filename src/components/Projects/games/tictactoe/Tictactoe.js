import React from "react";
import './tictactoe.css'
import Board from "./Board";

function Tictactoe(){
    return(
        <div id="tic-tac-toe">
            <div className="subtitle">
                <h1 className="highlight-text">Tic-Tac-Toe</h1>
                <p>Feel tired? Stress? Let's just play :D</p>
            </div>
            <Board/>
        </div>
    )
}

export default Tictactoe