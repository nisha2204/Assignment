import React from "react";
import "./OurOffer.css";

const OurOffer = () => {
  return (
    <>
      <div className="offer-section">
        <div className="row">
          <div className="col-md-6 col-12">
            <img
              className="d-block m-auto mt-5 offer-left-img"
              src="https://i.ibb.co/w7gVnQB/our-Offer-Section.png"
              alt=""
            />
          </div>
          <div className="col-md-6 col-12">
            <div className="offer-headeing">
              <p
                style={{
                  fontFamily: "Raleway",
                  fontWeight: "500",
                  marginTop: "94px",
                  marginBottom: "5px",
                  fontSize: "22px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <h3
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  color: "#FFFFFF",
                  fontSize: "40px",
                }}
              >
                What We Offer You !
              </h3>
            </div>
            <div className="mt-5">
              <div className="d-flex">
                <div className="offer-img">
                  <img
                    className="mt-3"
                    src="https://i.ibb.co/myZ4Z3N/Vector.png"
                    alt=""
                  />
                </div>
                <div className="offer-content">
                  <h5>Location By Developer</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur elit. <br /> Felis
                    donec volutpat duis diam tempor.
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="offer-img">
                  <img
                    className="mt-3"
                    src="https://i.ibb.co/fDLCZ7n/Group-53.png"
                    alt=""
                  />
                </div>
                <div className="offer-content">
                  <h5>Location By Developer</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur elit. <br /> Felis
                    donec volutpat duis diam tempor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurOffer;
