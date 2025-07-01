import React from "react";
import "./IndexPage.css";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Tour from "../components/Tour";
import Trip from "../components/Trip";
import Ticket from "../components/Ticket";
import Live from "../components/Live";
import Footer from "../components/Footer";

function IndexPage() {
  return (
    <div>
      <Header></Header>
      <main>
        <Banner></Banner>
        <Tour></Tour>
        <Trip></Trip>
        <Ticket></Ticket>
        <Live></Live>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default IndexPage;
