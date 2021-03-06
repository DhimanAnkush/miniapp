import React from "react";
import { Routes, Route } from "react-router";
import { Navbar } from "../components/Navbar";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Products } from "../components/Products";
import { CategoryCard } from "../components/CategoryCard";

const MainRoutes = () => {
  return <>{/* Navbar and all the routes */}
  <Navbar/>
  <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/products/:category" element={<CategoryCard/>}></Route>
      </Routes>
  </>;
};
export { MainRoutes };
