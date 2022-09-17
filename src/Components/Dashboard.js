import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from 'react-simple-star-rating'
import Img1 from "./assests/home1.png";
import p1 from "./assests/C.png";
import block4 from "./assests/block4.png";
import block5 from "./assests/block5.png";
import Navbar from "./Navbar";
import './dashboard.css'

export default function Dashboard() {
    const [rating, setRating] = useState(0) 
    const handleRating = (rate) => {
        setRating(rate)
        // other logic
      }
      const characters = [
        {
            id: 1,
            name: "Wonder Woman",
            alterEgo: "Diana Prince",
            alignment: "hero"
        },
        {
            id: 2,
            name: "Poison Ivy",
            alterEgo: "Pamela Lillian Isley",
            alignment: "villain"
        },
        {
            id: 3,
            name: "Black Canary",
            alterEgo: "Dinah Drake",
            alignment: "hero"
        },
        {
            id: 4,
            name: "Catwoman",
            alterEgo: "Selina Kyle",
            alignment: "villain"
        },
        {
            id: 5,
            name: "Wonder Woman",
            alterEgo: "Diana Prince",
            alignment: "hero"
        }
    ];
    
        return(
            <div>
                <Navbar/>
                <div>
                    <div className="container-fluid mt-3 block2">
                    <div className="row pt-2 pb-2">
                    <div className="col-lg col-md-12 col-sm-12 pt-3">
                        <h1 style={{fontSize:"70px", color:"#ffffff"}}>Lorem ipsum dolor amet, consectetur adipiscing.</h1>
                    </div>
                    
                    <div className="col-lg col-md-12 col-sm-12">
                    <div className="row">
                    <div className="col-lg col-md-6 col-sm-6 mb-2">
                    <div className="card-box" style={{backgroundColor: "white", borderRadius: '10px'}}>
                            <div className="card-thumbnail">
                                <img src={Img1} className="img-fluid" style={{width: "100%"}}/>
                            </div>
                            <div class="row m-3">
                            <div class="col-sm-4">
                            <img src={p1} className="img-fluid" style={{width: "50px", height:"50px", borderRadius: '6px', borderColor:"1px solid #0AB79B"}}/>
                            </div>
                            <div class="col-sm-8" style={{fontSize:"20px"}}>Eleanor Pena</div>
                            </div>
                            <div>
                                <Rating onClick={handleRating} ratingValue={rating}  size={22}/>
                            </div>
                            <p className="text-secondary mx-1">There are many variations of passages of Lorem Ipsum available,</p>
                            <hr/>
                            <div className="row mx-1">
                                                <div className="col">
                                                    <h5>Rs 2000</h5>
                                                    <p style={{fontSize:"10px"}}>Starting Price</p>
                                                </div>
                                                <div className="col">
                                                <button
                                                type="button"
                                                className="btn btn px-4 mx-3 mt-2"
                                                style={{backgroundColor: "black"}}
                                                >
                                                <b style={{color:"#ffffff"}}>Select</b>
                                                </button>
                                                </div>

                                            </div>
                        </div>
                    </div>
                    <div className="col-lg col-md-6 col-sm-6 mb-2">
                    <div className="card-box" style={{backgroundColor: "white", borderRadius: '10px'}}>
                            <div className="card-thumbnail">
                                <img src={Img1} className="img-fluid" style={{width: "100%"}}/>
                            </div>
                            <div class="row m-3">
                            <div class="col-sm-4">
                            <img src={p1} className="img-fluid" style={{width: "50px", height:"50px", borderRadius: '6px', borderColor:"1px solid #0AB79B"}}/>
                            </div>
                            <div class="col-sm-8" style={{fontSize:"20px"}}>Eleanor Pena</div>
                            </div>
                            <div>
                                <Rating onClick={handleRating} ratingValue={rating} size={22} />
                            </div>
                            <p className="text-secondary mx-1">There are many variations of passages of Lorem Ipsum available,</p>
                            <hr/>
                            <div className="row mx-1">
                                                <div className="col">
                                                    <h5>Rs 2000</h5>
                                                    <p style={{fontSize:"10px"}}>Starting Price</p>
                                                </div>
                                                <div className="col">
                                                <button
                                                type="button"
                                                className="btn btn px-4 mx-3 mt-2"
                                                style={{backgroundColor: "black"}}
                                                >
                                                <b style={{color:"#ffffff"}}>Select</b>
                                                </button>
                                                </div>

                                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="row pt-2 pb-2">
                        {characters.map(character=>{
                            return(
                                <div className="col-lg col-md-6 col-sm-6 mb-1">
                                <div className="card-box" style={{backgroundColor: "white", borderRadius: '10px'}}>
                                    <div className="card-thumbnail">
                                        <img src={Img1} className="img-fluid" style={{width: "100%"}}/>
                                    </div>
                                    <div class="row mx-3 mb-1 mt-2">
                                    <div class="col-sm-4">
                                    <img src={p1} className="img-fluid" style={{width: "50px", height:"50px", borderRadius: '6px', borderColor:"1px solid #0AB79B"}}/>
                                    </div>
                                    <div class="col-sm-8" style={{fontSize:"20px"}}>Eleanor Pena</div>
                                    </div>
                                    <div>
                                        <Rating onClick={handleRating} ratingValue={rating} size={23}  />
                                    </div>
                                    <p className="text-secondary mx-1">There are many variations of passages of Lorem Ipsum available,</p>
                                    <hr/>
                                    <div className="row mx-1">
                                                <div className="col">
                                                    <h5>Rs 2000</h5>
                                                    <p style={{fontSize:"10px"}}>Starting Price</p>
                                                </div>
                                                <div className="col">
                                                <button
                                                type="button"
                                                className="btn btn px-4 mx-3 mt-2"
                                                style={{backgroundColor: "black"}}
                                                >
                                                <b style={{color:"#ffffff"}}>Select</b>
                                                </button>
                                                </div>

                                            </div>
                                </div>
                            
                            </div>
                            )
                        })}
                
                    </div>
                    
                    </div>
                </div>
                <div>
                    <div className="container-fluid p-3" style={{backgroundColor:"#E7FFFB"}}>
                        <p>Velit officia consequat</p>
                        <h3>Lorem ipsum dolor sit amet</h3>
                        <div className="row mt-3 mb-3">
                            
                                {characters.map(character=>{
                                    return(
                                      
                                            <div className="col-xl col-lg-3 col-md-3 col-sm-6 pb-2 mb-2" >
                                            <div className="card-box p-1" style={{ borderRadius: '10px', border:'3px solid #07A189'}}>
                                            <div className="card-thumbnail">
                                                <img src={Img1} className="img-fluid" style={{width: "100%"}}/>
                                            </div>
                                            <div class="row mx-3 mb-1 mt-2">
                                            <div class="col-sm-4">
                                            <img src={p1} className="img-fluid" style={{width: "50px", height:"50px", borderRadius: '6px', borderColor:"1px solid #0AB79B"}}/>
                                            </div>
                                            <div class="col-sm-8" style={{fontSize:"20px"}}>Eleanor Pena</div>
                                            </div>
                                            <div>
                                                <Rating onClick={handleRating} ratingValue={rating} size={22} />
                                            </div>
                                            <p className="text-secondary mx-1">There are many variations of passages of Lorem Ipsum available,</p>
                                            <hr/>
                                            <div className="row mx-1">
                                                <div className="col">
                                                    <h5>Rs 2000</h5>
                                                    <p>Starting Price</p>
                                                </div>
                                                <div className="col">
                                                <button
                                                type="button"
                                                className="btn btn px-4 mx-3 mt-2"
                                                style={{backgroundColor: "black"}}
                                                >
                                                <b>Select</b>
                                                </button>
                                                </div>

                                            </div>
                                            </div>
                                            </div>
                                        
                                    )
                                })}

                        </div>
                    </div>
                </div>
                <div>
                    <div className="container-fluid p-3" style={{backgroundColor:"#FFFFFF"}}>
                        <div className="row">
                            <div className="col-xl-6 cl-lg-6 col-md-6 col-sm-12">
                            <img src={block4} className="img-fluid" />
                            </div>
                            <div className="col-xl-6 cl-lg-6 col-md-6 col-sm-12 mt-4 mb-4">
                            <p style={{color:"#07A189", fontSize:"20px"}}>Velit officia consequat</p>
                            <p style={{fontSize:"60px", fontStyle:"normal", fontFamily:"poppins", fontWeight:"600px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p style={{color:"#07A189", fontSize:"24px", fontStyle:"normal", fontFamily:"poppins", fontWeight:"600px"}}>Start your journey as <a><b>FreeLancer</b></a> </p>
                              
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container-fluid p-3" style={{backgroundColor:"#0AB79B"}}>
                        <div className="block5" style={{display: 'flex',alignItems: 'center', justifyContent: 'center',}}>
                            <p>Velit officia consequat</p>
                        </div>
                        <div className="block5" style={{display: 'flex',alignItems: 'center', justifyContent: 'center',}}>
                        <h2 style={{color:"#ffffff"}}>Lorem ipsum dolor sit amet</h2>
                        </div>
                        <div className="row mt-3 mb-3">
                            
                                {characters.map(character=>{
                                    return(
                                      
                                            <div className="col-xl col-lg-3 col-md-3 col-sm-6 pb-2 mb-2" >
                                            <div className="card-box" style={{ borderRadius: '10px', backgroundColor:"#ffffff"}}>
                                            <div className="card-thumbnail">
                                                <img src={block5} className="img-fluid" style={{width: "100%", height:"300px"}}/>
                                            </div>
                                            <div class="row mx-3 mb-1 mt-2">
                                            <div class="col-sm-4">
                                            <img src={p1} className="img-fluid" style={{width: "50px", height:"50px", borderRadius: '6px', borderColor:"1px solid #0AB79B"}}/>
                                            </div>
                                            <div class="col-sm-8" style={{fontSize:"20px"}}>Eleanor Pena</div>
                                            </div>
                                            <div className="row">
                                                {/* <div className="col mr-5">4.9</div> */}
                                                <div className="col"><Rating onClick={handleRating} ratingValue={rating} size={22} /></div>
                                            </div>
                                            <p className="text-secondary mx-1">There are many variations of passages of Lorem Ipsum available,</p>
                                            <hr/>
                                            <div className="row mx-1">
                                                <div className="col-6">
                                                    <h5>Rs 2000</h5>
                                                    <p>Starting Price</p>
                                                </div>
                                                <div className="col-6">
                                                <button
                                                type="button"
                                                className="btn btn px-4 mt-2"
                                                style={{backgroundColor: "black"}}
                                                >
                                                <b style={{color:"#ffffff"}}>Select</b>
                                                </button>
                                                </div>

                                            </div>
                                            </div>
                                            </div>
                                        
                                    )
                                })}

                        </div>

                    </div>
                </div>
                <div>
                    <div className="container-fluid p-3" style={{backgroundColor:"#ffffff"}}>
                            <div className="row">
                                <div className="col-xl col-lg-3 col-md-3 col-sm-6 pb-2 mb-2" >
                                <Link to="#" className="nav-link text-white">
                                    <button
                                    type="button"
                                    className="btn btn px-4 mx-3"
                                    id="Navbarlogoi"
                                    >
                                    <b>Logo</b>
                                    </button>
                                </Link>
                                <p className="mt-3" style={{fontSize: "20px"}}>1901 Thornridge chirshilloh, Hawaii 81603</p>
                                </div>
                                <div className="col-xl col-lg-3 col-md-3 col-sm-6 pb-2 mb-2" >
                                <h3><b>Company</b></h3>
                                <p>About Us</p>
                                <p>career</p>
                                <p>Teams</p>
                                <p>Contact</p>
                                </div>
                                <div className="col-xl col-lg-3 col-md-3 col-sm-6 pb-2 mb-2" >
                                <h3><b>Product</b></h3>
                                <p>Service</p>
                                <p>Freelancers</p>
                                <p>Features</p>
                                <p>Development</p>
                                </div>
                                <div className="col-xl col-lg-3 col-md-3 col-sm-6 pb-2 mb-2" >
                                <h3><b>Links</b></h3>
                                <p>Privacy Policy</p>
                                <p>Terms and conditions</p>
                                <p>FAQ</p>
                                </div>
                                <div className="col-xl col-lg-3 col-md-3 col-sm-6 pb-2 mb-2" >
                                <h3><b>Follow Us</b></h3>
                                <div className="row">
                                    <div className="col "><i className="fa-brands fa-square-twitter fa-3x"></i></div>
                                    <div className="col "><i className="fa-brands fa-square-facebook fa-3x"></i></div>
                                    <div className="col "><i className="fa-brands fa-square-instagram fa-3x"></i></div>
                                </div>
                                </div>
                            </div>
                    </div>
                </div>

            </div>

        )
    }
