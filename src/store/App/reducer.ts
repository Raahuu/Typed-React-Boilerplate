import produce from 'immer';
import { types, DefaultTypes } from './types';

const { DEFAULT } = types;

const initialState = {};

const reducer = (state = initialState, action: DefaultTypes) =>
  produce(state, (draftState) => {
    switch (action.type) {
      case DEFAULT:
        return draftState;
      default:
        return state;
    }
  });

export default reducer;
