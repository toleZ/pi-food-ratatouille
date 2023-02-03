import { Link } from "react-router-dom";
import RecipesContainer from "../RecipesContainer/RecipesContainer";
import Spinner from "../Spinner/Spinner";
import {
  bannerContainer,
  bannerTitle,
  sectionTitle,
  showMoreLink,
} from "./HomePage.module.css";

const HomePage = () => {
  return (
    <main>
      <section>
        <div className={bannerContainer}>
          <h1 className={bannerTitle}>"Anyone Can Cook"</h1>
        </div>
      </section>
      <section>
        <h2 className={sectionTitle}>
          Some of our recipes <Spinner />
        </h2>
        <RecipesContainer since={2} until={11} />
        <Link to={"/recipes/page/1"} className={showMoreLink}>
          Show more recipes...
        </Link>
      </section>
    </main>
  );
};

export default HomePage;
