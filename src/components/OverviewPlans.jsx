import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import imgMainPlans from "../assets/BronzeMain1.jpg"
import imgSilverPlans from "../assets/PlanSilver.jpg"
import imgBronzePlans from "../assets/PlanBronze.png";
import imgGoldPlans from "../assets/PlanGold.png";





const OverviewPlans= () =>  {
  return (
    
<div>
  <div class="position-relative mx-auto img-main-plans">
  <img src={imgMainPlans} className="img-fluid" alt="..."/>
  <div class="position-absolute top-0 star-0">
  <h1 className='h1-plans'>Planes que se adaptan a tus necesidades!</h1>
  </div>
</div>





<div className='container'>
<div className="card-group">
  <div className="card cardPlans">
  <img className="card-img imgPlans mx-auto" src={imgBronzePlans} alt="" />
    <div className="card-body  lili" >
      <h5 className="card-title">Bronce</h5>
      <ul className='ul-Plans'>
      <li className='ul-Plans'>Una mascota.</li>
      <li className='ul-Plans'>15% de descuento en productos.</li>
      <li className='ul-Plans'>Primera vacuna sin cargo.</li>
      <li className='ul-Plans'> Consultas online 24hs.</li>
      </ul>
   
    </div>
  </div>
  <div className="card cardPlans">
  <img className="card-img imgPlans mx-auto" src={imgSilverPlans} alt="" />
    <div className="card-body">
      <h5 className="card-title">Plata</h5>
      <p className="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </p>
   
    </div>
  </div>

  <div className="card cardPlans">
  <img className="card-img imgPlans mx-auto" src={imgGoldPlans} alt="" />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </p>
   
    </div>
  </div>
  </div>
  </div>

  
  </div>





  )
};

export default OverviewPlans


