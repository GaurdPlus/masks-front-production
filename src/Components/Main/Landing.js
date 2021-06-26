import React from 'react';
import CustomerNavbar from '../../Navbar/CustomerNavbar';
import disposable_mask2 from '../../assests/disposable_mask2.png';
import madeInUsa from '../../assests/made_in_usa.png';
import FDA from '../../assests/fda_approved.png';
import valveMask from '../../assests/n95_with_valve.png';
import noValveMask from '../../assests/n95_without_valve.png';
import noish from '../../assests/noish.png';
import MLMAP from '../../assests/maryland_sil-1.jpg'
import LandingContactUs from './Landing-contactUs';
import Footer from './Footer';
import MiniList from './MiniList';
 

const Landing = () => {
    return (
      <React.Fragment>

      <CustomerNavbar/>

<section className='main-bg'>

      <section className="py-5 ">
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
{/* <div className="carousel-indicators">
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div> */}
<div className="carousel-inner">


<div className="carousel-item active">
      <div className='container mt-5'>
          <div className="row">
                  <div className="col col-md-5 col-12">
                    <div className="slider_img-box">
                      <div style={{marginTop: '-4rem'}}>
                        <img src={disposable_mask2} style={{position: 'static',zIndex:0,width:'100%'}} alt="" />
                        <img src={madeInUsa} height="auto" style={{zIndex:'9999',marginTop:'-7rem',width:'75px'}} alt="" />
                        <img src={FDA} height="auto" style={{zIndex:-1,marginTop:'-7rem',marginLeft:' 20px',width:'75px'}} alt="" />
                      
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-7 col-12">
                    <div className="slider_item-detail">
                      <div>
                        <h2>
                          3-PLY DISPOSABLE FACE MASKS
                        </h2>
                        <h5>American Made</h5>

                        <p>
                          The GuardPlus 3-ply disposable mask is a one time use, breathable mask that comfortably fits most.
                           It can sustain standard use with odor resistance. Made in Maryland USA.</p>
                        <div className="d-flex">
                         
                        <a href="#contact_us" className="slider-btn2 cursor-pointer">
                            Wholesale Inquiries
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                      
                    </div>
                  </div>
              </div>



  
              <div className="carousel-item">
      <div className='container mt-5'>
          <div className="row">
                  <div className="col col-md-5 col-12">
                    <div className="slider_img-box">
                      <div style={{marginTop: '-4rem'}}>
                        <img src={valveMask} style={{position: 'static',zIndex:0,width:'100%'}} alt="" />
                        <img src={madeInUsa} height="auto" style={{zIndex:'9999',marginTop:'-7rem',width:'75px'}} alt="" />
                        {/* <img src={FDA} height="auto" style={{zIndex:-1,marginTop:'-7rem',marginLeft:' 20px',width:'75px'}} alt="" /> */}
                      
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-7 col-12">
                    <div className="slider_item-detail">
                      <div>
                        <h2>
                          N-95 Cup Mask (With Valve)
                        </h2>
                        <h5>American Made</h5>
                        <img src={noish}
                         height="auto" width='205px'
                         alt="" />

                        <p style={{marginTop:'10px'}}>
                        We offer a valve option for our N-95 masks. This enhances breathability and allows industry professionals to keep cooler for longer.
                      </p>
                      {/* <p className="m-0"> */}
                        <ul className="list-unstyled mt-3">
                          <li>- Perfect Sealing Edge Design that minimizes air leakage at the edges</li>
                          <li>- Provides ≥95% Filtration Level with a Particle Size of 0.3 Microns</li>
                          <li>- Adjustable Nose Piece and Head Straps for Tight Fit</li>
                        </ul>
                        {/* </p> */}
                       
                        <div className="d-flex">
                         
                        <a href="#contact_us" className="slider-btn2 cursor-pointer">
                            Wholesale Inquiries
                          </a>
                        </div>
                      </div>
                      
                    </div>
                  </div>

                      
                    </div>
                  </div>
              </div>
  







              <div className="carousel-item">
      <div className='container mt-5'>
          <div className="row">
                  <div className="col col-md-5 col-12">
                    <div className="slider_img-box">
                      <div style={{marginTop: '-4rem'}}>
                        <img src={noValveMask} style={{position: 'static',zIndex:0,width:'100%'}} alt="" />
                        <img src={madeInUsa} height="auto" style={{zIndex:'9999',marginTop:'-7rem',width:'75px'}} alt="" />
                        {/* <img src={FDA} height="auto" style={{zIndex:-1,marginTop:'-7rem',marginLeft:' 20px',width:'75px'}} alt="" /> */}
                      
                      </div>
                    </div>
                  </div>
                 
                 
                  <div className="col col-md-7 col-12">
                    <div className="slider_item-detail">
                      <div>
                        <h2>
                          N-95 Cup Mask
                        </h2>
                        <h5>American Made</h5>
                        <img src={noish}
                         height="auto" width='205px'
                         alt="" />
                        <p style={{marginTop:'10px'}}>
                        The GuardPlus N-95 mask utilizes a cup design
                        and over the head straps to obtain best in class filtration
                         for your safety.</p>

                         {/* <div className="m-0"> */}
                          <ul className="list-unstyled m-0">
                            <li>- Perfect Sealing Edge Design that minimizes air leakage at the edges</li>
                            <li>- Provides ≥95% Filtration Level with a Particle Size of 0.3 Microns</li>
                            <li>- Adjustable Nose Piece and Head Straps for Tight Fit</li>
                          </ul>
                          {/* </div> */}
                       
                        <div className="d-flex">
                        
                          <a href="#contact_us" className="slider-btn2 cursor-pointer">
                            Wholesale Inquiries
                          </a>
                        </div>
                      </div>
                      
                    </div>
                  </div>

                      
                    </div>
                  </div>
              </div>











</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>
</div>

</section></section>

{/* =================>>>>>>>>>>>Mask Selection <<<<<<<<<<======================= */}
  
<MiniList/>
{/* =================>>>>>>>>>>>Mask Selection End<<<<<<<<<<======================= */}


{/* ============================>>>>>>carousel end<<<<<<<================================= */}

<div className="about_section-bg">

<section className="about_section py-5">
<div className="container-fluid">
  <div className="row mt-4">
    <div className="col-md-5 offset-md-2 col-12">
      <div className="about_detail-box">
        <h3 className="custom_heading ">
          <strong>OUR STORY</strong>
        </h3>
        <h6>"WOMAN OWNED, FAMILY OPERATED, <b>AMERICAN MADE</b>"</h6>
        <p className="">
          At GuardPlus, we believe the American people deserve high quality,
          domestic made, medical grade personal protection equipment. At 
          the beginning of the Coronavirus pandemic, we took on a social
          responsibility to come to the aid of our nation. Having years
          of experience and contacts with fabrication and conducting overseas
          business, our administration quickly developed a business plan and
          got in contact with the State of Maryland. In just a few hours time
          , the State started the process to grant funds in order to expedite
          our process, and supported us endlessly throughout our journey. We
          quickly set up our machinery, crew, and production facility, 
          in Maryland, USA to start manufacturing N-95 & disposable masks.
          </p>
          <p>#GuardPlus</p>
     
      </div>
    </div>
    <div className="col-md-4  col-12">
      <div className="about_img-box">
        <img src={MLMAP} width={'100%'} alt="" />
      </div>
    </div>
  </div>
    
</div>
</section>

</div>


{/* ============================>>>>>>About US end<<<<<<<================================= */}


<section className="PlaceHolder-Image-Section">

</section>



{/* ============================>>>>>>PlaceHolder image section end<<<<<<<================================= */}

<div id='contact_us'>
<LandingContactUs/>
  </div>  

{/* ============================>>>>>>Contact us Form section end<<<<<<<================================= */}

<Footer/>
          
      </React.Fragment>
    )
}

export default Landing
