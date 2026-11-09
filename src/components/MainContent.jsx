import React from "react";
import IngredientsList from "/src/components/IngredientsList.jsx";

import GrokRecipe from "/src/components/GrokRecipe.jsx";

import { getRecipeFromMistral } from "/src/components/ai.js";

export default function MainContent() {
  const [ingredients, setIngredients] = React.useState([
    "all the main spices",
    "ground beef",
    "tomato paste",
    "Rice",
  ]);

  // Runs when the user clicks "Get a recipe"
  async function getRecipe() {
    // Wait for the AI to send back the recipe text
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    // Save it in state so React shows it on the page
    setRecipe(recipeMarkdown);

    // console.log(recipeMarkdown);
  }

  const [recipe, setRecipe] = React.useState("");

  function addIngredients(formData) {
    const newIngredient = formData.get("ingredient");

    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }
  return (
    <>
      <form action={addIngredients} className="form-section">
        <input
          type="text"
          placeholder="e.g. Rice"
          required
          name="ingredient"
          aria-label="Add Ingredient"
        />
        <button type="submit">Add Ingredients</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      )}

      {recipe && <GrokRecipe recipe={recipe} />}
    </>
  );
}
