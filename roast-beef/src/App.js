import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Landing from "./pages/LandingPage";
import Home from "./pages/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/signIn" exact component={SignIn} />
          <Route path="/signUp" exact component={SignUp} />
          <Route path="/home" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
