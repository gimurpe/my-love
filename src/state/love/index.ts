const initialState: LoveState = {};

const loveReducer = (state: LoveState = initialState, action: Action) => {
  if (typeof state === 'undefined') {
    return initialState;
  }
  return state;
};

export default loveReducer;
