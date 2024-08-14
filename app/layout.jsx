import React from 'react'
import "@/assist/style/golblestyle.css"
import Nav from '@/components/Nav'
const layout = ({children}) => {
  return (
   <html   lang='en'>
<body>
 <div className='fixed'><Nav  /></div> 
    {children}
</body>

   </html>
  )
}

export default layout