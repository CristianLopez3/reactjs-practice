import { TYPES } from "../actions/counterActions";
export const counterInitialState = { counter: 0 };

export const counterInit = (initialState) => {
  return {
    counter: counterInitialState.counter + 100,
  };
};

export function counterReducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { counter: state.counter + 1 };
    case TYPES.INCREMENT_5:
      return { counter: state.counter + action.payload };
    case TYPES.DECREMENT:
      return { counter: state.counter - 1 };
    case TYPES.DECREMENT_5:
      return { counter: state.counter - action.payload };
    case TYPES.RESET:
      return { counter: counterInitialState.counter };
    default:
      return state;
  }
}
