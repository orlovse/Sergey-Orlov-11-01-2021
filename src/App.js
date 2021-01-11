import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Favorites from "./pages/favorites";
import NotFoundPage from "./components/notFoundPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/favorites" component={Favorites} />
        <Route path="/" component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
