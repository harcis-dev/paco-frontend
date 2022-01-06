import React, { useState } from "react";
import "./Home.css";
import Header from "../components/Header/Header.js";
import Subheader from "../components/Subheader/Subheader.js";
import Footer from "../components/Footer/Footer.js";
import Cards from "../components/Cards/Cards.js";
import Canvas from "../components/Canvas/Canvas";
import Login from "../pages/Login";

function Home() {
  const [format, setGraphFormat] = useState("DFG");
  const [graph, setGraph] = useState();
  const [variant, setVariant] = useState();

  return (
    <>
      <div className="home">
        <Header />
        <Subheader getFormat={(format) => setGraphFormat(format)} />
        <Cards
          getGraph={(graph) => setGraph(graph)}
          getVariant={(variant) => setVariant(variant)}
        />
        <Canvas getGraphFormat={format} getGraph={graph} getVariant={variant} />
        <Footer getGraph={graph} getVariant={variant} />
      </div>
    </>
  );
}

export default Home;
