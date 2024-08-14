'use client'
import Image from 'next/image';
import transactionSvg from "@/assist/images/transaction.svg"
import transaction2Svg from "@/assist/images/transaction2.svg"
import expanceSvg from "@/assist/images/expance.svg"
import homeSvg from "@/assist/images/home.svg"
import Link from 'next/link';
import budgetSvg from "@/assist/images/budget.svg"
import profilSvg from "@/assist/images/profile.svg"
import incomeSvg from "@/assist/images/income.svg"
import addButtonSvg from "@/assist/images/addbutton.svg"
import { useState } from 'react';


const Nav = () => {

const [homeAdd,setHomeAdd]=useState(false)

  return (
   <section className='   '>
    <nav className=' fixed bg-white  bottom-0 rounded-t-md md:rounded-none  w-screen md:w-20 flex md:flex-col justify-between md:h-screen md:py-3 py-1 items-center px-2 z-20'>
   <Link  href="/" className={`flex flex-col items-center text-sm  text-[#7F3DFF]`}>
    <Image  src={homeSvg} alt='Home'/>
    <p>Home</p>
   </Link>
<Link href="/transaction" className={`flex flex-col items-center text-sm text-[#C6C6C6]`}>
<Image src={transactionSvg} alt="Transaction" />
<p>Transaction</p>
</Link>
<div onClick={()=>setHomeAdd(!homeAdd)} className={`p-2 relative bottom-6 md:bottom-0 md:left-5 rounded-full ${homeAdd?" bg-[#CACAD1]":"bg-transparent"} `}>
<Image src={addButtonSvg} alt='addbutton' className={`${homeAdd?"rotate-[225deg]":"rotate-0"} duration-200`} />

</div> 
<Link href="/budget" className={`flex flex-col items-center text-sm text-[#C6C6C6]`}>
<Image src={budgetSvg} alt='Budget' />
<p>Budget</p>
</Link>
<Link href="/profil" className={`flex flex-col items-center text-sm text-[#C6C6C6]`}>
<Image src={profilSvg}  alt='profile'/>
<p>Profile</p>
</Link>
 
</nav>


<div className={`  relative bg-[#91919f7a]   ${homeAdd?"scale-100 h-screen w-screen":"scale-0"} origin-bottom md:origin-left duration-300 `}> <Link href="/income" onClick={()=>setHomeAdd(!homeAdd)}>
 <Image  src={incomeSvg} alt='income' className='absolute bottom-[18.5%] left-1/4 translate-y-1/3 translate-x-1/3 md:left-[7%] md:top-[30%] '  /></Link>
 <Link href="/transfer" onClick={()=>setHomeAdd(!homeAdd)}>
 <Image  src={transaction2Svg} alt='trans'  className='absolute bottom-[30%] left-1/2 -translate-x-1/3 translate-y-1/2 md:left-[16%] md:bottom-[45%] md:translate-y-[2px]'/></Link>
 <Link href="/expense" onClick={()=>setHomeAdd(!homeAdd)}>
 <Image  src={expanceSvg} alt='expance'  className='absolute bottom-[18.5%] right-1/4 translate-y-1/3 md:left-[8.5%] md:bottom-[35%]'/></Link>

</div>


   </section>
  )
}

export default Nav