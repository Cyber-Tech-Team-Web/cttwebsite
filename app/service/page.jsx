import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Image from 'next/image'
import { FaFigma } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiAppstore } from "react-icons/si";



function page() {

  

  const array = [
    {
      id: 1,
      icon: FaFigma,
      title: "UI / UX Design",
      text: "Building an extended team with Courtney is just like opening your own remote development center, but without the hassle."

    },
    {
      id: 2,
      icon: TbBrandJavascript,
      title: "Frontend Development",
      text: "IT Staff Augmentation is a service designed to add extra talent to your team on an on-demand basis. This allows businesses to immediately find the right fit for hard-to-fill or temporary positions, which boosts the scalability and efficiency of project development."

    },
    {
      id: 3,
      icon: FaNodeJs,
      title: "Backend Development",
      text: "Today, organizations all over the world deal with software outsourcing companies to have access to experienced software engineers with a variety of tech expertise ranging from user experience design to blockchain consulting."

    },
    {
      id: 4,
      icon: SiAppstore,
      title: "App Development",
      text: "Courtney is a trustworthy partner that can help you open your own remote development center and grow your business from Sri Lanka and United Kingdom."

    },

  ]  

  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      
      
      <div id='heropic' className='hidden lg:flex md:flex'>
        <div className='bg-black h-[408px] w-screen bg-opacity-50 '>
          <div className='text-white py-24 flex flex-col items-center justify-center text-center gap-4'>
            <p className='text-[60px] font-semibold'>Our Services</p>
            <p className='w-[450px]'>We specialize in helping you build a team of expert developers.</p>
          </div>
        </div>
      </div>

                          {/*responsive Hero page */}
      <div id='herosmall' className='md:hidden lg:hidden' >
        <div className='bg-black h-full w-screen bg-opacity-50 rounded-bl-[100px]'>
          <div className='text-white py-10 lg:py-24 flex flex-col items-center justify-center text-center lg:gap-4'>
            <p className='text-[30px] md:text-[60px] lg:text-[60px] font-semibold'>Our Services</p>
            <p className='w-[450px] font-thin lg:font-normal md:font-normal '>We specialize in helping you build a team of expert developers.</p>
          </div>
        </div>
      </div>

                          {/*get Quality */}

      <div className=' px-4 lg:px-20 py-10 lg:py-24 flex flex-col gap-20'>
        <div className='text-[#16205F] lg:w-[600px] flex flex-col gap-4'>
          <p className='text-[30px] lg:text-[46px]  font-semibold'>Get Quality and Efficient Website and Applications.</p>
          <p className=' w-[70%]'>From full-time remote engineering teams to hourly contractors, work with remote devs as needed</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 '> 
        {
          array.map((array) => (
            
            <div className='flex flex-col lg:flex-row md:flex-row gap-4' key={array.id}>
              <array.icon size={60} className='bg-yellow-400 text-black rounded-xl p-2 '/>
              <div className='text-[#16205F] w-[500px]'>
                <p className='text-[25px] font-semibold pb-2'>{array.title}</p>
                <p className='w-[70%] lg:w-[100%] md:w-[100%]'>{array.text}</p>
              </div>
            </div>
          ))
        }
        </div>

      </div>

                                        {/*Contact form */}


      <div className='flex flex-col lg:flex-row text-[#16205F] items-center pl-4 pr-4 lg:pr-0 lg:pl-20 relative py-10 '>
        <div>
          <Image src='/images/contact.jpg' alt='image' width={900} height={800}/>
        </div>
        <div className='w-[90%] lg:w-[50%] flex flex-col gap-14 bg-white  lg:p-20 rounded-tl-[100px] lg:absolute right-10'>
          <div>
            <p className='pt-4 lg:pt-0 text-[30px] lg:text-[46px] font-semibold leading-tight lg:w-[500px] text-[#16205F]'>Connect with our great team today!</p>
          </div>
          <form action="">
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
              <div className='flex flex-col gap-2 pb-5'>
                <label className='font-semibold'>Company</label>
                <input type="text" placeholder='Your company name' required className=' border  lg:w-[300px] h-[48px] p-2 rounded-lg'/>
              </div>
              <div className='flex flex-col gap-2 pb-5'>
                <label className='font-semibold'>Your Name</label>
                <input type="text" placeholder='John Doe' required className=' border lg:w-[300px] h-[48px] p-2 rounded-lg'/>
              </div>
              <div className='flex flex-col gap-2 pb-5'>
                <label className='font-semibold'>Phone Number</label>
                <input type="text" placeholder='ex. +234 8949 444' required className=' border lg:w-[300px] h-[48px] p-2 rounded-lg'/>
              </div>
              <div className='flex flex-col gap-2 pb-5'>
                <label className='font-semibold'>Email</label>
                <input type="email" placeholder='ex. johndoe@gmail.com'required className=' border lg:w-[300px] h-[48px] p-2 rounded-lg'/>
              </div>
              <div className='flex flex-col'>
                <label className='font-semibold' >Project Details</label>
                <textarea placeholder='tell us about your project' required className=' border lg:w-[610px] h-[100px] p-2 rounded-lg'></textarea>
              </div>
            </div>
              <div className='flex   gap-2 py-2'>
                <input type="checkbox" name="checkmail" id="checkmail" />
                <p>By sending this form I confirm that I have read and accept the <strong>Privacy Policy</strong></p>
              </div>
              <button type='submit' className='h-[40px] lg:w-[300px] w-[100%]  bg-gradient-to-r from-[#ED7901] to-[#FCB81F] mt-4 rounded-lg'>Get Consultation</button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default page