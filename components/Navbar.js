import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsCart3 } from "react-icons/Bs";

const Navbar = () => {
  return (
    <div>
      <div className="text-gray-400 bg-gray-900 body-font">
        <div className="flex flex-col md:flex-row md:justify-start justify-between items-center py-2 shadow-xl">
          <div className="logo mx-50">
            <Link href={"/"}>
              <a>
                <Image src="/DomDex_white.png" alt="logo" width={99} height={99} />
              </a>
            </Link>
          </div>
          <div className="nav">
            <ul className="flex items-center space-x-2 font-bold md:text-x">
              <div>&nbsp;&nbsp;&nbsp;</div>
              <div className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                <Link href={"/about"}>
                  <a>
                    <li>About</li>{" "}
                  </a>
                </Link>{" "}
              </div>
              <div className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                <Link href={"/contact"}>
                  <a>
                    <li>Contact</li>{" "}
                  </a>
                </Link>
              </div>
              <div className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                <Link href={"/products"}>
                  <a>
                    <li>Products</li>{" "}
                  </a>
                </Link>
              </div>
              <div className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                &nbsp;
              </div>
            </ul>
          </div>
          <div className="BsCart3 absolute right-0 top-4  mx-5">
            <BsCart3 className="text-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
