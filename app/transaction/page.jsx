import React from 'react'
import Transaction from "@/components/Transaction";
import { IoIosArrowDown } from "react-icons/io";
import barSvg from "@/assist/images/bars.svg"
import Image from 'next/image';
import moneySvg from "@/assist/images/money.svg"
import carSvg from "@/assist/images/car.svg"


const page = () => {
    const data=[{img:moneySvg,title:"Salary",sugges:"Salary for July",discount:120,time:"04:30 PM",typ:"add"},{img:carSvg,title:"Transporation",sugges:"Charging tesla",discount:18,time:"08:30 PM" ,typ:"loose"}]
  return (
    <div className='mb-20 md:ms-20  md:mb-0 '>
        <div className='flex justify-between px-4 mt-2'>
            <div className="flex gap-` items-center">
       <IoIosArrowDown /> Month
            </div>
            <figure>
                <Image src={barSvg}  alt='barImg'/>
            </figure>
        </div>
        <div className='flex justify-between items-center py-2 px-6 m-3 rounded-md bg-[#d3bdffd7] text-[#7F3DFF] '>
<p>See your financial report</p>
<IoIosArrowDown  className='-rotate-90'/>
        </div>
    <Transaction  day={"Today"}/>
  <div>
  <div>
  <p className='font-bold m-3'>Yesterday</p>
  {data.map((item,index)=>{return(
    <div key={index} className='flex justify-between p-2 my-2'>
  <div className='flex gap-2 items-center'>
          <div>
        <Image  src={item.img} alt={item.title}  />
          </div>
          <div className='flex flex-col gap-1'>
            <b>{item.title}</b>
            <p className='text-gray-600'>{item.sugges}</p>
          </div>
  </div>
  
<div className='flex flex-col gap-1 items-end'>
<p className={` text-xl font-bold ${item.typ=="add"? "text-green-800":"text-red-700"}`}> { item.typ=="add"?"+":"-"} {item.discount}</p>
<p className='text-gray-600'>{item.time}</p>

</div>

    </div>
  )})}

  </div>



  </div>


    </div>
  )
}

export default page