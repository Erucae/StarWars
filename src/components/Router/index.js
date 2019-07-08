import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PlanetsPage from "../../pages/PlanetsPage";
import StarshipsPage from "../../pages/StarshipsPage";
import PeoplePage from "../../pages/peoplePage";
import HomePage from "../../pages/HomePage";

const Routing = () => {
  return (
    <div>
      <Router>
        <Route path="/" component={HomePage} exact />
        {/* <Route path="/people" component={PeoplePage} /> */}
        <Route path="/people/:id?" component={PeoplePage} />
        <Route path="/starships" component={StarshipsPage} exact />
        <Route path="/planets" component={PlanetsPage} exact />
      </Router>
    </div>
  );
};

export default Routing;
