import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Create from "./components/Create/Create";
import Details from "./components/Details/Details";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/Create" component={Create} />
          <Route path="/Detail/:id" component={Details} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
