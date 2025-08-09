import { useState } from 'react'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import subcategories from './Data/subcategories'
import SubcategoryPage from './pages/Home/SubcategoryPage';
import About from './pages/Home/About'
import Products from './pages/Home/Products'
import Contact from './pages/Home/Contact'
import ProductPage from './pages/Home/ProductPage'
import ScrollToTop from './pages/Home/ScrollToTop'



function App() {
  const [quantities, setQuantities] = useState({})
  const increment = (id) => {
    setQuantities(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }))
  }

  const decrement = (id) => {
    setQuantities(prev => {
      const current = prev[id] || 0;
      if (current <= 0) {
        return prev; 
      }
      return {
        ...prev,
        [id]: current - 1,
      };
    });
  };

  const totalCartCount = Object.values(quantities).reduce((a, b) => a + b, 0)
  const cartItems = subcategories
    .filter(item => quantities[item.id] !== undefined) 
    .map(item => ({
      ...item,
      quantity: quantities[item.id],
    }));




  return (
    <>

      <Routes>
       
        
        <Route
          path="/"
          element={
            <Home
              quantities={quantities}
              increment={increment}
              decrement={decrement}
              totalCartCount={totalCartCount}
            />
          }
        />
        <Route
          path="/message"
          element={
            <Cart
              cartItems={cartItems}
              increment={increment}
              decrement={decrement}
              totalCartCount={totalCartCount} 
            />
          }
        />

        <Route
          path="/subcategory/:categoryId"
          element={
            <SubcategoryPage
              quantities={quantities}
              increment={increment}
              decrement={decrement}
            />
          }
        />
        <Route path="/about" element={<About quantities={quantities} />} />

        <Route
          path="/products"
          element={
            <Products
              quantities={quantities}
              increment={increment}
              decrement={decrement}
              totalCartCount={totalCartCount}
            />
          }
        />

        <Route path="/products/:id" element={<ProductPage />} />

        <Route path="/contact" element={<Contact quantities={quantities} />} />

      </Routes>
    </>
  )
}

export default App