import React from 'react';
import style from './HeroBanner.module.css';
import banner1 from '../../assets/herobanner1.jpg';
import banner2 from '../../assets/banner2.png';
import wallpaper from '../../assets/wallpaper2.jpg'
import wallpaper2 from '../../assets/7071730.jpg'
import banner from '../../assets/banner4.jpeg'

export default function HeroBanner() {
  return (
    <div className={style.herocontainer}>
      <div className={style.banner1}>
        <img src={wallpaper} alt="Banner 1" />
      </div>
      <div className={style.banner2}>
        <img src={banner1} alt="Banner 2" />
      </div>
      <div className={style.banner3}>
        <img src={banner2} alt="Banner 3 - 1" />
        <img src={banner1} alt="Banner 3 - 2" />
        <img src={wallpaper2} alt="Banner 3 - 3" />
      </div>
    </div>
  );
}
