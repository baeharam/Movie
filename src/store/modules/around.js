import createRequestAction from 'utils/createRequestAction';
import { handleActions } from 'redux-actions';
import produce from 'immer';

export const aroundActions = createRequestAction('AROUND');

const initialState = {
  aroundSuccess: false,
  aroundError: '',
  result: [
    { backdropPath: '', title: '', rating: 0.0 },
    { backdropPath: '', title: '', rating: 0.0 },
  ],
};

const reducer = handleActions(
  {
    [aroundActions.REQUEST]: (state, _action) => state,

    [aroundActions.SUCCESS]: (state, action) => {
      return produce(state, draft => {
        draft.aroundSuccess = true;
        draft.result = action.payload.result;
      });
    },

    [aroundActions.FAILURE]: (state, action) => {
      return produce(state, draft => {
        draft.aroundError = action.payload.error;
      });
    },
  },
  initialState,
);

export default reducer;
