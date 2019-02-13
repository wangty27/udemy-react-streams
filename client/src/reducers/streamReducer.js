import {
  ACTION_FETCH_STREAM,
  ACTION_FETCH_STREAMS,
  ACTION_CREATE_STREAM,
  ACTION_EDIT_STREAM,
  ACTION_DELETE_STREAM
} from '../CONSTANTS';
import _ from 'lodash';



export default (state = {}, action) => {
  switch (action.type) {
    case ACTION_FETCH_STREAM || ACTION_CREATE_STREAM || ACTION_EDIT_STREAM: {
      return {...state, [action.payload.id]: action.payload};
    }
    case ACTION_DELETE_STREAM: {
      return _.omit(state, action.payload);
    }
    case ACTION_FETCH_STREAMS: {
      return {...state, ..._.mapKeys(action.payload, 'id')};
    }
    default: {
      return state;
    }
  }
}