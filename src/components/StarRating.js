import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./StarRating.css";

const StarRating = () => {
  const [rating, setRating] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= rating ? "#f0b9b4" : "#438188"}
              size={35}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
