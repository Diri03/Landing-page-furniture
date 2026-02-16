import { useState } from "react";
import Pin from "./Pin";
import StatItem from "./StatItem";
import { getDataHeader } from "../../services/header.service";
import { useEffect } from "react";
import { getAllData } from "../../services/data.service";
import MenuIcon from "./MenuIcon";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dataHeader, setDataHeader] = useState({});
  const [itemData, setItemData] = useState({});

  const fetchHeader = async () => {
    try {
      const data = await getDataHeader();
      setDataHeader(data || {});
    } catch (error) {
      console.error("Failed to fetch Header", error);
    }
  };

  const fetchData = async () => {
    try {
      const data = await getAllData();
      setItemData(data || {});
    } catch (error) {
      console.error("Failed to fetch Data", error);
    }
  };

  useEffect(() => {
    fetchHeader();
    fetchData();
  }, []);

  return (
    <section className="relative w-full h-250 font-sans flex flex-col items-center">
      {/* --- BACKGROUND GROUP --- */}
      <div className="absolute inset-0 -z-10">
        <img
          src={dataHeader.banner}
          className="w-full h-212.5 object-cover object-right md:object-center"
          alt="Hero Background"
        />
        <img
          src="/images/modern-living-room-interior-1.svg"
          className="w-full object-cover"
          alt="Hero Background"
        />

        <div className="absolute top-192.75 w-full h-57.25 bg-linear-to-b from-transparent via-white/40 to-white"></div>
      </div>

      {/* --- PINS --- */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        <Pin top={350} left={190} />
        <Pin top={610} left={270} />
        <Pin top={690} left={1180} />
      </div>

      {/* --- HEADER --- */}
      <header className="w-full flex justify-between items-center pt-7 px-6 md:pl-32.5 md:pr-37.5 z-50">
        <h1 className="text-[28px] md:text-[36px] font-bold text-white leading-none">
          FurniShop
        </h1>

        {/* --- NAV PC --- */}
        <nav className="hidden md:flex gap-16 items-center text-white text-[16px] font-semibold">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Contact</a>
        </nav>

        {/* --- HAMBURGER --- */}
        <button
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuIcon />
        </button>
      </header>

      {/* --- DROPDOWN --- */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center gap-6 py-8 text-white z-40 md:hidden">
          <a href="#" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>
            Features
          </a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}

      <div className="mt-20 md:mt-35 w-87.5 px-6 md:w-230 text-center mx-auto">
        <h2 className="text-white text-[24px] md:text-[64px] font-semibold leading-[1.2] tracking-normal">
          {dataHeader.title}
        </h2>
      </div>

      <div className="mt-4 md:mt-7.5 w-88.75 px-10 md:w-170 mx-auto text-center">
        <p className="text-white text-[14px] md:text-[20px] font-normal leading-normal tracking-[1%] opacity-80 md:opacity-100">
          {dataHeader.description}
        </p>
      </div>

      <button className="mt-8 px-10 py-3 md:mt-16.25 md:px-20 md:py-4 rounded-[10px] bg-[#E2E2E2]/40 backdrop-blur-[30px] cursor-pointer transition-all duration-300 hover:bg-[#E2E2E2]/60">
        <span className="tracking-[1%] leading-normal mx-auto text-white text-[14px] md:text-[20px] font-semibold ">
          Shop Now
        </span>
      </button>

      {/* --- STATS BAR --- */}
      <div className="absolute -bottom-5.5 left-1/2 -translate-x-1/2 w-[90%] md:w-310 h-auto md:h-45 bg-[#286F6C] rounded-[20px] grid grid-cols-2 md:flex items-center justify-between py-10 px-6 md:px-15 gap-y-15 md:gap-0">
        <StatItem number={itemData.experience} label="Year Experience" />
        <div className="hidden md:block h-25 w-px bg-white/50"></div>

        <StatItem number={itemData.country} label="Opened in the country" />
        <div className="hidden md:block h-25 w-px bg-white/50"></div>

        <StatItem number={itemData.sold} label="Furniture sold" />
        <div className="hidden md:block h-25 w-px bg-white/50"></div>

        <StatItem number={itemData.variant} label="Variant Furniture" />
      </div>
    </section>
  );
};

export default Hero;
