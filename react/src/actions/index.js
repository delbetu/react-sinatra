import { ADD_NUMBER  } from '../constants/action-types';
import { ADD_REMOTE_USER_IDS } from '../constants/action-types'
import { SHOW_PING_RESULT } from '../constants/action-types'

export const addNumberAction = (number) => ({
  type: ADD_NUMBER,
  payload: number
})

export const addRemoteUserIds = () => ({type: ADD_REMOTE_USER_IDS})

export const showPingResult = () => ({type: SHOW_PING_RESULT})
