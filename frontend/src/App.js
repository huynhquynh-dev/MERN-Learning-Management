import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Auth from "./view/Auth";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route
          exact
          path="/login"
          render={(props) => <Auth {...props} authRouter="login" />}
        ></Route>
        <Route
          exact
          path="/register"
          render={(props) => <Auth {...props} authRouter="register" />}
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;
