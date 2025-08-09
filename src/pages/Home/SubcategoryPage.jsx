import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import subcategories from '../../Data/subcategories';
import SubcategoryList from '../../usablecomponent/SubcategoryList'; // or wherever it is
import style from './SubcategoryPage.module.css';
import Heading from '../../usablecomponent/Heading';
import Footer from './Footer';

export default function SubcategoryPage({ quantities, increment, decrement }) {
  const { categoryId } = useParams();
  const filteredSubs = subcategories.filter(
    (sub) => sub.categoryId === Number(categoryId)
  );

  const totalCartCount = Object.values(quantities).reduce((a, b) => a + b, 0);

  return (
    <div className={style.subcategoryPage}>
      <Navbar totalCartCount={totalCartCount} />
     <Heading colortitle="Item" noncolortitle="related to your search" />
      <SubcategoryList
        subcategories={filteredSubs}
        quantities={quantities}
        increment={increment}
        decrement={decrement}
      />
      <Footer/>
    </div>
  );
}
