import { useContext, useState } from "react";

import { ProductContext } from "../Context";

export default function FilterArea() {
  const productCtx = useContext(ProductContext);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="px-8 mt-2 sm:p-2 text-[#cc5500]">
      <div>
        <i
          onClick={() => setShowMenu((prev) => !prev)}
          className={
            showMenu ? "ri-close-line text-2xl text-[#cc5500]" : "ri-menu-2-line text-2xl text-[#cc5500]"
          }
        > Filter</i>

        <div
          className={`
          ${showMenu ? "" : "hidden sm:hidden"}
         text-sm flex flex-1 flex-col justify-center items-center 
       `}
        >
          <button
            onClick={() => {
              productCtx.filterProduct(`All`); //--> All filter button
            }}
            className={`btn ${
              productCtx.selectedCategory == "productsData"
                ? "bg-[#cc5500] text-white"
                : null
            }`}
          >
            All
          </button>

          <button
            onClick={() => {
              productCtx.filterProduct(`men's clothing`); // --> men's clothing filter button
            }}
            className={`btn ${
              productCtx.selectedCategory == "men's clothing"
                ? "bg-[#cc5500] text-white"
                : null
            }`}
          >
            Men's Clothing
          </button>

          <button
            onClick={() => productCtx.filterProduct(`jewelery`)} // --> jewelery filter button
            className={`btn ${
              productCtx.selectedCategory == "jewelery"
                ? "bg-[#cc5500] text-white"
                : null
            }`}
          >
            jewelery
          </button>

          <button
            onClick={() => productCtx.filterProduct(`electronics`)} //--> electronics filter button
            className={`btn ${
              productCtx.selectedCategory == "electronics"
                ? "bg-[#cc5500] text-white"
                : null
            }`}
          >
            electronics
          </button>

          <button
            onClick={() => productCtx.filterProduct(`women's clothing`)} // --> women's clothing filter button
            className={`btn ${
              productCtx.selectedCategory == "women's clothing"
                ? "bg-[#cc5500] text-white"
                : null
            }`}
          >
            Women's Clothing
          </button>
        </div>
      </div>
    </div>
  );
}
