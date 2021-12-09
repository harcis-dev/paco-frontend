import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider } from "@ui5/webcomponents-react";

function App() {
  return (
    <div>
      <ThemeProvider>
        <Router>
          <Route path="/" exact component={Home} />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
