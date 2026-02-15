import { useState } from "react";
import { getAllCategories } from "../../services/categories.service";
import { useEffect } from "react";

const Categories = () => {
  const [dataCategories, setDataCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const data = await getAllCategories();
      setDataCategories(data || []);
    } catch (error) {
      console.error("Failed to fetch Categories", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <section
      id="categories-section"
      className="relative w-full h-135 font-sans flex flex-col md:flex-row px-6.25 md:px-25 pt-25 md:gap-15"
    >
      <div className="category-head pt-20 md:pt-15 flex flex-row gap-4 md:flex-col">
        <h1 className="text-[24px] md:text-[40px] font-semibold leading-[130%] tracking-normal w-31 h-15.5 md:h-26 md:w-54.75 mb-22.25">
          New In Store Now
        </h1>
        <p className="font-normal text-[14px] md:text-[16px] leading-[170%] tracking-[1%] h-13.5 w-61.25 mb-12">
          Get the latest items immediately with promo prices
        </p>
        <div className="check-all hidden md:block">
          <span className="font-medium text-[16px] leading-[160%] tracking-[1%] underline">
            Check All
          </span>
        </div>
      </div>
      <div className="list-categories w-full flex gap-4 overflow-x-scroll -mt-20 md:mt-0">
        {dataCategories?.category?.map((category, index) => (
          <div
            key={index}
            className="image-container w-49.5 h-74.75 md:w-66.25 md:h-100 shrink-0"
          >
            <img
              src={category.image}
              alt={category.title}
              className="object-contain w-full h-full rounded-[10px] overflow-hidden"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
