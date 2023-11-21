"use client"
import Image from 'next/image'

import { useRef,  } from 'react';

import {LuMenuSquare} from 'react-icons/lu'
import {FaRegWindowClose} from 'react-icons/fa'
import Link from 'next/link'


function Navbar() {

    const menuRef = useRef(null);
    const closeRef = useRef(null);
    const listRef = useRef(null);

    
        const menuOpen = () => {
            
            menuRef.current.style.display = 'none'
            closeRef.current.style.display = 'flex'
            listRef.current.style.display = 'flex'
        };
    
        function menuClose  () {
             closeRef.current.style.display = 'none'
             menuRef.current.style.display = 'block'
            listRef.current.style.display = 'none'
        }
    

    
  return (
    <div className='w-screen relative'>
        <div className='flex justify-between bg-white items-center py-4 px-4 lg:px-24 '>
            <div >
            <Link href="/"><Image src="/images/logo.png" alt="Logo" width={80} height={80} /></Link>
            </div>

            <div className='hidden lg:flex'>
                <ul className=' flex gap-12 text-[18px] font-semibold '>
                    <Link href="/"><li className='hover:text-[#3A0879] cursor-pointer'>Home</li></Link>
                    <Link href="/about"><li className='hover:text-[#3A0879] cursor-pointer'>About Us</li></Link>
                    <Link href="/service"><li className='hover:text-[#3A0879] cursor-pointer'>Services</li></Link>
                    <Link href="/technologies"><li className='hover:text-[#3A0879] cursor-pointer'>Technologies</li></Link>
                   <Link href="/contact"> <li className='hover:text-[#3A0879] cursor-pointer'>Contact Us</li></Link>
                </ul>
            </div>

            <div className='hidden lg:flex'>
               <Link href="/signin"> <button className='border-[2px] w-[150px] h-[35px] border-[#3A0879] rounded-md text-[#3A0879] font-semibold'>Sign In</button></Link>
            </div>
            <div ref={menuRef} onClick={menuOpen} className='flex lg:hidden'>
                <LuMenuSquare size={40} className='text-[#3A0879]' />
            </div>
            <div  ref={closeRef}  onClick={menuClose}  className='hidden relative'>
                <FaRegWindowClose size={35} className='text-[#3A0879] fixed right-4 top-9'/>
            </div>
            

        </div>
        <div ref={listRef} className='hidden '>
                <ul className=' flex flex-col items-center w-[100%] h-screen bg-white gap-24 py-8 fixed z-50'>
                <Link href="/"><li className='hover:text-[#3A0879] cursor-pointer'>Home</li></Link>
                    <Link href="/about"><li className='hover:text-[#3A0879] cursor-pointer'>About Us</li></Link>
                    <Link href="/service"><li className='hover:text-[#3A0879] cursor-pointer'>Services</li></Link>
                    <Link href="/technologies"><li className='hover:text-[#3A0879] cursor-pointer'>Technologies</li></Link>
                   <Link href="/contact"> <li className='hover:text-[#3A0879] cursor-pointer'>Contact Us</li></Link>
                   <Link href="/signin"> <li className='text-center py-1 border-[2px] w-[150px] h-[35px] border-[#3A0879] rounded-md text-[#3A0879] font-semibold'>Sign In</li></Link>

                </ul>
            </div>
    </div>
  )
}

export default Navbar