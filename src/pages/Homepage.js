import "./Homepage.css";
import icons from "../assets/Icons.svg";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <img src={icons} alt="icons" />
      <p className="welcome-text">
        We're here to help you to feel the way you would like to feel. Just tell
        us a little bit more about yourself, and get the perfect recommendation
        based on your mood!
      </p>

      <Link to="/Question1">
        <button className="btn-homepage">Let's start!</button>
      </Link>
    </>
  );
};

export default Homepage;
