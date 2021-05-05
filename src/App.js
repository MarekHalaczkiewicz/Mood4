import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ResultPage from "./pages/ResultPage";
import logo from "./assets/Logo.svg";
import Question1 from "./pages/Question1";
import Question2 from "./pages/Question2";
import Question3 from "./pages/Question3";

import FinalPage from "./pages/Finalpage";
const App = () => {
  const [myPreferences] = useState({
    movie: { img: "", title: "", overview: "" },
    music: { img: "", title: "", track: "", artists: [] },
    drink: { img: "", title: "", ingredients: [], instructions: "" },
  });
  console.log(myPreferences.drink.img);
  return (
    <div className="main-container">
      <img className="logo" src={logo} alt="logo" />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/Question1" component={Question1} />
        <Route path="/Question2" component={Question2} />
        <Route path="/Question3" component={Question3} />
        <Route
          path="/ResultPage"
          component={() => <ResultPage myPreferences={myPreferences} />}
        />
        <Route
          path="/FinalPage"
          component={() => <FinalPage myPreferences={myPreferences} />}
        />
      </Switch>
    </div>
  );
};
export default App;
