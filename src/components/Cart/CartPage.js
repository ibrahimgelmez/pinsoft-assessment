import { useContext, useState } from "react";
import { ProductContext } from "../../Context";
import InCartProduct from "./InCartProduct";
import Header from "../Header";

export default function Cart() {
  const { inCart, setInCart } = useContext(ProductContext);
  const [orderText, setOrderText] = useState("Place Order");

  function totalCost(){
    const total =inCart.map(product => product.price) //--> sum algorithm
    const sum = total.reduce((partialSum, a) => partialSum + a, 0)
    return sum
  }

  function placeOrder() {       // ---> place order function
    setOrderText("Ordering...");
    setTimeout(() => setOrderText("Place Order"), 2500);
    setTimeout(() => console.log("Succesfully ordered."), 2500);
    setTimeout(() => setInCart([]), 2500);
  }
  if (inCart.length == 0) {
    return (
      <div>
        <Header />
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-center text-4xl font-bold mt-24">Cart</h1>
          <h1 className=" text-lg md:text-2xl font-bold mt-36">
            There are no products in your cart.
          </h1>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <h1 className="text-center text-4xl font-bold mt-16 md:mt-24">Cart</h1>
      <div className="flex flex-col justify-center items-center">
        {inCart.map((product) => (
          <InCartProduct
            title={product.title}
            price={product.price}
            image={product.image}
            id={product.id}
          />
        ))}
      </div>

      <div className="flex justify-end mr-[26px] mt-4 text-lg md:mr-[240px] lg:mr-[357px] font-bold sm:text-xl">
        Total Cost: {totalCost().toLocaleString("en-US", {style: "currency", currency: "USD"})}
      </div>

      {inCart.length > 0 && (
        <div className="flex justify-center">
          <button
            onClick={placeOrder}
            className="px-8 py-4 mt-4 bg-gray-800 text-white"
          >
            {orderText}
          </button>
        </div>
      )}
    </div>
  );
}
