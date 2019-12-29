import types from './types';

const sectionsReducer = (state = null, action) => {
  switch (action.type) {
    case types.GET_SECTIONS: return action.payload;
    default: return state;
  }
};


export default sectionsReducer;
