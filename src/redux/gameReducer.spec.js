import {default as sut, initialState} from './gameReducer';
import {START, SCORE_PLAYER1,SCORE_PLAYER2} from './gameActions';

describe('game reducer', ()=>{
    describe('start', ()=>{
        it('start game', ()=>{
           const state = sut(initialState, {type:START, payLoad:{player1:'KP', player2:'MK'}});
            
           expect(state).toEqual({...initialState, isGameStarted:true,player1:{name:'KP', score:0}, player2:{name:'MK', score:0}})
        }); 
    });

    describe('score', ()=>{
        it('increments score for player1', ()=>{
            const currentState = {...initialState,player1:{name:'KP',score:0}, player2:{name:'MK',score:0}};
            const state = sut(currentState, {type:SCORE_PLAYER1});
            expect(state.player1.score).toBe(15);
        });

        it('increments  score to 30 for player1', ()=>{
            const currentState = {...initialState,player1:{name:'KP', score:15}, player2:{name:'MK'}};
            const state = sut(currentState, {type:SCORE_PLAYER1});
            expect(state.player1.score).toBe(30);
        });

        it('increments  score to 40 for player1', ()=>{
            const currentState = {...initialState,player1:{name:'KP', score:30}, player2:{name:'MK'}};
            const state = sut(currentState, {type:SCORE_PLAYER1});
            expect(state.player1.score).toBe(40);
        });

        it('increments score for player2', ()=>{
            const currentState = {...initialState,player1:{name:'KP', score:0}, player2:{name:'MK', score:0}};
            const state = sut(currentState, {type:SCORE_PLAYER2});
            expect(state.player2.score).toBe(15);
        });

        it('player1 is winner', ()=>{
            const currentState = {...initialState,player1:{name:'KP', score:40}, player2:{name:'MK', score:15}};
            const state = sut(currentState, {type:SCORE_PLAYER1})
            expect(state.player1.isWinner).toBe(true);
        });

        it('player2 is winner', ()=>{
            const currentState = {...initialState,player1:{name:'KP', score:30}, player2:{name:'MK', score:40}};
            const state = sut(currentState, {type:SCORE_PLAYER2})
            expect(state.player2.isWinner).toBe(true);
        })

        it('deuce',()=>{
            const currentState = {...initialState,player1:{name:'KP', score:30}, player2:{name:'MK', score:40}};
            const state = sut(currentState, {type:SCORE_PLAYER1})
            expect(state.isDeuce).toBe(true);
        });

        it('player1 is advantage', ()=>{
            const currentState = {...initialState,player1:{name:'KP', score:40}, player2:{name:'MK', score:40}, isDeuce:true};
            const state = sut(currentState, {type:SCORE_PLAYER1})
            expect(state.player1.isAdv).toBe(true);
        });
        it('player2 is advantage', ()=>{
            const currentState = {...initialState,player1:{name:'KP', score:40}, player2:{name:'MK', score:40}, isDeuce:true};
            const state = sut(currentState, {type:SCORE_PLAYER2})
            expect(state.player2.isAdv).toBe(true);
        });

        it('player2 is advantage and scores, playe2 is winner', ()=>{
            const currentState = {...initialState,player1:{name:'KP', score:40}, player2:{name:'MK', score:40, isAdv:true}};
            const state = sut(currentState, {type:SCORE_PLAYER2})
            expect(state.player2.isWinner).toBe(true);
        });

        it('player2 is advantage and player1 scores, game goes back to deuce', ()=>{
            const currentState = {...initialState,player1:{name:'KP', score:40}, player2:{name:'MK', score:40, isAdv:true}};
            const state = sut(currentState, {type:SCORE_PLAYER1})
            expect(state.isDeuce).toBe(true);
        });
    });
})