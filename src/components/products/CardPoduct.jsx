const CardProduct = ({ product }) => {
  return (
    <div key={product.id} className="w-40 md:w-72.5 h-56.25 md:h-95 mb-3.75">
      <div className="aspect-square w-full h-42.5 md:h-73 flex justify-center items-center relative border rounded-xl mb-3.75 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="aspect-square object-contain"
        />
        <button className="w-6 h-6 md:w-10 md:h-10 absolute right-2 bottom-2 md:right-3 md:bottom-3 bg-gray-300 rounded-full flex items-center justify-center">
          <img
            src="/images/plus.svg"
            alt="plusIcon"
            className="w-4 h-4 md:w-5 md:h-5 object-contain"
          />
        </button>
      </div>
      <h2 className="font-semibold text-[16px] md:text-[24px] leading-[130%] tracking-normal capitalize mb-2.75">
        {product.title}
      </h2>
      <div className="price flex gap-4.5 font-normal leading-[165%] tracking-normal">
        <span className="text-[12px] md:text-[16px]">
          $
          {product.price_after_discount == null
            ? product.price
            : product.price_after_discount}
        </span>
        <span className="text-[10px] md:text-[14px] line-through text-gray opacity-30">
          {product.price_after_discount == null ? "" : `$${product.price}`}
        </span>
      </div>
    </div>
  );
};

export default CardProduct;
