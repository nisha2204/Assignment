import React, { useEffect, useRef, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import ellips1 from "../assests/Ellipse 5.png";
import ellips2 from "../assests/Ellipse 6.png";
import Slider from "react-slick";
import "./Freelancer.css";

const Freelancer = () => {
  const [freelancers, setFreelancers] = useState([]);
  const sliderRef = useRef(null);
  console.log(sliderRef.current)

  useEffect(() => {
    fetch("/freelancer.json")
      .then((res) => res.json())
      .then((data) => setFreelancers(data));
  }, []);
   let settings = {
     dots: true,
     infinite: false,
     speed: 500,
     slidesToShow: 4,
     slidesToScroll: 4,
     initialSlide: 0,
     autoplay: true,
      autoplaySpeed: 2000,
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           dots: true,
         },
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
           initialSlide: 2,
         },
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
         },
       },
     ],
   };
  //  
  return (
    <>
      <section className="f-slider">
        <div className="d-flex justify-content-around mb-5">
          <div className="f-heading">
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <h3>Trending Freelancer</h3>
          </div>
          <div className="d-flex justify-content-center align-items-center  fre-res">
            <div className="setting-btn1">
              <button
                className="freela-btn"
                style={{ outline: "none", background: "none", border: "none" }}
                onClick={() => console.log(sliderRef.current.slickNext())}
              >
                <img
                  className="d-block m-auto mt-2"
                  src="https://i.ibb.co/RcJSV3K/leftarrow.png"
                  alt=""
                />
              </button>
            </div>
            <div className="setting-btn">
              <button
                style={{ outline: "none", background: "none", border: "none" }}
                className="freela-btn"
                onClick={() => console.log(sliderRef.current.slickPrev())}
              >
                <img
                  className="d-block m-auto mt-2"
                  src="https://i.ibb.co/TBLMRbh/rightarrow.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
        <div>
          <img className="ellips2" src={ellips2} alt="" />
          <img className="ellips1" src={ellips1} alt="" />
        </div>
        <div className="row">
          <Slider ref={sliderRef} {...settings}>
            {freelancers.map((freelancer) => (
              <div
                key={freelancer.id}
                className="col-md-4 col-sm-6 col-lg-2 mb-5 f-cards d-block m-auto"
              >
                <div className="card f-card h-100">
                  <img
                    style={{ height: "102px", width: "102px" }}
                    src={freelancer.img}
                    className="card-img-top d-block m-auto p-2 mt-3"
                    alt="..."
                  />
                  <div>
                    <h5 className="card-title text-center f-name">
                      {freelancer.name}
                    </h5>
                    <p className="f-position">{freelancer.position}</p>
                    <div className="text-center" style={{ color: "#ECB800" }}>
                      <span className="text-dark fw-bold">5.0</span>{" "}
                      <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
                      <AiFillStar /> <AiFillStar />
                    </div>
                    <p className="card-text f-des">{freelancer.description}</p>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-around text-center mb-4">
                    <div>
                      <span>
                        <BsFillBriefcaseFill />
                      </span>
                      <p className="m-0" style={{ color: "#888888" }}>
                        Projects
                      </p>
                      <span
                        style={{
                          "font-weight": "500",
                          "font-family": "Poppins",
                        }}
                      >
                        90+
                      </span>
                    </div>
                    <div>
                      <span>
                        <BsFillBriefcaseFill />
                      </span>
                      <p className="m-0" style={{ color: "#888888" }}>
                        Projects
                      </p>
                      <span
                        style={{
                          "font-weight": "500",
                          "font-family": "Poppins",
                        }}
                      >
                        90+
                      </span>
                    </div>
                    <div>
                      <span>
                        <BsFillBriefcaseFill />
                      </span>
                      <p className="m-0" style={{ color: "#888888" }}>
                        Projects
                      </p>
                      <span
                        style={{
                          "font-weight": "500",
                          "font-family": "Poppins",
                        }}
                      >
                        90+
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Freelancer;
