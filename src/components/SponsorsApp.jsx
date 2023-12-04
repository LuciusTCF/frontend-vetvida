import React from 'react'
import marca1 from '../assets/marca1.png'
import marca2 from '../assets/marca2.png'
import marca3 from '../assets/marca3.jpg'
import marca4 from '../assets/marca4.jpg'

const SponsorsApp = () => {
  return (

  <div className='row sponsors mx-3 my-5 g-1 bg-body-secondary'>
     <div className='col-3' >
        <div className="card">
          <img src={marca1} className="card-img-top" alt="sponsor"/>
        </div>
      </div>
      <div className='col-3 ' >
        <div className="card">
          <img src={marca2} className="card-img-top" alt="sponsor"/>
        </div>
      </div>
      <div className='col-3 ' >
        <div className="card">
          <img src={marca3} className="card-img-top" alt="sponsor"/>
        </div>
        </div>
      <div className='col-3 ' >
        <div className="card">
          <img src={marca4} className="card-img-top" alt="sponsor"/>
        </div>
        
    </div>
  </div>

  )
}

export default SponsorsApp