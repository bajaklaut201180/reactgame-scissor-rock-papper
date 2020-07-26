import { PLAYER_ONE_POINT, PLAYER_TWO_POINT, RESET_GAME } from '../actions/types';

const INITIAL_STATE = {
  playerOne: 0,
  playerTwo: 0
}

export default ( state = INITIAL_STATE, action ) => {
  switch(action.type){
    case PLAYER_ONE_POINT:
      return { ...state, playerOne: state.playerOne + 1 }
    case PLAYER_TWO_POINT:
      return { ...state, playerTwo: state.playerTwo + 1 }
    case RESET_GAME:
      return { ...state, playerOne: 0, playerTwo: 0}
    default:
      return state
  }
}