import { useContext } from "react";
import { ProductContext } from "../Context";
import { Link } from "react-router-dom";

//local imports
import pinstorelogo from "../imgs/pinstore-logo.png";

export default function Search() {
  const { searchHandler, inputText, inCart } = useContext(ProductContext);
  return (
    <div className="flex justify-between p-2 items-center">
      <Link to={"/"}>
        <img
          src={pinstorelogo}
          alt="pinstore-logo"
          className="h-[66px] w-[70px] ml:8 md:ml-24"
        />
      </Link>

      <input
        placeholder="Search"
        className="border-2 border-white ml-6  w-[180px] px-3 py-2 rounded-3xl md:ml-36  md:w-[280px] lg:mr-[300px] xl:mr-[560px] 2xl:mr-[820px] focus:outline-none "
        onChange={searchHandler}
        value={inputText}
      ></input>

      <Link to={"/cart"}>
        <i
          className={`${
            inCart.length > 0
              ? "ri-shopping-cart-fill"
              : "ri-shopping-cart-line"
          } mr-2 text-3xl md:mr-12 text-white relative z-10`}
        >
          <p className="absolute top-[-14px] left-[-10px] text-sm px-[6px] text-[#cc5500] bg-white rounded-[14px] z-0">
            {inCart.length}
          </p>
        </i>
      </Link>
    </div>
  );
}
