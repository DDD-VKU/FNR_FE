import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART, INCREMENT_CART } from "@/redux/reducers/cartSlice";

const CartPage = () => {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <h1 className="text-3xl">Items in Cart: {cart.numberOfItems}</h1>
      <h2 className="text-xl">Subtotal: ${cart.subTotal.toFixed(2)}</h2>

      {cart.items.map((item: any) => (
        <div key={item.product._id} className="cart-item">
          <p>{item.product.name}</p>
          <p>Price: ${item.product.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button
            onClick={() => dispatch(INCREMENT_CART(item.product._id))}
            className="increment-button"
          >
            Increment
          </button>
        </div>
      ))}

      <button
        onClick={() => {
          // Example of adding a product to the cart
          dispatch(
            ADD_TO_CART({
              product: {
                _id: "123",
                name: "Product 1",
                price: 100,
              },
              quantity: 1,
            })
          );
        }}
      >
        Add Product 1 to Cart
      </button>
      <Footer />
    </>
  );
};

export default CartPage;
