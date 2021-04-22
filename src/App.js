import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ResultPage from "./pages/ResultPage";
import logo from "./assets/Logo.svg";
import Question1 from "./pages/Question1";
import Question2 from "./pages/Question2";
import Question3 from "./pages/Question3";
import Question4 from "./pages/Question4";

const App = () => {
  return (
    <>
      <img className="logo centering" src={logo} alt="logo" />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/Question1" component={Question1} />
        <Route path="/Question2" component={Question2} />
        <Route path="/Question3" component={Question3} />
        <Route path="/Question4" component={Question4} />
        <Route path="/ResultPage" component={ResultPage} />
      </Switch>
    </>
  );
};
export default App;
