import createRequestAction from 'utils/createRequestAction';
import { handleActions } from 'redux-actions';
import produce from 'immer';

export const searchActions = createRequestAction('SEARCH');

const initialState = {
  searchSuccess: false,
  searchError: '',
  result: [
    {
      id: '',
      title: '',
    },
  ],
};

const reducer = handleActions(
  {
    [searchActions.REQUEST]: (state, _action) => {
      return produce(state, draft => {
        Object.assign(draft, initialState);
      });
    },

    [searchActions.SUCCESS]: (state, action) => {
      return produce(state, draft => {
        draft.searchSuccess = true;
        draft.result = action.payload.result;
      });
    },

    [searchActions.FAILURE]: (state, action) => {
      return produce(state, draft => {
        draft.error = action.payload.error;
      });
    },
  },
  initialState,
);

export default reducer;
