import "../recipe/RecipeItems.css";

const RecipeNav = () => {
  return (
    <div className="container">
      <nav className="new-nav">
        <ul className="nav-items">
          <li className="nav-item">Home</li>
          <li className="nav-item">Explore</li>
          <li className="nav-item">Help</li>
          <li className="nav-item">Profile</li>
        </ul>
      </nav>
    </div>
  );
};

export default RecipeNav;
