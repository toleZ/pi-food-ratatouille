import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
// import { fetchRecipes } from "./redux/actions/recipesActions";
import { fetchDiets } from "./redux/actions/dietsActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(fetchRecipes());
    dispatch(fetchDiets());
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
