import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const OPEN = 'overlay/OPEN';
const CLOSE = 'overlay/CLOSE';

export const open = createAction(OPEN);
export const close = createAction(CLOSE);

const initialState = {
  isOpen: false,
};

const reducer = handleActions(
  {
    [OPEN]: (state, _action) => {
      return produce(state, draft => {
        draft.isOpen = true;
      });
    },

    [CLOSE]: (state, _action) => {
      return produce(state, draft => {
        draft.isOpen = false;
      });
    },
  },
  initialState,
);

export default reducer;
