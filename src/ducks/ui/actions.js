import types from './types';

const toggleDrawer = (name, value) => ({
  type: types.TOGGLE_DRAWER,
  payload: { name, value },
});


export default {
  toggleDrawer,
};
