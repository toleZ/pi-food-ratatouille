import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRecipe } from "../../redux/actions/recipesActions";
import { useNavigate } from "react-router-dom";
import {
  createRecipeContainer,
  recipeForm,
  recipeLabel,
  recipeInput,
  createRecipeBtn,
  err,
  recipeDiets,
  dietsSelector,
} from "./CreateRecipeForm.module.css";

const CreateRecipeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    healthScore: "",
    instructions: "",
    image: "",
    servings: "",
    pricePerServing: "",
    readyInMinutes: "",
  });
  const [formErrs, setFormErrs] = useState({});
  const [selectedDiets, setSelectedDiets] = useState([]);

  const { diets } = useSelector((state) => state.dietsReducer);
  const { recipe } = useSelector((state) => state.recipesReducer);

  const formatInstructions = (ins) => {
    return (
      ins
        .split("|")
        //eslint-disable-next-line
        .map((r) => {
          r = r.trim();
          if (r.length >= 4 && r.length <= 255) return r;
        })
        .filter((r) => r !== undefined)
    );
  };

  const validateData = ({
    title,
    summary,
    healthScore,
    instructions,
    image,
    readyInMinutes,
    servings,
    pricePerServing,
  }) => {
    let errs = {};

    if (typeof title !== "string" || title.length < 8 || title.length > 255)
      errs.title =
        "Title needs to be string type and have a length between 8 - 255";
    if (
      typeof summary !== "string" ||
      summary.length < 8 ||
      summary.length > 255
    )
      errs.summary =
        "Summary needs to be string type and have a length between 8 - 255";
    if (Number(healthScore) < 0 || Number(healthScore) > 100)
      errs.healthScore = "Health Score must be of type number between 0 - 100";
    if (instructions && !formatInstructions(instructions).length)
      errs.instructions =
        "Instructions must be of type array of strings with lenght between 8 - 255";
    if (
      typeof image !== "string" ||
      !image.startsWith("https://") ||
      (!image.endsWith(".jpg") && !image.endsWith(".png"))
    )
      errs.image =
        "The image must be of type string and start with https:// and end with an image format (.jpg or .png)";

    if (Number(readyInMinutes) < 1 || Number(readyInMinutes) > 1000)
      errs.readyInMinutes =
        "Ready In Minutes must be of type integer number between 1 - 1000";

    if (Number(servings) < 1 || Number(servings) > 24)
      errs.servings = "Servings must be of type integer number between 1 - 24";

    if (Number(pricePerServing) < 2 || Number(pricePerServing) > 800)
      errs.pricePerServing =
        "Price Per Serving must be of type float number between 2 - 800";

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    setFormErrs(validateData({ ...formData, [name]: value }));
  };

  const handleChangeDiets = (e) => {
    const options = [...e.target.selectedOptions];
    const values = options.map((option) => option.value);
    setSelectedDiets(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const recipe = {
      ...formData,
      dietsAlloweds: selectedDiets,
      instructions: formatInstructions(formData.instructions),
    };

    if (Object.entries(formErrs).length !== 0) return console.error(formErrs);

    dispatch(createRecipe(recipe));
  };

  useEffect(() => {
    if (recipe?.title === formData.title && formData.title !== "")
      navigate(`/recipes/${recipe.id}`);
    //eslint-disable-next-line
  }, [recipe]);

  return (
    <main className={createRecipeContainer}>
      <form onSubmit={handleSubmit} className={recipeForm}>
        <label className={recipeLabel}>Title</label>
        <input
          className={recipeInput}
          iserror={formErrs.title ? "true" : "false"}
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Type the recipe title"
        />
        {formErrs.title && <span className={err}>{formErrs.title}</span>}

        <label className={recipeLabel}>Summary</label>
        <textarea
          className={recipeInput}
          iserror={formErrs.summary ? "true" : "false"}
          name="summary"
          value={formData.summary}
          onChange={handleChange}
          placeholder="Type the recipe summary"
        />
        {formErrs.summary && <span className={err}>{formErrs.summary}</span>}

        <label className={recipeLabel}>Health Score</label>
        <input
          className={recipeInput}
          iserror={formErrs.healthScore ? "true" : "false"}
          type="number"
          name="healthScore"
          value={formData.healthScore}
          onChange={handleChange}
          placeholder="Type the recipe health score number"
        />
        {formErrs.healthScore && (
          <span className={err}>{formErrs.healthScore}</span>
        )}

        <label className={recipeLabel}>Instructions</label>
        <textarea
          className={recipeInput}
          iserror={formErrs.instructions ? "true" : "false"}
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
          placeholder="Type the recipe instructions, separete the steps with symbol '|'"
        />
        {formErrs.instructions && (
          <span className={err}>{formErrs.instructions}</span>
        )}

        <label className={recipeLabel}>Servings</label>
        <input
          className={recipeInput}
          iserror={formErrs.servings ? "true" : "false"}
          type="number"
          name="servings"
          value={formData.servings}
          onChange={handleChange}
          placeholder="Type the recipe servings quantity number"
        />
        {formErrs.servings && <span className={err}>{formErrs.servings}</span>}

        <label className={recipeLabel}>Price per serving</label>
        <input
          className={recipeInput}
          iserror={formErrs.pricePerServing ? "true" : "false"}
          type="number"
          name="pricePerServing"
          value={formData.pricePerServing}
          onChange={handleChange}
          placeholder="Type the recipe price per serving number"
        />
        {formErrs.pricePerServing && (
          <span className={err}>{formErrs.pricePerServing}</span>
        )}

        <label className={recipeLabel}>Ready in minutes</label>
        <input
          className={recipeInput}
          iserror={formErrs.readyInMinutes ? "true" : "false"}
          type="number"
          name="readyInMinutes"
          value={formData.readyInMinutes}
          onChange={handleChange}
          placeholder="Type the recipe ready in minutes time number"
        />
        {formErrs.readyInMinutes && (
          <span className={err}>{formErrs.readyInMinutes}</span>
        )}

        <label className={recipeLabel}>Image</label>
        <textarea
          className={recipeInput}
          iserror={formErrs.image ? "true" : "false"}
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Type the recipe image url"
        />
        {formErrs.image && <span className={err}>{formErrs.image}</span>}

        <label className={recipeLabel}>Diets</label>
        <select
          name="allowedDiets"
          multiple
          onChange={handleChangeDiets}
          className={dietsSelector}
        >
          {diets?.map(({ name }) => (
            <option
              key={name}
              value={name.toLowerCase()}
              className={recipeDiets}
            >
              {name}
            </option>
          ))}
        </select>

        <input
          type="submit"
          value="Create recipe"
          className={createRecipeBtn}
          disabled={Object.entries(formErrs).length > 0}
        />
      </form>
    </main>
  );
};

export default CreateRecipeForm;
