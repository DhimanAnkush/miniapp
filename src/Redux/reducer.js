import { GET_DATA, SORT_LOW_TO_HIGH } from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, action) => {
  switch(action.type){

    case GET_DATA: 
    return {
      ...state, data: action.payload, isLoading: false
    }
 

    default:
      return state;
  }
};
export { reducer };
