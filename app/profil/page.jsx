import React from 'react'
import profile2Svg from "@/assist/images/profil2.svg"
import Image from 'next/image'
import { BsPencil } from "react-icons/bs";
import accountSvg from "@/assist/images/account.svg" 
import settingSvg from "@/assist/images/setting.svg"
import exportSvg from "@/assist/images/export.svg"
import logoutSvg from "@/assist/images/logout.svg"

const page = () => {
  const data=[{img:accountSvg,text:"Account"},{img:settingSvg,text:"Setting"},{img:exportSvg,text:"Export Data"},{img:logoutSvg,text:"Logout"}]
  return (
    <div className='mb-20 md:ms-20  md:mb-0 bg-[#dfdbdb9c] min-h-screen'>
      <div className='flex justify-between items-center p-3'>
   <div className='flex items-center gap-1'>
    <figure>
      <Image src={profile2Svg} alt="svg" className='rounded-full overflow-hidden'  />
    </figure>
    <div>
      <p className='text-gray-600'>Username</p>
      <p className='text-2xl font-bold'>Iriana Saliha</p>
    </div>
   </div>
<div>
  <BsPencil className='text-2xl' />
</div>
   </div>

   <div className='m-5 rounded-md bg-white flex flex-col gap-3'>
{data.map((info,index)=>{return(
  <div key={index} className='flex items-center gap-1 border-b-2 my-2 p-2'>
   <figure>
    <Image src={info.img} alt={info.text} />
   </figure>
<p className='text-xl'>{info.text}</p>
  </div>
)})}
   </div>

    </div>
  )
}

export default page