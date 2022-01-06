import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { ThemeProvider } from "@ui5/webcomponents-react";

function App() {
  return (
    <div>
      <ThemeProvider>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
