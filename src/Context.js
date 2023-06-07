import { createContext, useState } from "react";
import { productsData } from "./data/products-list";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {

  const [products] = useState(productsData);
  const [selectedCategory, setSelectedCategory] = useState();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [inputText, setInputText] = useState("");

  const [inCart,setInCart] = useState([])

  function filterProduct(productCategory) {    //------> filter algorithm
    if (productCategory === "All") {
      setSelectedCategory(productCategory);
      setFilteredProducts(products);
      return;
    }
    const updatedProducts = productsData.filter(
      (product) => productCategory === product.category
    );
    setFilteredProducts(updatedProducts);
    setSelectedCategory(productCategory);
  }

  function searchHandler(e) {
    setInputText(e.target.value);
  }

  const searchedProducts = filteredProducts.filter((product) => {  // ---> search algorithm
    if (inputText === "") {
      return product;
    } else {
      return product.title.toLowerCase().includes(inputText.toLowerCase());
    }
  });


  function deleteInCart(id){   //---> delete algorithm
    setInCart(prevCart => prevCart.filter(product => product.id !== id))
  }

  const value = {
    products: products,
    filterProducts: filteredProducts,
    searchedProducts: searchedProducts,
    selectedCategory: selectedCategory,
    inputText: inputText,
    inCart:inCart,

    filterProduct: filterProduct,
    searchHandler: searchHandler,
    setInCart:setInCart,
    deleteInCart:deleteInCart
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
