import { Link } from "react-router-dom";
import "./nav.css"

export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20 }}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}

      <Link to={{pathname: "/"}}>Home</Link>
      <Link to={{pathname: '/about'}}>About</Link>
      <Link to={{pathname: "/products"}}>Products</Link>
      <Link to={{pathname: "/products/men"}}>Men</Link>
      <Link to={{pathname: "/products/women"}}>Women</Link>
      <Link to={{pathname: "/products/kids"}}>Kids</Link>
      <Link to={{pathname: '/products/homedecor'}}>Home Decor</Link>
    </nav>
  );
};
