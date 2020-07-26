import { PLAYER_ONE_POINT, PLAYER_TWO_POINT, RESET_GAME } from './types';

export const playerOnePoint = () => {
  return {
    type: PLAYER_ONE_POINT
  }
}

export const playerTwoPoint = () => {
  return {
    type: PLAYER_TWO_POINT
  }
}

export const resetGame = () => {
  return {
    type: RESET_GAME
  }
}