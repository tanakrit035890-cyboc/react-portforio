import React from "react";
import Bruimg from '../assets/bru.png'
const Education = () => {
  return (
    <div className="container mx-auto max-w-[1320px] p-10 pt-2 text-center bg-white rounded-md shadow-lg">
      <h1 className="text-black text-[3rem] font-semibold">Education</h1>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div>
          <h1 className="text-black text-[1.5rem] font-semibold">
            จบการศึกษาที่มหาวิทยาลัยราชภัฏบุรีรัมย์
          </h1>
          <h2 className="text-gray-700 text-[1.2rem] font-semibold">
            คณะวิทยาศาสตร์ สาขาวิทยาการคอมพิวเตอร์
          </h2>
          <p className="text-gray-700 text-[1rem]  font-semibold">
            เกรดเฉลี่ย 3.41
          </p>
        </div>
        <div className="pt-4">
          <img src={Bruimg} className="rounded-md" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Education;
