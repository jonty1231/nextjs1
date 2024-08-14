"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { FaLongArrowAltLeft } from "react-icons/fa";
import transactionSvg from "@/assist/images/transaction.svg"
import { MdOutlineAttachFile } from "react-icons/md";
import Image from 'next/image';
const page = () => {
  const navigate=useRouter()
  return (
    <div className={`bg-[#0077FF] mb-20 md:ms-20   md:mb-0`}>

<div className='p-3 text-white flex gap-32 text-xl font-semibold justify-start md:justify-between items-center'>
<FaLongArrowAltLeft  onClick={()=>navigate.push("/")} className='cursor-pointer'/>
<p>{"Transfer"}</p>
</div>
<div className='p-3 mt-40 md:mt-10'>
  <p className='text-[#ebe1e1]'>How much?</p>
  <p className='text-white font-semibold text-8xl font-serif'>${0}</p>
</div>


<div className=' p-3 bg-white rounded-t-xl'>
<div className='p-2 flex flex-col gap-5'>

<div className='flex  items-center gap-32  md:justify-around'>
  <p>From</p>
  <div  className='flex items-center gap-2 md:justify-around'> <Image src={transactionSvg} alt="Transaction" /> To</div>
</div>

<div className='flex justify-between items-center text-[#9b9595]'>
  <p>Description</p>

 
</div>

<div className=''>
  <label htmlFor="file" className='text-[#9b9595] flex gap-1 justify-center items-center'> <MdOutlineAttachFile />  Add attachment</label>
  <input type="file" name="" id="file" className='hidden' />
</div>


</div>
<div className='text-center my-3 '>
<button className='bg-[#7F3DFF] text-white p-2 px-14 text-xl font-bold rounded-xl'>Coninue</button>
</div>

</div>

    </div>
  )
}

export default page