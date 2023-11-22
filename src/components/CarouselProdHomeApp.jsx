import React from 'react'
import img1 from '../assets/collage1.jpg'
import img2 from '../assets/collage2.jpg'
import img3 from '../assets/collage3.jpg'
import img4 from '../assets/collage4.jpg'

const CarouselProdHomeApp = () => {
  return (
    

    <div id="carouselExampleAutoplaying" className="carousel slide carouselproductoshome" data-bs-ride="carousel" data-bs-interval="2000">
    <div className="carousel-inner h100">
      <div className="carousel-item active">
        <img src={img1} class="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
        <img src={img2} class="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
        <img src={img3} class="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
        <img src={img4} class="d-block w-100" alt="..."/>
        </div>
      </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
    </div>


  )
}

export default CarouselProdHomeApp