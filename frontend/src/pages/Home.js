import React, { useState } from "react";
import "./Home.css";
import Header from "../components/Header/Header.js";
import Subheader from "../components/Subheader/Subheader.js";
import Footer from "../components/Footer/Footer.js";
import Cards from "../components/Cards/Cards.js";
import Canvas from "../components/Canvas/Canvas";

function Home() {
  const [format, setGraphFormat] = useState('DFG');


  return (
    <>
      <div className="home">
        <Header />
        <Subheader getFormat={format => setGraphFormat(format)}/>
        <Cards />
        <Canvas getGraphFormat={format}/>
        <Footer />
      </div>
    </>
  );
}

export default Home;
