import React from "react";
import { Router } from "./Router/Router";
import PokeProvider from "./Context/PokeProvider";

const App = () => {
  
  return (
    <PokeProvider>
      <Router />
    </PokeProvider>
  );
};

export default App;
