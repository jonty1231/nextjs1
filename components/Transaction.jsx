
import React from 'react'
import shopingimg from "@/assist/images/shopping.svg"
import subscribimg from "@/assist/images/subscrib.svg"
import foodimg from "@/assist/images/food.svg"
import Image from 'next/image'
const Transaction = ({day=0}) => {
const data=[{img:shopingimg,title:"Shopping",sugges:"Buy some grocery",discount:120,time:"10:00 AM"},{img:subscribimg,title:"Subscription",sugges:"Disney+ Annual..",discount:80,time:"03:30 PM"},{img:foodimg,title:"Food",sugges:"Buy a ramen",discount:32,time:"07:30 PM"}]


  return ( <div className='p-2'>
  {day? <p className='font-bold m-2'>{day}</p> :  <div className='flex justify-between items-center'>
    <p className='font-semibold'> Recent Transaction</p>
    <div className='text-[#7F3DFF] bg-[#EEE5FF] p-2 px-4 rounded-3xl'>See All </div>
    </div>}
  <div>
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
<p className='text-red-700 text-xl font-bold'> - ${item.discount}</p>
<p className='text-gray-600'>{item.time}</p>

</div>

    </div>
  )})}

  </div>
    </div>
  )
}

export default Transaction