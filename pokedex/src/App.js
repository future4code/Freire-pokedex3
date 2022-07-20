import React from "react";
import { Router } from "./Router/Router";
import { GlobalContextState } from "./Context/globalContextState";
import PokeProvider from "./Providers/PokeProvider";

const App = () => {
  const testando = "blblalala";
  return (
    <PokeProvider>
      <Router />
    </PokeProvider>
  );
};

export default App;
