import React from "react";
import { Router } from "./Router/Router";
import { GlobalContextState } from "./Context/globalContextState";

const App = () => {
  const testando = "blblalala";
  return (
    <GlobalContextState.Provider value={testando}>
      <Router />
    </GlobalContextState.Provider>
  );
};

export default App;
