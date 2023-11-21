import React from 'react'
import Image from 'next/image'
import { FaPhone } from 'react-icons/fa'
import {CiMail, CiLinkedin, CiFacebook} from 'react-icons/ci'
import {IoLocationOutline} from 'react-icons/io5'
import {FaXTwitter} from 'react-icons/fa6'


function Footer() {
  return (
    <div className='w-screen h-fit  text-[#16205F]'>
        <hr/>
        <div className='py-4 flex flex-col gap-10 w-screen'>
             <div className='flex flex-col lg:flex-row justify-between gap-16 px-4 lg:px-24 items-center lg:items-start text-center lg:text-start'>
                <div className='w-[70%] md:w-[60%] lg:w-[350px] flex flex-col gap-6 text-start items-center lg:items-start'>
                    <div>
                    <Image src="/images/logo.png" alt="Logo" width={80} height={80} />

                    </div>
                    <p className='text-center lg:text-start'>Expertly trained, battle-tested, elite software developers on demand</p>
                    <div className='flex flex-col gap-6'>
                        <p className='flex gap-4'><FaPhone size={18}/> <span>+234 485 9093030</span> </p>
                        <p className='flex gap-4'><CiMail size={18}/> <span>jfdjsk@gmail.com</span> </p>
                        <p className='flex gap-4'><IoLocationOutline size={30}/> <span>Courtney Lanka (Private) LimitedLevel 35 World Trade Center Colombo 01</span> </p>
                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <p className='text-[22px] font-bold text-[#16205F]'>Company</p>
                    <div className='flex flex-col gap-6'>
                        <p>UI/UX Design</p>
                        <p>Frontend Development</p>
                        <p>Backend Development</p>
                        <p>App Development</p>
                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <p className='text-[22px] font-bold text-[#16205F]'>Services</p>
                    <div className='flex flex-col gap-6'>
                        <p>UI/UX Design</p>
                        <p>Frontend Development</p>
                        <p>Backend Development</p>
                        <p>App Development</p>
                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <p className='text-[22px] font-bold text-[#16205F]'>How to Start</p>
                    <div className='flex flex-col gap-6'>
                        <p>You Ask</p>
                        <p>We Proceed</p>
                        <p>Negogiate</p>
                        <p>You Get</p>
                    </div>
                </div>
             </div>   
             <div className='flex flex-col  gap-2 px-24 items-center lg:items-start'>
                <p className='font-bold text-[18px]'>Follow Us:</p>
                <div className='flex gap-5'>
                    <CiLinkedin size={20}/>
                    <CiFacebook size={20}/>
                    <FaXTwitter size={20}/>
                </div>
             </div>
        </div>
        <hr/>
        <div className='py-2 text-center'>
            <p>&copy; 2023 Cyber Tech Team</p>
        </div>
    </div>
  )
}

export default Footer