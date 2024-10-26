import { ImSpinner9 } from "react-icons/im";
import CartPayment from "../../components/Pages/Cart/CartPayment";
import CartTop from "../../components/Pages/Cart/CartTop";
import { Link } from "react-router-dom";
import Button from "../../components/Common/Button";
import CartProduct from "../../components/Pages/Cart/CartProduct";

const Cart = () => {
  const isLoading = "";

  const cartItems = ["a"];

  return (
    <div className="grid p-3 grid-cols-1 md:grid-cols-12 gap-5 my-5">
      <div className="flex flex-col gap-5 md:col-span-8">
        <CartTop />
        {!isLoading ? (
          <div>
            {cartItems?.length ? (
              cartItems?.map((product) => (
                <div key={product?.productId}>
                  <CartProduct />
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center  justify-center">
                <span className="text-center text-xl font-bold py-10">{`There are no product (0)`}</span>
                <Link to="/" target="_self">
                  <Button>Continue Shopping</Button>
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col h-full items-center justify-center w-full">
            <ImSpinner9 className="text-6xl animate-spin text-primary" />
          </div>
        )}
      </div>
      <div className="md:col-span-4">
        <CartPayment />
      </div>
    </div>
  );
};

export default Cart;
