import { useState } from "react";
import { emailSubscribe } from "../../services/subscribe.service";
import DOMPurify from "dompurify";

const CTA = () => {
  const [dataEmail, setDataEmail] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizeValue = DOMPurify.sanitize(value);
    setDataEmail((prev) => ({ ...prev, [name]: sanitizeValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email: DOMPurify.sanitize(dataEmail.email),
      };

      await emailSubscribe(data);

      setDataEmail({
        email: "",
      });
      alert("Email subscribed successfully");
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  return (
    <section
      id="cta-section"
      className="relative w-full h-122.5 font-sans flex justify-center items-center text-white mt-50 md:mt-0"
    >
      <div className="absolute inset-0 -z-10 -mb-25">
        <img
          src="/images/bg-cta.svg"
          className="w-full h-full object-cover"
          alt="CTA Background"
        />
      </div>
      <div className="cta-content w-74.75 md:w-139.5 h-24.5 md:h-62 mx-auto">
        <h1 className="font-semibold text-[24px] md:text-[40px] leading-[135%] tracking-normal w-57.25 md:w-87.25 h-16 md:h-27 mb-5 text-center mx-auto">
          Get more discount Off your order
        </h1>
        <p className="font-normal text-[14px] md:text-[20px] leading-[100%] tracking-normal mb-10 text-center">
          Join our mailing list
        </p>
        <form onSubmit={handleSubmit} className="flex gap-6 mx-auto">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email address"
            className="p-6 bg-white rounded-xl w-55 md:w-[384px] text-black text-[14px] md:text-[16px]"
            value={dataEmail.email}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-26.25 md:w-38 bg-black text-white p-3.5 md:py-5 rounded-xl text-[12px] md:text-[20px] font-semibold leading-[100%] tracking-normal"
          >
            Shop Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default CTA;
