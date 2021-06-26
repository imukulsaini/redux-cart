import { connect } from 'react-redux';
import { addToCart } from "../../redux/cart/cart.action";

 function Products({ products , addToCart}) {
  return products.map((item) => (
    <div key={item.id} style={{ border: "1px solid black", padding: "0.5rem" }}>
      <h2>Name : {item.name}</h2>
      <span>
        <b>Rs :</b>
        {item.price}
      </span>
      <br />

      <button onClick={() => addToCart(item)}>Add to cart </button>
    </div>
  ));
}

function mapStateToProps(state) {
  return {
    products: state.products.inventory
  };
}
const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
