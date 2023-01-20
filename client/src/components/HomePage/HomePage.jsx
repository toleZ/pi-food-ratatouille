import RecipesContainer from "../RecipesContainer/RecipesContainer";
import Spinner from "../Spinner/Spinner";
import {
  bannerContainer,
  bannerTitle,
  sectionTitle,
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
        <RecipesContainer quantity={12} />
      </section>
    </main>
  );
};

export default HomePage;
