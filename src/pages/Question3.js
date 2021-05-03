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
            Relaxed 🎧
          </button>
        </Link>

        <Link to="/ResultPage">
          <button
            onClick={() => {
              questionThree(context.questionDispatch, {
                energy: 0.5,
                dance: 0.5,
                genre: "electronic",
              });
            }}
            className="answer-button"
          >
            Party-mood for me 💃🏻🕺🏻
          </button>
        </Link>

        <Link to="/ResultPage">
          <button
            onClick={() => {
              questionThree(context.questionDispatch, {
                energy: 0.4,
                dance: 0.3,
                genre: "soul",
              });
            }}
            className="answer-button"
          >
            Romantic vibes only 💖
          </button>
        </Link>

        <Link to="/ResultPage">
          <button
            onClick={() => {
              questionThree(context.questionDispatch, {
                energy: 0.5,
                dance: 0.4,
                genre: "holiday",
              });
            }}
            className="answer-button"
          >
            Cheered up 🤗
          </button>
        </Link>

        <Link to="/ResultPage">
          <button
            onClick={() => {
              questionThree(context.questionDispatch, {
                energy: 0.7,
                dance: 0.7,
                genre: "work-out",
              });
            }}
            className="answer-button"
          >
            Energetic
          </button>
        </Link>
      </div>
    </>
  );
};

export default Question3;
