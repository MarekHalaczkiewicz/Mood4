import "./Homepage.css";
import icons from "../assets/Icons.svg";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <img src={icons} alt="icons" />
      <p className="welcome-text">
        Get the perfect recommendation based on your mood!
      </p>

      <button className="btn-homepage">
        <Link to="/Question1">Let's start!</Link>
      </button>
    </>
  );
};

export default Homepage;
