export const FETCH_DIETS = "FETCH_DIETS";
export const GET_DIETS = "GET_DIETS";

export const fetchDiets = () => {
  return async function (dispatch) {
    const res = await fetch(
      "https://pi-food-ratatouille-production.up.railway.app/diets"
    );
    const diets = await res.json();

    dispatch({ type: FETCH_DIETS, payload: diets });
  };
};

export const getDiets = () => {
  return { type: GET_DIETS };
};
