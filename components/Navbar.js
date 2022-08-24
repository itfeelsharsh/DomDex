import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsCart3 } from 'react-icons/Bs';

const Navbar = () => {
  return (
<header className="text-gray-400 bg-gray-900 body-font justify-center ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
    <div className="cursor-pointer">
      <Link href={'/'}><span className="ml-3 text-xl">DOMDEX</span></Link>
      </div>
    </a>    
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
        <Link href={'/about'} ><a className="mr-5 hover:text-white">About</a></Link>
        <Link href={'/contact'} ><a className="mr-5 hover:text-white">Contact</a></Link>
        <Link href={'/products'} ><a className="mr-5 hover:text-white">Products</a></Link>
        
    
    </nav>

    <div className="BsCart3 absolute right-0 top-4  mx-5 cursor-pointer ">
                <BsCart3 className='text-4xl'/>
    </div>



  </div>
</header>
  )
}

export default Navbar