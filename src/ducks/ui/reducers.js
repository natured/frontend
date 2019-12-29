import { combineReducers } from 'redux';
import types from './types';


const initialState = {
  drawers: {},
  showSkinnyNav: true, // Defaulted to show the nav
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_SKINNY_NAV:
      return { ...state, showSkinnyNav: action.payload };
    default:
      return state;
  }
};
