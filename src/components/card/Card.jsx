import React from 'react'
import "./card.css"
const Card = () => {
  return (
 
    <div id="container" className='max-w-[50%] w-6/12 px-[15px];'>
      <div id="card" className='relative overflow-hidden rounded shadow-[0_15px_30px_0_rgba(20,50,90,0.05)] p-[15px]; @apply animate-[rotation_5s_infinite_linear];
  -webkit-animation: rotation 5s infinite linear;'> 
        <div id="icon" className='w-[140px] h-[140px] absolute right-[-30px] top-[-30px] leading-[60px] text-white text-xl opacity-10;'> 
          <img src="/assets/icons/covid-defult.svg" alt="" className=' w-full align-middle;'/>
        </div>
        <div id="info">
          <h5 className='text-lg font-medium text-[black] mt-[-15px] mb-2.5 -mx-5 px-5 py-[15px] border-b-[#3639ae] border-b border-solid;'>Total Cases</h5>
          <h3 className='text-[#3639AE] text-[35px] font-semibold mb-0;'>86503057</h3>
        </div>
      </div>
    </div>
  )
}

export default Card
