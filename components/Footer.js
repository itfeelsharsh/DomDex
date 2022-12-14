import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
<footer className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
      <Image src="/DomDex_white.png" alt="" width={100} height={100} />
      <span className="ml-3 text-xl"></span>
    </a>
    <p className="text-sm text-white-500 sm:ml-4 sm:pl-4 sm:border-l-2sm: sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 DomDex —
      <a href="https://twitter.com/itfeelsharsh" className="text-white ml-1" rel="noopener noreferrer" target="_blank">@itfeelsharsh</a>
    </p>
    <p className="text-sm text-white-500 sm:ml-4 sm:pl-4 sm:border-l-2sm: sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      <a href="https://github.com/itfeelsharsh/domdex" className="text-white ml-1" rel="noopener noreferrer" target="_blank">Source Code</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    </span>
  </div>
</footer>
    </div>
  )
}

export default Footer