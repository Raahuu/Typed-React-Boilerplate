import { types } from './types';

export const defaultAction = (payload: String) => ({
  type: types.DEFAULT,
  payload,
});
