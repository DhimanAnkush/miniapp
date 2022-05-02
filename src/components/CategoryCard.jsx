import React, { useEffect } from "react";
import { Grid } from "./Styled";
import { useParams } from "react-router";
import { getProductsData } from "../Redux/actions";
import { useDispatch , useSelector } from "react-redux";

export const CategoryCard = () => {
const params = useParams();
const category = params.category;

const dispatch = useDispatch();

  useEffect(() => {
    // dispatch filter Products for every ID change
    dispatch(getProductsData())
  }, []);

  const data = useSelector((state) => state.data)
  return (
    <Grid data-testid = "category-container">
      {/* Iterate and print product cards that are of this category */}
      {
        data.filter((e) => {
          if(e.category == category){
            return true;
          }
        })
        .map((e,index) => (
          <div key={index}>
            <h3>{e.title}</h3>
            <img src={e.image}></img>
            <h3>{e.brand}</h3>
            <h4>Rs.{e.price}</h4>
          </div>
        ))
      }
    </Grid>
  );
};
