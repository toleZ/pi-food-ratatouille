import axios from "axios";

export const FETCH_DIETS = "FETCH_DIETS";
export const GET_DIETS = "GET_DIETS";

const dietsAxios = axios.create({ baseURL: "http://localhost:3001/diets" });

export const fetchDiets = () => {
  return async function (dispatch) {
    const res = await dietsAxios.get();
    const diets = res.data;

    dispatch({ type: FETCH_DIETS, payload: diets });
  };
};

export const getDiets = () => {
  return { type: GET_DIETS };
};
