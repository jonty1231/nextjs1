import React from 'react'
import chart from "@/assist/images/graph.svg"
import Image from 'next/image'
const ChartSection = () => {
   
  


  return (
    <div className='my-2'>
< p className='p-2 text-xl font-semibold'>Spend Frequency</p>
<div className='md:flex md:flex-row-reverse'>
<div className=' md:h-[13rem] md:w-[95%]  '>
<Image  src={chart} alt='img'  className='w-full h-full'/>
</div>
<div className='flex justify-between md:flex-col p-2'>
    <div className='text-[#FCAC12] bg-[#FCEED4] p-1 px-4 rounded-2xl font-semibold '>
        Today
    </div>
    <div  className=' p-1 px-4 rounded-2xl  text-[gray] '>
     Week
    </div>
    <div  className=' p-1 px-4 rounded-2xl  text-[gray] '>
      Month
    </div>
    <div  className=' p-1 px-4 rounded-2xl  text-[gray]'>
       Year
    </div>
</div>
</div>
    </div>
  )
}

export default ChartSection