import { useState,useContext } from "react";
import { ProductContext } from "../../Context";


export default function InCartProduct({ image, title, price, id }) {
  const [binHover, setBinHover] = useState(false);
  const {deleteInCart} = useContext(ProductContext)
  return (
    <div className="flex flex-row justify-center border-[1px] border-[#cc5500] items-center mt-3 bg-white rounded-2xl px-3 py-4 hover:shadow-xl cursor-pointer ">
      <i
        className={`${
          binHover ? "ri-delete-bin-5-fill" : "ri-delete-bin-5-line"  //--->delete-bin button
        } text-xl ml-2 mr-6`}
        onMouseEnter={() => setBinHover(true)}
        onMouseLeave={() => setBinHover(false)}
        onClick={()=>deleteInCart(id)}
      ></i>
      <img src={image} className=" w-[50px] h-[50px] rounded md:w-[100px] md:h-[100px] md:ml-2 md:rounded-2xl" />
      <h1 className="ml-4 w-[200px] text-[#cc5500] font-bold md:w-[600px]">{title}</h1>
      <p className="text-[#cc5500] font-bold lg:w-[60px]">{price}$</p>
    </div>
  );
}
