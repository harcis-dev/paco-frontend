import "./App.css";
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import Home from "./pages/Home";
import CSVUpload from "./pages/CSVUpload";
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
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/upload" component={CSVUpload} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
