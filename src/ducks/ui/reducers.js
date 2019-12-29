import { combineReducers } from 'redux';
import types from './types';


const initialState = {
  drawers: {},
  showSkinnyNav: true, // Defaulted to show the nav
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_SKINNY_NAV: {
      return { ...state, showSkinnyNav: action.payload };
    }

    case types.TOGGLE_DRAWER: {
      const { name, value } = action.payload;
      const drawers = { ...state.drawers, [name]: value };
      return { ...state, drawers };
    }

    default:
      return state;
  }
};
