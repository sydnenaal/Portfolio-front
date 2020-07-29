import { SET_CONTACT_STATE } from "ducks/types";

const initialState = {
  isContactShow: false,
};

export const setContactState = (state) => ({
  type: SET_CONTACT_STATE,
  payload: state,
});

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACT_STATE:
      return { ...state, isContactShow: action.payload };
    default:
      return state;
  }
};
