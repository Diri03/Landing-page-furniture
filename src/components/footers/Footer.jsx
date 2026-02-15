import BadgeFooter from "./BadgeFooter";
import CardFooter from "./CardFooter";

const Footer = () => {
  return (
    <section
      id="footer-section"
      className="bg-gray-900 relative w-full font-sans h-251.5 md:h-128.25 py-18.5 px-6.25 text-white flex flex-col md:px-25 mt-25"
    >
      <div className="container">
        <div className="footer-header flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center">
          <h1 className="font-bold text-[24px] leading-[100%] tracking-[0.08px] mb-5 md:mb-0">
            FurniShop
          </h1>
          <nav className="flex gap-5 text-sm mb-11.75 md:mb-0">
            <BadgeFooter title="Ig" />
            <BadgeFooter title="Fb" />
            <BadgeFooter title="Twt" />
            <BadgeFooter title="Git" />
            <BadgeFooter title="Ig" />
          </nav>
        </div>
        <div className="border my-14.75 hidden md:block"></div>
        <div className="grid grid-cols-2 md:grid-cols-5 mt-1.25 gap-y-16.25 md:gap-y-0">
          <CardFooter title="Our Products">
            <li>The Support Suite</li>
            <li>The Sales Suite</li>
            <li>Support</li>
            <li>Guide</li>
          </CardFooter>
          <CardFooter title="Top Features">
            <li>Ticketing System</li>
            <li>Knowledge Base</li>
            <li>Community Forums</li>
            <li>Help Desk Software</li>
          </CardFooter>
          <CardFooter title="Resources">
            <li>Product Support</li>
            <li>Request Demo</li>
            <li>Library</li>
            <li>Peoplepower Blog</li>
          </CardFooter>
          <CardFooter title="Company">
            <li>About Us</li>
            <li>Press</li>
            <li>Investors</li>
            <li>Events</li>
          </CardFooter>
          <CardFooter title="Favourite THings">
            <li>For Enterprise</li>
            <li>For Startups</li>
            <li>For Benchmark</li>
            <li>For Small Business</li>
          </CardFooter>
        </div>
      </div>
      <div className="w-full text-center mt-15">
        &copy; NameBrand 2022 - All Rights Reserved
      </div>
    </section>
  );
};

export default Footer;
