import React from 'react'
import profileImg from "@/assist/images/image.png"
import notificationImg from "@/assist/images/notification.png"
import cameradownImg from "@/assist/images/cameradown.png"
import cameraupImg from "@/assist/images/cameraup.png"
import Image from 'next/image'

const HeroSection = () => {
  return (<>
  <div className='p-2'>
<div className='flex justify-between px-4
 items-center'>
    <Image   src={profileImg} alt="profile" sizes='100' height={35} />
    <div className='flex items-center gap-1'> <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.009 6.55755L8.00009 7.30749L7.99118 6.55755C7.2017 6.56693 6.44046 6.26472 5.87244 5.71664L2.2345 2.04006L5.87976 5.68533L5.88672 5.69228L5.89386 5.69906C6.46242 6.23854 7.21631 6.53929 8.00009 6.53929C8.78386 6.53929 9.53776 6.23854 10.1063 5.69906L10.1135 5.69228L10.1204 5.68533L13.7657 2.04009L10.1277 5.71663C9.55973 6.26472 8.79848 6.56693 8.009 6.55755Z" fill="black" stroke="#7F3DFF" stroke-width="1.5"/>
</svg>
 October</div>
    <Image   src={notificationImg} alt="notification" sizes='100' height={35} />
</div>
<div className='md:flex justify-around items-center md:my-2'>
<div className=' flex flex-col items-center gap-1 text-center my-3'>
    <p className='text-[#808080cc] font-sans'>Account Balance</p>
    <b className='font-bold text-5xl font-serif'>$9400</b>
</div>
<div className='flex  justify-between gap-5 md:h-1/2'>
    
<div className='bg-[#00A86B] rounded-3xl p-2 px-3 flex gap-2 items-center text-md'> 
   <div className='pt-1 px-2 bg-white rounded-lg h-4/6'><Image  src={cameradownImg} alt='camerdown'  height={30}/></div> 
   <div className='text-white'>
<p>income</p>
<b className='font-bold text-3xl font-serif'>$5000</b>
   </div>
</div>

<div className='bg-[#FD3C4A] rounded-3xl p-2 px-3 flex items-center gap-2 text-md' > 
   <div className='pt-1 px-2  bg-white rounded-lg h-4/6'><Image  src={cameraupImg} alt='camerup'  height={30}/></div> 
   <div className='text-white'>
<p className='text-md'>Expenses</p>
<b className='font-bold text-3xl font-serif'>$1200</b>
   </div>
</div>

</div>
</div>


  </div>


  </>
  )
}

export default HeroSection
