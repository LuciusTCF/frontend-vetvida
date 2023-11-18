import React from 'react'


const CardApp = ({item}) => {

  return (
    <div className='col-9 col-md-3 mb-4'>
        <div className="card h-100 cardhome">
            <img src={item.img} className="card-img-top" alt={item.name}/>
            <div className="card-body text-center">
                <h5 className="card-text">{item.name}</h5>
                <p className="card-text">{item.mp}</p>                
            </div>
        </div>

    </div>

  )
}

export default CardApp