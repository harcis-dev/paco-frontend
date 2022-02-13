import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "../src/components/Login/Login";
import { ThemeProvider } from "@ui5/webcomponents-react";
import React, { useState } from "react";
import useToken from "./useToken";

function App() {
  //   const { token, setToken } = useToken();

  //   if (!token) {
  //     return <Login setToken={setToken} />;
  //   }

  return (
    <div>
      <ThemeProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
