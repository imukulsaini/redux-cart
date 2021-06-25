import {useState} from 'react';
import "./styles.css";

export default function App() {
const [routes , setRoutes] = useState('')

  function Cart (){
    return (<>
    cart
    </>)
  }
  function Products (){

    return (
    <>
    products
    </>)
  }



  return (
    <div className="App">

    <button onClick={()=>setRoutes("products")}>Products</button>
    <button onClick={()=>setRoutes("cart")}> cart</button>
      <h2>shoping cart</h2><br/>

 
    { routes === 'products' &&  <Products/> }
    { routes === 'cart' &&  <Cart/> }

    </div>
  );
}
