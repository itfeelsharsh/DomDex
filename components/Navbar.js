import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsCart3 } from 'react-icons/Bs';

const Navbar = () => {
  return (
    <div>
        <div className='flex flex-col md:flex-row md:justify-start justify-between items-center py-2' >
            <div className="logo mx-50">
            <Image src="/DomDex.png" alt="logo" width={99} height={99} />
            </div>
            <div className="nav">
                <ul className="flex items-center space-x-2 font-bold md:text-xl">
                    <Link href={'/about'} ><a><li>About</li> </a></Link>
                    <Link href={'/contact'} ><a><li>Contact</li> </a></Link>
                    <Link href={'/products'} ><a><li>Products</li> </a></Link>
                </ul>
            </div>
            <div className="BsCart3 absolute right-0 top-4  mx-5">
                <BsCart3 className='text-4xl'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar