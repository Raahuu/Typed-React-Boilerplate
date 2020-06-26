import { types, DefaultTypes } from './types';

export const defaultAction = (payload: String): DefaultTypes => ({
  type: types.DEFAULT,
  payload,
});
