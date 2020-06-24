/* eslint-disable @typescript-eslint/no-explicit-any */

import produce from 'immer';
import { types } from './types';

const { DEFAULT } = types;

const initialState = {};

const reducer = (state = initialState, action: any) =>
  produce(state, (draftState) => {
    switch (action.type) {
      case DEFAULT:
        return draftState;
      default:
        return state;
    }
  });

export default reducer;
