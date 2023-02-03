import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";
import {
  landingContainer,
  landingTitle,
  landingS,
  goHomeBtn,
} from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <main className={landingContainer}>
      <h1 className={landingTitle}>
        Gusteau's Recipes <Spinner />{" "}
      </h1>
      <h2 className={landingS}>"Anyone can cook"</h2>

      <Link to={"/home"} className={goHomeBtn}>
        Go to home
      </Link>
    </main>
  );
};

export default LandingPage;
