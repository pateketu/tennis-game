import React from 'react';
export default function ScoreDisplay(props){
    return <div>
        <div>
            <div>{props.player1.name}</div>
            <div>{props.player1.score}</div>
            <div><button onClick={()=>props.score_player1()}>Add Score</button></div>
        </div>
        <div>
            <div>{props.player2.name}</div>
            <div>{props.player2.score}</div>
            <div><button onClick={()=>props.score_player2()}>Add Score</button></div>
        </div>
    </div>

}