// use axios for api call
import { GET_DATA, SORT_LOW_TO_HIGH } from "./actionTypes";

const storeData = (payload) => ({
    type: GET_DATA,
    payload: payload
})

const getProductsData = () => (dispatch) =>  {
   fetch("https://movie-fake-server.herokuapp.com/products")
   .then((res) => res.json())
   .then((res) => dispatch(storeData(res)))
   .catch((err) => dispatch(err))
}

const sortProducts = (payload) => ({
    type : SORT_LOW_TO_HIGH,
    payload
});

const filterProducts = () => {};

export { storeData, getProductsData, sortProducts, filterProducts };
