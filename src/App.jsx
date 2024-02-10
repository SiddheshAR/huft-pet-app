import React from "react";
import {
  Catsection,
  Footer,
  Hero,
  Huftsection,
  Navbar,
  Navitems,
  Sara,
  Topbrands,
  Trendingcategories,
} from "./components";

const App = () => (
  <div>
    <Navbar />
    <Navitems />
    <Hero />
    <Sara />
    <Topbrands />
    <Trendingcategories />
    <Catsection />
    <Huftsection />
    <Footer />
  </div>
);

export default App;
