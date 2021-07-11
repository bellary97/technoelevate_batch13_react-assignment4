import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Bgcolor from "./components/Bgcolor"
import Career from "./components/Career";
import Vote from "./components/Vote";


export const routing = (
  <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        React
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/vote">
              Vote
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link " to="/bgcolor">
              Bgcolor
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link " to="/career">
              career
            </Link>
          </li>
        </ul>
      </div>
    </nav>

    <Switch>
      <Route path="/" exact>
        {" "}
        <Home/>{" "}
      </Route>
      <Route path="/about" component={About} />
      <Route path="/vote" component={Vote} />
      <Route path="/career" component={Career}/>
      <Route path="/bgcolor" component={Bgcolor} />
     
    </Switch>
  </BrowserRouter>
);
