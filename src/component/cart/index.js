import { connect } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart
} from "../../redux/cart/cart.action";

function Cart({ cartItems, incrementQuantity, decrementQuantity , removeCart}) {
  return cartItems.map((item) => (
    <div key={item.id} style={{ border: "1px solid black", padding: "0.5rem" }}>
      <h2>Name : {item.name}</h2>
      <span>
        <b>Rs :</b>
        {item.price}
      </span>
      <br />
      <button onClick={() => decrementQuantity(item.id)}>-</button>{" "}
      <span>
        {" "}
        <b>Qty : </b> {item.qty}{" "}
      </span>
      <button onClick={() => incrementQuantity(item.id)}>+</button>
      <br />
      <br />
      <button
      onClick={()=>removeCart(item.id)}
      >Remove from cart </button>
    </div>
  ));
}

function mapStateToProps(state) {
  return {
    cartItems: state.cart.cartItems
  };
}

const mapDispatchToProps = (dispatch) => ({
  incrementQuantity: (id) => dispatch(incrementQuantity(id)),
  decrementQuantity: (id) => dispatch(decrementQuantity(id)),
  removeCart: (id) => dispatch(removeFromCart(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
