import { useState } from "react";
import { getAllProducts } from "../../services/products.service";
import { useEffect } from "react";
import CardProduct from "./CardPoduct";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(3);

  const fetchProducts = async () => {
    try {
      const data = await getAllProducts(page);
      setProducts(data?.products || []);
      setTotalPages(data?.totalPages || 1);
    } catch (error) {
      console.error("Failed to fetch Products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <section
      id="poducts-section"
      className="relative w-full h-313 flex flex-col justify-start items-center mt-70 md:mt-0"
    >
      <div className="product-header">
        <h1 className="font-semibold text-[24px] md:text-[40px] leading-13.75 tracking-normal w-30.75 md:w-51.25 h-13.75 mt-17.5 md:mt-0 mb-4 mx-auto">
          All Product
        </h1>
        <p className="font-normal text-[16px] leading-[165%] tracking-normal w-85 md:w-134.75 h-17.25 md:h-13 mb-17.25 text-center">
          The products we provide only for you as our service are selected from
          the best products with number 1 quality in the world
        </p>
      </div>
      <div className="products-list grid grid-cols-2 md:grid-cols-4 gap-x-6.75 gap-y-15">
        {products?.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>

      <div className="flex items-center gap-7.5 mt-20 mb-10">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className={`w-12.5 h-12.5 flex justify-center items-center border rounded-full transition-all ${page === 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-100 cursor-pointer"}`}
        >
          <img
            src="/images/arrow-left.svg"
            alt="prev"
            className={`w-5 h-5 transition-all ${
              page === 1 ? "opacity-30" : "brightness-0 contrast-200"
            }`}
          />
        </button>

        <div className="flex gap-4">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setPage(index + 1)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                page === index + 1 ? "bg-[#23262F] w-4" : "bg-[#23262F]/20"
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className={`w-12.5 h-12.5 flex justify-center items-center border rounded-full transition-all ${page === totalPages ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-100 cursor-pointer"}`}
        >
          <img src="/images/arrow-right.svg" alt="next" className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Products;
