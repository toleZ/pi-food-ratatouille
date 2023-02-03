import { useDispatch, useSelector } from "react-redux";
import { filtersList, filter, select } from "./AsideFilters.module.css";
import {
  sortRecipesByName,
  sortRecipesByHealthScore,
} from "../../redux/actions/recipesActions";

const AsideFilters = ({ dietsToFilter, setDietsToFilter }) => {
  const dispatch = useDispatch();
  const { diets } = useSelector((state) => state.dietsReducer);

  const handleChange = (e) => {
    const { name, checked } = e.target;

    setDietsToFilter({ ...dietsToFilter, [name]: checked });
  };

  return (
    <aside>
      <ul className={filtersList}>
        <li className={filter}>
          <label>Sort by name</label>
          <select
            onChange={(e) => dispatch(sortRecipesByName(e.target.value))}
            className={select}
          >
            <option value={"asc"}>A - Z</option>
            <option value={"dsc"}>Z - A</option>
          </select>
        </li>
        <li className={filter}>
          <label>Sort by health score</label>
          <select
            onChange={(e) => dispatch(sortRecipesByHealthScore(e.target.value))}
            className={select}
          >
            <option value={"asc"}>1 - 100</option>
            <option value={"dsc"}>100 - 1</option>
          </select>
        </li>

        {diets?.map((diet) => (
          <li key={diet.name} className={filter}>
            <input type="checkbox" name={diet.name} onChange={handleChange} />
            <span>{diet.name}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AsideFilters;
