import { DevicePhoneMobileIcon,InboxArrowDownIcon } from "@heroicons/react/24/outline";
import { div } from "framer-motion/client";
import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto max-w-[1340px] p-2  text-center bg-white rounded-md shadow-lg">
      <h1 className="text-black text-[2rem] font-semibold">Contact</h1>
      <div className="p-10 flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="text-start">
          <h1>Facebook: Tanakrit Sakulneam</h1>
          <div className="flex items-center gap-2">
            <InboxArrowDownIcon className="w-5 h-5" />
            <h1>Email: tanakrit035890@gmail.com</h1>
          </div>
          <div className="flex items-center gap-2">
            <DevicePhoneMobileIcon className="w-5 h-5" />
            <h1 className="text-base">Tel: 096-286-2406</h1>
          </div>
        
          <h1>Line ID: M_tanakrit</h1>
        </div>
        <div>
          <h1>sdfsdf</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
