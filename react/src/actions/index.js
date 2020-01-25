import { ADD_NUMBER  } from '../constants/action-types';

export const addNumberAction = (number) => ({
  type: ADD_NUMBER,
  payload: number
})
