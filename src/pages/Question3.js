import { useContext } from "react";
import UserContext from "../context/ContextProvider";
import "./Questions.css";
import { Link } from "react-router-dom";

const Question3 = () => {
  const context = useContext(UserContext);
  const questionThree = (dispatch, answer) => {
    dispatch({
      type: "QUESTIONTHREE_ANSWERED",
      payload: answer,
    });
  };
  return (
    <>
      <button className="question-button">How would you like to feel?</button>
      <div className="option-container">
        <Link to="/ResultPage">
          <button
            onClick={() => {
              questionThree(context.questionDispatch, {
                energy: 0.2,
                dance: 0.3,
                genre: "jazz%2Cchill",
              });
            }}
            className="answer-button"
          >
            Relaxed π§
          </button>
        </Link>

        <Link to="/ResultPage">
          <button
            onClick={() => {
              questionThree(context.questionDispatch, {
                energy: 0.5,
                dance: 0.5,
                genre: "house",
              });
            }}
            className="answer-button"
          >
            Party-mood for me ππ»πΊπ»
          </button>
        </Link>

        <Link to="/ResultPage">
          <button
            onClick={() => {
              questionThree(context.questionDispatch, {
                energy: 0.4,
                dance: 0.3,
                genre: "romance",
              });
            }}
            className="answer-button"
          >
            Romantic vibes only π
          </button>
        </Link>

        <Link to="/ResultPage">
          <button
            onClick={() => {
              questionThree(context.questionDispatch, {
                energy: 0.5,
                dance: 0.4,
                genre: "happy",
              });
            }}
            className="answer-button"
          >
            Cheered up π€
          </button>
        </Link>

        <Link to="/ResultPage">
          <button
            onClick={() => {
              questionThree(context.questionDispatch, {
                energy: 0.6,
                dance: 0.5,
                genre: "work-out",
              });
            }}
            className="answer-button"
          >
            Energetic β‘οΈ
          </button>
        </Link>
      </div>
    </>
  );
};

export default Question3;
