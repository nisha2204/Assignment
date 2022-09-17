import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <div className="features-container">
      <div className="features-text">
        <p>Lorem ipsum dolor sit amet, consectetur</p>
        <h5>Features for Your Growth</h5>
      </div>
      <div className="container">
        <div className="">
          <div className="row features-containers">
            <div className="col-md-3 col-md-4 col-6 features-img">
              <div className="features-name">
                <p>Programming</p>
              </div>
              <div>
                <img src="https://i.ibb.co/L5nCkx2/Vector.png" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 features-img">
              <div className="features-name">
                <p>Music</p>
              </div>
              <div>
                <img src="https://i.ibb.co/1ZLvNhh/music.png" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 features-img">
              <div className="features-name">
                <p>Digital Marketing</p>
              </div>
              <div>
                <img src="https://i.ibb.co/cgZXYBp/social-media-1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 features-img">
              <div className="features-name">
                <p>Design & Art</p>
              </div>
              <div>
                <img src="https://i.ibb.co/t34mCmx/Expanded.png" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 features-img">
              <div className="features-name">
                <p>Finance</p>
              </div>
              <div>
                <img src="https://i.ibb.co/t86nd79/Group-87.png" alt="" />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 features-img">
              <div>
                <img
                  src="https://i.ibb.co/J78R29M/content-writing-1.png"
                  alt=""
                />
                <div className="features-name">
                  <p>Content</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 features-img">
              <div className="features-name">
                <p>Sales & Marketing</p>
              </div>
              <div>
                <img src="https://i.ibb.co/nsfXXQM/bar-chart-1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
