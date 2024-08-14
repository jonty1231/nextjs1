'use client'
import Image from 'next/image';
import transactionSvg from "@/assist/images/transaction.svg"
import transaction2Svg from "@/assist/images/transaction2.svg"
import expanceSvg from "@/assist/images/expance.svg"
import homeSvg from "@/assist/images/home.svg"
import Link from 'next/link';
import budgetSvg from "@/assist/images/budget.svg"

import incomeSvg from "@/assist/images/income.svg"
import addButtonSvg from "@/assist/images/addbutton.svg"
import { useState } from 'react';

import { usePathname } from 'next/navigation'

const Nav = () => {
const path=usePathname()
const [homeAdd,setHomeAdd]=useState(false)

  return (
   <section className='   '>
    <nav className=' fixed bg-white  bottom-0 rounded-t-md md:rounded-none  w-screen md:w-20 flex md:flex-col justify-between md:h-screen md:py-3 py-1 items-center px-2 z-20'>
   <Link  href="/" className={`  flex flex-col items-center text-sm  ${path=="/"?"text-[#7F3DFF]":"text-[#C6C6C6]"} `}>
   <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.67 13.56L25.67 11.74L18 4.77998C17.45 4.28803 16.738 4.01605 16 4.01605C15.2621 4.01605 14.55 4.28803 14 4.77998L6.35002 11.78L4.35002 13.6C4.21534 13.7366 4.12282 13.9091 4.08349 14.0969C4.04416 14.2847 4.05968 14.4799 4.1282 14.6591C4.19673 14.8383 4.31535 14.994 4.46994 15.1076C4.62452 15.2213 4.80853 15.288 5.00002 15.3C5.25331 15.2885 5.49279 15.1813 5.67002 15L6.00002 14.7V25C6.00002 25.7956 6.31609 26.5587 6.8787 27.1213C7.44131 27.6839 8.20437 28 9.00002 28H23C23.7957 28 24.5587 27.6839 25.1213 27.1213C25.6839 26.5587 26 25.7956 26 25V14.74L26.33 15.04C26.5134 15.2067 26.7522 15.2993 27 15.3C27.2016 15.2995 27.3984 15.238 27.5645 15.1237C27.7305 15.0093 27.8582 14.8475 27.9306 14.6593C28.0031 14.4712 28.017 14.2655 27.9704 14.0693C27.9239 13.8731 27.8192 13.6956 27.67 13.56Z" fill={`${path=="/"?"#7F3DFF":"#C6C6C6"}`}/>
</svg>

    <p>Home</p>
   </Link>
<Link href="/transaction" className={`flex flex-col items-center text-sm ${path=="/transaction"?"text-[#7F3DFF]":"text-[#C6C6C6]"} `}>
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.1301 17.93V18.93C20.1301 19.5866 20.0007 20.2368 19.7495 20.8434C19.4982 21.4501 19.1299 22.0013 18.6656 22.4656C18.2013 22.9299 17.6501 23.2982 17.0435 23.5494C16.4369 23.8007 15.7867 23.93 15.1301 23.93H11.8701C11.8546 24.4769 11.69 25.0092 11.3939 25.4692C11.0977 25.9292 10.6815 26.2995 10.1901 26.54C9.78024 26.7448 9.32822 26.851 8.87007 26.85C8.19234 26.8541 7.53322 26.6285 7.00007 26.21L3.29007 23.3C2.92874 23.0196 2.63631 22.6603 2.43514 22.2495C2.23398 21.8387 2.12939 21.3874 2.12939 20.93C2.12939 20.4727 2.23398 20.0213 2.43514 19.6106C2.63631 19.1998 2.92874 18.8405 3.29007 18.56L7.00007 15.65C7.44707 15.2933 7.98673 15.0717 8.55545 15.0115C9.12417 14.9513 9.69826 15.0548 10.2101 15.31C10.8916 15.636 11.4165 16.2184 11.6701 16.93H19.1001C19.2339 16.926 19.3672 16.9489 19.492 16.9974C19.6168 17.0458 19.7306 17.1188 19.8267 17.2121C19.9227 17.3054 19.9991 17.417 20.0512 17.5403C20.1033 17.6636 20.1301 17.7961 20.1301 17.93Z" fill={`${path=="/transaction"?"#7F3DFF":"#C6C6C6"}`}/>
<path d="M29.8701 11.07C29.8702 11.5273 29.7657 11.9786 29.5647 12.3894C29.3636 12.8002 29.0713 13.1595 28.7101 13.44L25.0001 16.35C24.4595 16.7701 23.7947 16.9987 23.1101 17C22.652 17.0009 22.2 16.8948 21.7901 16.69C21.1086 16.364 20.5837 15.7817 20.3301 15.07H12.8701C12.6049 15.07 12.3505 14.9647 12.163 14.7771C11.9755 14.5896 11.8701 14.3352 11.8701 14.07V13.07C11.8701 11.7439 12.3969 10.4722 13.3346 9.53448C14.2723 8.5968 15.544 8.07001 16.8701 8.07001H20.1301C20.1423 7.51096 20.3105 6.96644 20.6157 6.4979C20.9209 6.02935 21.351 5.65543 21.8574 5.41834C22.3638 5.18124 22.9264 5.0904 23.4817 5.15608C24.0371 5.22175 24.563 5.44132 25.0001 5.79001L28.7101 8.70001C29.0713 8.98051 29.3636 9.33987 29.5647 9.75063C29.7657 10.1614 29.8702 10.6127 29.8701 11.07Z" fill={`${path=="/transaction"?"#7F3DFF":"#C6C6C6"}`}/>
</svg>
<p>Transaction</p>
</Link>
<div onClick={()=>setHomeAdd(!homeAdd)} className={`p-2 relative bottom-6 md:bottom-0 -left- md:left-5 rounded-full ${homeAdd?" bg-[#CACAD1]":"bg-transparent"} `}>
<Image src={addButtonSvg} alt='addbutton' className={`${homeAdd?"rotate-[225deg]":"rotate-0"} duration-200`} />

</div> 
<Link href="/budget" className={`flex flex-col items-center text-sm ${path=="/budget"?"text-[#7F3DFF]":"text-[#C6C6C6]"}`}>
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28 15H17V4C19.8412 4.22837 22.5083 5.46063 24.5239 7.47614C26.5394 9.49166 27.7716 12.1588 28 15Z" fill={`${path=="/budget"?"#7F3DFF":"#C6C6C6"}`}/>
<path d="M28 17C27.801 19.2756 26.9566 21.4471 25.566 23.2594C24.1754 25.0716 22.2965 26.4493 20.15 27.2306C18.0035 28.0119 15.6786 28.1643 13.4484 27.6699C11.2183 27.1755 9.1756 26.0549 7.56038 24.4396C5.94515 22.8244 4.82449 20.7817 4.33009 18.5516C3.83569 16.3214 3.98809 13.9965 4.76938 11.85C5.55067 9.7035 6.92839 7.82457 8.74065 6.43401C10.5529 5.04346 12.7244 4.19905 15 4V16C15 16.2652 15.1054 16.5196 15.2929 16.7071C15.4804 16.8946 15.7348 17 16 17H28Z" fill={`${path=="/budget"?"#7F3DFF":"#C6C6C6"}`}/>
</svg>

<p>Budget</p>
</Link>
<Link href="/profil" className={`flex flex-col items-center text-sm ${path=="/profil"?"text-[#7F3DFF]":"text-[#C6C6C6]"}`}>
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 16.07C19.3137 16.07 22 13.3837 22 10.07C22 6.7563 19.3137 4.07001 16 4.07001C12.6863 4.07001 10 6.7563 10 10.07C10 13.3837 12.6863 16.07 16 16.07Z" fill={`${path=="/profil"?"#7F3DFF":"#C6C6C6"}`}/>
<path d="M19 18H13C11.1435 18 9.36301 18.7375 8.05025 20.0503C6.7375 21.363 6 23.1435 6 25C6 25.7956 6.31607 26.5587 6.87868 27.1213C7.44129 27.6839 8.20435 28 9 28H23C23.7956 28 24.5587 27.6839 25.1213 27.1213C25.6839 26.5587 26 25.7956 26 25C26 23.1435 25.2625 21.363 23.9497 20.0503C22.637 18.7375 20.8565 18 19 18Z" fill={`${path=="/profil"?"#7F3DFF":"#C6C6C6"}`}/>
</svg>
<p>Profile</p>
</Link>
 
</nav>


<div className={`  relative bg-[#91919f7a]   ${homeAdd?"scale-100 h-screen w-screen":"scale-0"} origin-bottom md:origin-left duration-300 `}> <Link href="/income" onClick={()=>setHomeAdd(!homeAdd)}>
 <Image  src={incomeSvg} alt='income' className='absolute bottom-[20%] left-1/4 translate-y-1/3 translate-x-1/3 md:left-[7%] md:top-[30%] '  /></Link>
 <Link href="/transfer" onClick={()=>setHomeAdd(!homeAdd)}>
 <Image  src={transaction2Svg} alt='trans'  className='absolute bottom-[30%] left-1/2 -translate-x-1/3 translate-y-1/2 md:left-[16%] md:bottom-[45%] md:translate-y-[2px]'/></Link>
 <Link href="/expense" onClick={()=>setHomeAdd(!homeAdd)}>
 <Image  src={expanceSvg} alt='expance'  className='absolute bottom-[20%] right-1/4 translate-y-1/3 md:left-[8.5%] md:bottom-[35%]'/></Link>

</div>


   </section>
  )
}

export default Nav