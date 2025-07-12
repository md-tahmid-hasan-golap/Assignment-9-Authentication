import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ErrorPage = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <section>
        <h3>Error 404</h3>
      </section>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default ErrorPage;
