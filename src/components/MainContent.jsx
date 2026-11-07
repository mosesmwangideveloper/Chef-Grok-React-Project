import React from "react";
import IngredientsList from "/src/components/IngredientsList.jsx";

export default function MainContent() {
  const [ingredients, setIngredients] = React.useState([]);

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
      <IngredientsList ingredients={ingredients} />
    </>
  );
}
