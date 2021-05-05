import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import StarRating from "../components/StarRating";
import "./FinalPage.css";

const FinalPage = ({ myPreferences }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className="question-button">Your final selection...</button>
      <div className="suggestion-buttons">
        <input type="button" className="button active" value="Movie" />
        <input type="button" className="button active" value="Music" />
        <input type="button" className="button active" value="Drink" />
      </div>
      <div
        className="img-finalpage-container"
        onClick={() => setShowModal(!showModal)}
      >
        <img
          src={
            myPreferences.movie.img === ""
              ? "https://image.slidesharecdn.com/what-if-i-am-not-chosen-130417123636-phpapp02/95/what-if-i-am-not-chosen-1-638.jpg?cb=1366202401"
              : myPreferences.movie.img
          }
          alt=""
          className="img-finalpage"
        />
        <img
          src={
            myPreferences.music.img === ""
              ? "https://image.slidesharecdn.com/what-if-i-am-not-chosen-130417123636-phpapp02/95/what-if-i-am-not-chosen-1-638.jpg?cb=1366202401"
              : myPreferences.music.img
          }
          alt=""
          className="img-finalpage"
        />
        <img
          src={
            myPreferences.drink.img === ""
              ? "https://image.slidesharecdn.com/what-if-i-am-not-chosen-130417123636-phpapp02/95/what-if-i-am-not-chosen-1-638.jpg?cb=1366202401"
              : myPreferences.drink.img
          }
          alt=""
          className="img-finalpage"
        />
      </div>
      <p className="pleaserate">
        We hope that you will enjoy our recommendations. Please rate your
        experience with Mood4 !
      </p>
      {showModal && (
        <Modal myPreferences={myPreferences} setShowModal={setShowModal} />
      )}

      <StarRating className="pleaserate" />
      <Link to="/">
        <button className="take-again">Start Again</button>
      </Link>
    </>
  );
};

export default FinalPage;
