import { useContext} from "react";

import { ProductContext } from "../../Context";

export default function ProductCard({ product, imageUrl, title, price }) {
  const { setInCart } = useContext(ProductContext);
  return (
    <div
      className=" w-[300px] h-[430px] mt-4 sm:w-[340px] sm:h-[450px] flex flex-col items-center justify-center bg-white shadow-xl 
    rounded-xl border-2 hover:scale-105 cursor-pointer"
    >
      <img
        src={imageUrl}
        alt="product-images"
        className="w-[240px] h-[270px] p-3 "
      />
      <p className="max-w-[250px] h-[40px] text-overflow">{title}</p>
      <p className="bg-emerald-400 px-5 py-1 text-white font-bold text-lg rounded mt-2">{`${price}$`}</p>
      <button className="px-5 py-1 mt-4 text-lg rounded-2xl bg-[#cc5500] text-white active:opacity-60" onClick={()=>setInCart(prevCart => [...prevCart,product])}>Add to Cart</button>
    </div>
  );
}
