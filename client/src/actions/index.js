import {ACTION_SIGN_IN, ACTION_SIGN_OUT} from '../CONSTANTS'

export const signIn = userId => {
  return {
    type: ACTION_SIGN_IN,
    payload: userId
  };
}

export const signOut = () => {
  return {
    type: ACTION_SIGN_OUT
  };
}