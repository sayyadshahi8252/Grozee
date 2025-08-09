import React, { useState, useEffect, useRef } from "react";
import style from "./Navbar.module.css";
import trolly from "../../assets/trolley.gif";
import { NavLink, useNavigate } from "react-router-dom";
import subcategories from "../../Data/subcategories";

export default function Navbar({ totalCartCount }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 850);
      if (window.innerWidth > 850) {
        setSidebarOpen(false);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchResults([]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const term = searchTerm.trim().toLowerCase();

    if (term === "") {
      setSearchResults([]);
      return;
    }

   
    const matchedSubs = subcategories.filter((sub) =>
      sub.title.toLowerCase().includes(term)
    );

    setSearchResults(matchedSubs);
  }, [searchTerm]);

  function handleResultClick(sub) {
    setSearchTerm("");
    setSearchResults([]);
    setSidebarOpen(false);
    navigate(`/subcategory/${sub.categoryId}`);
  }


  return (
    <>
      <div className={style.navbarcontainer}>
        {/* Logo */}
        <NavLink
          to="/"
          className={style.sidebarLogo}
          onClick={() => setSidebarOpen(false)}
        >
          <p className={style.logo}>
            <span className={style.logoHighlight}>Gr</span>ozee
            <img src={trolly} alt="Trolley" className={style.logoImg} />
          </p>
        </NavLink>

       
        {!isMobile && (
          <ul className={style.navlinks}>
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? style.activeLink : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? style.activeLink : "")}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? style.activeLink : "")}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? style.activeLink : "")}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        )}

        {/* Search bar */}
        <div className={style.search} style={{ position: "relative" }} ref={searchRef}>
          <input
            type="text"
            placeholder="Search products..."
            className={style.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className={style.searchBtn}
            onClick={() => {
              if (searchResults.length > 0) {
                handleResultClick(searchResults[0]);
              }
            }}
          >
            Search
          </button>

         
          {searchResults.length > 0 && (
            <ul className={style.searchResultsList}>
              {searchResults.map((sub) => (
                <li
                  key={sub.id}
                  className={style.searchResultItem}
                  onClick={() => handleResultClick(sub)}
                  onMouseDown={(e) => e.preventDefault()}
                >
                  {sub.title}
                </li>
              ))}
            </ul>
          )}
        </div>

     
        <div className={style.rightside}>
          <div className={style.cart}>
            <NavLink
              to="/message"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              🛒
              <span className={style.cartCount}>{totalCartCount}</span>
            </NavLink>
          </div>
        </div>

    
        {isMobile && (
          <button
            className={style.menuButton}
            onClick={() => setSidebarOpen(true)}
            aria-label="Open Menu"
          >
            ☰
          </button>
        )}
      </div>

      {sidebarOpen && (
        <>
          <div className={style.overlay} onClick={() => setSidebarOpen(false)}></div>

          <nav className={style.sidebar}>
            <button
              className={style.closeBtn}
              onClick={() => setSidebarOpen(false)}
              aria-label="Close Menu"
            >
              &times;
            </button>
            <ul className={style.sidebarNavlinks}>
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => (isActive ? style.activeLink : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) => (isActive ? style.activeLink : "")}
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? style.activeLink : "")}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? style.activeLink : "")}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>
        </>
      )}
    </>
  );
}
