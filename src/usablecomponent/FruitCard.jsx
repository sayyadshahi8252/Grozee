import React from 'react';
import style from './VegetableCard.module.css'; 
import subcategories from '../Data/subcategories';

export default function FruitCard({ quantities, increment, decrement }) {
  const fruits = subcategories.filter(item => item.categoryId === 2);

  return (
    <div className={style.container}>
      {fruits.map(({ id, title, image, price, discount }) => {
        const discountedPrice = price - discount;
        const qty = quantities[id] || 0;

        return (
          <div key={id} className={style.card}>
            <div className={style.imageSection}>
              <img src={image} alt={title} />
            </div>
            <div className={style.title}>{title}</div>

            <div className={style.priceSection}>
              <span className={style.originalPrice}>₹{price}</span>
              <span className={style.discountedPrice}>₹{discountedPrice}</span>
            </div>

            {qty === 0 ? (
              <button
                className={style.addToCartBtn}
                onClick={() => increment(id)}
              >
                Add to Cart
              </button>
            ) : (
              <div className={style.qtyControls}>
                <button
                  className={style.qtyBtn}
                  onClick={() => decrement(id)}
                  aria-label={`Decrease quantity of ${title}`}
                >
                  −
                </button>
                <span className={style.qtyDisplay}>{qty}</span>
                <button
                  className={style.qtyBtn}
                  onClick={() => increment(id)}
                  aria-label={`Increase quantity of ${title}`}
                >
                  +
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
