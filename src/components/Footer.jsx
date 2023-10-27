import React from "react";
import SitrumIcon from "./SitrumIcon";

const Footer = () => {
  return (
    <div className="w-[1200px] h-[400px] ml-[288px] mt-[200px]">
      <SitrumIcon />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-12">
      <div>
          <h1 className="bg-gradient-to-r from-orange-500  via-pink-500 to-purple-500 to 10% text-transparent bg-clip-text  text-[20px] leading-10 font-medium">
            {" "}
            ABOUT
          </h1>
          <div className="text-white ">
          <ul className="text-[#FDFDFD] text-[20px] leading-5 font-medium">
        <li className="mt-6"><a href="#">Contact</a></li>
          <li className="mt-6"><a href="#">Blog</a></li>
          <li className="mt-6"><a href="#">Community</a></li>
          </ul>
        </div>
        </div>
        <div>
          <h1 className="bg-gradient-to-r from-orange-500  via-pink-500 to-purple-500 to 10% text-transparent bg-clip-text text-[20px] leading-10 font-medium">
            {" "}
            LEGAL
          </h1>
          <div className="text-white">
          <ul className="text-[#FDFDFD] text-[20px] leading-5 font-medium">
        <li className="mt-6"><a href="#">Privacy Policy</a></li>
          <li className="mt-6"><a href="#">Terms of Use</a></li>
          <li className="mt-6"><a href="#">Contributors license</a></li>
          </ul>
        </div>
        </div>
        <div>
          <h1 className="bg-gradient-to-r from-orange-500  via-pink-500 to-purple-500 to 10% text-transparent bg-clip-text text-[20px] leading-10 font-medium">
            HELP
          </h1>
          <div className="text-white">
          <ul className="text-[#FDFDFD] text-[20px] leading-5 font-medium">
        <li className="mt-6"><a href="#">Customer Support</a></li>
          <li className="mt-6"><a href="#">Troubleshooting</a></li>
          <li className="mt-6"><a href="#">Guides</a></li>
          </ul>
          </div>
        </div>
        <div>
          <h1 className="bg-gradient-to-r from-orange-500  via-pink-500 to-purple-500 to 10% text-transparent bg-clip-text text-[20px] leading-10 font-medium">
            DEVELOPERS
          </h1>
          <div className="text-white">
          <ul className="text-[#FDFDFD] text-[20px] leading-5 font-medium">
        <li className="mt-6"><a href="#">Github</a></li>
          <li className="mt-6"><a href="#">Documentation</a></li>
          <li className="mt-6"><a href="#">Audits</a></li>
          <li className="mt-6"><a href="#">Careers</a></li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
