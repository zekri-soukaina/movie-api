import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import MoviePage from "./Pages/MoviePage";
import DiscoverPage from "./Pages/DiscoverPage";

function App() {
  return (
    <div>
      <Router>
        {/* <NavBar /> */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/discover/:searchText?" component={DiscoverPage} />
          <Route path="/movie/:imdb_id" component={MoviePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
