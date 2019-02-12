import {START, SCORE_PLAYER1,SCORE_PLAYER2} from './gameActions';

export const initialState = {
	player1:{
        name:'',
        score:0,        
        isAdv:false,
        isWinner:false,
    }, 
    player2:{
        name:'',
        score:0,
        isAdv:false,
        isWinner:false,
    },
    isDeuce:false,
    isGameStarted:false
};

export default function reducer(state=initialState, action={type:'', payLoad:null}){
  

    switch(action.type){
        case START:
            return startGame(state, action.payLoad);
        case SCORE_PLAYER1:
            return score_player1(state);
        case SCORE_PLAYER2:
            return score_player2(state);
        default:
           return state;       
    }
	
}

function startGame(state, payLoad){   
    return {...state, isGameStarted:true, player1:{name:payLoad.player1, score:0}, player2:{name:payLoad.player2, score:0}};
}

function score_player1(state){
  
    const newState =  {...state,
             player1:{score:calcScore(state, 'player1'),
                      isWinner:isWinner(state, 'player1','player2')}};
    newState.isDeuce = isDeuce(newState, 'player1','player2');
    return {...newState, player1: {...newState.player1,  isAdv:isAdvantage(newState)}};
}

function score_player2(state){
    
    const newState = {...state, 
            player2:{score: calcScore(state, 'player2'),                     
            isWinner:isWinner(state, 'player2','player1')}};
    newState.isDeuce = isDeuce(newState,'player2','player1');
    return {...newState, player2: {...newState.player2,  isAdv:isAdvantage(newState)}};
}

function calcScore(state, playerKey){
   
    if(state[playerKey].score === 0){
        return 15;
    }

    if(state[playerKey].score === 15){
        return 30;
    }

    if(state[playerKey].score === 30){
        return 40;
    }

    return state[playerKey].score;
}

function isWinner(state, currentPlayerKey, opponentPlayerKey){
    if(state[currentPlayerKey].score === 40 && state[opponentPlayerKey].score < 40){
        return true;
    }

    if(state[currentPlayerKey].isAdv){
        return true;
    }
    return false;
}

function isDeuce(state, currentPlayerKey, opponentPlayerKey){
    
    if(state[opponentPlayerKey].isAdv){
        return true;
    }
    if (state[currentPlayerKey].score === 40 && state[opponentPlayerKey].score === 40){
        return true;
    }

    return false;
}

function isAdvantage(state){
    if(!state.isDeuce){
        return false;
    }

    return true;
}
