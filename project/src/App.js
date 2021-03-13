import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import AboutMe from "./features/AboutMe";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/about-me" component={AboutMe} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
