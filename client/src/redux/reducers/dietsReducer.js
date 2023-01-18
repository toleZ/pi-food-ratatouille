import { FETCH_DIETS, GET_DIETS } from "../actions/dietsActions";

const initialState = {
  diets: [],
};

export const dietsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_DIETS:
      return { ...state, diets: payload };
    case GET_DIETS:
      return { ...state.diets };
    default:
      return { ...state };
  }
};
