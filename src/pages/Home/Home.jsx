import React from 'react'
import HeroBanner from '../../components/Hero/HeroBanner'
import Navbar from '../../components/Navbar/Navbar'
import Card from '../../usablecomponent/Card'
import Heading from '../../usablecomponent/Heading'
import categories from '../../Data/categoriesData'
import SubcategoryList from '../../usablecomponent/SubcategoryList'
import subcategories from '../../Data/subcategories'
import Cart from '../Cart/Cart'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import VegetableCard from '../../usablecomponent/VegetableCard'
import FruitCard from '../../usablecomponent/FruitCard'
import CircularImageCarousel from '../../usablecomponent/CircularImageCursor'



export default function Home({ quantities, increment, decrement, totalCartCount }) {
    return (
        <div>
            <Navbar totalCartCount={totalCartCount} />
            <div className="container" >
                <HeroBanner />
                  <CircularImageCarousel/>
                <Heading colortitle="shop" noncolortitle="by categories" />
                <Card categories={categories} />

                <Heading colortitle="Seasonal" noncolortitle="Fruits Collection" />
                <VegetableCard
                    quantities={quantities}
                    increment={increment}
                    decrement={decrement}
                />
                <Heading colortitle="Farm-Fresh" noncolortitle="Veggies" />                
                <FruitCard quantities={quantities} increment={increment} decrement={decrement} />

                <Heading colortitle="Find" noncolortitle="What You Need" />
                <SubcategoryList
                    subcategories={subcategories}
                    quantities={quantities}
                    increment={increment}
                    decrement={decrement}
                />

            </div>
            <Footer />
        </div>
    )
}
