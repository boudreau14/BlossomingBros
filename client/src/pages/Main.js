import React from 'react';
import newRegis from "../assets/newRegis.png";
import newForm from "../assets/newForm.png";
import newMech from "../assets/newMech.png";

import HERO from "../components/Hero";
import Footer from "../components/Footer";
import NavWhite from "../components/WhiteNav"

function Main() {
    return (
      <>
      <HERO backgroundImage="https://images.unsplash.com/photo-1508171997656-fdf7cf6c4df9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
      <NavWhite />
      <div id="landCont">
        <div className="landText" id="height">
          <h1>Fumes</h1>
          <h3>Taking the Trouble Out of Car Care</h3>
        </div>
        <div className="flexIt">
          <div className="d-flex justify-content-center h-100">
            <div className="card" id="logCard">
              <div className="card-header">
                <h3>Sign In</h3>
                <div className="d-flex justify-content-end social_icon">
                  <span><i className="fab fa-facebook-square" /></span>
                  <span><i className="fab fa-google-plus-square" /></span>
                  <span><i className="fab fa-twitter-square" /></span>
                </div>
              </div>
              <div className="card-body">
                <form>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-user" /></span>
                    </div>
                    <input type="text" className="form-control" placeholder="username" />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><i className="fas fa-key" /></span>
                    </div>
                    <input type="password" className="form-control" placeholder="password" />
                  </div>
                  <div className="align-items-center remember">
                    <input type="checkbox" />Remember Me
                  </div>
                  <div className="form-group">
                    <input type="submit" defaultValue="Login" className="btn float-right login_btn" />
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-center links">
                  Don't have an account?<a href="#">Sign Up</a>
                </div>
                <div className="d-flex justify-content-center">
                  <a href="#">Forgot your password?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      </HERO>
      <section className="mainInfo">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="infoText">
                <h1>Fumes</h1>
                <h3>Our Mission</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="showOff mb-5">
          <div className="container">
            <div className="row" id="flexEm">
              <div className="col-lg-6 col-xs-12" id="mechImg">
                <div className="mechImg">
                </div>
              </div>
              <div className="col-lg-6 col-xs-12" id="imgAside">
                <div className="imgAside">
                  <div className="tabs">
                    <a className="nav-link mbr-fonts-style display-7 active" id="serviceBtn" role="tab" data-toggle="tab" href="/Services">
                      Services</a>
                    <a className="nav-link mbr-fonts-style display-7 active" id="regisBtn" role="tab" data-toggle="tab" href="/Register">
                      Register</a>
                  </div>
                  <p> Our mission at Fumes is to give every customer our highlest level of attention to detail, care to their
                    personal vehicles and complete transparency into our work. Any mistakes made will fall on our shoulders and
                    not on our customers.
                    If our customer is not satisfied, we are not satisfied. We promise to make each service call convenient and
                    hassle-free.
                  </p>  
                </div>
              </div>
            </div>
          </div>     
        </div>

        <div className="container-fluid" id="center">
          <div className="row">
            <div className="col-12">
              <h4>Our Main Services</h4>
              <ul className="mainList">
                <li>
                  <strong>Oil Change -</strong> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et
                  dolore
                  magna aliqua.
                </li>
                <li>
                  <strong>Brake Service -</strong> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et
                  dolore
                  magna aliqua.
                </li>
                <li>
                  <strong>Tire Service -</strong> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et
                  dolore
                  magna aliqua. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et
                  dolore
                  magna aliqua.
                </li>
                <li>
                  <strong>And More!</strong> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et
                  dolore
                  magna aliqua. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et
                  dolore
                  magna aliqua.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
<div className="parallax">

      <article className="howWorks">
        <div id="works">
          <h1>How it Works</h1>
        </div>
        <div className="steps">
          <div>
            <img src={newRegis} alt="register" />
            <p><strong>Step 1:</strong> Fill out the registration form</p>
          </div>
          <div>
            <img src={newForm} alt="register" />
            <p><strong>Step 2:</strong> Schedule service for your vehicle</p>
          </div>
          <div>
            <img src={newMech} alt="register" />
            <p><strong>Step 3:</strong> Mechanic arrives at the scheduled time to your home</p>
          </div>
        </div>
      </article>
      </div>
      <Footer />
      </>
    )
}

export default Main;