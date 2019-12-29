import types from './types';

const toggleDrawer = (name, value) => ({
  type: types.TOGGLE_DRAWER,
  payload: { name, value },
});

const toggleSkinnyNav = value => ({
  type: types.TOGGLE_SKINNY_NAV,
  payload: value,
});


export default {
  toggleDrawer,
  toggleSkinnyNav,
};
