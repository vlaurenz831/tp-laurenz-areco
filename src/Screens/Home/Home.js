import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SeccionMovie from "../../components/SeccionMovie/SeccionMovie";
import Buscador from "../../components/Buscador/Buscador";

function Home() {
  return (
    <>
      <Header />
      <Buscador />
      <h2>Películas populares</h2>
      <SeccionMovie />
      <Footer />
    </>
  );
}

export default Home;