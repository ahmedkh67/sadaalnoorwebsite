
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const page = () => {
  return (
   <>
        <div className="flex flex-col justify-end items-center w-full h-[300px] bg-white">
            <h1 className='text-3xl text-black font-bold font-sans text-center mb-10'>
               بكجاتنا و عروضنا الخاصة
            </h1>
            
        </div>
        <div className="flex justify-center overflow-hidden">
            <div className="greentriangle">

            </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse bg-blue-400 flex-wrap justify-evenly items-center  w-full py-20 ">

            <Link href={'https://wa.me/+966590029919'}><Image src={'/packages1.jpg'} alt='sdwd' width={300} height={400} className='m-3 ' /></Link>
            <Link href={'https://wa.me/+966590029919'}><Image src={'/packages2.jpg'} alt='sdwd' width={300} height={400} className='m-3 ' /></Link>
            <Link href={'https://wa.me/+966590029919'}><Image src={'/packages3.jpg'} alt='sdwd' width={300} height={400} className='m-3 ' /></Link>
            <Link href={'https://wa.me/+966590029919'}><Image src={'/packages4.jpg'} alt='sdwd' width={300} height={400} className='m-3 ' /></Link>
            <Link href={'https://wa.me/+966590029919'}><Image src={'/packages5.jpg'} alt='sdwd' width={300} height={400} className='m-3 ' /></Link>
            <Link href={'https://wa.me/+966590029919'}><Image src={'/packages6.jpg'} alt='sdwd' width={300} height={400} className='m-3 ' /></Link>
            <Link href={'https://wa.me/+966590029919'}><Image src={'/packages7.jpg'} alt='sdwd' width={300} height={400} className='m-3 ' /></Link>
        </div>
        
   </>
  )
}

export default page