import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import styles from './About.module.css';
import Footer from './Footer';

export default function About({quantities}) {
   const totalCartCount = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
  return (
    <>
      <Navbar totalCartCount={totalCartCount} />
      <main className={styles.aboutContainer}>
        <h1>About Us</h1>
        <p>
          Welcome to Grozee! We are dedicated to providing the freshest, highest-quality groceries delivered right to your doorstep.
          Our mission is to simplify your shopping experience while supporting local farmers and producers.
        </p>

        <h2>Our Values</h2>
        <ul>
          <li>Freshness guaranteed – only the best products for you</li>
          <li>Reliable and timely delivery</li>
          <li>Exceptional customer service and support</li>
          <li>Sustainability and eco-friendly packaging</li>
        </ul>

        <h2>Our Story</h2>
        <p>
          Founded in 2023, Grozee started as a small local initiative with a passion for quality and community.
          Over the years, we have grown into a trusted brand, committed to bringing you farm-fresh groceries with ease.
        </p>
      </main>
      <Footer/>
    </>
  );
}
