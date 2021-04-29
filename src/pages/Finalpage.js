import StarRating from "../components/StarRating";
import "./FinalPage.css";
import TakeAgainButton from "../components/TakeAgainButton";

const FinalPage = () => {
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
          src="https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg"
          alt=""
          className="img-finalpage"
        />
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/61YK%2BvhHSOL._SX355_.jpg"
          alt=""
          className="img-finalpage"
        />
        <img
          src="https://www.gourmet-magazin.de/fileadmin/_processed_/d/d/csm_pink-lady-7_de87e393d9.jpg"
          alt=""
          className="img-finalpage"
        />
      </div>
      <p className="pleaserate">
        We hope that you will enjoy our recommendations. Please rate your
        expereince with Mood4 !
      </p>

      <StarRating className="pleaserate" />
      <TakeAgainButton className="take-again-button" />
    </>
  );
};

export default FinalPage;
