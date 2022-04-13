import React from "react";
const Rating = ({ rating, setRating }) => {
  // Fonction Rating
  function stars(x){
    var star = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        star.push(
          <span
            key={i}
            onClick={() => setRating(i)}
            style={{ color: "gold", fontSize: "20px", cursor: "pointer" }}
          >
            ★
          </span>
        );
      } else {
        star.push(
          <span
            key={i}
            onClick={() => setRating(i)}
            style={{ color: "black", fontSize: "20px", cursor: "pointer" }}
          >
            ★
          </span>
        );
      }
    }
    return star;
  }

  return (
    <div>
      <h1> Our Movie App </h1>
      {stars(rating)}
    </div>
  );
};
export default Rating;
