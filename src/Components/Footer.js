import React from "react";
import "./Footer.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Footer() {
  const animation = useAnimation();
  const [ref, inView] = useInView({
      threshold:0,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      animation.start({
        y: [1000, 10, 0],
        transition: {
          type: "spring",
          when:"afterChildren",
          duration: 2,
          bounce: 0.2,
        },
      });
    } else {
      animation.start({ x: [1000, 100, 0] });
    }
  }, [inView]);

  return (
    <div class="container-fluid bg-container p-3">
      <div class="row">
        <motion.div ref={ref} animate={animation}
          class="col-12 col-md-4 d-flex flex-column justify-content-center"
          id="social-media-section"
        >
          <img class="logo-img ml-auto" src={logo} alt=".." />
          <div class="d-flex flex-row justify-content-center">
            <div class="follow-us-icon-container">
              <i class="fab fa-twitter icon"></i>
            </div>
            <div class="follow-us-icon-container">
              <i class="fab fa-instagram icon"></i>
            </div>
            <div class="follow-us-icon-container">
              <i class="fab fa-facebook icon"></i>
            </div>
            {/* <div class="follow-us-icon-container">
              <i class="fab fa-facebook icon"></i>
            </div> */}
          </div>
          <p class="paragraph">
            D.No 16-11-511/c/27, Shalivahana nagar,Moosarambagh,
            Malakpet,HyderabadTelangana 500036
          </p>
        </motion.div>
        <motion.div  ref={ref} animate={animation}class="col-6 col-md-4 d-flex flex-column justify-content-start">
          <h1 class="heading">Mahima Mural Arts</h1>
          <div className="d-flex flex-column text-left">
            <p className="paragraph">
              <Link className="text-dark text-decoration-none" to="/">
                Home
              </Link>
            </p>

            <p className="paragraph">
              <Link className="text-dark text-decoration-none" to="/our-works">
                Our Works
              </Link>
            </p>

            <p className="paragraph">
              <Link className="text-dark text-decoration-none" to="/about">
                About
              </Link>
            </p>

            <p className="paragraph">
              <Link className="text-dark text-decoration-none" to="/contactus">
                Contact Us
              </Link>
            </p>
          </div>
        </motion.div>
        <motion.div ref={ref} animate={animation} class="col-6 col-md-4  d-flex flex-column  justify-content-start">
          <h1 class="heading">Our Services</h1>
          <p class="paragraph text-left">Mural Arts</p>
          <p class="paragraph text-left ">Wood Work</p>
          <p class="paragraph text-left">Sculpturing</p>
          <p class="paragraph text-left">House Designs</p>
        </motion.div>
        <hr class="line" />
        <p class="paragraph text-center">© Mahima Mural Arts</p>
      </div>
    </div>
  );
}
