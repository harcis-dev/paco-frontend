import React, { useState } from "react";
import "./Home.css";
import Header from "../components/Header/Header.js";
import Subheader from "../components/Subheader/Subheader.js";
import Footer from "../components/Footer/Footer.js";
import Cards from "../components/Cards/Cards.js";
import Canvas from "../components/Canvas/Canvas";

function Home() {
  const [format, setGraphFormat] = useState("DFG");
  const [graph, setGraph] = useState("");
  const [variant, setVariant] = useState();
  const [refresh, setRefresh] = useState("");
  const [value, setValue] = useState();
  // console.log(graph)
  // console.log(variant)

  return (
    <>
      <div className="home">
        <Header />
        <Subheader
          getFormat={(format) => setGraphFormat(format)}
          getRefresh={(refresh) => setRefresh(refresh)}
          getGraph={graph}
          getVariant={variant}
          getValue={(value) => setValue(value)}
        />
        <Cards
          getGraph={(graph) => setGraph(graph)}
          getVariant={(variant) => setVariant(variant)}
          getRefresh={refresh}
        />
        <Canvas
          getGraphFormat={format}
          getGraph={graph}
          getVariant={variant}
          getValue={value}
        />
        <Footer getGraph={graph} getVariant={variant} getFormat={format} />
      </div>
    </>
  );
}

export default Home;
