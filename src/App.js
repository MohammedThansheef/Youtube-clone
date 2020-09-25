import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Recommended from "./Components/Recommended/Recommended";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./Components/SearchPage/SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/" exact>
            <div className="app__page">
              <Sidebar />
              <Recommended />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
