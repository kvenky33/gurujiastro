import React from "react";
import "./App.css";

import Home from "./Home/Home";
import Testimonials from "./Testimonials/Testimonials";
import Astrologers from "./Astrologers/Astrologers";
import Solution from "./Solution/Solution";
import Review from "./Review/Review";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Home />
      <Testimonials />
      <Astrologers />
      <Solution />
      <Review />
      <Footer />
    </div>
  );
};

export default App;
