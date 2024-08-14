"use client"
import React from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";
import {  useRouter } from 'next/navigation';
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineAttachFile } from "react-icons/md";
import toggleSvg from "@/assist/images/togle.svg"
import Image from 'next/image';



const ExpenseCompo = ({bg,title,amount=0}) => {
const navigate=useRouter()
  return (
    <div className={`${bg}  `}>

<div className='p-3 text-white flex gap-32 text-xl font-semibold justify-start md:justify-between items-center'>
<FaLongArrowAltLeft  onClick={()=>navigate.push("/")} className='cursor-pointer'/>
<p>{title}</p>
</div>
<div className='p-3 mt-16 md:mt-10'>
  <p className='text-[#ebe1e1]'>How much?</p>
  <p className='text-white font-semibold text-8xl font-serif'>${amount}</p>
</div>


<div className=' p-3 bg-white rounded-t-xl'>
<div className='p-2 flex flex-col gap-5'>
<div className='flex justify-between items-center text-[#9b9595]'>
  <p>Category</p>

  <FaChevronDown />
</div>
<div className='flex justify-between items-center text-[#9b9595]'>
  <p>Description</p>

 
</div>
<div className='flex justify-between items-center text-[#9b9595]'>
  <p>Wallet</p>

  <FaChevronDown />
</div>
<div className=''>
  <label htmlFor="file" className='text-[#9b9595] flex gap-1 justify-center items-center'> <MdOutlineAttachFile />  Add attachment</label>
  <input type="file" name="" id="file" className='hidden' />
</div>
<div className='flex justify-between items-center'>
  <div>
    <b>Repeat</b>
    <p className='text-[#9b9595]'>Repeat transation</p>
  </div>
  <div><Image src={toggleSvg}   alt="togle"/></div>
</div>

</div>
<div className='text-center mt-3 '>
<button className='bg-[#7F3DFF] text-white p-2 px-14 text-xl font-bold rounded-xl'>Coninue</button>
</div>

</div>

    </div>
  )
}

export default ExpenseCompo