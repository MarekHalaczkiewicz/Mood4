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

      <Link to="/Question1">
        <button className="btn-homepage">Let's start!</button>
      </Link>
    </>
  );
};

export default Homepage;
