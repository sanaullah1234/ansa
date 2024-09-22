import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Logo from "../header/Logo";
import "./RecipeDetails.css";
import FoodDiaryBanner from "../header/FoodDiaryBanner";
import RecipeNav from "../navbar/RecipeNav";

const RecipeDetails = () => {
  const { id } = useParams(); // Get the recipe id from the URL
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching recipe details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="loader"></div>;
  }

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <>
      <Logo />
      <div className="styled-image-wrapper styled-image-wrapper-recipe">
        <FoodDiaryBanner />
      </div>
      <div className="container container-nav">
        <RecipeNav />
      </div>
      <div className="recipe-details">
        <div className="recipe-content">
          <h1>{recipe.name}</h1>
          <div className="instructions">
            <h2>Instructions</h2>
            <p>{recipe.instructions}</p>
          </div>
          <div className="ingredients">
            <h2 className="ingredients-title">Ingredients</h2>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="ingredient-item">
                  <span className="ingredient-icon">
                    <i className="fas fa-check"></i>
                  </span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      </div>
    </>
  );
};

export default RecipeDetails;
