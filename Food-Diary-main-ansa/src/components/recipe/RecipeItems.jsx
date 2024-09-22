import { useEffect, useState, useCallback, memo } from "react";
import "./RecipeItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock as farClock } from "@fortawesome/free-regular-svg-icons";
import RecipeNav from "../navbar/RecipeNav";
import SearchBar from "../search/SearchBar";
import Logo from "../header/Logo";
import FoodDiaryBanner from "../header/FoodDiaryBanner";

const RecipeItem = memo(({ recipe, onClick }) => {
  const renderStars = (rating) => {
    const totalStars = 5;
    const filledStars = Math.round(rating);
    return "★".repeat(filledStars) + "☆".repeat(totalStars - filledStars);
  };

  return (
    <div className="recipe-item">
      <div className="image-container">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="card-img-top"
          onClick={() => onClick(recipe.id)}
          style={{ cursor: "pointer" }}
          loading="lazy" // Lazy loading enabled
        />
        <div className="cuisine-overlay">{recipe.cuisine}</div>
      </div>
      <div className="card-body">
        <div className="recipe-title-review">
          <p className="card-title">{recipe.name}</p>
          <p className="review-count">Reviews: {recipe.reviewCount}</p>
        </div>
        <div className="recipe-info">
          <div className="recipe-time-mealtype">
            <div className="recipe-time">
              <FontAwesomeIcon icon={farClock} />{" "}
              {recipe.prepTimeMinutes + recipe.cookTimeMinutes} minutes
            </div>
            <div className="recipe-type">{recipe.mealType[0]}</div>
          </div>
          <div className="recipe-stars">
            Rating:{" "}
            <span className="review-stars">{renderStars(recipe.rating)}</span>
          </div>
        </div>
      </div>
    </div>
  );
});

const RecipeItems = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasSearched, setHasSearched] = useState(false); // New state to track search

  useEffect(() => {
    setTimeout(() => {
      fetch("https://dummyjson.com/recipes")
        .then((response) => response.json())
        .then((data) => {
          setRecipes(data.recipes);
          setFilteredRecipes(data.recipes);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching recipes:", error);
          setLoading(false);
        });
    }, 3000);
  }, []);

  const openRecipeInNewTab = useCallback((id) => {
    const newTab = window.open(`/recipe/${id}`, "_blank");
    if (newTab) {
      newTab.focus();
    }
  }, []);

  const handleSearch = (query, cuisine) => {
    const lowercasedQuery = query.toLowerCase();
    const results = recipes.filter((recipe) => {
      const matchesQuery = recipe.name.toLowerCase().includes(lowercasedQuery);
      const matchesCuisine = cuisine === "all" || recipe.cuisine === cuisine;
      return matchesQuery && matchesCuisine;
    });
    setFilteredRecipes(results);
    setHasSearched(true); // Set to true when a search is performed
  };

  return (
    <>
      <div className="sticky-top">
        <Logo />
        <SearchBar
          onSearch={handleSearch}
          onCuisineChange={(cuisine) => handleSearch("", cuisine)}
        />
      </div>
      <FoodDiaryBanner />
      <RecipeNav />
      <div className="recipe-list">
        {loading ? (
          <div className="loader"></div>
        ) : (
          <>
            {filteredRecipes.length === 0 && hasSearched ? ( // Check if there are no recipes and a search has been performed
              <div className="not-found-message">Recipe not found!</div>
            ) : (
              <div className="recipe-grid">
                {filteredRecipes.map((recipe) => (
                  <RecipeItem
                    key={recipe.id}
                    recipe={recipe}
                    onClick={openRecipeInNewTab}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default RecipeItems;
