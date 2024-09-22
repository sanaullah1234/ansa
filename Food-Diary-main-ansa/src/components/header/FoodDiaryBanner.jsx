import React from "react";
import "./FoodDiaryBanner.css";

function FoodDiaryBanner() {
  // or FoodDiaryBanner
  return (
    <div className="styled-image-wrapper">
      <div className="text-overlay">Food Diary</div>
      <div className="styled-image-container">
        <img
          src="/banner.svg"
          alt="Styled Pistacia Food"
          className="styled-image"
        />
      </div>
    </div>
  );
}

export default FoodDiaryBanner; // or FoodDiaryBanner
