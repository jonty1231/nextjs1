import ChartSection from "@/components/ChartSection";
import HeroSection from "@/components/HeroSection";
import Transaction from "@/components/Transaction";

import React from "react";

const page = () => {
  return (<>
  <div className=" mb-20 md:ms-20  md:mb-0">
    <HeroSection />
    <ChartSection />
    <Transaction />
  </div>
 
  </>
  )




  
};

export default page;
