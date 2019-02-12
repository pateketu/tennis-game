import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import PlayerInputs from './playerInputs';
import ScoreDisplay from './scoreDisplay';
import * as actions from '../redux/gameActions';
class Game extends React.Component{	

    showStart(){
        	return <div>
            {!this.props.isGameStarted
                 && <PlayerInputs start={(p1, p2)=> this.props.start(p1,p2)}></PlayerInputs>}
        </div>
    }

    showScore(){
        return <div>
              {this.props.isGameStarted && 
                <ScoreDisplay player1={this.props.player1}
                            player2={this.props.player2}
                            score_player1={()=>this.props.score_player1()}
                            score_player2={()=>this.props.score_player2()}></ScoreDisplay>}
            </div>
    }
	render(){		
        return <div>
                {this.showStart()}
                {this.showScore()}
             </div>
       
	}
}


export default connect((state)=>({    
    player1:state.player1,
    player2:state.player2,
    isDeuce:state.isDeuce,
    isGameStarted:state.isGameStarted
}),
(dispath)=>({
    start:(player1Name, player2Name)=>dispath(actions.start(player1Name, player2Name)),
    score_player1:()=>dispath(actions.scorePlayer1()),
    score_player2:()=>dispath(actions.scorePlayer2())
}))(Game);

Game.propTypes = {
	player1:PropTypes.object.isRequired,
    player2:PropTypes.object.isRequired,
    isDeuce:PropTypes.bool.isRequired
};