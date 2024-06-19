import React from 'react'
const Card = () => {
  return (
    <div className="box-border border-indigo-800 block relative w-full p-0 text-base font-normal text-left">
      <div className='w-32 h-32 absolute text-black text-xl'>
        <div className="icon">
          <img src="/assets/icons/covid-defult.svg" alt="iconCovid"/>
          <div className="">
            <h5 className=''>Total Cases</h5>
            <h3 className="">86503057</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
