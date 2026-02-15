import { useEffect } from "react";
import { useState } from "react";
import { getAllTestimonials } from "../../services/testimonials.service";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchTestimonials = async () => {
    try {
      const data = await getAllTestimonials(page);
      setTestimonials(data?.testimonials || []);
      setTotalPages(data?.totalPages || 1);
    } catch (error) {
      console.error("Failed to fetch Testimonials", error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, [page]);

  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <section
      id="testimonials-section"
      className="relative w-full h-120 font-sans flex flex-col md:flex-row px-6.25 md:px-25 gap-x-10.5 mt-100 md:mt-0"
    >
      <div className="testimonial-content pt-16.5">
        <h1 className="capitalize font-semibold text-[24px] md:text-[40px] leading-[130%] tracking-normal w-[288px] h-15.5 md:w-158.75 md:h-13 mb-8.25 md:mb-13.75">
          What people are saying about us
        </h1>
        {testimonials?.map((testimonial) => (
          <div key={testimonial.id}>
            <div className="flex gap-x-4 mb-7.25">
              <div className="w-10 md:w-20 h-10 md:h-20">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="object-cover rounded-full"
                />
              </div>
              <div className="people-content h-8.5 md:h-16.5 w-full flex flex-col justify-center gap-y-2.5 md:gap-y-3 py-0.75 md:py-4.75">
                <span className="font-semibold text-[14px] md:text-[20px] leading-[100%] tracking-normal">
                  {testimonial.name}
                </span>
                <span className="font-normal text-[10px] md:text-[14px] leading-[100%] tracking-normal opacity-50">
                  {testimonial.title}
                </span>
              </div>
            </div>
            <p className="text-[14px] md:text-[20px] font-normal leading-[170%] tracking-normal w-142.5 h-17 mb-7.75">
              “{testimonial.message}”
            </p>
          </div>
        ))}

        <div className="hidden md:flex mb-17 w-31 h-12.5 justify-between">
          {/* Tombol Left */}
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

          {/* Tombol Right */}
          <button
            onClick={handleNext}
            disabled={page === totalPages}
            className={`w-12.5 h-12.5 flex justify-center items-center border rounded-full transition-all ${page === totalPages ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-100 cursor-pointer"}`}
          >
            <img src="/images/arrow-right.svg" alt="next" className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="w-full md:w-140.5 h-51.25 md:h-85 mt-0 md:mt-17.5">
        <img src="/images/Testimonial.png" alt="testmonialImage" />
      </div>
      <div className="md:hidden flex mt-20 w-23 h-9 justify-between mx-auto">
        {/* Tombol Left */}
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className={`w-9 h-9 flex justify-center items-center border rounded-full transition-all ${page === 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-100 cursor-pointer"}`}
        >
          <img
            src="/images/arrow-left.svg"
            alt="prev"
            className={`w-5 h-5 transition-all ${
              page === 1 ? "opacity-30" : "brightness-0 contrast-200"
            }`}
          />
        </button>

        {/* Tombol Right */}
        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className={`w-9 h-9 flex justify-center items-center border rounded-full transition-all ${page === totalPages ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-100 cursor-pointer"}`}
        >
          <img src="/images/arrow-right.svg" alt="next" className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
