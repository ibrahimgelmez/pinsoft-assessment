import { useContext } from "react";

import { ProductContext } from "../../Context";
import ProductCard from "./ProductCard";

export default function ProductsList() {
  const { searchedProducts } = useContext(ProductContext);
  return (
    <div className="flex flex-col items-center p-4 sm:grid sm:gap-6 sm:p-4 md:grid-cols-2 xl:grid-cols-3">
      {searchedProducts.map((product) => (
        <ProductCard
          product={product}
          imageUrl={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
      <a href="#top">
        <i class="ri-arrow-up-line fixed  bg-gray-900 text-white px-4 py-3 rounded-[28px] text-md font-bold bottom-6 right-5">
          Go top
        </i>
      </a>
    </div>
  );
}
