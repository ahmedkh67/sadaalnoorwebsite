"use client "

import React from 'react'
import { Paragraph } from '.'

const Aboutsec = () => {
  return (
    <>
    <div className="flex bg-white pt-10 px-5 md:px-10  flex-col items-center justify-center">
        <div className="flex justify-center items-center ">
            
            <Paragraph title=' من نحن؟ ' dis= " نحن متخصصون في تأجير لوازم الحفلات والمناسبات بجودة عالية وبأسعار تنافسية. سواء كنت تخطط لحفل زفاف، أو عيد ميلاد، أو مناسبة خاصة، فإننا نقدم لك كل ما تحتاجه لجعل يومك مميزاً ومختلفاً"  />

        </div>
        <div className="flex md:flex-row flex-col justify-center items-center  ">
            <Paragraph title=' رسالتنا' dis='  نسعى لتوفير تجربة استثنائية لعملائنا عبر تقديم لوازم حفلات عالية الجودة، وخدمة مرنة ومتفهمة لاحتياجاتهم، لنكون شركاء في صناعة أجمل الذكريات، مهما كانت المناسبة  ' />
            <Paragraph title=' رؤيتنا' dis=' أن نكون الخيار الأول والمفضل في عالم تجهيز الحفلات والمناسبات، من خلال تقديم خدمات مبتكرة، وتجهيزات أنيقة، تلامس ذوق كل عميل وتحوّل أي مناسبة إلى لحظة لا تُنسى ' />
        </div>
     
    </div>
    <div className="flex justify-center overflow-hidden">
        <div className="greentriangle">

        </div>
    </div>
    </>
  )
}

export default Aboutsec