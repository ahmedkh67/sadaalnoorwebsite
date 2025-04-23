
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
            <GalleryCell src={'special1'} />
            <GalleryCell src={'special2'} />
            <GalleryCell src={'decor3'} />
            <GalleryCell src={'decor4'} />
            <GalleryCell src={'special5'} />
            <GalleryCell src={'special7'} />
            <GalleryCell src={'decor1'} />
            <GalleryCell src={'decor2'} />
            <GalleryCell src={'decor4'} />
            <GalleryCell src={'decor5'} />
            <GalleryCell src={'decor6'} />
            <GalleryCell src={'decor7'} />
            <GalleryCell src={'decor8'} />

        </div>
   </>
  )
}

export default page