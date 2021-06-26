import { useState, useEffect } from "react";

import Products  from "./component/product/index";
import  Cart from "./component/cart/index";
import { connect } from 'react-redux';
import "./styles.css";

function App({ dispatch }) {
  const [api, setApi] = useState(false);
  const [routes, setRoutes] = useState("");

  useEffect(() => {
    if (api) {
      dispatch({ type: "INITIALIZE" });
    }
  }, [api]);

  return (
    <div className="App">
      <button onClick={() => setApi(true)}>call to api </button>
      <br />
      <br />
      <button onClick={() => setRoutes("products")}>Products</button>
      <button onClick={() => setRoutes("cart")}> cart</button>
      <h2>shoping cart</h2>
      <br />

      {routes === "products" && <Products />}
      {routes === "cart" && <Cart />}
    </div>
  );
}


const mapDispatchToProps = (dispatch) => ({
  dispatch
});

export default connect(null, mapDispatchToProps)(App);
