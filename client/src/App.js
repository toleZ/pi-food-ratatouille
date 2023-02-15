import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import ColorModeSwitch from "./components/ColorModeSwitch/ColorModeSwitch";
import CreateRecipeForm from "./components/CreateRecipeForm/CreateRecipeForm";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import FavoritesPage from "./components/FavoritesPage/FavoritesPage";
import HomePage from "./components/HomePage/HomePage";
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import RecipeDetail from "./components/RecipeDetail/RecipeDetail";
import RecipesPage from "./components/RecipesPage/RecipesPage";
import { fetchDiets } from "./redux/actions/dietsActions";
import { fetchRecipes } from "./redux/actions/recipesActions";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

const App = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(fetchRecipes());
    dispatch(fetchDiets());
    //eslint-disable-next-line
  }, []);

  return (
    <>
      {pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/recipes/page/:recipesPage" element={<RecipesPage />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetail />} />
        <Route path="/recipes/favorites" element={<FavoritesPage />} />
        <Route path="/recipes/form" element={<CreateRecipeForm />} />
      </Routes>
      {pathname !== "/" && <ColorModeSwitch />}
    </>
  );
};

export default App;
