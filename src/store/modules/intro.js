import createRequestAction from 'utils/createRequestAction';
import { handleActions } from 'redux-actions';
import produce from 'immer';

export const introActions = createRequestAction('INTRO');

const initialState = {
  introSuccess: false,
  introError: '',
  result: {
    id: '',
    backdropPath: '',
    title: '',
    tagline: '',
  },
};

const reducer = handleActions(
  {
    [introActions.REQUEST]: (state, _action) => state,

    [introActions.SUCCESS]: (state, action) => {
      return produce(state, draft => {
        draft.introSuccess = true;
        draft.result = { ...action.payload.result };
      });
    },

    [introActions.FAILURE]: (state, action) => {
      return produce(state, draft => {
        draft.introError = action.payload.error;
      });
    },
  },
  initialState,
);

export default reducer;
