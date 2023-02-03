import { Link, useNavigate } from "react-router-dom";
import {
  pagination,
  paginationItem,
  activeItem,
  arrowBtn,
} from "./Pagination.module.css";
import ArrowLeft from "../../assets/ArrowLeft";
import ArrowRight from "../../assets/ArrowRight";

const Pagination = ({ url, cur, length }) => {
  const navigate = useNavigate();

  const itemsArr = () => {
    const arr = [];

    for (let i = 1; i <= length; i++) arr.push(`${url}/${i}`);

    return arr;
  };

  return (
    <nav className={pagination}>
      <button
        className={arrowBtn}
        disabled={cur === 1}
        onClick={() => navigate(`${url}/${cur - 1}`)}
      >
        <ArrowLeft />
      </button>
      {itemsArr()?.map((item, i) => (
        <Link
          to={item}
          key={item}
          className={`${paginationItem} ${cur === i + 1 && activeItem}`}
        >
          {i + 1}
        </Link>
      ))}
      <button
        className={arrowBtn}
        disabled={cur === length}
        onClick={() => navigate(`${url}/${cur + 1}`)}
      >
        <ArrowRight />
      </button>
    </nav>
  );
};

export default Pagination;
