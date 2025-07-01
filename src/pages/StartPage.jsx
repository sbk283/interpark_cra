import React from "react";
//css
import styles from "../css/StartPage.module.css";
import Header from "../components/Header";
import Slide from "../components/Slide";
import Footer from "../components/Footer";
//컴포넌트

function StartPage() {
  return (
    <>
      <div className={styles.box}>로고</div>
      <Header></Header>
      <Slide></Slide>
      <Footer></Footer>
    </>
  );
}

export default StartPage;
