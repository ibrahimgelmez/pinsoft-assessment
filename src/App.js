import FilterArea from "./components/FilterArea";
import ProductsList from "./components/Products/ProductsList";
import SearchAndCart from "./components/SearchAndCart";

function App() {
  return (
    <div className="bg-[#cc5500]">
      <SearchAndCart />

      <div className="flex flex-col sm:flex-row bg-[#ffe5b4]">
        <div className=" text-md md:w-1/6">
          <FilterArea />
        </div>
        <div className="  md:w-5/6">
          <ProductsList />
        </div>
      </div>
    </div>
  );
}

export default App;
