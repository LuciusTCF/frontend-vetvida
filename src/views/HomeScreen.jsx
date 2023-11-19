import React from 'react'
import CardApp from '../components/CardApp'
import { infoProfessionals } from '../data/dataProfessionals'
import { infoComment } from '../data/dataComment'
import FooterApp from '../components/FooterApp'
import NavBarApp from '../components/NavBarApp'
import imagenhome from '../assets/home.jpg'
import SponsorsApp from '../components/SponsorsApp'
import CarouselApp from '../components/CarouselApp'
import '../css/home.css'


const HomeScreen = () => {
  return (
    <div>

        <NavBarApp />

        <div className='overlay-container'>
                <img src={imagenhome} className="imghome" alt="imagen de gato"/>
                <div className='overlay overlay-home d-flex h-100 w-100 align-items-center text-white'>
                    <p><b> VetVida </b><br /> Bindamos servicios <br /> dignos de calidez <br /> y excelencia</p>
                </div>     

        </div>


        <div>
                <div className='servicios d-flex'>
                    <p className='mx-5 my-4'><b>En VetVida te ofrecemos: </b><br /><br />
                        Consulta general <br /> Medicina preventiva: vacunación y desparasitación <br />
                        Limpieza dental <br /> Esterilizaciones <br /> Cirugías <br /> Rayos x<br />
                        Fisioterapia y rehabilitación <br /> Laboratorio clínico <br />
                        Baño y peluquería <br /> 
                    </p>
                </div>
        </div>


        <CarouselApp />

    
{/* <div className="container">
    <div className="row">
        <div className="col-9">
            <div className=" mx-2 my-2 g-3 profesionales">   
                        <p><b>Tus mascotas en las mejores manos.. nuestros profesionales:</b></p>      
                                {
                                infoProfessionals.map((item,index)=>(
                                    <CardApp key={index} item={item}/>
                                ))
                                }
                </div>
        </div>
        <div className="col">
            <SponsorsApp />
        </div>
    </div>
</div> */}

        <div >    
            <div className="row mx-2 my-2 g-3 profesionales">   
            <p><b>Tus mascotas en las mejores manos.. nuestros profesionales:</b></p>      
                    {
                    infoProfessionals.map((item,index)=>(
                        <CardApp key={index} item={item}/>
                    ))
                    }
            </div>
        </div>
          
        <SponsorsApp />

        <div>
            <div className="card mx-3 mb-5">
                <div className="card-header">
                    Gracias por confiar en nosotros:
                </div>
                    <ul className="list-group list-group-flush">
                        {
                        infoComment.map((item,index)=>(
                            <li key={index} className="list-group-item">{item.date + item.name + item.description}</li>
                        ))
                        }
                    </ul>
            </div>
        </div>


    
        <FooterApp />

    </div>
  )
}

export default HomeScreen