import streams from '../apis/streams';
import {
  ACTION_SIGN_IN,
  ACTION_SIGN_OUT,
  ACTION_CREATE_STREAM,
  ACTION_FETCH_STREAMS,
  ACTION_FETCH_STREAM,
  ACTION_EDIT_STREAM,
  ACTION_DELETE_STREAM
} from '../CONSTANTS';

export const signIn = userId => {
  return {
    type: ACTION_SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: ACTION_SIGN_OUT
  };
};

export const createStream = formValues => async dispatch => {
  const response = await streams.post('/streams', formValues);

  dispatch({
    type: ACTION_CREATE_STREAM,
    payload: response.data
  });
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');

  dispatch({
    type: ACTION_FETCH_STREAMS,
    payload: response.data
  });
}

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({
    type: ACTION_FETCH_STREAM,
    payload: response.data
  });
}

export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.get(`/streams/${id}`, formValues);

  dispatch({
    type: ACTION_EDIT_STREAM,
    payload: response.data
  });
}

export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);

  dispatch({
    type: ACTION_DELETE_STREAM,
    payload: id
  })
}