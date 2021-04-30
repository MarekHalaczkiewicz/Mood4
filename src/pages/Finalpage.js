import { Link } from "react-router-dom";
import StarRating from "../components/StarRating";
import "./FinalPage.css";

const FinalPage = ({ myPreferences }) => {
  return (
    <>
      <button className="question-button">Your final selection...</button>
      <div className="suggestion-buttons">
        <input type="button" className="button active" value="Movie" />
        <input type="button" className="button active" value="Music" />
        <input type="button" className="button active" value="Drink" />
      </div>
      <div className="img-finalpage-container">
        <img
          src={
            myPreferences.movie === ""
              ? "https://image.slidesharecdn.com/what-if-i-am-not-chosen-130417123636-phpapp02/95/what-if-i-am-not-chosen-1-638.jpg?cb=1366202401"
              : myPreferences.movie
          }
          alt=""
          className="img-finalpage"
        />
        <img
          src={
            myPreferences.music === ""
              ? "https://image.slidesharecdn.com/what-if-i-am-not-chosen-130417123636-phpapp02/95/what-if-i-am-not-chosen-1-638.jpg?cb=1366202401"
              : myPreferences.music
          }
          alt=""
          className="img-finalpage"
        />
        <img
          src={
            myPreferences.drink === ""
              ? "https://image.slidesharecdn.com/what-if-i-am-not-chosen-130417123636-phpapp02/95/what-if-i-am-not-chosen-1-638.jpg?cb=1366202401"
              : myPreferences.drink
          }
          alt=""
          className="img-finalpage"
        />
      </div>
      <p className="pleaserate">
        We hope that you will enjoy our recommendations. Please rate your
        expereince with Mood4 !
      </p>

      <StarRating className="pleaserate" />
      <Link to="/">
        <button className="take-again">Start Again</button>
      </Link>
    </>
  );
};

export default FinalPage;
