import Head from "next/head";
import Link from "next/link";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>DOMDEX - the shop</title>
        <meta name="description" content="A complete shopping web-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="trash">
        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                  <Link href={"/fruit_drinks"}>
                    <Image
                      className="lg:h-48 md:h-36 w-full object-cover object-center cursor-pointer"
                      src="/juices.gif"
                      width={1000}
                      height={400}
                      alt="juices"
                    />
                  </Link>
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                      CATEGORY
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      Fruit Drinks
                    </h1>
                    <div> <div className="leading-relaxed mb-3">Finest. Greatest. Best. Buy now! our fruit juice range made with farm fresh fruits </div> </div>
                    <div className="flex items-center flex-wrap ">
                      <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                        <Link href={'/fruit_drinks'}>Buy now!</Link>
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                  <Link href={"/fashion"}>
                    <Image
                      className="lg:h-48 md:h-36 w-full object-cover object-center cursor-pointer"
                      src="/fashion.gif"
                      width={1000}
                      height={400}
                      alt="fashion"
                    />
                  </Link>
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                      CATEGORY
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      Fashion
                    </h1>
                    <div> <div className="leading-relaxed mb-3">Cloths, Shoes, Socks, Sunglasses everything that is related to fashion we`ve it </div> </div>
                    <div className="flex items-center flex-wrap">
                      <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                      <Link href={'/fashion'}>Buy now!</Link>
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden ">
                  <Link href={"/electronics"}>
                    <Image
                      className="lg:h-48 md:h-36 w-full object-cover object-center cursor-pointer"
                      src="/electronics.gif"
                      width={1000}
                      height={400}
                      alt="electronics"
                    />
                  </Link>
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                      CATEGORY
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      Electronics
                    </h1>
                    <div> <div className="leading-relaxed mb-3">Laptops, SmartPhones, Watches, Cameras huge discount on everything only @domdex </div> </div>
                    <div className="flex items-center flex-wrap ">
                      <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                      <Link href={'/electronics'}>Buy now!</Link>
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
