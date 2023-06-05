import { useState,useContext } from "react";
import { ProductContext } from "../../Context";


export default function InCartProduct({ image, title, price, id }) {
  const [binHover, setBinHover] = useState(false);
  const {deleteInCart} = useContext(ProductContext)
  return (
    <div className="flex flex-row justify-center items-center mt-3 rounded-2xl px-3 py-2 cursor-pointer ">
      <i
        class={`${
          binHover ? "ri-delete-bin-5-fill" : "ri-delete-bin-5-line"  //--->delete-bin button
        } text-xl ml-2 mr-6`}
        onMouseEnter={() => setBinHover(true)}
        onMouseLeave={() => setBinHover(false)}
        onClick={()=>deleteInCart(id)}
      ></i>
      <img src={image} className=" w-[50px] h-[50px] rounded md:w-[100px] md:h-[100px] md:ml-2 md:rounded-2xl" />
      <h1 className="ml-4 w-[200px] md:w-[600px]">{title}</h1>
      <p>{price}$</p>
    </div>
  );
}
