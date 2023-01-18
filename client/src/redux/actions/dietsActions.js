export const FETCH_DIETS = "FETCH_DIETS";
export const GET_DIETS = "GET_DIETS";

export const fetchDiets = () => {
  return async function (dispatch) {
    const res = await fetch("http://localhost:3001/diets");
    const diets = await res.json();

    dispatch({ type: FETCH_DIETS, payload: diets });
  };
};

export const getDiets = () => {
  return { type: GET_DIETS };
};
