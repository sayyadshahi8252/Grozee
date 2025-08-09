import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import subcategories from '../../Data/subcategories';
import SubcategoryList from '../../usablecomponent/SubcategoryList';
import Footer from "./Footer";
import Heading from "../../usablecomponent/Heading";
import style from './Products.module.css'

function shuffleArray(array) {
  let shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Products({ quantities, increment, decrement, totalCartCount }) {
  return (
    <div>
      <Navbar totalCartCount={totalCartCount} />
      <div className={style.mainContent}>
        <Heading colortitle="All" noncolortitle="Product" />
        <SubcategoryList
          subcategories={subcategories}
          quantities={quantities}
          increment={increment}
          decrement={decrement}
        />
      </div>

      <Footer />
    </div>
  );
}