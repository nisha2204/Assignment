import React, { Component } from "react";
import { Link } from "react-router-dom";
import Img1 from "./assests/1.png";
import Img2 from "./assests/2.png";
import Img3 from "./assests/3.png";
import Img4 from "./assests/4.png";
import Img5 from "./assests/5.png";
import Img6 from "./assests/6.png";
import Logo from "./assests/Logo1.png";
import Features from "./Features/Features";
import Freelancer from "./Freelancer/Freelancer";
import OurOffer from "./OurOffer/OurOffer";

/* import AA from "./AA.png" */

export default class Task2 extends Component {
  render() {
    return (
      <div>
        <div>
          {/* ...........Page1............. */}
          <div className="page1">
            <div className="container-fluid">
              <div className="col-md">
                <div className="navbar navbar-brand">
                  <Link to="#" className="nav-link text-white">
                    <button
                      type="button"
                      className="btn btn px-4 mx-5"
                      id="Navbarlogoi"
                    >
                      <b>Logo</b>
                    </button>
                  </Link>
                  <div id="menu">
                    <ul className="nav nav-group" id="menu">
                      <li className="nav-item">
                        <Link to="#" className="nav-link text-light">
                          <button
                            type="button"
                            className="btn btn-outline-dark"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                          >
                            Login
                          </button>
                          {/* <!-- Modal --> */}
                          <div className="modal fade" id="staticBackdrop">
                            <div className="modal-dialog modal-dialog-centered">
                              <div className="modal-content py-4 px-5">
                                {/*<div className="modal-header">
                                  <h5
                                    className="modal-title"
                                    id="staticBackdropLabel"
                                  >
                                    Modal title
                                  </h5>
                                   <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button> 
                                </div>*/}
                                {/* <div className="modal-body">...</div> */}
                                {/* <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    Close
                                  </button>
                                  <button type="button" className="btn btn-primary">
                                    Understood
                                  </button> 
                                </div>*/}
                                <h3 className="text-dark text-start fw-bold m-0">
                                  Login as
                                </h3>
                                <form>
                                  <div className="text-start mt-3">
                                    <label
                                      className="text-dark"
                                      htmlFor="email"
                                    >
                                      Email Address
                                    </label>
                                    <br />
                                    <input
                                      className="text-dark w-100 login-input_box"
                                      placeholder="Enter Your Email Address"
                                      type="email"
                                      name="email"
                                      id="email"
                                    />
                                    <br />
                                    <label
                                      className="text-dark"
                                      htmlFor="password"
                                    >
                                      Password
                                    </label>
                                    <br />
                                    <input
                                      className="text-dark w-100 login-input_box"
                                      type="password"
                                      name="password"
                                      placeholder="***********"
                                      id="password"
                                    />
                                    <br />
                                  </div>
                                  <button
                                    type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop1"
                                    className="d-block"
                                    style={{
                                      border: "0px",
                                      background: "none",
                                      marginLeft: "57%",
                                      padding: "0px",
                                    }}
                                  >
                                    <p className="m-0 mb-3 mt-2 fw-bold text-dark text-end">
                                      Forgot Password?
                                    </p>
                                  </button>
                                  {/* modal with forgot password */}
                                  <div
                                    className="modal fade"
                                    id="staticBackdrop1"
                                  >
                                    <div className="modal-dialog modal-dialog-centered">
                                      <div
                                        className="modal-content py-4 px-3 justify-content-center"
                                        style={{ height: 450 }}
                                      >
                                        <div className="px-1 py-3">
                                          <h3 className="fw-bold text-dark text-start">
                                            Forgot Password
                                          </h3>
                                          <p className="fw-bold text-secondary text-start">
                                            Please enter your register email
                                            address and send
                                            <br /> 6 digit otp
                                          </p>
                                          <label
                                            className="d-block my-2 text-dark text-start"
                                            htmlFor="email1"
                                          >
                                            Email
                                          </label>
                                          <input
                                            className="text-dark w-100 login-input_box"
                                            type="email"
                                            name="email1"
                                            placeholder="Enter your email"
                                            id="email1"
                                          />
                                          <br />
                                          <button
                                            data-bs-toggle="modal"
                                            data-bs-target="#staticBackdrop2"
                                            type="submit"
                                            className="w-100 btn btn-dark px-3 my-4"
                                          >
                                            Send Otp
                                          </button>
                                          <div
                                            className="modal fade"
                                            id="staticBackdrop2"
                                          >
                                            <div className="modal-dialog modal-dialog-centered">
                                              <div
                                                className="modal-content py-4 px-3 justify-content-center"
                                                style={{ height: 450 }}
                                              >
                                                <h3 className="fw-bold text-dark text-start">
                                                  OTP Authentication
                                                </h3>
                                                <p className="fw-bold text-secondary text-start">
                                                  Please enter your register
                                                  email address and send
                                                  <br /> 6 digit otp
                                                </p>
                                                <label
                                                  className="d-block my-2 me-2 fw-bold text-dark text-start"
                                                  htmlFor="email1"
                                                >
                                                  Email
                                                </label>
                                                <div className="d-flex align-items-center">
                                                  <input
                                                    className="text-dark w-25 login-input_box mx-1"
                                                    type="email"
                                                    name="email1"
                                                    id="email1"
                                                  />
                                                  <input
                                                    className="text-dark w-25 login-input_box mx-1"
                                                    type="email"
                                                    name="email1"
                                                    id="email1"
                                                  />
                                                  <input
                                                    className="text-dark w-25 login-input_box mx-1"
                                                    type="email"
                                                    name="email1"
                                                    id="email1"
                                                  />
                                                  <input
                                                    className="text-dark w-25 login-input_box mx-1"
                                                    type="email"
                                                    name="email1"
                                                    id="email1"
                                                  />
                                                  <input
                                                    className="text-dark w-25 login-input_box mx-1"
                                                    type="email"
                                                    name="email1"
                                                    id="email1"
                                                  />
                                                  <input
                                                    className="text-dark w-25 login-input_box"
                                                    type="email"
                                                    name="email1"
                                                    id="email1"
                                                  />
                                                </div>
                                                <button
                                                  type="submit"
                                                  className="w-100 mt-5 btn btn-dark px-3"
                                                >
                                                  Sing In
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <button
                                    type="submit"
                                    className="w-100 btn btn-dark px-3"
                                  >
                                    Sing In
                                  </button>
                                  <p className="text-dark my-3 or_border">OR</p>
                                </form>
                                <p className="fw-bold text-secondary">
                                  New User Account ?{" "}
                                  <Link className="text-danger" to="/singUp">
                                    Sing Up
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link text-light">
                          <button
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdropx1"
                            className="btn btn-dark"
                          >
                            Sign up
                          </button>
                          <div className="modal fade" id="staticBackdropx1">
                            <div className="modal-dialog modal-dialog-centered">
                              <div className="modal-content py-2 px-2">
                                <div className="row">
                                  <div className="col-md-12">
                                    <form className="row g-3">
                                      <div className="col-md-6">
                                        <label
                                          for="inputEmail4"
                                          className="form-label text-dark text-start d-block"
                                        >
                                          Email
                                        </label>
                                        <input
                                          type="email"
                                          className="form-control"
                                          id="inputEmail4"
                                        />
                                      </div>
                                      <div className="col-md-6">
                                        <label
                                          for="inputPassword4"
                                          className="form-label text-dark text-start d-block"
                                        >
                                          Password
                                        </label>
                                        <input
                                          type="password"
                                          className="form-control"
                                          id="inputPassword4"
                                        />
                                      </div>
                                      <div className="col-12">
                                        <label
                                          for="inputAddress"
                                          className="form-label text-dark text-start d-block"
                                        >
                                          Address
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="inputAddress"
                                          placeholder="1234 Main St"
                                        />
                                      </div>
                                      <div className="col-12">
                                        <label
                                          for="inputAddress2"
                                          className="form-label text-dark text-start d-block"
                                        >
                                          Address 2
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="inputAddress2"
                                          placeholder="Apartment, studio, or floor"
                                        />
                                      </div>
                                      <div className="col-md-6">
                                        <label
                                          for="inputCity"
                                          className="form-label text-dark text-start d-block"
                                        >
                                          City
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="inputCity"
                                        />
                                      </div>
                                      <div className="col-md-4">
                                        <label
                                          for="inputState"
                                          className="form-label text-dark text-start d-block"
                                        >
                                          State
                                        </label>
                                        <select
                                          id="inputState"
                                          className="form-select"
                                        >
                                          <option selected>Choose...</option>
                                          <option>...</option>
                                        </select>
                                      </div>
                                      <div className="col-md-2">
                                        <label
                                          for="inputZip"
                                          className="form-label text-dark text-start d-block"
                                        >
                                          Zip
                                        </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="inputZip"
                                        />
                                      </div>
                                      <div className="col-12">
                                        <div className="form-check">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="gridCheck"
                                          />
                                          <label
                                            className="form-check-label text-dark text-start d-block"
                                            for="gridCheck"
                                          >
                                            Check me out
                                          </label>
                                        </div>
                                      </div>
                                      <div className="col-12">
                                        <button
                                          type="submit"
                                          className="btn btn-dark w-100"
                                          data-bs-toggle="modal"
                                          data-bs-target="#staticBackdropxx2"
                                        >
                                          Sign in
                                        </button>
                                        <div
                                          className="modal fade"
                                          id="staticBackdropxx2"
                                        >
                                          <div className="modal-dialog modal-dialog-centered">
                                            <div
                                              className="modal-content py-2 px-2 justify-content-center"
                                              style={{ height: 600 }}
                                            >
                                              <h3 className="fw-bold text-dark text-start">
                                                Email Information
                                              </h3>
                                              <p className="text-start text-dark">
                                                Please Verify email address 8
                                                digit
                                              </p>
                                              <div className="d-flex">
                                                <input
                                                  type="text"
                                                  name=""
                                                  id=""
                                                  className="w-25 mx-1"
                                                />
                                                <input
                                                  type="text"
                                                  name=""
                                                  id=""
                                                  className="w-25 mx-1"
                                                />
                                                <input
                                                  type="text"
                                                  name=""
                                                  id=""
                                                  className="w-25 mx-1"
                                                />
                                                <input
                                                  type="text"
                                                  name=""
                                                  id=""
                                                  className="w-25 mx-1"
                                                />
                                                <input
                                                  type="text"
                                                  name=""
                                                  id=""
                                                  className="w-25 mx-1"
                                                />
                                                <input
                                                  type="text"
                                                  name=""
                                                  id=""
                                                  className="w-25 mx-1"
                                                />
                                                <input
                                                  type="text"
                                                  name=""
                                                  id=""
                                                  className="w-25 mx-1"
                                                />
                                                <input
                                                  type="text"
                                                  name=""
                                                  id=""
                                                  className="w-25 mx-1"
                                                />
                                              </div>
                                              <button type="submit" className="w-100 my-3 w-100 btn btn-dark">Submit</button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link text-light">
                          <button
                            type="button"
                            className="btn btn-outline"
                            id="Navbarlogo"
                          >
                            Be Freelancer
                          </button>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <label id="icon">
              <i className="fa fa-bars"></i>
            </label>
          </div>
        </div>
        {/* .............Page2................. */}
        <div className="page2 pt-5">
          <div className="container ">
            <div className="row">
              <div className="col-md-7 mb-2 pt-2">
                <div className="left">
                  <p className="heading">
                    Lorem ipsum dolor sit
                    <br />
                    amet, consectetur
                    <br />
                    adipiscing elit
                  </p>
                  <br />
                  <p className="text">
                    Lorem ipsum dolor sit amet consectetur,
                    <br />
                    adipisicing elit. Facilisi tincidunt volutpat
                    <br />
                    vestibulum,massa,imperdiet
                  </p>
                </div>
              </div>
              <div className="col-md-5 ">
                <div className="img">
                  <img src={Logo} alt="Img" height="auto" width="100%" />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="form col-sm" id="text">
                <i className="fa fa-search text-dark">
                  &nbsp;&nbsp;<span className="vr"></span>
                </i>
                <input
                  type="text"
                  className="form-control form-input"
                  placeholder="What are you looking here eg. freelancer, projects"
                />
              </div>
              <span className="float-start mb-5">
                <span className="m-2">Search:</span>
                <span
                  className="btn btn-sm btn-outline-secondary bg-muted px-2 m-2"
                  id="color"
                >
                  Logo Design
                </span>
                <span
                  className="btn btn-sm btn-outline-secondary bg-muted px-2 m-2"
                  id="color"
                >
                  SEO
                </span>
                <span
                  className="btn btn-sm btn-outline-secondary bg-muted px-2 m-2 button"
                  id="color"
                >
                  Wordpress
                </span>
              </span>
            </div>
          </div>
        </div>
        {/* .............Page3............ */}
        <div className="page3">
          <div className="container">
            <div className="row">
              <div className="col-md-5 mt-5">
                <p className="heading-small">
                  Lorem ipsum dolor sit amet,
                  <br /> consectetur
                </p>
                <h2 className="heading-two">
                  Our Choices with different technology
                </h2>
              </div>

              <div className="col-md-7 p-4" id="mob">
                <div className=" row">
                  <div className="col-4 con1">
                    <img src={Img1} alt="pan" width="100%" />
                    <p className="cont">Content Writing</p>
                  </div>
                  <div className="col-4 con1">
                    <img src={Img2} alt="pan" width="100%" />
                    <p className="cont">Graphics Design</p>
                  </div>
                  <div className="col-4 con1">
                    <img src={Img3} alt="pan" width="100%" />
                    <p className="cont">Finance</p>
                  </div>
                  <div className="col-4 con1">
                    <img src={Img4} alt="pan" width="100%" />
                    <p className="cont">SEO</p>
                  </div>
                  <div className="col-4 con1">
                    <img src={Img5} alt="pan" width="100%" />
                    <p className="cont">Game Development</p>
                  </div>
                  <div className="col-4 con1">
                    <img src={Img6} alt="pan" width="100%" />
                    <p className="cont">Logo Design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Trending Freelancer - sayam */}
        <Freelancer />
        {/* Trending Freelancer - sayam */}
        {/* Our Offer Section - sayam */}
        <OurOffer />
        {/* Our Offer Section - sayam */}
        {/* Features Section - sayam */}
        <Features />
        {/* Features Section - sayam */}
        <div className="page7 pt-4 pb-4">
          <div className="container">
            <div className="row">
              <div className="col-md p-5">
                <p>
                  <b>Contact Us</b>
                </p>
                <p className="h1 text-light ">
                  <b>Let's have a</b>
                </p>
                <p className="h1 text-light">
                  <b>Conversation for</b>
                </p>
                <p className="h1 text-light">
                  <b>Your Quiry !</b>
                </p>
              </div>
              <div className="col-md">
                <div className="container bg-light p-3" id="SixpageCon">
                  <form>
                    <div className="form-group m-3">
                      <label className="mb-2">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="Inputbox"
                        placeholder="eg saumen.thakur@gmail.com"
                      />
                    </div>
                    <div className="form-group m-3">
                      <label className="mb-2">Message</label>
                      <textarea
                        className="form-control"
                        id="Inputbox"
                        rows="4"
                        placeholder="Type Something..."
                      ></textarea>
                    </div>
                    <div className="form-group m-3">
                      <div className="btn btn-dark " id="sixpageBTN">
                        Send Request
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ...........page8................ */}
        <div className="page8">
          <div className="container-fliud mt-3 p-5">
            <div className="row">
              <div className="col">
                <div className="btn text-light px-3 " id="LogoBTN1">
                  <b>Logo</b>
                </div>
                <br />
                <address>
                  1901 Thornridge Cir,
                  <br />
                  Shiloh, Hawaii
                  <br />
                  81063
                </address>
              </div>
              <div className="col">
                <h5>
                  <b>Company</b>
                </h5>
                <span className="text-muted">About Us</span>
                <br />
                <span className="text-muted">Career</span>
                <br />
                <span className="text-muted">Team</span>
                <br />
                <span className="text-muted">Contact</span>
                <br />
              </div>
              <div className="col">
                <h5>
                  <b>Product</b>
                </h5>
                <span className="text-muted">Service</span>
                <br />
                <span className="text-muted">Freelancer</span>
                <br />
                <span className="text-muted">Features</span>
                <br />
                <span className="text-muted">Development</span>
                <br />
              </div>
              <div className="col">
                <h5>
                  <b>Links</b>
                </h5>
                <span className="text-muted">Privacy Policy</span>
                <br />
                <span className="text-muted">Term & Conditions</span>
                <br />
                <span className="text-muted">FAQ</span>
                <br />
              </div>
              <div className="col">
                <h5>
                  <b>Follow Us</b>
                </h5>
                <span className="h2 m-2">
                  <i className="fa-brands fa-square-twitter"></i>
                </span>
                <span className="h2 m-2">
                  <i className="fa-brands fa-square-facebook"></i>
                </span>
                <span className="h2 m-2">
                  <i className="fa-brands fa-square-instagram"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
