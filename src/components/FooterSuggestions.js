import { Link } from "react-router-dom";
import "./FooterSuggestions.css";

function giveMeMore() {
  alert("Adding more options");
}
function goToFinal() {
  alert("Going to Final Page");
}

const FooterSuggestions = () => {
  return (
    <div className="suggestion-footer">
      <button onClick={giveMeMore}>Give me more</button>
      <button><Link to="/FinalPage">I'm done here</Link></button>

    </div>
  );
};

export default FooterSuggestions;
