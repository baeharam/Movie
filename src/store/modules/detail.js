import createRequestAction from 'utils/createRequestAction';
import { handleActions } from 'redux-actions';
import produce from 'immer';

export const detailActions = createRequestAction('DETAIL');

const initialState = {
  detailSuccess: false,
  detailError: '',
  result: {
    title: '',
    originalTitle: '',
    tagline: '',
    releaseDate: '',
    runtime: 0,
    rating: 0.0,
    genres: [],
    overview: '',
    posterPath: '',
    backdropPath: '',
    images: [],
    videos: [
      {
        path: '',
        thumbnail: '',
      },
    ],
    simliars: [
      {
        id: '',
        title: '',
        posterPath: '',
      },
    ],
    casts: [
      {
        name: '',
        role: '',
        profilePath: '',
      },
    ],
  },
};

const reducer = handleActions(
  {
    [detailActions.REQUEST]: (state, _action) => state,

    [detailActions.SUCCESS]: (state, action) => {
      return produce(state, draft => {
        draft.detailSuccess = true;
        draft.result = action.payload.result;
      });
    },

    [detailActions.FAILURE]: (state, action) => {
      return produce(state, draft => {
        draft.detailError = action.payload.error;
      });
    },
  },
  initialState,
);

export default reducer;
