import { Link } from "react-router-dom";
import {
  errContainer,
  errH1,
  errH3,
  errP,
  errBtn,
} from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <main className={errContainer}>
      <h1 className={errH1}>Page not found</h1>
      <h3 className={errH3}>This route doesn't exist 😥</h3>
      <p className={errP}>
        You can return to home
        <Link to={"/home"} className={errBtn}>
          cliking here
        </Link>
      </p>
    </main>
  );
};

export default ErrorPage;
