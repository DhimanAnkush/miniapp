import React, { useEffect, useState } from "react";
import { Select } from "./Styled";
import { Grid } from "./Styled";
import { getProductsData } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './product.css'

export const Products = () => {

  const [selOption, setOption] = useState("")

  const dispatch = useDispatch();

  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
    dispatch(getProductsData())
  }, []);

  const data = useSelector((state) => state.data)
  console.log(data)

  const handleSort = (e) => {
    // dispatch sort products on change
    setOption(e.target.value);
    console.log(selOption)
  };
  return (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container">
        {/* iterate data and show each POroduct card */}
        {data.map((e) => (

          <div className="product-div">
            <Link to={{ pathname: `/products/${e.category}` }}>
              <h3>{e.title}</h3>
              <img src={e.image}></img>
              <h3>{e.brand}</h3>
              <h4>Rs.{e.price}</h4>
            </Link>
          </div>

        ))}
      </Grid>
    </>
  );
};
