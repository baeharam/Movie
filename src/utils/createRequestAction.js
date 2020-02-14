import { createAction } from 'redux-actions';

export default function createRequestAction(type) {
  const REQUEST = `${type}/REQUEST`;
  const SUCCESS = `${type}/SUCCESS`;
  const FAILURE = `${type}/FAILURE`;

  return {
    TYPE: type,
    REQUEST,
    SUCCESS,
    FAILURE,
    request: createAction(REQUEST),
    success: createAction(SUCCESS),
    failure: createAction(FAILURE),
  };
}
