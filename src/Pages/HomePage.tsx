import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <img
        style={{ width: "100%", height: "700px" }}
        className="homeimage"
        src="https://media.giphy.com/media/3o7rc0qU6m5hneMsuc/giphy.gif"
        alt="img"
      />
      <Footer />
    </div>
  );
}
