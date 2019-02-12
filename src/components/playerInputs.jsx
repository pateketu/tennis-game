import React from 'react';
import PropTypes from 'prop-types';

export default class PlayerInputs extends React.Component{	
    constructor(props) {
        super(props);
        this.state = {player1: '', player2:''};
    
      
      }
    handleP1= (event) => {
        this.setState({player1: event.target.value});
      }


    handleP2= (event) => {
        this.setState({player2: event.target.value});
      }
    render(){		
        return <div>
                    Player 1: <input type="text" value={this.state.player1} onChange={this.handleP1}></input>
                    Player 2: <input type="text"value={this.state.player2} onChange={this.handleP2}></input>
                    <div>
                           <button onClick={()=>this.props.start(this.state.player1, this.state.player2)}>Start</button>
                    </div>
                </div>

       
	}
}

PlayerInputs.propTypes = {
	start:PropTypes.func.isRequired
};