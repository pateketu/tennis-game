export const SCORE_PLAYER1 = 'tennis-game/SCORE_PLAYER1';
export const START = 'tennis-game/START';
export const SCORE_PLAYER2 = 'tennis-game/SCORE_PLAYER2';

export function scorePlayer1(playerId, score){
	return {
        type:SCORE_PLAYER1,
        payLoad:score
	};
}

export function scorePlayer2(playerId, score){
	return {
        type:SCORE_PLAYER2,
        payLoad:score
	};
}

export function start(player1Name, player2Name){
	return {
        type:START,
        payLoad:{
            player1:player1Name,
            player2:player2Name
        }
	};
}