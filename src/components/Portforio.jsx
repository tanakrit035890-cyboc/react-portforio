import { HeartIcon } from "@heroicons/react/24/outline";
import React from "react";
import Rdimg from "../assets/rd2.png";
import Smfimg from '../assets/smf.png'
import Prdtrain from '../assets/prdtrain.png'

const Portforio = () => {
  return (
    <div className="container mx-auto max-w-[1340px] p-2 pt-2 text-center bg-white rounded-md shadow-lg">
      <h2 className="text-[2.25rem] font-semibold text-balance">Portforio</h2>
      <p>Website development portfolio.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[80px] m-10 md:m-4">
        <div className="shadow-lg p-4">
          <img src={Rdimg} alt="" />
          <h3 className="pt-2 font-semibold">Repair Management System.</h3>
          <p className="text-gray-400">
            Online repair notification system. It is a system that allows users
            to report repairs to office equipment through the system without
            having to take it in for repair themselves.
          </p>
          <div className="flex flex-row gap-1 mt-2 justify-center">
            <span className="inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10">
              Html,css,javascript
            </span>
            <span className="inline-flex items-center rounded-md bg-purple-100 px-2 py-1 text-xs font-medium text-yellow-800 inset-ring inset-ring-yellow-600/20">
              Bootstrap5
            </span>
            <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 inset-ring inset-ring-red-600/10">
              php
            </span>
            <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 inset-ring inset-ring-yellow-600/20">
              Mysql
            </span>
          </div>
        </div>
        <div className="shadow-lg p-4">
          <img src={Smfimg} className="rounded-xl shadow-md" alt="" />
          <h3 className="font-semibold pt-2">Smart Dairy Farm</h3>
          <p className="text-gray-400">
            Online repair notification system. It is a system that allows users
            to report repairs to office equipment through the system without
            having to take it in for repair themselves.
          </p>
          <div className="flex flex-row gap-1 mt-2 justify-center">
            <span className="inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10">
              Html,css,javascript
            </span>
            <span className="inline-flex items-center rounded-md bg-purple-100 px-2 py-1 text-xs font-medium text-yellow-800 inset-ring inset-ring-yellow-600/20">
              Bootstrap5
            </span>
            <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 inset-ring inset-ring-red-600/10">
              php
            </span>
            <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 inset-ring inset-ring-yellow-600/20">
              Mysql
            </span>
          </div>
        </div>
        <div className="shadow-lg p-4">
          <img src={Prdtrain} alt="" />
          <h3 className="font-semibold pt-2">Prd Training.</h3>
          <p className="text-gray-400">
            Online repair notification system. It is a system that allows users
            to report repairs to office equipment through the system without
            having to take it in for repair themselves.
          </p>
          <div className="flex flex-row gap-1 mt-2 justify-center">
            <span className="inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10">
              Html,css,javascript
            </span>
            <span className="inline-flex items-center rounded-md bg-purple-100 px-2 py-1 text-xs font-medium text-yellow-800 inset-ring inset-ring-yellow-600/20">
              Bootstrap5
            </span>
            <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 inset-ring inset-ring-red-600/10">
              php
            </span>
            <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 inset-ring inset-ring-yellow-600/20">
              Mysql
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portforio;
