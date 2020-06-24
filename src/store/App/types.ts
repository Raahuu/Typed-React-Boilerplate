export const types = {
  DEFAULT: 'DEFAULT',
};

interface DefaultAction {
  type: typeof types.DEFAULT;
  payload: String;
}
interface DefaultActionTwo {
  type: typeof types.DEFAULT;
  payload: String;
}

export type DefaultTypes = DefaultAction | DefaultActionTwo;
