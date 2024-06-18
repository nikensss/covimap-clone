import React from 'react'

const Card = () => {
  return (
    <div className="bg-gray-50 ">
      <div className='info'>
        <div className="icon">
          <img scr={"public\assets\icons\covid-blue.svg"} alt="iconCovid"/>
          <div className="info">
            <h5>Total Cases</h5>
            <h3 className="block ">86503057</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
