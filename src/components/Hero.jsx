import React from 'react'
import Headerimage from "../assets/prom.png"


const Hero = () => {
  return (
    <div className='bg-gray-700 h-auto md:h-[37.5rem] flex items-center'>
        <div className='container mx-auto max-w-[1320px] p-10 flex flex-col md:flex-row md:justify-between md:items-center'>
            <div>
                <h1 className='text-gray-300 text-[3rem] font-semibold'>I am Tanakrit Sakulneam</h1>
                <h2 className='text-gray-400 text-[2rem] font-semibold'>Programmer: Dev Full stack</h2> <br />
                <p className='text-gray-400 text-[1rem] leading-0 font-semibold'>Age: 26</p>
            </div>
            <div>
                <img src={Headerimage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero