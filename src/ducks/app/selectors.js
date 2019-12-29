// checks whether to show a modal
const showModal = ({ modals }, name) => (
  modals[name] ? modals[name].show : false
);

// checks for an additional param from modal
const modalData = ({ modals }, name) => (
  modals[name] ? modals[name].data : false
);

export default {
  showModal,
  modalData,
};
