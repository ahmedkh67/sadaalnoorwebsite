
import { GalleryCell } from '@/components'
import React from 'react'


const page = () => {
  return (
   <>
        <div className="flex flex-col justify-end items-center w-full h-[300px] bg-white">
            <h1 className='text-3xl text-black font-bold font-sans text-center mb-10'>
                بعض من اعمالنا و تجاربنا مع العملاء
            </h1>
            
        </div>
        <div className="flex justify-center overflow-hidden">
            <div className="greentriangle">

            </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse bg-blue-400 flex-wrap justify-evenly items-center  w-full py-20 ">
            <GalleryCell src={'image1'} />
            <GalleryCell src={'image2'} />
            <GalleryCell src={'image3'} />
            <GalleryCell src={'image4'} />
            <GalleryCell src={'image5'} />
            <GalleryCell src={'image6'} />
            <GalleryCell src={'image7'} />
            <GalleryCell src={'image8'} />

        </div>
   </>
  )
}

export default page