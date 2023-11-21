import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarApp from '../components/NavBarApp'
import imgMainPlans from "../assets/BronzeMain1.jpg"
import imgSilverPlans from "../assets/PlanSilver.jpg"
import imgBronzePlans from "../assets/PlanBronze.png";
import imgGoldPlans from "../assets/PlanGold.png";
import "../css/plans.css"
import FormPlans from '../components/FormPlans';
import FooterApp from '../components/FooterApp'



const PlansScreen= () =>  {
  return (
    <div>

      <NavBarApp/>
<div>
  <div className="position-relative mx-auto img-main-plans ">
  <img src={imgMainPlans} className="img-fluid" alt="..."/>
  <div className="position-absolute top-0 star-0">
  <h1 className='h1-plans'>Planes que se adaptan a tus necesidades!</h1>
  </div>
</div>
</div>


<div className='container'>
 <div className="card-group">
  <div className="card cardPlans">
      <img className="card-img imgPlans mx-auto" src={imgBronzePlans} alt="" />
    <div className="card-body">
      <h5 className="card-title ">Bronce</h5>
      <ul className='list-group'>
      <li className='list-group-item'>Una mascota</li>
      <li className='list-group-item'>15% de descuento en productos</li>
      <li className='list-group-item'>Servicios veterinarios de emergencia</li>
      <li className='list-group-item'>Consultas online 24hs</li>
      </ul>
    </div>
  </div>


  <div className="card cardPlans">
     <img className="card-img imgPlans mx-auto" src={imgSilverPlans} alt="" />
    <div className="card-body">
      <h5 className="card-title">Plata</h5>
      <ul className='list-group'>
      <li className='list-group-item'>Hasta tres mascotas</li>
      <li className='list-group-item'>25% de descuento en cirujias</li>
      <li className='list-group-item'>Servicios veterinarios de emergencia</li>
      <li className='list-group-item'> Consultas online 24hs</li>
      </ul>
    </div>
  </div>
  


  <div className="card cardPlans">
     <img className="card-img imgPlans mx-auto" src={imgGoldPlans} alt="" />
    <div className="card-body">
      <h5 className="card-title">Oro</h5>
      <ul className='list-group'>
      <li className='list-group-item'>Más de tres mascotas</li>
      <li className='list-group-item'>35% de descuento en alimentos</li>
      <li className='list-group-item'>Servicios veterinarios de emergencia</li>
      <li className='list-group-item'> Consultas online 24hs</li>
      </ul>
    </div>
  </div>
</div>
</div>
<hr className="border-bottom"/>
<hr className="border-bottom"/>

<FormPlans/>

<FooterApp/>

</div>


  )
};

export default PlansScreen


