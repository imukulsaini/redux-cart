
import { createStore } from "redux";

import { products } from "../data/products";

const initialState = {
inventory : null
}


function productReducer(state = initialState , action){
switch(action.type){

case "INITIALIZE":{
return {
  ...state ,
    inventory: products
}
}
default : return state ;
}
}



export const productStore = createStore(productReducer)