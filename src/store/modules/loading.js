import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

export const START_LOADING = 'START_LOADING';
export const FINISH_LOADING = 'FINISH_LOADING';

export const startLoading = createAction(START_LOADING);
export const finishLoading = createAction(FINISH_LOADING);

const initialState = {};

const reducer = handleActions(
  {
    [START_LOADING]: (state, action) => {
      return produce(state, draft => {
        draft[action.payload.type] = true;
      });
    },

    [FINISH_LOADING]: (state, action) => {
      return produce(state, draft => {
        draft[action.payload.type] = false;
      });
    },
  },
  initialState,
);

export default reducer;
