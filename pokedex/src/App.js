import React from "react";
import { Router } from "./Router/Router";
import PokeProvider from "./Context/PokeProvider";
import GlobalStyle from "./globalStyles";

const App = () => {
  
  return (
    <PokeProvider>
      <GlobalStyle />
      <Router />
    </PokeProvider>
  );
};

export default App;
