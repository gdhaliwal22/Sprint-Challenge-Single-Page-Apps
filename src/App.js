import React from "react";
import { Route } from "react-router-dom";

import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharcterList from "./components/CharacterList";
import SearchForm from "./components/SearchForm";


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharcterList} />
      <Route exact path="/search" component={SearchForm} />
    </main>
  );
}
