import './App.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Nav from './components/Nav';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Routes>
            <Route path='/signIn' exact component={SignIn} />
            <Route path="/signUp" exact component={SignUp} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;